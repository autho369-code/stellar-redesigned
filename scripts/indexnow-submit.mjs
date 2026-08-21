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

// IndexNow participants share submissions with each other, so any endpoint
// reaches all of them. api.indexnow.org has been intermittently unresolvable
// from some networks, which failed the whole submission with an opaque
// "fetch failed" — try the participant endpoints in turn instead of giving up
// on the first transport error.
const endpoints = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow',
  'https://yandex.com/indexnow',
];

const payload = JSON.stringify({
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: urls,
});

let submitted = false;
const failures = [];

for (const endpoint of endpoints) {
  let response;
  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: payload,
    });
  } catch (error) {
    // Transport failure (DNS, TLS, timeout) — try the next participant.
    failures.push(`${endpoint}: ${error.cause?.code ?? error.message}`);
    continue;
  }

  if (response.ok) {
    console.log(
      `IndexNow accepted ${urls.length} updated URL${urls.length === 1 ? '' : 's'} (${response.status}) via ${new URL(endpoint).host}.`,
    );
    submitted = true;
    break;
  }

  // A 4xx is a real rejection — the payload or key is wrong, and every other
  // endpoint will reject it identically. Fail loudly rather than retrying.
  if (response.status >= 400 && response.status < 500) {
    const details = await response.text();
    throw new Error(`IndexNow rejected the submission (${response.status}): ${details}`);
  }

  failures.push(`${endpoint}: HTTP ${response.status}`);
}

if (!submitted) {
  throw new Error(`IndexNow submission failed at every endpoint: ${failures.join('; ')}`);
}
