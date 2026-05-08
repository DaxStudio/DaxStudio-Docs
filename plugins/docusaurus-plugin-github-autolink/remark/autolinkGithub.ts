import { visit } from 'unist-util-visit';
import * as fs from 'fs';
import * as path from 'path';

interface Options {
  defaultRepo: string;
  mode: 'build' | 'runtime';
  /** Absolute path to a JSON file used to cache GitHub metadata between builds. */
  cacheFile?: string;
  /**
   * Maximum age (in days) of a cached entry before it is re-fetched.
   * Use `Infinity` (the default) to keep cached entries forever — useful when
   * the cache file is committed to git and issue titles/bodies are considered
   * immutable for documentation purposes.
   */
  cacheMaxAgeDays?: number;
  /** Optional GitHub token. Defaults to GITHUB_TOKEN env var. */
  token?: string;
}

interface CachedMeta {
  title: string;
  body: string;
  fetchedAt: number;
}

const BODY_EXCERPT_LENGTH = 250;

function makeExcerpt(raw: string | null | undefined): string {
  if (!raw) return '';
  // Strip HTML comments, code fences, images, and collapse whitespace.
  let text = raw
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[#*_>~]/g, '')
    .replace(/\r/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length > BODY_EXCERPT_LENGTH) {
    text = text.slice(0, BODY_EXCERPT_LENGTH).trimEnd() + '\u2026';
  }
  return text;
}

type Cache = Record<string, CachedMeta>;

let cache: Cache | null = null;
let cacheLoadedFrom: string | null = null;

function loadCache(file: string): Cache {
  if (cache && cacheLoadedFrom === file) return cache;
  try {
    if (fs.existsSync(file)) {
      const raw = fs.readFileSync(file, 'utf8');
      cache = JSON.parse(raw) as Cache;
    } else {
      cache = {};
    }
  } catch {
    cache = {};
  }
  cacheLoadedFrom = file;
  return cache;
}

function saveCache(file: string, data: Cache) {
  try {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
  } catch {
    // ignore
  }
}

async function fetchGithubMeta(
  repo: string,
  type: string,
  number: string,
  token?: string
): Promise<CachedMeta | null> {
  const endpoint =
    type === 'issue'
      ? `https://api.github.com/repos/${repo}/issues/${number}`
      : type === 'pr'
      ? `https://api.github.com/repos/${repo}/pulls/${number}`
      : `https://api.github.com/repos/${repo}/discussions/${number}`;

  const headers: Record<string, string> = {
    'User-Agent': 'Docusaurus-Autolinker',
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  if (token) headers.Authorization = `Bearer ${token}`;

  const res = await fetch(endpoint, { headers });

  if (!res.ok) {
    if (res.status === 403 || res.status === 429) {
      const remaining = res.headers.get('x-ratelimit-remaining');
      const reset = res.headers.get('x-ratelimit-reset');
      // eslint-disable-next-line no-console
      console.warn(
        `[github-autolink] rate-limited fetching ${endpoint} (remaining=${remaining}, reset=${reset})`
      );
    }
    return null;
  }

  const json: any = await res.json();
  return {
    title: json.title ?? '',
    body: makeExcerpt(json.body),
    fetchedAt: Date.now(),
  };
}

export default function autolinkGithub(options: Options) {
  const {
    defaultRepo,
    mode,
    cacheFile = path.resolve(__dirname, '..', '.cache', 'issues.json'),
    cacheMaxAgeDays = Infinity,
    token = process.env.GITHUB_TOKEN,
  } = options;

  const maxAgeMs = cacheMaxAgeDays * 24 * 60 * 60 * 1000;

  // Order matters: more specific patterns first.
  const prPattern = /(?<![`\w])([\w.-]+\/[\w.-]+)?(?:!|PR\s?#)(\d+)(?![`\w])/gi;
  const discussionPattern =
    /(?<![`\w])([\w.-]+\/[\w.-]+)?(?:GH-|discussion\s?#)(\d+)(?![`\w])/gi;
  const issuePattern = /(?<![`\w])([\w.-]+\/[\w.-]+)?#(\d+)(?![`\w])/g;

  return async function transformer(tree: any) {
    interface PendingLink {
      linkNode: any;
      key: string;
      repo: string;
      type: string;
      number: string;
    }

    const linkNodes: PendingLink[] = [];

    visit(tree, 'text', (node: any, index: number | undefined, parent: any) => {
      if (!parent || index === undefined) return;
      if (
        parent.type === 'link' ||
        parent.type === 'inlineCode' ||
        parent.type === 'code'
      ) {
        return;
      }

      const text: string = node.value;
      const replacements: any[] = [];

      const pushMatch = (
        m: RegExpExecArray,
        type: string,
        label: string
      ) => {
        const repo = m[1] || defaultRepo;
        const number = m[2];
        replacements.push({
          start: m.index,
          end: m.index + m[0].length,
          url: `https://github.com/${repo}/${
            type === 'pr'
              ? 'pull'
              : type === 'discussion'
              ? 'discussions'
              : 'issues'
          }/${number}`,
          label,
          type,
          repo,
          number,
        });
      };

      let match: RegExpExecArray | null;
      prPattern.lastIndex = 0;
      while ((match = prPattern.exec(text))) {
        pushMatch(match, 'pr', `PR #${match[2]}`);
      }
      discussionPattern.lastIndex = 0;
      while ((match = discussionPattern.exec(text))) {
        pushMatch(match, 'discussion', `Discussion #${match[2]}`);
      }
      issuePattern.lastIndex = 0;
      while ((match = issuePattern.exec(text))) {
        if (replacements.some((r) => r.start === match!.index)) continue;
        pushMatch(match, 'issue', `#${match[2]}`);
      }

      if (replacements.length === 0) return;

      replacements.sort((a, b) => a.start - b.start);
      const filtered: any[] = [];
      let cursor = 0;
      for (const r of replacements) {
        if (r.start >= cursor) {
          filtered.push(r);
          cursor = r.end;
        }
      }

      const newNodes: any[] = [];
      let lastIndex = 0;

      for (const r of filtered) {
        if (r.start > lastIndex) {
          newNodes.push({ type: 'text', value: text.slice(lastIndex, r.start) });
        }

        const linkNode: any = {
          type: 'link',
          url: r.url,
          title: null,
          data: {
            hProperties: {
              className: 'gh-ref',
              'data-url': r.url,
              'data-type': r.type,
              target: '_blank',
              rel: 'noopener noreferrer',
            },
          },
          children: [{ type: 'text', value: r.label }],
        };

        if (mode === 'build') {
          linkNodes.push({
            linkNode,
            key: `${r.repo}#${r.type}#${r.number}`,
            repo: r.repo,
            type: r.type,
            number: r.number,
          });
        }

        newNodes.push(linkNode);
        lastIndex = r.end;
      }

      if (lastIndex < text.length) {
        newNodes.push({ type: 'text', value: text.slice(lastIndex) });
      }

      parent.children.splice(index, 1, ...newNodes);
      return index + newNodes.length;
    });

    if (mode !== 'build' || linkNodes.length === 0) return;

    const cacheData = loadCache(cacheFile);

    // Group link nodes by unique key so we only fetch once per issue.
    const groups = new Map<string, PendingLink[]>();
    for (const ln of linkNodes) {
      const arr = groups.get(ln.key) ?? [];
      arr.push(ln);
      groups.set(ln.key, arr);
    }

    const now = Date.now();
    const toFetch: { key: string; repo: string; type: string; number: string }[] = [];
    for (const [key, items] of groups) {
      const cached = cacheData[key];
      if (cached && now - (cached.fetchedAt ?? 0) < maxAgeMs) {
        applyMeta(items, cached);
      } else {
        const first = items[0];
        toFetch.push({
          key,
          repo: first.repo,
          type: first.type,
          number: first.number,
        });
      }
    }

    if (toFetch.length === 0) return;

    let dirty = false;
    await Promise.all(
      toFetch.map(async ({ key, repo, type, number }) => {
        try {
          const meta = await fetchGithubMeta(repo, type, number, token);
          if (meta) {
            cacheData[key] = meta;
            dirty = true;
            applyMeta(groups.get(key)!, meta);
          } else {
            // Reuse stale cache (if any) on failure
            const stale = cacheData[key];
            if (stale) applyMeta(groups.get(key)!, stale);
          }
        } catch {
          const stale = cacheData[key];
          if (stale) applyMeta(groups.get(key)!, stale);
        }
      })
    );

    if (dirty) saveCache(cacheFile, cacheData);
  };
}

function applyMeta(items: { linkNode: any }[], meta: CachedMeta) {
  for (const { linkNode } of items) {
    linkNode.data.hProperties['data-title'] = meta.title;
    linkNode.data.hProperties['data-body'] = meta.body;
  }
}
