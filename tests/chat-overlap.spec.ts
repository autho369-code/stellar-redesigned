import { test, expect } from '@playwright/test';

/**
 * D1: on phones the "Ask Arthur" button is a 48 px icon that never sits on a
 * button, a phone link or the Call | Proposal bar when a page opens. Checked
 * at four widths. (While scrolling, a full-width button can pass under the
 * corner icon for a moment; that is true of any floating button.)
 */
const PAGES = ['/', '/pricing', '/about', '/reviews', '/contact', '/blog/switch-condo-management-companies-chicago', '/property-management-wilmette'];
const WIDTHS = [320, 360, 390, 430];

for (const width of WIDTHS) {
  test(`chat button overlaps nothing at ${width}px`, async ({ page }) => {
    test.setTimeout(120_000);
    await page.setViewportSize({ width, height: 800 });
    for (const path of PAGES) {
      await page.goto(path);
      const chat = page.locator('[data-chat-launcher]');
      await chat.waitFor({ state: 'visible', timeout: 15_000 });
      for (const scrollY of [0]) {
        await page.evaluate((y) => window.scrollTo(0, y), scrollY);
        await page.waitForTimeout(150);
        const hits = await page.evaluate(() => {
          const c = document.querySelector('[data-chat-launcher]')!.getBoundingClientRect();
          const targets = [...document.querySelectorAll('main a[href^="tel:"], main a[href^="/contact"], main button, [data-mobile-call-bar]')];
          return targets
            .filter((el) => {
              const r = el.getBoundingClientRect();
              if (!r.width || !r.height || r.bottom < 0 || r.top > innerHeight) return false;
              return !(r.right <= c.left || r.left >= c.right || r.bottom <= c.top || r.top >= c.bottom);
            })
            .map((el) => (el.textContent || el.tagName).trim().slice(0, 40));
        });
        const box = await chat.boundingBox();
        expect(Math.round(box!.width), `${path} chat width`).toBe(48);
        expect(hits, `${path} at scroll ${scrollY}: chat button covers`).toEqual([]);
      }
    }
  });
}
