import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { getChicagoPublicationDate } from './publication-date.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const today = getChicagoPublicationDate();
const blogDir = join(root, 'src/data/blog-posts');
const releasedToday = [];

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

const paths = ['/', '/blog', '/sitemap.xml', '/llms.txt', ...releasedToday];
const result = spawnSync(process.execPath, [join(root, 'scripts/indexnow-submit.mjs'), ...paths], {
  cwd: root,
  stdio: 'inherit',
});

if (result.status !== 0) process.exit(result.status ?? 1);
console.log(`[IndexNow] ${releasedToday.length} scheduled article(s) released on ${today}.`);
