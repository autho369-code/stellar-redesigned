// Generates public/sitemap.xml from static routes + neighborhood and blog data.
// Runs automatically before every build (see "prebuild" in package.json).
// URL list and <lastmod> rules live in scripts/sitemap-lib.mjs.
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { buildUrls, renderSitemap, root } from './sitemap-lib.mjs';

const urls = buildUrls();
writeFileSync(join(root, 'public/sitemap.xml'), renderSitemap(urls));
console.log(`sitemap.xml written: ${urls.length} URLs`);
