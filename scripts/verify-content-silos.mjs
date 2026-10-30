import { mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import { getChicagoPublicationDate } from './publication-date.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = join(root, 'src/data/blog-posts');
const neighborhoodSource = readFileSync(join(root, 'src/data/neighborhoods.ts'), 'utf8');
const neighborhoodSlugs = [...neighborhoodSource.matchAll(/\bslug:\s*'([^']+)'/g)].map((match) => match[1]);
const postSlugs = [];

for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.ts') || file === 'index.ts') continue;
  const source = readFileSync(join(blogDir, file), 'utf8');
  postSlugs.push(...[...source.matchAll(/\bslug:\s*'([^']+)'/g)].map((match) => match[1]));
}

if (postSlugs.length < 52 || new Set(postSlugs).size !== postSlugs.length) {
  throw new Error(`Expected at least 52 unique blog articles, found ${postSlugs.length}.`);
}
// Keep the intentional consolidated footprint at 43 service-area pages.
if (neighborhoodSlugs.length !== 43 || new Set(neighborhoodSlugs).size !== 43) {
  throw new Error(`Expected 43 unique consolidated service-area pages, found ${neighborhoodSlugs.length}.`);
}

const requiredConnections = [
  ['src/pages/BlogPost.tsx', ['getSiloSiblings', 'getPostNeighborhoods', 'getPostSilo', 'getPillarContent']],
  ['src/pages/NeighborhoodPage.tsx', ['getNeighborhoodGuides', 'neighborhoodClusterConfig.servicePath']],
  ['src/pages/services/BoardSupport.tsx', ['ClusterGuides cluster="governance"']],
  ['src/pages/services/FinancialManagement.tsx', ['ClusterGuides cluster="finance"']],
  ['src/pages/services/MaintenanceCoordination.tsx', ['ClusterGuides cluster="buildings"']],
  ['src/pages/services/CondominiumManagement.tsx', ['ClusterGuides cluster="management"']],
  ['src/pages/services/HOAManagement.tsx', ['ClusterGuides cluster="governance"']],
  ['src/pages/services/TownhomeManagement.tsx', ['ClusterGuides cluster="buildings"']],
  ['src/pages/services/ViolationManagement.tsx', ['ClusterGuides cluster="governance"']],
];

for (const [file, markers] of requiredConnections) {
  const source = readFileSync(join(root, file), 'utf8');
  for (const marker of markers) {
    if (!source.includes(marker)) throw new Error(`${file} is missing silo connection: ${marker}`);
  }
}

// ── Reverse silo inside every article body (src/data/post-silos.ts) ──────
// Each guide links up to exactly one money page, at most one area page, and
// its sibling/pillar guides. Every internal link must resolve, and a guide may
// not link a guide that will still be unpublished on its own release day.
const bundleDir = mkdtempSync(join(tmpdir(), 'stellar-silos-'));
const bundlePath = join(bundleDir, 'silos.mjs');
let allBlogPosts, postSilos, moneyPagePaths, getPillarContent;
try {
  await build({
    stdin: {
      contents: `export { allBlogPosts } from './src/data/blog-posts/index';\nexport { postSilos, moneyPagePaths } from './src/data/post-silos';\nexport { getPillarContent } from './src/data/pillar-links';`,
      resolveDir: root,
      loader: 'ts',
    },
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: bundlePath,
    logLevel: 'error',
  });
  ({ allBlogPosts, postSilos, moneyPagePaths, getPillarContent } = await import(pathToFileURL(bundlePath).href));
} finally {
  rmSync(bundleDir, { recursive: true, force: true });
}

const appSource = readFileSync(join(root, 'src/App.tsx'), 'utf8');
const knownPaths = new Set([
  ...[...appSource.matchAll(/path="(\/[^":*]*)"/g)].map((match) => match[1]),
  ...neighborhoodSlugs.map((slug) => `/property-management-${slug}`),
]);
const postsBySlug = new Map(allBlogPosts.map((post) => [post.slug, post]));
const today = getChicagoPublicationDate();
const problems = [];

for (const post of allBlogPosts) {
  const silo = postSilos[post.slug];
  if (!silo) {
    problems.push(`${post.slug}: no entry in src/data/post-silos.ts`);
    continue;
  }
  const content = getPillarContent(post, allBlogPosts, today);
  const hrefs = [...content.matchAll(/<a\s[^>]*href="([^"]+)"/g)]
    .map((match) => match[1].replace(/^https:\/\/www\.stellarpropertygroup\.com/, ''))
    .filter((href) => href.startsWith('/'))
    .map((href) => href.replace(/[#?].*$/, ''));
  const money = new Set(hrefs.filter((href) => moneyPagePaths.includes(href)));
  const areas = new Set(hrefs.filter((href) => href.startsWith('/property-management-')));

  if (!money.has(silo.money)) problems.push(`${post.slug}: body must link its money page ${silo.money}`);
  for (const extra of money) {
    if (extra !== silo.money) problems.push(`${post.slug}: body links a second money page ${extra}`);
  }
  for (const area of areas) {
    if (area !== silo.area) problems.push(`${post.slug}: body links area page ${area}; allowed: ${silo.area ?? 'none'}`);
  }
  if (!hrefs.includes('/contact')) problems.push(`${post.slug}: body must link /contact`);
  if (silo.area && !areas.has(silo.area)) problems.push(`${post.slug}: body must link its area page ${silo.area}`);
  for (const linked of silo.links) {
    if (!hrefs.includes(`/blog/${linked}`)) problems.push(`${post.slug}: body must link sibling /blog/${linked}`);
  }
  for (const href of hrefs) {
    if (href.startsWith('/blog/')) {
      const target = postsBySlug.get(href.slice('/blog/'.length));
      if (!target) problems.push(`${post.slug}: links missing guide ${href}`);
      else if (target.slug === post.slug) problems.push(`${post.slug}: links to itself`);
      else if (target.date > post.date && target.date > today) problems.push(`${post.slug}: links ${href}, which is unpublished until ${target.date}`);
    } else if (!knownPaths.has(href)) {
      problems.push(`${post.slug}: links unknown page ${href}`);
    }
  }
}

if (problems.length) {
  throw new Error(`Reverse silo broken in ${problems.length} place(s):\n  ${problems.join('\n  ')}`);
}

console.log(`Content silos verified: ${postSlugs.length} articles, ${neighborhoodSlugs.length} service areas, and 9 commercial/link surfaces.`);
console.log(`Reverse silo verified: every article links one money page, at most one area page, and its sibling guides.`);
