/**
 * Build-time prerender entry (SSG).
 *
 * Mirrors the route table in App.tsx but with EAGER imports — React.lazy is
 * not supported by renderToString, and at build time we want the full page
 * markup anyway. If you add a route in App.tsx, add it here too.
 *
 * Why this exists: the site is a client-rendered SPA, and AI-search crawlers
 * (GPTBot, ClaudeBot, PerplexityBot) plus Bing do not execute JavaScript.
 * Prerendering writes real HTML — with Helmet meta and JSON-LD — for every
 * route so crawlers see the same page users do.
 */
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import type { HelmetServerState } from 'react-helmet-async';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import CondominiumManagement from './pages/services/CondominiumManagement';
import HOAManagement from './pages/services/HOAManagement';
import TownhomeManagement from './pages/services/TownhomeManagement';
import FinancialManagement from './pages/services/FinancialManagement';
import MaintenanceCoordination from './pages/services/MaintenanceCoordination';
import BoardSupport from './pages/services/BoardSupport';
import ViolationManagement from './pages/services/ViolationManagement';
import ServiceAreas from './pages/ServiceAreas';
import ChicagoPage from './pages/ChicagoPage';
import NeighborhoodPage from './pages/NeighborhoodPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';

function CatchAllRoute() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/property-management-')) {
    return <NeighborhoodPage />;
  }
  return <NotFound />;
}

export function render(url: string): { appHtml: string; helmet: HelmetServerState } {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/condominium-management" element={<CondominiumManagement />} />
            <Route path="/services/hoa-management" element={<HOAManagement />} />
            <Route path="/services/townhome-management" element={<TownhomeManagement />} />
            <Route path="/services/financial-management" element={<FinancialManagement />} />
            <Route path="/services/maintenance-coordination" element={<MaintenanceCoordination />} />
            <Route path="/services/board-support" element={<BoardSupport />} />
            <Route path="/services/violation-management" element={<ViolationManagement />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/property-management-chicago" element={<ChicagoPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<CatchAllRoute />} />
          </Route>
        </Routes>
      </StaticRouter>
    </HelmetProvider>
  );

  return { appHtml, helmet: helmetContext.helmet as HelmetServerState };
}
