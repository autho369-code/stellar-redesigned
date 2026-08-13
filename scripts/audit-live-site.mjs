const canonicalOrigin = 'https://www.stellarpropertygroup.com';
const origin = new URL(process.argv[2] || canonicalOrigin).origin;
const sitemapUrl = `${origin}/sitemap.xml`;

const decode = (value = '') => value
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/<[^>]*>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const match = (html, pattern) => decode(html.match(pattern)?.[1] || '');
const matches = (html, pattern) => [...html.matchAll(pattern)].map((entry) => decode(entry[1] || ''));
const normalize = (href, base) => {
  try {
    const url = new URL(href, base);
    url.hash = '';
    if (url.origin !== origin && url.origin !== canonicalOrigin) return null;
    const identity = new URL(`${url.pathname}${url.search}`, canonicalOrigin).href;
    return identity.endsWith('/') && url.pathname !== '/' ? identity.slice(0, -1) : identity;
  } catch {
    return null;
  }
};

const toFetchUrl = (value) => {
  const url = new URL(value);
  return new URL(`${url.pathname}${url.search}`, origin).href;
};

async function fetchPage(url) {
  const started = performance.now();
  const response = await fetch(url, { redirect: 'follow', headers: { 'user-agent': 'StellarProductionAudit/1.0' } });
  const html = await response.text();
  const elapsedMs = Math.round(performance.now() - started);
  const title = match(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const description = match(html, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["'][^>]*>/i)
    || match(html, /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["'][^>]*>/i);
  const canonical = match(html, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["'][^>]*>/i)
    || match(html, /<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["'][^>]*>/i);
  const robots = match(html, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["'][^>]*>/i)
    || match(html, /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']robots["'][^>]*>/i);
  const h1s = matches(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi);
  const h2s = matches(html, /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi);
  const imageTags = [...html.matchAll(/<img\b[^>]*>/gi)].map((entry) => entry[0]);
  const missingAlt = imageTags.filter((tag) => !/\balt=["'][^"']*["']/i.test(tag)).length;
  const emptyAlt = imageTags.filter((tag) => /\balt=["']\s*["']/i.test(tag)).length;
  const links = [...html.matchAll(/<a\b[^>]+href=["']([^"'#]+)["']/gi)]
    .map((entry) => normalize(entry[1], url))
    .filter(Boolean);
  const schemaTypes = [...html.matchAll(/"@type"\s*:\s*"([^"]+)"/gi)].map((entry) => entry[1]);
  const text = decode(html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' '));
  const wordCount = text ? text.split(/\s+/).length : 0;

  return {
    requestedUrl: url,
    finalUrl: response.url,
    status: response.status,
    elapsedMs,
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    canonical,
    robots,
    h1s,
    h2Count: h2s.length,
    wordCount,
    imageCount: imageTags.length,
    missingAlt,
    emptyAlt,
    schemaTypes: [...new Set(schemaTypes)],
    internalLinks: [...new Set(links)],
    hasOpenGraph: /property=["']og:title["']/i.test(html) && /property=["']og:description["']/i.test(html),
    hasTwitterCard: /name=["']twitter:card["']/i.test(html),
    formCount: (html.match(/<form\b/gi) || []).length,
  };
}

function duplicates(pages, field) {
  const groups = new Map();
  for (const page of pages) {
    const value = page[field];
    if (!value) continue;
    groups.set(value, [...(groups.get(value) || []), page.requestedUrl]);
  }
  return [...groups.entries()].filter(([, urls]) => urls.length > 1).map(([value, urls]) => ({ value, urls }));
}

const sitemapResponse = await fetch(sitemapUrl);
if (!sitemapResponse.ok) throw new Error(`Sitemap returned ${sitemapResponse.status}`);
const sitemap = await sitemapResponse.text();
const urls = matches(sitemap, /<loc>([^<]+)<\/loc>/gi).map(toFetchUrl);
const pages = [];
for (let index = 0; index < urls.length; index += 8) {
  pages.push(...await Promise.all(urls.slice(index, index + 8).map(fetchPage)));
}

const sitemapSet = new Set(urls.map((url) => normalize(url, origin)).filter(Boolean));
const linkedSet = new Set(pages.flatMap((page) => page.internalLinks));
const orphanUrls = [...sitemapSet].filter((url) => url !== origin && !linkedSet.has(url));
const candidateLinks = [...linkedSet].filter((url) => !url.startsWith(`${origin}/api/`));
const brokenLinks = [];
for (let index = 0; index < candidateLinks.length; index += 12) {
  const batch = candidateLinks.slice(index, index + 12);
  const results = await Promise.all(batch.map(async (url) => {
    try {
      const response = await fetch(toFetchUrl(url), { method: 'HEAD', redirect: 'manual' });
      return response.status >= 400 ? { url, status: response.status } : null;
    } catch (error) {
      return { url, status: 'fetch-error', error: error.message };
    }
  }));
  brokenLinks.push(...results.filter(Boolean));
}

const report = {
  auditedAt: new Date().toISOString(),
  origin,
  sitemapUrl,
  totals: {
    sitemapUrls: urls.length,
    successful: pages.filter((page) => page.status === 200).length,
    non200: pages.filter((page) => page.status !== 200).length,
    noindex: pages.filter((page) => /noindex/i.test(page.robots)).length,
    missingCanonical: pages.filter((page) => !page.canonical).length,
    canonicalMismatch: pages.filter((page) => page.canonical && normalize(page.canonical, origin) !== normalize(page.requestedUrl, origin)).length,
    missingTitle: pages.filter((page) => !page.title).length,
    missingDescription: pages.filter((page) => !page.description).length,
    invalidH1Count: pages.filter((page) => page.h1s.length !== 1).length,
    thinPagesUnder300Words: pages.filter((page) => page.wordCount < 300).length,
    pagesWithMissingImageAlt: pages.filter((page) => page.missingAlt > 0).length,
    pagesWithoutOpenGraph: pages.filter((page) => !page.hasOpenGraph).length,
    pagesWithoutTwitterCard: pages.filter((page) => !page.hasTwitterCard).length,
    orphanUrls: orphanUrls.length,
    brokenInternalLinks: brokenLinks.length,
  },
  issues: {
    non200: pages.filter((page) => page.status !== 200).map((page) => ({ url: page.requestedUrl, status: page.status, finalUrl: page.finalUrl })),
    missingCanonical: pages.filter((page) => !page.canonical).map((page) => page.requestedUrl),
    canonicalMismatch: pages.filter((page) => page.canonical && normalize(page.canonical, origin) !== normalize(page.requestedUrl, origin)).map((page) => ({ url: page.requestedUrl, canonical: page.canonical })),
    invalidH1Count: pages.filter((page) => page.h1s.length !== 1).map((page) => ({ url: page.requestedUrl, h1s: page.h1s })),
    thinPages: pages.filter((page) => page.wordCount < 300).map((page) => ({ url: page.requestedUrl, wordCount: page.wordCount })),
    missingImageAlt: pages.filter((page) => page.missingAlt > 0).map((page) => ({ url: page.requestedUrl, count: page.missingAlt })),
    duplicateTitles: duplicates(pages, 'title'),
    duplicateDescriptions: duplicates(pages, 'description'),
    orphanUrls,
    brokenLinks,
  },
  pages,
};

console.log(JSON.stringify(report, null, 2));
