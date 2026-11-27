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

// Contact form: the form request is mocked, so no real email or lead is ever
// sent. The three steps must post the same field names as the one-page form.
const CONTACT_FIELDS = ['name', 'email', 'phone', 'company', 'inquiry_type', 'property_address', 'number_of_units', 'property_type', 'board_role', 'contract_timing', 'primary_concern', 'preferred_contact', 'preferred_time', 'reason', 'how_heard', 'message', 'subject', 'lead_source', 'landing_page', 'referrer', 'utm_source', 'utm_medium', 'utm_campaign', 'from_name', 'replyto', 'access_key'];

test('contact submit: three steps, same fields, one Contact Form Submit, /contact/thanks', async ({ page }) => {
  await stub(page);
  const posts: Record<string, string>[] = [];
  await page.route('https://api.web3forms.com/**', async (route) => {
    posts.push(route.request().postDataJSON());
    await route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true}' });
  });
  await page.route('**/rest/v1/website_leads', (route) => route.fulfill({ status: 201, body: '' }));
  await page.goto('/contact?source=test-suite');
  await page.waitForSelector('html[data-app-ready]');

  await page.selectOption('#property_type', 'Condominium association');
  await page.fill('#number_of_units', '24');
  await page.fill('#property_address', '1 Test St, Chicago');
  await expect(page.locator('#name')).toBeHidden();
  await page.locator('[data-step-next]').click();
  await page.selectOption('#contract_timing', '1–3 months');
  await page.fill('#message', 'TEST message');
  await page.locator('[data-step-next]').click();

  // Reaching the last step must not send the form or show errors by itself.
  await expect(page.locator('#name-error')).toHaveCount(0);
  // Name and email are required: an empty send shows the errors and posts nothing.
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('#name-error')).toBeVisible();
  expect(posts.length).toBe(0);

  await page.fill('#name', 'TEST Person');
  await page.fill('#email', 'test@example.com');
  // Going back keeps what was typed.
  await page.getByRole('button', { name: 'Back' }).click();
  await expect(page.locator('#message')).toHaveValue('TEST message');
  await page.locator('[data-step-next]').click();
  await page.locator('button[type="submit"]').click();
  await page.waitForURL('**/contact/thanks');

  expect(posts.length, 'one form request').toBe(1);
  // The access key is set only in the deployed build.
  expect(Object.keys(posts[0]).filter((key) => key !== 'access_key').sort()).toEqual(CONTACT_FIELDS.filter((key) => key !== 'access_key').sort());
  expect(posts[0]).toMatchObject({ name: 'TEST Person', email: 'test@example.com', number_of_units: '24', property_type: 'Condominium association', property_address: '1 Test St, Chicago', contract_timing: '1–3 months', message: 'TEST message', inquiry_type: 'quote', lead_source: 'test-suite', preferred_contact: 'email' });
  const hits = (await events(page)).filter((e) => e.name === 'Contact Form Submit');
  expect(hits.length, 'Contact Form Submit fired once').toBe(1);
  expect(Object.keys(hits[0].data).sort()).toEqual(['page', 'source']);
});

test('contact form: general inquiry is one step and needs a message', async ({ page }) => {
  await stub(page);
  const posts: unknown[] = [];
  await page.route('https://api.web3forms.com/**', async (route) => {
    posts.push(route.request().postDataJSON());
    await route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true}' });
  });
  await page.route('**/rest/v1/website_leads', (route) => route.fulfill({ status: 201, body: '' }));
  await page.goto('/contact?inquiry=general');
  await page.waitForSelector('html[data-app-ready]');
  await expect(page.locator('[data-form-steps]')).toHaveCount(0);
  await page.fill('#name', 'TEST Person');
  await page.fill('#email', 'test@example.com');
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('#message-error')).toBeVisible();
  expect(posts.length).toBe(0);
  await page.fill('#message', 'TEST general');
  await page.locator('button[type="submit"]').click();
  await page.waitForURL('**/contact/thanks');
  expect(posts.length).toBe(1);
});

test('hero card: no fee is calculated, and the contact form is prefilled', async ({ page }) => {
  await stub(page);
  await page.goto('/');
  await page.waitForSelector('html[data-app-ready]');
  const card = page.locator('[data-proposal-starter]');
  await card.locator('#starter-units').fill('120');
  await card.getByRole('button', { name: 'HOA' }).click();
  // Owner rule: the site never multiplies units by a price.
  await expect(card).not.toContainText('$3,600');
  await expect(page.locator('main')).not.toContainText('Starting at $');
  const href = await card.getByRole('link', { name: /Request a walkthrough and proposal/ }).getAttribute('href');
  expect(href).toBe('/contact?source=home-hero-card&units=120&type=hoa');

  await page.goto(href!);
  await page.waitForSelector('html[data-app-ready]');
  await expect(page.locator('#number_of_units')).toHaveValue('120');
  await expect(page.locator('#property_type')).toHaveValue('Homeowners association');
  await expect(page.locator('input[name="lead_source"]')).toHaveValue('home-hero-card');
});
