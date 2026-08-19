import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { getChicagoPublicationDate } from './publication-date.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const today = getChicagoPublicationDate();
const blogDir = join(root, 'src/data/blog-posts');
const releasedToday = [];
const productionOrigin = 'https://www.stellarpropertygroup.com';
const releaseWaitMs = Number(process.env.INDEXNOW_RELEASE_WAIT_MS ?? 600_000);
const releasePollMs = Number(process.env.INDEXNOW_RELEASE_POLL_MS ?? 15_000);

for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.ts') || file === 'index.ts') continue;
  const source = readFileSync(join(blogDir, file), 'utf8');
  const slugMatches = [...source.matchAll(/\bslug:\s*'([^']+)'/g)];

  for (let index = 0; index < slugMatches.length; index++) {
    const match = slugMatches[index];
    const nextMatch = slugMatches[index + 1];
    const postSource = source.slice(match.index, nextMatch?.index ?? source.length);
    const date = postSource.match(/\bdate:\s*'([^']+)'/)?.[1];
    if (date === today) releasedToday.push(`/blog/${match[1]}`);
  }
}

async function isLive(path, attempt) {
  const expectedCanonical = `${productionOrigin}${path}`;
  const url = new URL(expectedCanonical);
  url.searchParams.set('release_check', `${today}-${attempt}`);

  try {
    const response = await fetch(url, { headers: { 'cache-control': 'no-cache' } });
    if (!response.ok) return false;

    const html = await response.text();
    const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1]
      ?? html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1];
    return canonical === expectedCanonical;
  } catch {
    return false;
  }
}

async function waitForProduction(paths) {
  if (paths.length === 0) return;

  const deadline = Date.now() + releaseWaitMs;
  let attempt = 0;
  while (Date.now() < deadline) {
    attempt += 1;
    const ready = await Promise.all(paths.map((path) => isLive(path, attempt)));
    if (ready.every(Boolean)) {
      console.log(`[IndexNow] Production release confirmed after ${attempt} check(s).`);
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, releasePollMs));
  }

  throw new Error(`Timed out waiting for ${paths.length} scheduled article(s) to reach production.`);
}

await waitForProduction(releasedToday);

const paths = ['/', '/blog', '/sitemap.xml', '/llms.txt', ...releasedToday];
const result = spawnSync(process.execPath, [join(root, 'scripts/indexnow-submit.mjs'), ...paths], {
  cwd: root,
  stdio: 'inherit',
});

if (result.status !== 0) process.exit(result.status ?? 1);
console.log(`[IndexNow] ${releasedToday.length} scheduled article(s) released on ${today}.`);
