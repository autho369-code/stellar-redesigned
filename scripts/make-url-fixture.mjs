/**
 * R0 baseline: reads the built site (dist/) and writes tests/fixtures/urls.json,
 * one record per sitemap URL: title, H1, meta description, canonical, robots
 * and JSON-LD types. Later PRs diff against it. Run after `npm run build`:
 *   node scripts/make-url-fixture.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const ORIGIN = 'https://www.stellarpropertygroup.com';
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(ORIGIN, '') || '/');
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const attr = (html, re) => decode((html.match(re) || [, ''])[1]);
const records = paths.map((path) => {
  const file = path === '/' ? 'dist/index.html' : existsSync(`dist${path}/index.html`) ? `dist${path}/index.html` : `dist${path}.html`;
  const html = readFileSync(file, 'utf8');
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => decode(m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()));
  const types = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].flatMap((m) => {
    const data = JSON.parse(m[1]);
    const nodes = Array.isArray(data) ? data : data['@graph'] ?? [data];
    return nodes.map((n) => [].concat(n['@type'] ?? []).join('+'));
  });
  return {
    path,
    title: attr(html, /<title[^>]*>([^<]*)<\/title>/),
    h1: h1s[0] ?? '',
    h1Count: h1s.length,
    description: attr(html, /<meta[^>]*name="description"[^>]*content="([^"]*)"/),
    canonical: attr(html, /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/),
    robots: attr(html, /<meta[^>]*name="robots"[^>]*content="([^"]*)"/),
    jsonLdTypes: [...new Set(types)].sort(),
  };
});
writeFileSync('tests/fixtures/urls.json', JSON.stringify({ origin: ORIGIN, generated: new Date().toISOString().slice(0, 10), urls: records }, null, 1) + '\n');
console.log(`[fixture] ${records.length} URLs written to tests/fixtures/urls.json`);
