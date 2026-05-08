import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Tooltip } from './Tooltip';

const cache = new Map<string, { title: string; body: string }>();

const BODY_EXCERPT_LENGTH = 250;

function makeExcerpt(raw: string | null | undefined): string {
  if (!raw) return '';
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

async function fetchMeta(url: string): Promise<{ title: string; body: string } | null> {
  if (cache.has(url)) return cache.get(url)!;

  const apiUrl = url
    .replace('https://github.com/', 'https://api.github.com/repos/')
    .replace('/pull/', '/pulls/');

  const res = await fetch(apiUrl, {
    headers: { Accept: 'application/vnd.github+json' },
  });

  if (!res.ok) return null;

  const json = await res.json();
  const meta = {
    title: json.title ?? '',
    body: makeExcerpt(json.body),
  };
  cache.set(url, meta);
  return meta;
}

interface ActiveTooltip {
  el: HTMLElement;
  container: HTMLDivElement;
  root: Root;
  token: number;
}

let active: ActiveTooltip | null = null;
let nextToken = 0;

function hideTooltip() {
  if (!active) return;
  const { root, container } = active;
  active = null;
  // Defer unmount to avoid React "synchronously unmount inside event" warning
  setTimeout(() => {
    try {
      root.unmount();
    } catch {
      /* ignore */
    }
    container.remove();
  }, 0);
}

if (typeof document !== 'undefined') {
  document.addEventListener('mouseover', async (e) => {
    const el = (e.target as HTMLElement | null)?.closest('.gh-ref') as
      | HTMLElement
      | null;
    if (!el) return;

    // Already showing for this element
    if (active && active.el === el) return;

    // A different .gh-ref — replace
    if (active) hideTooltip();

    const token = ++nextToken;
    const url = el.dataset.url!;
    const meta =
      el.dataset.title !== undefined
        ? {
            title: el.dataset.title!,
            body: el.dataset.body ?? '',
          }
        : await fetchMeta(url);

    // Bail out if the user moved on (or another hover started) while awaiting
    if (token !== nextToken) return;
    if (!meta) return;
    // Make sure the mouse is still over this element
    if (!el.matches(':hover')) return;

    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);

    active = { el, container, root, token };

    root.render(
      <Tooltip anchor={el} title={meta.title} body={meta.body} />
    );
  });

  document.addEventListener('mouseout', (e) => {
    if (!active) return;
    const el = (e.target as HTMLElement | null)?.closest('.gh-ref') as
      | HTMLElement
      | null;
    if (!el || el !== active.el) return;
    // If moving to a child of the same element, ignore
    const related = e.relatedTarget as Node | null;
    if (related && active.el.contains(related)) return;
    hideTooltip();
  });

  // Hide on scroll/resize so stale positions don't linger
  window.addEventListener('scroll', hideTooltip, true);
  window.addEventListener('resize', hideTooltip);
}
