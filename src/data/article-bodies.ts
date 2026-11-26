/**
 * Guide bodies, loaded one at a time in the browser (R2).
 *
 * The prerender (SSR) build has every body inside `post.content`, so the
 * static HTML is complete. The browser build strips the bodies out of the
 * bundle (vite.config.ts) and writes each one to /article-bodies/<slug>.json.
 * A guide page loads its own body before React hydrates, so the markup
 * matches the prerendered HTML exactly.
 */
const cache = new Map<string, string>();

interface HasBody { slug: string; content: string }

/** The body: from the module on the server, from the loaded cache in the browser. */
export function getBody(post: HasBody): string {
  return post.content || cache.get(post.slug) || '';
}

export function hasBody(post: HasBody): boolean {
  return Boolean(post.content) || cache.has(post.slug);
}

export async function loadBody(slug: string): Promise<void> {
  if (cache.has(slug)) return;
  try {
    const res = await fetch(`/article-bodies/${slug}.json`);
    if (res.ok) cache.set(slug, (await res.json()).content as string);
  } catch {
    // Offline or blocked: the page keeps its prerendered text until a reload.
  }
}

/** The guide slug in a /blog/<slug> path, if any. */
export function guideSlugFromPath(pathname: string): string | null {
  return pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/)?.[1] ?? null;
}
