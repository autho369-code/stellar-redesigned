import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdirSync, writeFileSync } from 'node:fs';
import { TEMPLATES, VIEWPORTS } from './templates';

// Report-only: screenshots of each template and the current accessibility
// findings. These never fail the run; they are the baseline to compare with.
const OUT = process.env.BASELINE_DIR || 'test-results/baseline';
const slug = (p: string) => (p === '/' ? 'home' : p.replace(/^\//, '').replace(/\//g, '_'));

for (const path of TEMPLATES) {
  for (const vp of VIEWPORTS) {
    test(`screenshot ${path} ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto(path, { waitUntil: 'networkidle' });
      mkdirSync(`${OUT}/screens`, { recursive: true });
      await page.screenshot({ path: `${OUT}/screens/${slug(path)}-${vp.name}.jpg`, type: 'jpeg', quality: 60 });
    });
  }
  test(`axe ${path}`, async ({ page }) => {
    await page.goto(path, { waitUntil: 'networkidle' });
    const { violations } = await new AxeBuilder({ page }).analyze();
    mkdirSync(`${OUT}/axe`, { recursive: true });
    writeFileSync(`${OUT}/axe/${slug(path)}.json`, JSON.stringify(violations.map((v) => ({ id: v.id, impact: v.impact, nodes: v.nodes.length, help: v.help })), null, 1));
  });
}
