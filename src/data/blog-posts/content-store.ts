// Synchronous cache in front of the per-slug content chunks.
//
// Three writers fill it:
//  - entry-server.tsx primes every post before renderToString (build only).
//  - main.tsx awaits the current /blog/:slug chunk before hydrateRoot, so the
//    first client render matches the prerendered article HTML.
//  - BlogPost.tsx loads on demand during client-side navigation.
import type { BlogPostContent } from './types';
import { blogContentLoaders } from './generated/content-loaders';

const store = new Map<string, BlogPostContent>();

export function getLoadedBlogPostContent(slug: string): BlogPostContent | undefined {
  return store.get(slug);
}

export function primeBlogPostContent(slug: string, content: BlogPostContent): void {
  store.set(slug, content);
}

export async function loadBlogPostContent(slug: string): Promise<BlogPostContent | undefined> {
  const cached = store.get(slug);
  if (cached) return cached;
  const loader = blogContentLoaders[slug];
  if (!loader) return undefined;
  const { postContent } = await loader();
  store.set(slug, postContent);
  return postContent;
}
