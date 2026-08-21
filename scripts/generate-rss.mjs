// Generates public/rss.xml from the published blog posts.
// Runs automatically before every build (see "prebuild" in package.json).
//
// Why this exists: posting to a LinkedIn *company page* through the API needs
// Community Management API access — a two-tier app review reserved for
// registered organizations, measured in weeks to months. A feed sidesteps that
// entirely: Buffer, Hootsuite, Zapier, and Make already hold LinkedIn's
// approval, and they can watch this file and post each new guide as it
// publishes. The feed is also a plain content-distribution asset (Feedly,
// email digests, syndication) worth having regardless of LinkedIn.
//
// Same publication gate as the sitemap: future-dated posts stay out until
// their release day, so a scheduler never announces an article that 404s.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getChicagoPublicationDate } from './publication-date.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://www.stellarpropertygroup.com';
const publicationCutoff = getChicagoPublicationDate();

// Feed readers and schedulers only act on recent items; a full 57-post feed
// would risk a scheduler treating every historical guide as new and flooding
// the page on first connect.
const MAX_ITEMS = 20;

const escape = (value = '') =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// Source strings are single-quoted TS literals; unescape what the parser sees.
const unescapeTs = (value = '') => value.replace(/\\'/g, "'").replace(/\\\\/g, '\\');

const field = (source, name) =>
  unescapeTs(source.match(new RegExp(`\\b${name}:\\s*'((?:[^'\\\\]|\\\\.)*)'`))?.[1] ?? '');

const posts = [];
const blogDir = join(root, 'src/data/blog-posts');

for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.ts') || file === 'index.ts') continue;
  const src = readFileSync(join(blogDir, file), 'utf8');
  const slugMatches = [...src.matchAll(/\bslug:\s*'([^']+)'/g)];

  for (let index = 0; index < slugMatches.length; index++) {
    const match = slugMatches[index];
    const nextMatch = slugMatches[index + 1];
    const postSource = src.slice(match.index, nextMatch?.index ?? src.length);
    const slug = match[1];
    const date = field(postSource, 'date');

    if (!date) throw new Error(`Blog post '${slug}' in ${file} has no publication date.`);
    if (date > publicationCutoff) continue;

    posts.push({
      slug,
      date,
      title: field(postSource, 'title'),
      category: field(postSource, 'category'),
      description: field(postSource, 'metaDescription') || field(postSource, 'excerpt'),
    });
  }
}

posts.sort((a, b) => b.date.localeCompare(a.date));
const items = posts.slice(0, MAX_ITEMS);

// RFC 822 dates, anchored to noon Chicago so a date-only post never lands on
// the previous day once a reader converts it to its own timezone.
const rfc822 = (date) => new Date(`${date}T12:00:00-05:00`).toUTCString();
const buildDate = items.length ? rfc822(items[0].date) : new Date(0).toUTCString();

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Stellar Property Management — Association Board Guides</title>
    <link>${BASE}/blog</link>
    <description>Illinois condominium, HOA, and townhome association guidance for Chicago and North Shore boards, from a licensed community association management firm.</description>
    <language>en-us</language>
    <copyright>Stellar Property Group Inc.</copyright>
    <managingEditor>mirsad@stellarpropertygroup.com (Mirsad Cerimovic)</managingEditor>
    <webMaster>mirsad@stellarpropertygroup.com (Mirsad Cerimovic)</webMaster>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
${items
  .map(
    (post) => `    <item>
      <title>${escape(post.title)}</title>
      <link>${BASE}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE}/blog/${post.slug}</guid>
      <pubDate>${rfc822(post.date)}</pubDate>
      <dc:creator xmlns:dc="http://purl.org/dc/elements/1.1/">Mirsad Cerimovic, CAM, CMCA, AMS</dc:creator>${
        post.category ? `
      <category>${escape(post.category)}</category>` : ''
      }
      <description>${escape(post.description)}</description>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`;

writeFileSync(join(root, 'public/rss.xml'), xml);
console.log(`rss.xml written: ${items.length} of ${posts.length} published posts`);
