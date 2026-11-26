// Link integrity for the reverse silo (growth brief, Phase 2). Runs after the
// prerender (see "postbuild") against the BUILT HTML in dist/, so it checks
// what crawlers actually receive. Fails the build when:
//   1. a required link from src/data/clusters.ts is missing
//      (pillar and money page in the article body, "More in this guide",
//      "nearby neighborhoods", the curated guides on area pages);
//   2. a published guide has no link from any area page;
//   3. any internal link on any page points at a page that does not exist;
//   4. a guide links the same URL twice in its article body.
// Run it alone with `npm run seo:check-links` (after a build).
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE = 'https://www.stellarpropertygroup.com';

const bundleDir = mkdtempSync(join(tmpdir(), 'stellar-links-'));
let clusters, extraMoneyLinks, getAreaGuides, getSeriesNav, neighborhoods;
try {
  const outfile = join(bundleDir, 'links.mjs');
  await build({
    stdin: {
      contents: `export { clusters, extraMoneyLinks, getAreaGuides, getSeriesNav } from './src/data/clusters';\nexport { neighborhoods } from './src/data/neighborhoods';`,
      resolveDir: root,
      loader: 'ts',
    },
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile,
    logLevel: 'error',
  });
  ({ clusters, extraMoneyLinks, getAreaGuides, getSeriesNav, neighborhoods } = await import(pathToFileURL(outfile).href));
} finally {
  rmSync(bundleDir, { recursive: true, force: true });
}

