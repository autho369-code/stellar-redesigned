import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/fraunces/wght.css';
import '@fontsource-variable/fraunces/wght-italic.css';
import App, { preloadRoute } from './App';
import { guideSlugFromPath, loadBody } from './data/article-bodies';
import ConversionTracking from './components/ConversionTracking';
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
// A guide page needs its own article body before hydration (see
// src/data/article-bodies.ts); every other page starts at once.
const guideSlug = guideSlugFromPath(window.location.pathname);
Promise.all([guideSlug ? loadBody(guideSlug) : undefined, preloadRoute(window.location.pathname).catch(() => undefined)]).then(() => {
  if (container.hasChildNodes()) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
});
