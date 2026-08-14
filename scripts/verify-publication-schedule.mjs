import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = join(root, 'src/data/blog-posts');
const expectedAuthor = 'Mirsad Cerimovic, CAM, CMCA, AMS';
const expectedDates = [];

for (
  let date = new Date('2026-08-18T12:00:00Z');
  date <= new Date('2026-11-14T12:00:00Z');
  date.setUTCDate(date.getUTCDate() + 1)
) {
  if ([2, 4, 6].includes(date.getUTCDay())) {
    expectedDates.push(date.toISOString().slice(0, 10));
  }
}

const posts = [];
for (const file of readdirSync(blogDir)) {
  if (!file.startsWith('scheduled-') || !file.endsWith('.ts')) continue;
  const src = readFileSync(join(blogDir, file), 'utf8');
  const slugMatches = [...src.matchAll(/\bslug:\s*'([^']+)'/g)];

  for (let index = 0; index < slugMatches.length; index++) {
    const match = slugMatches[index];
    const nextMatch = slugMatches[index + 1];
    const postSource = src.slice(match.index, nextMatch?.index ?? src.length);
    posts.push({
      slug: match[1],
      date: postSource.match(/\bdate:\s*'([^']+)'/)?.[1],
      author: postSource.match(/\bauthor:\s*'([^']+)'/)?.[1],
    });
  }
}

posts.sort((a, b) => (a.date ?? '').localeCompare(b.date ?? ''));
const slugs = posts.map(({ slug }) => slug);
const leadPosts = posts.filter(({ date }) => date && date < expectedDates[0]);
const cadencePosts = posts.filter(({ date }) => date && date >= expectedDates[0] && date <= expectedDates.at(-1));
const actualDates = cadencePosts.map(({ date }) => date);

if (new Set(slugs).size !== slugs.length) {
  throw new Error('Scheduled blog slugs must be unique.');
}
if (leadPosts.length !== 1 || leadPosts[0].slug !== 'score-condo-hoa-management-proposals' || leadPosts[0].date !== '2026-08-14') {
  throw new Error('The published lead-post set must contain only the 2026-08-14 management-company comparison guide.');
}
if (JSON.stringify(actualDates) !== JSON.stringify(expectedDates)) {
  throw new Error('Scheduled posts must fill every Tuesday, Thursday, and Saturday from 2026-08-18 through 2026-11-14.');
}
for (const post of posts) {
  if (post.author !== expectedAuthor) {
    throw new Error(`Scheduled post '${post.slug}' has an incorrect author byline.`);
  }
}

console.log(`Publication schedule verified: ${cadencePosts.length} cadence posts through ${actualDates.at(-1)} plus ${leadPosts.length} published lead post.`);
