import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/fraunces/wght.css';
import '@fontsource-variable/fraunces/wght-italic.css';
import App from './App';
import ConversionTracking from './components/ConversionTracking';
import { loadBlogPostContent } from './data/blog-posts/content-store';
import './index.css';

const container = document.getElementById('root')!;

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <ConversionTracking />
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);

// Production pages arrive prerendered (scripts/prerender.mjs) — hydrate that
// markup in place instead of discarding it and re-rendering from a blank root.
// Dev serves an empty #root, where hydration would be a guaranteed mismatch.
//
// Article bodies ship in per-slug chunks, so on /blog/:slug the chunk must be
// in the content store before hydration or the first client render would not
// match the prerendered article. The static HTML stays visible while it loads.
async function mount() {
  if (!container.hasChildNodes()) {
    createRoot(container).render(app);
    return;
  }

  const articleSlug = window.location.pathname.match(/^\/blog\/(?!topic\/)([^/]+)\/?$/)?.[1];
  if (articleSlug) {
    try {
      await loadBlogPostContent(decodeURIComponent(articleSlug));
    } catch {
      // Hydrate without the body; BlogPost retries the chunk after mount.
    }
  }

  hydrateRoot(container, app);
}

void mount();
