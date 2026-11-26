// Keeps <lastmod> honest. Runs after the prerender (see "postbuild").
//
// For every non-guide page it hashes the visible main text of the built HTML
// and compares it with scripts/sitemap-lastmod.json:
//   - same hash      → the stored date stays;
//   - different/new  → the page's text really changed, so its date becomes
//                      today (Chicago) and the manifest is rewritten.
// When anything changed, public/sitemap.xml and dist/sitemap.xml are rewritten
// too. Commit scripts/sitemap-lastmod.json with the change that caused it, so
// the next deploy does not stamp a later date on the same content.
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { getChicagoCalendarDate } from './publication-date.mjs';
import {
  buildUrls, contentHash, distFileFor, manifestPath, pageRoutes, readManifest, renderSitemap, root,
} from './sitemap-lib.mjs';

const today = getChicagoCalendarDate();
const manifest = readManifest();
const routes = pageRoutes();
const changed = [];

for (const route of routes) {
  const file = distFileFor(route);
  if (!existsSync(file)) throw new Error(`[sitemap] ${route}: no prerendered HTML to date`);
  const hash = contentHash(readFileSync(file, 'utf8'));
  if (manifest[route]?.hash !== hash) {
    manifest[route] = { hash, lastmod: today };
    changed.push(route);
  }
}

// Drop pages that no longer exist so the manifest never grows stale entries.
for (const route of Object.keys(manifest)) {
  if (!routes.includes(route)) delete manifest[route];
}

if (changed.length) {
  const sorted = Object.fromEntries(routes.filter((route) => manifest[route]).map((route) => [route, manifest[route]]));
  writeFileSync(manifestPath, `${JSON.stringify(sorted, null, 2)}\n`);
  const xml = renderSitemap(buildUrls(sorted));
  writeFileSync(join(root, 'public/sitemap.xml'), xml);
  writeFileSync(join(root, 'dist/sitemap.xml'), xml);
  console.log(`[sitemap] content changed on ${changed.length} page(s); lastmod set to ${today}:`);
  for (const route of changed.slice(0, 60)) console.log(`  ${route}`);
  if (changed.length > 60) console.log(`  … and ${changed.length - 60} more`);
  console.log('[sitemap] scripts/sitemap-lastmod.json was updated — commit it with this change.');
} else {
  console.log(`[sitemap] no page content changed; ${routes.length} lastmod dates kept`);
}
