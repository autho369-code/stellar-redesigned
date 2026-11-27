import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const base = 'https://www.stellarpropertygroup.com';
const sitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const allowedRoutes = new Set(urls.map((url) => new URL(url).pathname));
allowedRoutes.add('/reviews');
allowedRoutes.add('/knowledge');

const errors = [];
const titles = new Map();
// The one starting fee, from src/data/business.ts.
const priceFrom = Number(readFileSync(join(root, 'src/brand/brand.config.ts'), 'utf8').match(/startingPerUnit:\s*(\d+)/)?.[1]);
if (!priceFrom) errors.push('brand.config.ts: pricing.startingPerUnit not found');

function valueOf(html, pattern) {
  // Decode the entities React emits, so a title is measured as a reader sees it.
  return html.match(pattern)?.[1]
    ?.replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
    .trim() ?? '';
}

for (const url of urls) {
  const parsed = new URL(url);
  const route = parsed.pathname;
  const file = route === '/'
    ? join(root, 'dist/index.html')
    : join(root, 'dist', `${route.slice(1)}.html`);

  if (!existsSync(file)) {
    errors.push(`${route}: missing prerendered HTML`);
    continue;
  }

  const html = readFileSync(file, 'utf8');
  const title = valueOf(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = valueOf(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i)
    || valueOf(html, /<meta[^>]+content="([^"]*)"[^>]+name="description"/i);
  const canonical = valueOf(html, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i)
    || valueOf(html, /<link[^>]+href="([^"]*)"[^>]+rel="canonical"/i);
  const robots = valueOf(html, /<meta[^>]+name="robots"[^>]+content="([^"]*)"/i);
  const h1Count = (html.match(/<h1\b/gi) ?? []).length;
  // The root canonical carries the trailing slash — matching the sitemap's
  // <loc>, since the origin root always resolves to '/'.
  const expectedCanonical = route === '/' ? `${base}/` : `${base}${route}`;

  if (!title) errors.push(`${route}: missing title`);
  if (!description) errors.push(`${route}: missing meta description`);
  if (title.length > 65) errors.push(`${route}: title is ${title.length} characters (maximum 65)`);
  if (!route.startsWith('/blog/') && description.length > 180) errors.push(`${route}: meta description is ${description.length} characters (maximum 180)`);
  if (canonical !== expectedCanonical) errors.push(`${route}: canonical is '${canonical}', expected '${expectedCanonical}'`);
  if (/noindex|nofollow/i.test(robots)) errors.push(`${route}: sitemap route has a blocking robots directive '${robots}'`);
  if (h1Count !== 1) errors.push(`${route}: expected one H1, found ${h1Count}`);
  // Retired portfolio figures. Stop them from coming back.
  if (/\b42 (Chicago-area |condominium, |condo, )?(associations|communities)|all 42\b|2,450|\b2450\b/i.test(html)) {
    errors.push(`${route}: contains a retired portfolio figure (42 associations / 2,450)`);
  }
  // Owner, 2026-11-26: public pages show rounded figures ("30+ associations",
  // "approximately 1,500 residences") so they do not change with each new
  // building. Exact counts must not come back.
  if (/\b29 (Chicago-area |condominium, |condo, )?(associations|communities)|all 29\b|1,422|\b1422\b|1,495/i.test(html)) {
    errors.push(`${route}: contains an exact portfolio count; use the rounded figures from the brand file`);
  }
  // Retired starting fee (owner-confirmed 2026-11-26: the flat fee starts at
  // $30 per unit per month). The price lives in src/data/business.ts.
  if (/\$20(?![\d,])(?:\s*\/\s*unit|\s+per\s+unit|\s+a\s+unit)/i.test(html)) {
    errors.push(`${route}: contains the retired $20 starting fee`);
  }
  // The starting fee inside JSON-LD (price / minPrice) must match business.ts.
  for (const match of html.matchAll(/"(?:price|minPrice)":\s*"?(\d+(?:\.\d+)?)"?/g)) {
    if (Number(match[1]) !== priceFrom) errors.push(`${route}: JSON-LD price ${match[1]} does not match the starting fee ${priceFrom}`);
  }
  if (/href="\/contact-us(?:[/?#"])/i.test(html)) errors.push(`${route}: links internally to legacy /contact-us`);

  const priorRoute = titles.get(title);
  if (title && priorRoute) errors.push(`${route}: duplicate title also used by ${priorRoute}`);
  if (title) titles.set(title, route);

  for (const script of html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(script[1]);
    } catch (error) {
      errors.push(`${route}: invalid JSON-LD (${error.message})`);
    }
  }

  for (const match of html.matchAll(/href="(\/[^"]*)"/gi)) {
    const href = match[1];
    if (href.startsWith('//')) continue;
    const linkedRoute = new URL(href, base).pathname.replace(/\/$/, '') || '/';
    const staticFile = join(root, 'dist', linkedRoute.slice(1));
    if (!allowedRoutes.has(linkedRoute) && !existsSync(staticFile)) errors.push(`${route}: broken or unlisted internal link ${href}`);
  }
}

const llms = readFileSync(join(root, 'dist/llms.txt'), 'utf8');
if (!llms.includes('- Portfolio: 30+ associations, approximately 1,500 residences')) errors.push('llms.txt: Business facts section is missing the portfolio line');
if (!llms.includes('starting at $30 per unit per month')) errors.push('llms.txt: pricing line is missing or damaged');
if (/2,450|\b42 associations/.test(llms)) errors.push('llms.txt: contains a retired portfolio figure');

// Unfilled owner placeholders ([[JOJO: ...]]) must never ship. Fields that
// wait on the owner are stored as null and their block stays hidden.
(function scanForPlaceholders(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) scanForPlaceholders(full);
    else if (/\.(html|txt|xml|json)$/.test(entry.name) && readFileSync(full, 'utf8').includes('[[JOJO')) {
      errors.push(`${full.slice(join(root, 'dist').length)}: contains an unfilled [[JOJO placeholder`);
    }
  }
})(join(root, 'dist'));

// /reviews is indexable and listed exactly once; the form confirmation page
// is noindex and never listed.
if (urls.filter((url) => url === `${base}/reviews`).length !== 1) errors.push('sitemap must list /reviews exactly once');
if (urls.some((url) => url.includes('/contact/thanks'))) errors.push('sitemap must not list /contact/thanks');
const thanksFile = join(root, 'dist/contact/thanks.html');
if (!existsSync(thanksFile)) errors.push('/contact/thanks: missing prerendered HTML');
else if (!/<meta[^>]+name="robots"[^>]+content="noindex, nofollow"/i.test(readFileSync(thanksFile, 'utf8'))) {
  errors.push('/contact/thanks: must be noindex, nofollow');
}
if (/<lastmod>(?!\d{4}-\d{2}-\d{2}<)/.test(sitemap)) errors.push('sitemap has a malformed <lastmod>');

if (urls.some((url) => /\/contact-us\/?$/.test(url))) errors.push('sitemap includes legacy /contact-us URL');
if (!urls.includes(`${base}/contact`)) errors.push('sitemap is missing canonical /contact URL');

if (errors.length) {
  console.error(`[seo] ${errors.length} integrity error(s):`);
  for (const error of [...new Set(errors)]) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`[seo] verified ${urls.length} indexable prerendered routes, canonicals, metadata, headings, JSON-LD, and internal links`);
