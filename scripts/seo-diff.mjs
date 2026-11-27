#!/usr/bin/env node
/**
 * SEO diff: compares the committed baseline (tests/fixtures/urls.json) with the
 * built site and prints every URL whose title, H1, description, canonical,
 * robots or JSON-LD types changed, plus URLs added or removed.
 *   npm run build && node scripts/seo-diff.mjs
 * To accept the changes afterwards: node scripts/make-url-fixture.mjs
 */
import { readFileSync, writeFileSync, existsSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { spawnSync } from 'node:child_process'

const basePath = 'tests/fixtures/urls.json'
const base = JSON.parse(readFileSync(basePath, 'utf8'))
const tmp = mkdtempSync(join(tmpdir(), 'seo-diff-'))
const saved = readFileSync(basePath, 'utf8')
const r = spawnSync('node', ['scripts/make-url-fixture.mjs'], { encoding: 'utf8' })
if (r.status !== 0) { console.error(r.stderr); process.exit(2) }
const fresh = JSON.parse(readFileSync(basePath, 'utf8'))
writeFileSync(basePath, saved) // never leave the baseline modified
const a = new Map(base.urls.map((u) => [u.path, u]))
const b = new Map(fresh.urls.map((u) => [u.path, u]))
const fields = ['title', 'h1', 'description', 'canonical', 'robots', 'jsonLdTypes']
const lines = []
for (const [path, u] of b) {
  const o = a.get(path)
  if (!o) { lines.push(`ADDED   ${path}`); continue }
  for (const f of fields) if (JSON.stringify(o[f]) !== JSON.stringify(u[f])) lines.push(`CHANGED ${path} [${f}]\n   was: ${JSON.stringify(o[f])}\n   now: ${JSON.stringify(u[f])}`)
}
for (const path of a.keys()) if (!b.has(path)) lines.push(`REMOVED ${path}`)
console.log(lines.length ? lines.join('\n') : 'No SEO-field differences against the baseline.')
console.log(`\n${a.size} baseline URLs, ${b.size} built URLs, ${lines.length} differences.`)
