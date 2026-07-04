// Prerenders every route to static HTML after `vite build` (runs as postbuild).
//
// Output: dist/<route>/index.html with the page's real markup, Helmet meta,
// and JSON-LD baked in — so Bing and AI crawlers (which don't run JS) see
// full pages instead of an empty <div id="root">.
//
// Vercel serves these static files before applying the SPA rewrite in
// vercel.json, so client-side navigation keeps working unchanged.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

// 1. Build the SSR bundle
console.log('[prerender] building SSR bundle…');
execSync('npx vite build --ssr src/entry-server.tsx --outDir dist-server --logLevel warn', {
  cwd: root,
  stdio: 'inherit',
});

const { render } = await import(pathToFileURL(join(root, 'dist-server/entry-server.js')).href);

// 2. Collect routes (same sources as generate-sitemap.mjs)
const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/services/condominium-management',
  '/services/hoa-management',
  '/services/townhome-management',
  '/services/financial-management',
  '/services/maintenance-coordination',
  '/services/board-support',
  '/services/violation-management',
  '/service-areas',
  '/property-management-chicago',
  '/blog',
  '/contact',
  '/resources',
  '/privacy-policy',
  '/terms-of-service',
];

const neighborhoodsSrc = readFileSync(join(root, 'src/data/neighborhoods.ts'), 'utf8');
const neighborhoodSlugs = [...neighborhoodsSrc.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);

const blogDir = join(root, 'src/data/blog-posts');
const blogSlugs = [];
for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.ts') || file === 'index.ts') continue;
  const m = readFileSync(join(blogDir, file), 'utf8').match(/slug:\s*'([^']+)'/);
  if (m) blogSlugs.push(m[1]);
}

const routes = [
  ...staticRoutes,
  ...neighborhoodSlugs.map((s) => `/property-management-${s}`),
  ...blogSlugs.map((s) => `/blog/${s}`),
];

// 3. Render each route into the built template
const template = readFileSync(join(root, 'dist/index.html'), 'utf8');
let ok = 0;
const failed = [];

for (const route of routes) {
  try {
    const { appHtml, helmet } = render(route);

    let html = template;
    // Strip the template's static <title> and meta description — Helmet
    // provides the per-route versions.
    html = html.replace(/<title>[\s\S]*?<\/title>\s*/, '');
    html = html.replace(/<meta name="description"[^>]*>\s*/, '');

    const head = [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
    ]
      .filter(Boolean)
      .join('\n    ');

    html = html.replace('</head>', `    ${head}\n  </head>`);
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const outDir = route === '/' ? join(root, 'dist') : join(root, 'dist', route.slice(1));
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html);
    ok++;
  } catch (err) {
    failed.push({ route, err: String(err).slice(0, 200) });
  }
}

rmSync(join(root, 'dist-server'), { recursive: true, force: true });

console.log(`[prerender] ${ok}/${routes.length} routes prerendered`);
if (failed.length) {
  console.error('[prerender] FAILED routes:');
  for (const f of failed) console.error(`  ${f.route}: ${f.err}`);
  process.exit(1);
}
