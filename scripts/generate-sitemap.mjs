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
const blogSlugs = [];
for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.ts') || file === 'index.ts') continue;
  const src = readFileSync(join(blogDir, file), 'utf8');
  const m = src.match(/slug:\s*'([^']+)'/);
  if (m) blogSlugs.push(m[1]);
}

const urls = [
  ...staticRoutes,
  ...neighborhoodSlugs.map((s) => `/property-management-${s}`),
  ...blogSlugs.map((s) => `/blog/${s}`),
];

const today = new Date().toISOString().slice(0, 10);
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${BASE}${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${u === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${u === '/' ? '1.0' : u.startsWith('/services') || u === '/service-areas' ? '0.8' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml written: ${urls.length} URLs`);
