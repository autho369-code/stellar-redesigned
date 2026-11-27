// Shared by generate-sitemap.mjs (prebuild) and update-sitemap-lastmod.mjs
// (postbuild). One place for the sitemap's URL list and its <lastmod> rules.
//
// Honest lastmod: a URL's <lastmod> is the day its own content last changed.
//  - Blog guides use the guide's dateModified, or its publish date.
//  - Every other page uses scripts/sitemap-lastmod.json, which stores a hash
//    of the page's visible main text and the day that text last changed. The
//    postbuild step updates it whenever a page's text really changes, so a
//    deploy that does not touch a page never changes that page's date.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getChicagoCalendarDate, getChicagoPublicationDate } from './publication-date.mjs';

export const root = join(dirname(fileURLToPath(import.meta.url)), '..');
export const BASE = 'https://www.stellarpropertygroup.com';
export const manifestPath = join(root, 'scripts/sitemap-lastmod.json');

export const staticRoutes = [
  '/',
  '/about',
  '/about/mirsad-cerimovic',
  '/services',
  '/services/condominium-management',
  '/services/hoa-management',
  '/services/townhome-management',
  '/services/financial-management',
  '/services/maintenance-coordination',
  '/services/board-support',
  '/services/violation-management',
  '/services/high-rise-condominium-management',
  '/services/small-condo-association-management',
  '/services/resale-disclosures',
  '/service-areas',
  '/property-management-chicago',
  '/property-management-north-shore',
  '/pricing',
  // "Share honest feedback" page (links to the Google review form). Indexable
  // and listed since 2026-11-26.
  '/reviews',
  '/case-studies/6150-n-kenmore-roof',
  '/blog',
  '/blog/topic/board-governance-illinois-law',
  '/blog/topic/association-finance-reserves',
  '/blog/topic/choosing-association-management',
  '/blog/topic/building-operations-capital-planning',
  '/contact',
  '/resources',
  '/condo-living',
  '/ai-info',
  '/tools/compare-management-proposals',
  '/board-toolkit',
  '/how-to-choose-condo-management-company-chicago',
  '/privacy-policy',
  '/terms-of-service',
];

// The building-operations topic hub went live 2026-08-13 with the first
// published owner-education posts in that cluster (previously gated to
// 2026-08-22 while the cluster had no published content).

// Never listed: noindex utility pages such as /contact/thanks and /knowledge.

export function readManifest() {
  if (!existsSync(manifestPath)) return {};
  return JSON.parse(readFileSync(manifestPath, 'utf8'));
}

export function neighborhoodRoutes() {
  const src = readFileSync(join(root, 'src/data/neighborhoods.ts'), 'utf8');
  return [...src.matchAll(/slug:\s*'([^']+)'/g)].map((m) => `/property-management-${m[1]}`);
}

/** Published guides with the date their content last changed. */
export function publishedBlogPosts() {
  const publicationCutoff = getChicagoPublicationDate();
  const blogDir = join(root, 'src/data/blog-posts');
  const posts = [];
  for (const file of readdirSync(blogDir)) {
    if (!file.endsWith('.ts') || file === 'index.ts') continue;
    const src = readFileSync(join(blogDir, file), 'utf8');
    const slugMatches = [...src.matchAll(/\bslug:\s*'([^']+)'/g)];

    for (let index = 0; index < slugMatches.length; index++) {
      const match = slugMatches[index];
      const nextMatch = slugMatches[index + 1];
      const postSource = src.slice(match.index, nextMatch?.index ?? src.length);
      const slug = match[1];
      const date = postSource.match(/\bdate:\s*'([^']+)'/)?.[1];
      const dateModified = postSource.match(/\bdateModified:\s*'([^']+)'/)?.[1];

      if (!date) {
        throw new Error(`Blog post '${slug}' in ${file} has no publication date.`);
      }

      if (date <= publicationCutoff) {
        posts.push({ slug, lastmod: dateModified ?? date });
      }
    }
  }
  return posts;
}

/** Pages whose lastmod comes from the manifest (everything except guides). */
export function pageRoutes() {
  return [...staticRoutes, ...neighborhoodRoutes()];
}

export function buildUrls(manifest = readManifest()) {
  const today = getChicagoCalendarDate();
  return [
    // A page missing from the manifest is new: its content changed today.
    ...pageRoutes().map((path) => ({ path, lastmod: manifest[path]?.lastmod ?? today })),
    ...publishedBlogPosts().map(({ slug, lastmod }) => ({ path: `/blog/${slug}`, lastmod })),
  ];
}

export function renderSitemap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, lastmod }) => `  <url>
    <loc>${BASE}${path}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>
`;
}

export function distFileFor(route) {
  return route === '/' ? join(root, 'dist/index.html') : join(root, 'dist', `${route.slice(1)}.html`);
}

/**
 * Hash of the visible text inside <main> of a prerendered page. Header,
 * footer, markup, attributes and scripts are ignored on purpose: a code
 * refactor or a sitewide footer edit is not a content change for the page.
 */
export function contentHash(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? html;
  const text = main
    // The trust bar is the same strip on every page, like the header.
    .replace(/<section\b[^>]*\bdata-trust-bar\b[\s\S]*?<\/section>/gi, ' ')
    // The guide's "On this page" list repeats its own headings.
    .replace(/<nav\b[^>]*\bdata-toc\b[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<(script|style|svg|noscript)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return createHash('sha256').update(text).digest('hex').slice(0, 16);
}
