import type { Plugin } from '@docusaurus/types';
import path from 'path';

export interface GithubAutolinkOptions {
  defaultRepo: string;
  mode: 'build' | 'runtime';
}

export default function githubAutolinkPlugin(
  _context: any,
  _options: GithubAutolinkOptions
): Plugin {
  return {
    name: 'docusaurus-plugin-github-autolink',

    getClientModules() {
      return [
        path.resolve(__dirname, './client/runtimeHover'),
        path.resolve(__dirname, './client/tooltipStyles.css'),
      ];
    },
  };
}
