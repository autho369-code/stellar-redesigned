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
  await page.waitForSelector('html[data-app-ready]');
  // First phone link on screen: the header one (the utility-row copy is hidden at this width).
  await page.locator('a[href^="tel:"]:visible').first().click({ force: true });
  const hit = (await events(page)).find((e) => e.name === 'Phone Click');
  expect(hit, 'Phone Click fired').toBeTruthy();
  expect(hit!.data.location, 'header phone keeps its location').toBe('header');
  expect(Object.keys(hit!.data).sort()).toEqual(['location', 'page']);
});

test('mailto click fires Email Click', async ({ page }) => {
  await stub(page);
  await page.goto('/contact');
  await page.waitForSelector('html[data-app-ready]');
  await page.locator('a[href^="mailto:"]').first().click({ force: true });
  const hit = (await events(page)).find((e) => e.name === 'Email Click');
  expect(hit, 'Email Click fired').toBeTruthy();
  expect(Object.keys(hit!.data).sort()).toEqual(['location', 'page']);
});

test('guide proposal button fires Proposal CTA Click', async ({ page }) => {
  await stub(page);
  await page.goto('/blog/switch-condo-management-companies-chicago');
  await page.waitForSelector('html[data-app-ready]');
  await page.locator('[data-proposal-cta="end"] a[href^="/contact"]').first().click({ force: true });
  const hit = (await events(page)).find((e) => e.name === 'Proposal CTA Click');
  expect(hit, 'Proposal CTA Click fired').toBeTruthy();
  expect(Object.keys(hit!.data).sort()).toEqual(['page', 'placement']);
});

// The contact-form submit test (mock the form request, expect "Contact Form
// Submit" and /contact/thanks) is not written yet. It must never send a real
// submission, because a real one emails the owner.
test.fixme('contact submit fires Contact Form Submit and goes to /contact/thanks', async () => {});

test('fee estimator: one Fee Estimator Used event per page view, and the contact form is prefilled', async ({ page }) => {
  await stub(page);
  await page.goto('/');
  await page.waitForSelector('html[data-app-ready]');
  const card = page.locator('[data-fee-estimator]');
  await expect(card.locator('[data-estimate]')).toContainText('$1,200');
  await card.getByRole('button', { name: 'One unit more' }).click();
  await card.getByRole('button', { name: 'One unit more' }).click();
  await card.getByRole('button', { name: 'HOA' }).click();
  await card.locator('#estimator-units').fill('120');
  await expect(card.locator('[data-estimate]')).toContainText('$3,600');
  const hits = (await events(page)).filter((e) => e.name === 'Fee Estimator Used');
  expect(hits.length, 'fires once').toBe(1);
  expect(Object.keys(hits[0].data).sort()).toEqual(['page', 'units_band']);
  expect(hits[0].data.units_band).toBe('25-74');
  const href = await card.getByRole('link', { name: /Get my exact flat-fee proposal/ }).getAttribute('href');
  expect(href).toBe('/contact?source=estimator&units=120&type=hoa');

  await page.goto(href!);
  await page.waitForSelector('html[data-app-ready]');
  await expect(page.locator('#number_of_units')).toHaveValue('120');
  await expect(page.locator('#property_type')).toHaveValue('Homeowners association');
  await expect(page.locator('input[name="lead_source"]')).toHaveValue('estimator');
});
