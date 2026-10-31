import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
const dir = mkdtempSync(join(tmpdir(), 'stellar-pillar-tests-'));
try {
  const outfile = join(dir, 'test.mjs');
  await build({ stdin: { contents: `export * from './src/data/pillar-links'; export * from './src/data/post-silos'; export {allBlogPosts} from './src/data/blog-posts'; export {getChicagoPublicationDate} from './src/utils/publication-date';`, resolveDir: process.cwd(), loader: 'ts' }, bundle: true, platform: 'node', format: 'esm', outfile });
  const { allBlogPosts: posts, pillarGuides, postSilos, getPillarGuides, getPillarContent, getChicagoPublicationDate } = await import(pathToFileURL(outfile).href);
  const bySlug = new Map(posts.map(p => [p.slug, p]));
  const assigned = Object.values(pillarGuides).flat();
  assert.equal(new Set(assigned).size, assigned.length, 'one editorial pillar per guide');
  const queue = posts.filter(p => p.date >= '2026-11-07' && p.date <= '2026-12-08');
  assert.equal(queue.length, 32);
  for (const guide of queue) assert(assigned.includes(guide.slug), `missing assignment: ${guide.slug}`);
  for (const [slug, targets] of Object.entries(pillarGuides)) {
    const pillar = bySlug.get(slug);
    assert(pillar, `missing pillar ${slug}`);
    for (const target of targets) {
      const guide = bySlug.get(target);
      assert(guide, `missing guide ${target}`);
      assert(pillar.date < guide.date, `pillar must predate ${target}`);
      assert.equal(postSilos[slug].money, postSilos[target].money, `cross-silo ${slug} -> ${target}`);
      const before = new Date(`${guide.date}T12:00:00Z`); before.setUTCDate(before.getUTCDate() - 1);
      assert(!getPillarGuides(pillar, posts, before.toISOString().slice(0,10)).some(p => p.slug === target));
      const content = getPillarContent(pillar, posts, guide.date);
      assert.equal((content.match(new RegExp(`href="/blog/${target}"`, 'g')) ?? []).length, 1, `exactly one body link on release: ${target}`);
      assert(!getPillarGuides({...pillar, content}, posts, guide.date).some(p => p.slug === target), 'idempotent body links');
    }
  }
  // Every release date, including the gap before the two batches: only public targets.
  for (let day = new Date('2026-10-30T12:00:00Z'); day <= new Date('2026-12-09T12:00:00Z'); day.setUTCDate(day.getUTCDate()+1)) {
    const cutoff = day.toISOString().slice(0,10);
    for (const slug of Object.keys(pillarGuides)) {
      const links = getPillarGuides(bySlug.get(slug), posts, cutoff);
      assert(links.every(p => p.date <= cutoff));
      assert.equal(new Set(links.map(p=>p.slug)).size, links.length);
    }
  }
  const pillar = bySlug.get('illinois-section-22-1-disclosure-board-guide');
  const target = 'illinois-resale-disclosure-fees-turnaround';
  for (const href of [`/blog/${target}#fees`, `https://www.stellarpropertygroup.com/blog/${target}/?x=1`]) {
    assert.equal(getPillarGuides({...pillar, content: `<a href='${href}'>Existing</a>`}, posts, '2026-12-09').length, 0);
  }
  assert.equal(getPillarContent({...pillar, date:'2027-01-01'}, posts, '2026-12-09'), pillar.content);
  assert.equal(getChicagoPublicationDate(new Date('2026-11-07T05:59:59Z')), '2026-11-06');
  assert.equal(getChicagoPublicationDate(new Date('2026-11-07T06:00:00Z')), '2026-11-07');
  console.log('Pillar links passed: 32 guides, release-day boundaries, 41 daily snapshots, silo integrity, duplicate suppression, Chicago cutoff.');
} finally { rmSync(dir, { recursive: true, force: true }); }
