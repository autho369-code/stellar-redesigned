#!/usr/bin/env node
/**
 * Brand-swap dry run. Copies the repo to a throwaway directory, replaces the
 * brand name everywhere it is written as text, builds, and reports what is left.
 * Nothing in the working tree changes. Usage:
 *   node scripts/brand-swap-dry-run.mjs [--name "Northline Association Management"] \
 *        [--legal "Northline Association Management Inc."] [--short Northline] \
 *        [--domain northline-management.example] [--phone 312-555-0100] [--keep]
 * See docs/BRAND-SWAP.md.
 */
import { cpSync, existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync, symlinkSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, extname } from 'node:path'
import { spawnSync } from 'node:child_process'

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : d }
const NAME = arg('--name', 'Northline Association Management')
const LEGAL = arg('--legal', `${NAME} Inc.`)
const SHORT = arg('--short', NAME.split(' ')[0])
const DOMAIN = arg('--domain', 'northline-management.example')
const PHONE = arg('--phone', '312-555-0100')
const pd = PHONE.replace(/\D/g, '')
const keep = process.argv.includes('--keep')
const root = process.cwd()
const work = mkdtempSync(join(tmpdir(), 'brand-swap-'))

const skip = new Set(['node_modules', 'dist', '.git', 'test-results', 'playwright-report'])
cpSync(root, work, { recursive: true, filter: (p) => !skip.has(p.split('/').pop()) })
symlinkSync(join(root, 'node_modules'), join(work, 'node_modules'))

// Longest names first so "Stellar Property Management" is never half-replaced.
const rules = [
  [/Stellar Property Group Inc\./g, LEGAL],
  [/Stellar Property Management/g, NAME],
  [/Stellar Property Group/g, NAME],
  [/Stellar Property/g, NAME],
  [/\bStellar\b/g, SHORT],
  [/www\.stellarpropertygroup\.com/g, `www.${DOMAIN}`],
  [/stellarpropertygroup\.com/g, DOMAIN],
  [/773-728-0652/g, PHONE],
  [/773\.728\.0652/g, `${pd.slice(0, 3)}.${pd.slice(3, 6)}.${pd.slice(6)}`],
  [/\+17737280652/g, `+1${pd}`],
  [/7737280652/g, pd],
]
const textExt = new Set(['.ts', '.tsx', '.mjs', '.md', '.txt', '.json', '.html', '.xml', '.svg', '.css'])
let filesChanged = 0
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    if (skip.has(f) || f === 'node_modules') continue
    const p = join(dir, f)
    const st = statSync(p)
    if (st.isDirectory()) { walk(p); continue }
    if (!textExt.has(extname(p)) || st.size > 3_000_000) continue
    const before = readFileSync(p, 'utf8')
    let after = before
    for (const [re, to] of rules) after = after.replace(re, to)
    if (after !== before) { writeFileSync(p, after); filesChanged++ }
  }
}
for (const d of ['src', 'public', 'scripts', 'index.html']) {
  const p = join(work, d)
  if (!existsSync(p)) continue
  statSync(p).isDirectory() ? walk(p) : (() => {
    const b = readFileSync(p, 'utf8'); let a = b
    for (const [re, to] of rules) a = a.replace(re, to)
    if (a !== b) { writeFileSync(p, a); filesChanged++ }
  })()
}
console.log(`Replaced the brand name in ${filesChanged} files (throwaway copy: ${work})`)

const build = spawnSync('npm', ['run', 'build'], { cwd: work, encoding: 'utf8', maxBuffer: 1 << 28 })
console.log(build.status === 0 ? 'Build + prerender + SEO/link/uniqueness checks: PASS' : 'Build: FAIL')
if (build.status !== 0) console.log((build.stdout + build.stderr).split('\n').slice(-30).join('\n'))

// Residue: any "Stellar" left in the built HTML/text output.
const residue = {}
let htmlPages = 0
const scan = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f)
    const st = statSync(p)
    if (st.isDirectory()) { scan(p); continue }
    if (!['.html', '.txt', '.xml'].includes(extname(p))) continue
    if (extname(p) === '.html') htmlPages++
    const hits = (readFileSync(p, 'utf8').match(/Stellar/g) || []).length
    if (hits) residue[p.replace(join(work, 'dist'), '')] = hits
  }
}
if (existsSync(join(work, 'dist'))) scan(join(work, 'dist'))
const left = Object.keys(residue).length
const oldDomain = {}; const oldPhone = {}
const scan2 = (dir) => { for (const f of readdirSync(dir)) { const p = join(dir, f); const st = statSync(p); if (st.isDirectory()) { scan2(p); continue } if (!['.html', '.txt', '.xml'].includes(extname(p))) continue; const t = readFileSync(p, 'utf8'); const d = (t.match(/stellarpropertygroup\.com/g) || []).length; const ph = (t.match(/773[-.]728[-.]0652|7737280652/g) || []).length; if (d) oldDomain[p] = d; if (ph) oldPhone[p] = ph } }
if (existsSync(join(work, 'dist'))) scan2(join(work, 'dist'))
console.log(`Files still containing the old domain: ${Object.keys(oldDomain).length}; old phone number: ${Object.keys(oldPhone).length}`)
console.log(`Built pages scanned: ${htmlPages}. Files still containing "Stellar": ${left}`)
for (const [f, n] of Object.entries(residue).slice(0, 25)) console.log(`  ${f}: ${n}`)

console.log('\nStill needs a human decision (not text-replaceable): logo and favicon files, og image, Google Business')
console.log('Profile, AppFolio portal URL, review link, sameAs profiles, 301 redirects from the old domain.')
if (!keep) rmSync(work, { recursive: true, force: true })
process.exit(build.status === 0 && left === 0 && !Object.keys(oldDomain).length && !Object.keys(oldPhone).length ? 0 : 1)
