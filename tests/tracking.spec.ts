import { test, expect, type Page } from '@playwright/test';

// The analytics events keep their names and property keys. @vercel/analytics
// calls window.va('event', { name, data }); the stub records those calls.
async function stub(page: Page) {
  await page.addInitScript(() => {
    const calls: unknown[] = [];
    (window as unknown as { __events: unknown[] }).__events = calls;
    Object.defineProperty(window, 'va', { configurable: true, get: () => (...args: unknown[]) => calls.push(args), set: () => {} });
  });
  // Stay on the page when a tel:, mailto: or internal link is clicked.
  await page.addInitScript(() => document.addEventListener('click', (e) => { if ((e.target as Element).closest?.('a')) e.preventDefault(); }, false));
}
const events = (page: Page) => page.evaluate(() => ((window as unknown as { __events: [string, { name: string; data: Record<string, string> }][] }).__events).filter((c) => c[0] === 'event').map((c) => c[1]));

test('tel click fires Phone Click', async ({ page }) => {
  await stub(page);
  await page.goto('/services/condominium-management');
  await page.locator('a[href^="tel:"]').first().click({ force: true });
  const hit = (await events(page)).find((e) => e.name === 'Phone Click');
  expect(hit, 'Phone Click fired').toBeTruthy();
  expect(Object.keys(hit!.data).sort()).toEqual(['location', 'page']);
});

test('mailto click fires Email Click', async ({ page }) => {
  await stub(page);
  await page.goto('/contact');
  await page.locator('a[href^="mailto:"]').first().click({ force: true });
  const hit = (await events(page)).find((e) => e.name === 'Email Click');
  expect(hit, 'Email Click fired').toBeTruthy();
  expect(Object.keys(hit!.data).sort()).toEqual(['location', 'page']);
});

test('guide proposal button fires Proposal CTA Click', async ({ page }) => {
  await stub(page);
  await page.goto('/blog/switch-condo-management-companies-chicago');
  await page.locator('[data-proposal-cta="end"] a[href^="/contact"]').first().click({ force: true });
  const hit = (await events(page)).find((e) => e.name === 'Proposal CTA Click');
  expect(hit, 'Proposal CTA Click fired').toBeTruthy();
  expect(Object.keys(hit!.data).sort()).toEqual(['page', 'placement']);
});

// The contact-form submit test (mock the form request, expect "Contact Form
// Submit" and /contact/thanks) is not written yet. It must never send a real
// submission, because a real one emails the owner.
test.fixme('contact submit fires Contact Form Submit and goes to /contact/thanks', async () => {});
