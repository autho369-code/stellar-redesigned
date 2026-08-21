// Generates public/sitemap.xml from static routes + neighborhood and blog data.
// Runs automatically before every build (see "prebuild" in package.json).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getChicagoPublicationDate } from './publication-date.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://www.stellarpropertygroup.com';
const publicationCutoff = getChicagoPublicationDate();

const staticRoutes = [
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
  '/service-areas',
  '/property-management-chicago',
  '/property-management-north-shore',
  '/pricing',
  '/blog',
  '/blog/topic/board-governance-illinois-law',
  '/blog/topic/association-finance-reserves',
  '/blog/topic/choosing-association-management',
  '/blog/topic/building-operations-capital-planning',
  '/contact',
  '/resources',
  '/condo-living',
  '/privacy-policy',
  '/terms-of-service',
];

// The building-operations topic hub went live 2026-08-13 with the first
// published owner-education posts in that cluster (previously gated to
// 2026-08-22 while the cluster had no published content).

// Neighborhood slugs from src/data/neighborhoods.ts
const neighborhoodsSrc = readFileSync(join(root, 'src/data/neighborhoods.ts'), 'utf8');
const neighborhoodSlugs = [...neighborhoodsSrc.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);

// Blog slugs from src/data/blog-posts/*.ts
const blogDir = join(root, 'src/data/blog-posts');
const blogPosts = [];
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
      blogPosts.push({ slug, lastmod: dateModified ?? date });
    }
  }
}

const urls = [
  ...staticRoutes.map((path) => ({ path })),
  ...neighborhoodSlugs.map((s) => ({ path: `/property-management-${s}` })),
  ...blogPosts.map(({ slug, lastmod }) => ({ path: `/blog/${slug}`, lastmod })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
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

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml written: ${urls.length} URLs`);
