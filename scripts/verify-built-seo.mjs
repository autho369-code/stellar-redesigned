import { existsSync, readFileSync } from 'node:fs';
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

function valueOf(html, pattern) {
  return html.match(pattern)?.[1]?.replace(/&amp;/g, '&').trim() ?? '';
}

for (const url of urls) {
  const parsed = new URL(url);
  const route = parsed.pathname;
  const file = route === '/'
    ? join(root, 'dist/index.html')
    : join(root, 'dist', route.slice(1), 'index.html');

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
  const expectedCanonical = route === '/' ? base : `${base}${route}`;

  if (!title) errors.push(`${route}: missing title`);
  if (!description) errors.push(`${route}: missing meta description`);
  if (title.length > 65) errors.push(`${route}: title is ${title.length} characters (maximum 65)`);
  if (!route.startsWith('/blog/') && description.length > 180) errors.push(`${route}: meta description is ${description.length} characters (maximum 180)`);
  if (canonical !== expectedCanonical) errors.push(`${route}: canonical is '${canonical}', expected '${expectedCanonical}'`);
  if (/noindex|nofollow/i.test(robots)) errors.push(`${route}: sitemap route has a blocking robots directive '${robots}'`);
  if (h1Count !== 1) errors.push(`${route}: expected one H1, found ${h1Count}`);
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

if (urls.some((url) => /\/contact-us\/?$/.test(url))) errors.push('sitemap includes legacy /contact-us URL');
if (!urls.includes(`${base}/contact`)) errors.push('sitemap is missing canonical /contact URL');

if (errors.length) {
  console.error(`[seo] ${errors.length} integrity error(s):`);
  for (const error of [...new Set(errors)]) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`[seo] verified ${urls.length} indexable prerendered routes, canonicals, metadata, headings, JSON-LD, and internal links`);