const problems = [];
const read = (route) => {
  const file = route === '/' ? join(dist, 'index.html') : join(dist, `${route.slice(1)}.html`);
  if (!existsSync(file)) {
    problems.push(`${route}: no built HTML`);
    return '';
  }
  return readFileSync(file, 'utf8');
};
const decode = (value) => value.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
const internal = (href) => decode(href).replace(SITE, '');
const anchors = (html) => [...html.matchAll(/<a\b[^>]*\bhref="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g)]
  .map((match) => ({ href: internal(match[1]), text: decode(match[2].replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim() }));
const paths = (html) => new Set(anchors(html).map(({ href }) => href.replace(/[#?].*$/, '')));
/** The markup of the element that carries `marker`, up to `endTag`. */
const block = (html, marker, endTag) => {
  const at = html.indexOf(marker);
  if (at === -1) return null;
  const end = html.indexOf(endTag, at);
  return html.slice(at, end === -1 ? undefined : end);
};
/** Authored prose only: no modules, no proposal blocks. */
const articleBody = (html) => {
  const start = html.indexOf('data-article-body');
  const end = html.indexOf('data-series-nav');
  if (start === -1 || end === -1) return null;
  return html.slice(start, end).replace(/<aside\b[^>]*data-proposal-cta[\s\S]*?<\/aside>/g, ' ');
};

// ── 1. Required links on every clustered guide ───────────────────────────
const areaName = new Map(neighborhoods.map(({ slug, name }) => [slug, name]));
let guideCount = 0;
for (const cluster of clusters) {
  for (const member of cluster.members) {
    guideCount++;
    const route = `/blog/${member.slug}`;
    const html = read(route);
    if (!html) continue;

    const body = articleBody(html);
    if (body === null) {
      problems.push(`${route}: article body or "More in this guide" is missing`);
      continue;
    }
    const bodyAnchors = anchors(body);
    const bodyPaths = paths(body);
    if (!bodyPaths.has(cluster.money)) problems.push(`${route}: body does not link its money page ${cluster.money}`);
    if (member.slug !== cluster.pillar && !bodyPaths.has(`/blog/${cluster.pillar}`)) {
      problems.push(`${route}: body does not link its pillar /blog/${cluster.pillar}`);
    }
    for (const [page, slugs] of Object.entries(extraMoneyLinks)) {
      if (slugs.includes(member.slug) && !bodyPaths.has(page)) problems.push(`${route}: body does not link ${page}`);
    }
    // 4. the same URL twice in the article body
    const seen = new Map();
    for (const { href } of bodyAnchors) seen.set(href, (seen.get(href) ?? 0) + 1);
    for (const [href, count] of seen) {
      if (count > 1 && (href.startsWith('/') || href.startsWith(SITE))) problems.push(`${route}: body links ${href} ${count} times`);
    }

    const series = block(html, 'data-series-nav', '</nav>');
    const seriesPaths = paths(series ?? '');
    const expected = getSeriesNav(member.slug);
    const required = member.slug === cluster.pillar
      ? [...cluster.members.map((m) => m.slug).filter((slug) => slug !== member.slug), ...(member.cross ?? [])]
      : [cluster.pillar, ...(member.siblings ?? [])];
    for (const slug of required) {
      if (!seriesPaths.has(`/blog/${slug}`)) problems.push(`${route}: "More in this guide" does not link /blog/${slug}`);
    }
    if (member.slug !== cluster.pillar && seriesPaths.size > 4) problems.push(`${route}: "More in this guide" shows ${seriesPaths.size} links (pillar plus at most 3)`);
    if (!expected) problems.push(`${route}: no series data`);

    const nearby = block(html, 'data-nearby-areas', '</nav>');
    const nearbyAnchors = anchors(nearby ?? '');
    for (const area of member.areas) {
      const link = nearbyAnchors.find(({ href }) => href === `/property-management-${area}`);
      if (!link) problems.push(`${route}: "nearby neighborhoods" does not link /property-management-${area}`);
      else if (link.text !== `${areaName.get(area)} condo and HOA management`) problems.push(`${route}: wrong link text for ${area}: "${link.text}"`);
    }
    if (nearbyAnchors.length !== member.areas.length) problems.push(`${route}: "nearby neighborhoods" shows ${nearbyAnchors.length} links, expected ${member.areas.length}`);
  }
}

// ── 2. Area pages: curated block, and every guide linked from an area page ─
const inbound = new Map();
for (const { slug } of neighborhoods) {
  const route = `/property-management-${slug}`;
  const html = read(route);
  if (!html) continue;
  const guides = block(html, 'data-area-guides', '</section>');
  const guidePaths = paths(guides ?? '');
  const { curated, matched } = getAreaGuides(slug);
  for (const guide of [...curated, ...matched]) {
    if (!guidePaths.has(`/blog/${guide}`)) problems.push(`${route}: guides block does not link /blog/${guide}`);
  }
  for (const path of paths(html.match(/<main\b[^>]*>([\s\S]*)<\/main>/)?.[1] ?? '')) {
    if (path.startsWith('/blog/')) inbound.set(path, (inbound.get(path) ?? 0) + 1);
  }
}
const withoutAreaLink = clusters.flatMap((cluster) => cluster.members.map((m) => m.slug)).filter((slug) => !inbound.has(`/blog/${slug}`));
for (const slug of withoutAreaLink) problems.push(`/blog/${slug}: no area page links to this guide`);

// ── 3. No internal link may point at a missing page ──────────────────────
const exists = (path) => {
  if (path === '/' || path === '') return true;
  const clean = path.replace(/\/$/, '');
  const file = join(dist, clean.slice(1));
  return existsSync(`${file}.html`) || (existsSync(file) && (statSync(file).isFile() || existsSync(join(file, 'index.html'))));
};
const broken = new Map();
let pageCount = 0;
(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) {
      pageCount++;
      const html = readFileSync(full, 'utf8');
      for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
        const href = internal(match[1]);
        if (!href.startsWith('/') || href.startsWith('//')) continue;
        const path = href.replace(/[#?].*$/, '');
        if (!exists(path)) broken.set(path, [...(broken.get(path) ?? []), full.slice(dist.length)]);
      }
    }
  }
})(dist);
for (const [path, pages] of broken) problems.push(`broken internal link ${path} on ${pages.length} page(s), e.g. ${pages[0]}`);

if (problems.length) {
  console.error(`[links] ${problems.length} problem(s):`);
  for (const problem of [...new Set(problems)].slice(0, 80)) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(`[links] ${guideCount} guides link their pillar, money page, series and nearby areas; ${neighborhoods.length} area pages show their curated guides; every guide has an area-page link; no broken internal links on ${pageCount} pages; no duplicate links in article bodies`);
