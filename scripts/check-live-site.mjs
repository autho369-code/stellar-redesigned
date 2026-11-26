/**
 * Live-site check. Fetches the public pages and fails if a promise from the
 * growth brief is missing: the exact price wording, the proposal blocks on
 * every guide in src/data/ctaPosts.ts, robots tags, the sitemap, and the
 * words that must never appear. Run: node scripts/check-live-site.mjs
 * BASE_URL overrides the site (for a local preview build).
 */
import { readFileSync } from 'node:fs';

const BASE = (process.env.BASE_URL || 'https://www.stellarpropertygroup.com').replace(/\/$/, '');
const brandFile = readFileSync(new URL('../src/brand/brand.config.ts', import.meta.url), 'utf8');
const priceFrom = brandFile.match(/startingPerUnit:\s*(\d+)/)[1];
const priceTerms = brandFile.match(/terms:\s*'([^']+)'/)[1];
const PRICE = `$${priceFrom} per unit per month, ${priceTerms}`;
const ctaSource = readFileSync(new URL('../src/data/ctaPosts.ts', import.meta.url), 'utf8');
const ctaSlugs = [...ctaSource.slice(ctaSource.indexOf('export const ctaPosts')).matchAll(/^  '([a-z0-9-]+)': \{/gm)].map((m) => m[1]);

const problems = [];
const get = async (path) => {
  const res = await fetch(`${BASE}${path}`, { headers: { 'cache-control': 'no-cache' } });
  if (!res.ok) problems.push(`${path}: HTTP ${res.status}`);
  return res.ok ? res.text() : '';
};
const count = (html, text) => html.split(text).length - 1;
const robots = (html) => (html.match(/name="robots" content="([^"]+)"/) || [, ''])[1];
const FORBIDDEN = [['all-inclusive', /all-inclusive/i], ['$20 per unit', /\$20 per unit/], ['$24', /\$24\b/], ['BBB', /\bBBB\b|bbb\.org/i]];
const scan = (path, html) => { for (const [label, re] of FORBIDDEN) if (re.test(html)) problems.push(`${path}: contains "${label}"`); };

const moneyPages = ['/', '/pricing', '/services/condominium-management', '/services/hoa-management', '/property-management-chicago', '/property-management-wilmette', '/property-management-glenview'];
for (const path of moneyPages) {
  const html = await get(path);
  scan(path, html);
  if (!html.includes(PRICE)) problems.push(`${path}: price wording "${PRICE}" not found in the static HTML`);
}

const mid = `Pricing starts at ${PRICE}, as a customized flat fee, never a percentage of your budget.`;
const end = `Pricing starts at ${PRICE}.`;
if (ctaSlugs.length < 16) problems.push(`ctaPosts lists ${ctaSlugs.length} guides, expected 16 or more`);
for (const slug of ctaSlugs) {
  const path = `/blog/${slug}`;
  const html = await get(path);
  scan(path, html);
  if (count(html, 'data-proposal-cta="mid"') !== 1 || count(html, 'data-proposal-cta="end"') !== 1) problems.push(`${path}: needs exactly one mid and one end proposal block`);
  if (!html.includes(mid) || !html.includes(end)) problems.push(`${path}: proposal block price sentence is not exact`);
  if (!html.includes('data-track-location="cta-mid"') || !html.includes('data-track-location="cta-end"')) problems.push(`${path}: phone link tracking missing`);
}

const resources = await get('/resources');
if (count(resources, 'data-proposal-cta=') < 1 || !resources.includes(PRICE)) problems.push('/resources: proposal block or price wording missing');

if (!/^index, follow/.test(robots(await get('/reviews')))) problems.push('/reviews: robots must be index, follow');
if (!/noindex/.test(robots(await get('/contact/thanks')))) problems.push('/contact/thanks: robots must be noindex');
const sitemap = await get('/sitemap.xml');
const urls = count(sitemap, '<loc>');
if (urls < 150) problems.push(`sitemap.xml: ${urls} URLs, expected 150 or more`);
if (!sitemap.includes('/reviews</loc>')) problems.push('sitemap.xml: /reviews missing');
if (sitemap.includes('/contact/thanks')) problems.push('sitemap.xml: /contact/thanks must not be listed');

if (problems.length) {
  console.error(`[live] ${problems.length} problem(s) on ${BASE}:\n  - ${problems.join('\n  - ')}`);
  process.exit(1);
}
console.log(`[live] ${BASE}: price wording on ${moneyPages.length} money pages, ${ctaSlugs.length} guides with one mid and one end block, /resources, robots and sitemap (${urls} URLs) all pass`);
