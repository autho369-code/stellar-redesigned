export interface BlogPostSource {
  title: string;
  url: string;
}

/**
 * Light per-post metadata — everything listings, topic hubs, neighborhood
 * guides, and structured data need. Ships in the main client bundle.
 */
export interface BlogPostMeta {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  dateModified?: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  featuredImage?: string;
}

/**
 * The heavy part of a post. Ships as a per-slug chunk loaded only on
 * /blog/:slug (see content-store.ts).
 */
export interface BlogPostContent {
  content: string;
  sources?: BlogPostSource[];
}

/** Full authoring shape used by the source files in this directory. */
export interface BlogPost extends BlogPostMeta {
  sources?: BlogPostSource[];
  content: string;
}

export const ARTICLE_AUTHOR = 'Mirsad Cerimovic, CAM, CMCA, AMS';
