// Uniqueness test for the upgraded area pages (growth brief, Phase 3).
// Swapped-name pages are the pages search engines discount, so two upgraded
// pages may not share more than 35% of their body text.
//
// Method: take the visible text of <main> from the BUILT HTML of every page
// in src/data/areas/, break it into 5-word shingles, and compare every pair.
// The share is measured against the SMALLER page, so a short page cannot hide
// inside a long one. Runs in postbuild; alone: `npm run seo:check-uniqueness`.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const LIMIT = 0.35;
const SHINGLE = 5;

// One content file per upgraded page: src/data/areas/<slug>.ts
const slugs = readdirSync(join(root, 'src/data/areas'))
  .filter((file) => file.endsWith('.ts') && !['index.ts', 'types.ts'].includes(file))
  .map((file) => file.replace(/\.ts$/, ''));

function shingles(slug) {
  const file = join(root, 'dist', `property-management-${slug}.html`);
  if (!existsSync(file)) throw new Error(`[uniqueness] no built HTML for ${slug}`);
  const html = readFileSync(file, 'utf8');
  if (!html.includes(`data-area-upgraded="${slug}"`)) throw new Error(`[uniqueness] ${slug} has a content file but did not render with the upgraded layout`);
  const main = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/)?.[1] ?? '';
  const words = main
    // The trust bar is the same strip on every page, like the header.
    .replace(/<section\b[^>]*\bdata-trust-bar\b[\s\S]*?<\/section>/gi, ' ')
    // The guide's "On this page" list repeats its own headings.
    .replace(/<nav\b[^>]*\bdata-toc\b[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<(script|style|svg)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9$%]+/g, ' ')
    .trim()
    .split(/\s+/);
  const set = new Set();
  for (let index = 0; index + SHINGLE <= words.length; index++) set.add(words.slice(index, index + SHINGLE).join(' '));
  return { words: words.length, set };
}

const pages = slugs.map((slug) => ({ slug, ...shingles(slug) }));
const failures = [];
let worst = { share: 0, pair: '' };
for (let a = 0; a < pages.length; a++) {
  for (let b = a + 1; b < pages.length; b++) {
    let shared = 0;
    for (const shingle of pages[a].set) if (pages[b].set.has(shingle)) shared++;
    const share = shared / Math.min(pages[a].set.size, pages[b].set.size);
    const pair = `${pages[a].slug} / ${pages[b].slug}`;
    if (share > worst.share) worst = { share, pair };
    if (share > LIMIT) failures.push(`${pair}: ${(share * 100).toFixed(1)}% shared`);
  }
}

if (failures.length) {
  console.error(`[uniqueness] ${failures.length} pair(s) of upgraded area pages share more than ${LIMIT * 100}% of their text:`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(`[uniqueness] ${pages.length} upgraded area pages (${pages.map((p) => `${p.slug} ${p.words}w`).join(', ')}); closest pair ${worst.pair} shares ${(worst.share * 100).toFixed(1)}% (limit ${LIMIT * 100}%)`);
