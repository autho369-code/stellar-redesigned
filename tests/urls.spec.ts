import { test, expect } from '@playwright/test';
import fixture from './fixtures/urls.json' with { type: 'json' };

// Every sitemap URL keeps its path, canonical, indexability, one H1, a title
// and JSON-LD that parses. Uses plain HTTP so it checks the static HTML.
for (const page of fixture.urls) {
  test(`url ${page.path}`, async ({ request }) => {
    const res = await request.get(page.path);
    expect(res.status(), 'status').toBe(200);
    const html = await res.text();
    const canonical = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/)?.[1] ?? '');
    expect(canonical, 'canonical').toBe(page.canonical);
    const robots = (html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/)?.[1] ?? '');
    expect(/noindex/.test(robots), 'indexability').toBe(/noindex/.test(page.robots));
    expect((html.match(/<h1[\s>]/g) || []).length, 'exactly one h1').toBe(1);
    expect((html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1] ?? '').trim().length, 'title not empty').toBeGreaterThan(0);
    for (const block of html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)) {
      expect(() => JSON.parse(block[1]), 'JSON-LD parses').not.toThrow();
    }
  });
}
