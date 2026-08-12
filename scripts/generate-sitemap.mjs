// Generates public/sitemap.xml from static routes + neighborhood and blog data.
// Runs automatically before every build (see "prebuild" in package.json).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://www.stellarpropertygroup.com';

const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/services/condominium-management',
  '/services/hoa-management',
  '/services/townhome-management',
  '/services/financial-management',
  '/services/maintenance-coordination',
  '/services/board-support',
  '/services/violation-management',
  '/service-areas',
  '/property-management-chicago',
  '/property-management-north-shore',
  '/pricing',
  '/blog',
  '/contact',
  '/resources',
  '/privacy-policy',
  '/terms-of-service',
];

// Neighborhood slugs from src/data/neighborhoods.ts
const neighborhoodsSrc = readFileSync(join(root, 'src/data/neighborhoods.ts'), 'utf8');
const neighborhoodSlugs = [...neighborhoodsSrc.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);

// Blog slugs from src/data/blog-posts/*.ts
const blogDir = join(root, 'src/data/blog-posts');
const blogPosts = [];
for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.ts') || file === 'index.ts') continue;
  const src = readFileSync(join(blogDir, file), 'utf8');
  const slug = src.match(/slug:\s*'([^']+)'/)?.[1];
  const date = src.match(/date:\s*'([^']+)'/)?.[1];
  const dateModified = src.match(/dateModified:\s*'([^']+)'/)?.[1];
  if (slug) blogPosts.push({ slug, lastmod: dateModified ?? date });
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
