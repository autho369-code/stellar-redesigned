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
// Keep the intentional consolidated footprint at 42 service-area pages (Hyde Park removed at the owner's instruction, 2026-11-26).
if (neighborhoodSlugs.length !== 42 || new Set(neighborhoodSlugs).size !== 42) {
  throw new Error(`Expected 42 unique consolidated service-area pages, found ${neighborhoodSlugs.length}.`);
}

const requiredConnections = [
  ['src/pages/BlogPost.tsx', ['getSiloSiblings', 'getPostNeighborhoods', 'getPostSilo', 'getPillarContent', 'getSeriesNav', 'getNearbyAreas']],
  ['src/pages/NeighborhoodPage.tsx', ['getAreaGuides', 'neighborhoodClusterConfig.servicePath']],
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
let allBlogPosts, postSilos, moneyPagePaths, getPillarContent, ctaPosts, splitForMidCta, withoutClosingCta, clusters, extraMoneyLinks, areaTypes, getAreaGuides;
try {
  await build({
    stdin: {
      contents: `export { allBlogPosts } from './src/data/blog-posts/index';\nexport { postSilos, moneyPagePaths } from './src/data/post-silos';\nexport { getPillarContent } from './src/data/pillar-links';\nexport { ctaPosts, splitForMidCta, withoutClosingCta } from './src/data/ctaPosts';\nexport { clusters, extraMoneyLinks, areaTypes, getAreaGuides } from './src/data/clusters';`,
      resolveDir: root,
      loader: 'ts',
    },
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: bundlePath,
    logLevel: 'error',
  });
  ({ allBlogPosts, postSilos, moneyPagePaths, getPillarContent, ctaPosts, splitForMidCta, withoutClosingCta, clusters, extraMoneyLinks, areaTypes, getAreaGuides } = await import(pathToFileURL(bundlePath).href));
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
  // One primary money page, plus only the extra money pages listed in `also`.
  const also = silo.also ?? [];
  for (const extra of money) {
    if (extra !== silo.money && !also.includes(extra)) problems.push(`${post.slug}: body links a money page that is not its primary or in 'also': ${extra}`);
  }
  for (const extra of also) {
    if (!money.has(extra)) problems.push(`${post.slug}: body must link its extra money page ${extra}`);
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

// ── Clusters (src/data/clusters.ts) ──────────────────────────────────────
// Every published guide is in exactly one cluster. A cluster's money page is
// the primary money page of each member, and every member links its pillar
// in the body. Named siblings, cross links and area pages must all exist.
{
  const seen = new Map();
  const bodyLinks = (post) => new Set(
    [...getPillarContent(post, allBlogPosts, today).matchAll(/<a\s[^>]*href="([^"]+)"/g)]
      .map((match) => match[1].replace(/^https:\/\/www\.stellarpropertygroup\.com/, '').replace(/[#?].*$/, '')),
  );
  for (const cluster of clusters) {
    const members = cluster.members.map((member) => member.slug);
    if (!members.includes(cluster.pillar)) problems.push(`cluster ${cluster.id}: pillar ${cluster.pillar} is not listed in members`);
    if (!moneyPagePaths.includes(cluster.money)) problems.push(`cluster ${cluster.id}: unknown money page ${cluster.money}`);
    for (const member of cluster.members) {
      const post = postsBySlug.get(member.slug);
      if (!post) { problems.push(`cluster ${cluster.id}: '${member.slug}' is not a guide`); continue; }
      if (post.date > today) problems.push(`cluster ${cluster.id}: '${member.slug}' is not published yet`);
      if (seen.has(member.slug)) problems.push(`'${member.slug}' is in two clusters (${seen.get(member.slug)} and ${cluster.id})`);
      seen.set(member.slug, cluster.id);
      if (postSilos[member.slug]?.money !== cluster.money) problems.push(`${member.slug}: primary money page in post-silos.ts must be its cluster money page ${cluster.money}`);
      if (member.areas.length < 3 || new Set(member.areas).size !== member.areas.length) problems.push(`${member.slug}: needs at least three different area pages`);
      for (const area of member.areas) if (!neighborhoodSlugs.includes(area)) problems.push(`${member.slug}: unknown area page '${area}'`);
      for (const sibling of member.siblings ?? []) {
        if (!members.includes(sibling) || sibling === member.slug) problems.push(`${member.slug}: sibling '${sibling}' is not another guide in cluster ${cluster.id}`);
      }
      for (const cross of member.cross ?? []) {
        const target = postsBySlug.get(cross);
        if (!target || target.date > today || members.includes(cross)) problems.push(`${member.slug}: cross link '${cross}' must be a published guide in another cluster`);
      }
      const links = bodyLinks(post);
      if (member.slug !== cluster.pillar && !links.has(`/blog/${cluster.pillar}`)) problems.push(`${member.slug}: body must link its cluster pillar /blog/${cluster.pillar}`);
    }
  }
  for (const post of allBlogPosts) {
    if (post.date <= today && !seen.has(post.slug)) problems.push(`${post.slug}: published guide is not in any cluster (src/data/clusters.ts)`);
  }
  for (const [page, slugs] of Object.entries(extraMoneyLinks)) {
    if (!knownPaths.has(page)) problems.push(`extraMoneyLinks: unknown page ${page}`);
    for (const slug of slugs) {
      const post = postsBySlug.get(slug);
      if (!post) problems.push(`extraMoneyLinks: '${slug}' is not a guide`);
      else if (!bodyLinks(post).has(page)) problems.push(`${slug}: body must link ${page} (extraMoneyLinks)`);
    }
  }
  // Area pages: each belongs to exactly one area type and shows six curated guides.
  const typed = areaTypes.flatMap((type) => type.areas);
  for (const slug of neighborhoodSlugs) {
    if (typed.filter((area) => area === slug).length !== 1) problems.push(`area '${slug}' must be in exactly one area type (src/data/clusters.ts)`);
    const { curated } = getAreaGuides(slug);
    if (curated.length !== 6 || new Set(curated).size !== 6) problems.push(`area '${slug}' must show six different curated guides`);
  }
  for (const type of areaTypes) {
    for (const guide of type.guides) if (!seen.has(guide)) problems.push(`area type ${type.id}: '${guide}' is not a published, clustered guide`);
  }
}

// ── "Request a flat-fee proposal" blocks (src/data/ctaPosts.ts) ──────────
// Every listed guide must exist, carry a hook, have a safe spot for the
// mid-article card, and still contain the closing sentence its end block
// replaces (exactly once), so the two never drift apart.
for (const [slug, cta] of Object.entries(ctaPosts)) {
  const post = postsBySlug.get(slug);
  if (!post) {
    problems.push(`ctaPosts: '${slug}' is not a guide`);
    continue;
  }
  if (!cta.hook?.trim()) problems.push(`ctaPosts: '${slug}' has no hook sentence`);
  const content = getPillarContent(post, allBlogPosts, today);
  if (cta.replacesClosing && content.split(cta.replacesClosing).length !== 2) {
    problems.push(`ctaPosts: '${slug}' replacesClosing text must appear in the guide exactly once`);
  }
  if (!splitForMidCta(withoutClosingCta(slug, content))) problems.push(`ctaPosts: '${slug}' has no safe spot for the mid-article block`);
}

if (problems.length) {
  throw new Error(`Reverse silo broken in ${problems.length} place(s):\n  ${problems.join('\n  ')}`);
}

console.log(`Content silos verified: ${postSlugs.length} articles, ${neighborhoodSlugs.length} service areas, and 9 commercial/link surfaces.`);
console.log(`Reverse silo verified: every article links one primary money page, at most one area page, and its sibling guides.`);
console.log(`Clusters verified: ${clusters.length} clusters, ${clusters.reduce((n, c) => n + c.members.length, 0)} published guides, each linking its pillar and money page.`);
