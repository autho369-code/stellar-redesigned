import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { getChicagoPublicationDate } from './scripts/publication-date.mjs';

/**
 * Strips the `content` body of future-dated articles out of the CLIENT bundle.
 *
 * The problem it solves: public routes import eagerly (see App.tsx — the
 * prerendered HTML has to hydrate in place), so the article-content chunk was
 * downloaded on every page of the site, homepage included. Roughly two-thirds
 * of it was the bodies of scheduled posts that are not published yet and that
 * no route can render, because `blogPosts` filters on the same cutoff.
 *
 * Why only the content, and only on the client:
 *
 * - Metadata is left intact. `getPostNeighborhoods` derives a post's index from
 *   the cluster-sorted list of ALL posts, so dropping unpublished entries
 *   entirely would reshuffle the neighborhood links on already-published pages.
 * - The SSR/prerender build keeps every body. Prerendering is where correctness
 *   matters, and a build-time-only bundle has no size cost. It also means the
 *   prerendered HTML for every published article is unchanged, so client
 *   hydration still matches exactly.
 *
 * Safe to parse: each post's content is a single template literal with no
 * interpolation, and each scheduled file carries exactly two backticks per post
 * (verified in CI by scripts/verify-publication-schedule.mjs).
 */
function stripUnpublishedArticleContent(cutoff: string): Plugin {
  let stripped = 0;
  let kept = 0;

  return {
    name: 'stellar:strip-unpublished-article-content',
    // Run before esbuild turns the TS into JS, while the source still matches
    // the shape written in src/data/blog-posts.
    enforce: 'pre',
    apply: 'build',

    transform(code, id) {
      const normalized = id.replace(/\\/g, '/');
      if (!normalized.includes('src/data/blog-posts/')) return null;
      if (!normalized.endsWith('.ts') || normalized.endsWith('/index.ts')) return null;

      const slugPattern = /\bslug:\s*'([^']+)'/g;
      const boundaries: number[] = [];
      for (const match of code.matchAll(slugPattern)) boundaries.push(match.index ?? 0);
      if (boundaries.length === 0) return null;

      let result = '';
      let cursor = 0;
      let changed = false;

      for (let index = 0; index < boundaries.length; index++) {
        const start = boundaries[index];
        const end = boundaries[index + 1] ?? code.length;
        const segment = code.slice(start, end);
        const date = segment.match(/\bdate:\s*'([^']+)'/)?.[1];

        result += code.slice(cursor, start);
        cursor = end;

        if (!date || date <= cutoff) {
          kept++;
          result += segment;
          continue;
        }

        const open = segment.indexOf('content: `');
        const close = segment.lastIndexOf('`');
        if (open === -1 || close <= open + 9) {
          // Unexpected shape — keep the post verbatim rather than risk
          // emitting a broken module.
          kept++;
          result += segment;
          continue;
        }

        stripped++;
        changed = true;
        result += `${segment.slice(0, open)}content: \`\`${segment.slice(close + 1)}`;
      }

      result += code.slice(cursor);
      return changed ? { code: result, map: null } : null;
    },

    buildEnd() {
      if (stripped > 0) {
        console.log(
          `[strip-unpublished] client bundle: ${kept} article bodies kept, ${stripped} future-dated bodies removed (cutoff ${cutoff})`,
        );
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),
    ...(isSsrBuild ? [] : [stripUnpublishedArticleContent(getChicagoPublicationDate())]),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      // All public pages import eagerly (see App.tsx — prerendered HTML must
      // hydrate in place), which would otherwise merge everything into one
      // bundle. Splitting the heavy static content into parallel-loaded
      // chunks keeps the app shell smaller and lets article/neighborhood
      // data cache independently of code changes. Client build only — the
      // SSR prerender bundle stays single-file.
      output: isSsrBuild
        ? {}
        : {
            manualChunks(id: string) {
              if (id.includes('src/data/blog-posts')) return 'article-content';
              if (id.includes('src/data/neighborhoods')) return 'area-data';
              return undefined;
            },
          },
    },
  },
}));
