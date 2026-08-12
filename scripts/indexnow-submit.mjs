import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const host = 'www.stellarpropertygroup.com';
const key = readFileSync(
  join(root, 'public/609a86f8c19b4fada8794ac4c7c2fd48.txt'),
  'utf8',
).trim();

const urls = process.argv.slice(2).map((value) => {
  const url = new URL(value, `https://${host}`);
  if (url.hostname !== host) {
    throw new Error(`IndexNow URL must use ${host}: ${url.href}`);
  }
  return url.href;
});

if (urls.length === 0) {
  console.error('Usage: npm run seo:indexnow -- /updated-path /another-path');
  process.exit(1);
}

if (urls.length > 10_000) {
  throw new Error('IndexNow accepts at most 10,000 URLs per request.');
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `https://${host}/${key}.txt`,
    urlList: urls,
  }),
});

if (!response.ok) {
  const details = await response.text();
  throw new Error(`IndexNow rejected the submission (${response.status}): ${details}`);
}

console.log(`IndexNow accepted ${urls.length} updated URL${urls.length === 1 ? '' : 's'} (${response.status}).`);
