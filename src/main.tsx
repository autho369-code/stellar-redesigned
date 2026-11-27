import { Component, StrictMode, type ReactNode } from 'react';
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

// A page's JS chunk can fail to load (flaky network, content blocker, a tab left
// open across a deploy that replaced the hashed file). Without a guard React
// unmounts the whole tree and the visitor sees a blank page. Reload once to
// pick up the current build; if it still fails, keep the prerendered HTML.
const RELOAD_KEY = 'chunk-reload-at';
function reloadOnce(): boolean {
  try {
    const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
    if (Date.now() - last < 30_000) return false;
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
  } catch {
    return false;
  }
  window.location.reload();
  return true;
}
window.addEventListener('vite:preloadError', (event) => {
  event.preventDefault();
  reloadOnce();
});

class LoadGuard extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: unknown) {
    console.error(error);
    reloadOnce();
  }
  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div style={{ padding: '4rem 1.5rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <p>This page did not load completely.</p>
        <p>
          <a href={window.location.href}>Reload the page</a> or <a href="/">go to the home page</a>.
        </p>
      </div>
    );
  }
}

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <LoadGuard>
          <App />
        </LoadGuard>
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
Promise.all([
  guideSlug ? loadBody(guideSlug) : undefined,
  preloadRoute(window.location.pathname).then(
    () => true,
    () => false,
  ),
]).then(([, routeLoaded]) => {
  if (!routeLoaded && container.hasChildNodes()) {
    // The page chunk did not load, so hydration would unmount the prerendered
    // content. Retry on a fresh load once, otherwise leave the static HTML as is.
    reloadOnce();
    return;
  }
  if (container.hasChildNodes()) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
});
