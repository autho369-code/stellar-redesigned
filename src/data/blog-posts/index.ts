// Public facade over the blog data. Only published-post METADATA lives here —
// article bodies stay out of the main bundle and load per-slug through
// content-store.ts. The generated module is produced by
// scripts/generate-blog-modules.mjs (prebuild/predev), which filters out
// future-dated posts so unpublished content never reaches the client bundle.
import { publishedPostMetas } from './generated/meta';
import type { BlogPostMeta } from './types';

export type { BlogPost, BlogPostMeta, BlogPostContent, BlogPostSource } from './types';
export { ARTICLE_AUTHOR } from './types';

// Authoring order (matches all-posts.ts) — getPostNeighborhoods relies on this
// order for its stable rotation, so keep it unsorted.
export const publishedBlogPosts: BlogPostMeta[] = publishedPostMetas;

export const blogPosts: BlogPostMeta[] = [...publishedPostMetas]
  .sort((a, b) => b.date.localeCompare(a.date));

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return publishedPostMetas.find((post) => post.slug === slug);
}
