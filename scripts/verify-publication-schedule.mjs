import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = join(root, 'src/data/blog-posts');
const expectedAuthor = 'Mirsad Cerimovic, CAM, CMCA, AMS';
const campaignStart = '2026-08-18';

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

// The campaign end is whatever the content says it is. What this script
// guards is the invariant that actually matters: one post per calendar day
// from the campaign start through the last scheduled post, with no gaps and
// no duplicates. Extending the run should be a content change, not a code
// change — hard-coding the end date meant every new post broke the build.
const campaignEnd = posts.reduce((latest, { date }) => (date && date > latest ? date : latest), campaignStart);
const expectedDates = [];
for (
  let date = new Date(`${campaignStart}T12:00:00Z`);
  date <= new Date(`${campaignEnd}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + 1)
) {
  expectedDates.push(date.toISOString().slice(0, 10));
}

const leadPosts = posts.filter(({ date }) => date && date < campaignStart);
const cadencePosts = posts.filter(({ date }) => date && date >= campaignStart && date <= campaignEnd);
const actualDates = cadencePosts.map(({ date }) => date);

if (new Set(slugs).size !== slugs.length) {
  throw new Error('Scheduled blog slugs must be unique.');
}
if (leadPosts.length !== 1 || leadPosts[0].slug !== 'score-condo-hoa-management-proposals' || leadPosts[0].date !== '2026-08-14') {
  throw new Error('The published lead-post set must contain only the 2026-08-14 management-company comparison guide.');
}
// The invariant is coverage, not rationing: every calendar day in the campaign
// window carries at least one post, so the cadence never goes silent. More than
// one post may share a date — publishing several at once is a legitimate
// editorial choice, and the schedule check should not be what prevents it.
const covered = new Set(actualDates);
const missing = expectedDates.filter((date) => !covered.has(date));
if (missing.length > 0) {
  throw new Error(
    `Scheduled posts must cover every calendar day from ${campaignStart} through ${campaignEnd}. Missing: ${missing.join(', ')}.`,
  );
}
for (const post of posts) {
  if (post.author !== expectedAuthor) {
    throw new Error(`Scheduled post '${post.slug}' has an incorrect author byline.`);
  }
}

console.log(`Publication schedule verified: ${cadencePosts.length} posts covering every day from ${campaignStart} through ${campaignEnd}, plus ${leadPosts.length} published lead post.`);
