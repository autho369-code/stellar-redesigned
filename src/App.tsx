import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';

// Public pages are imported eagerly so the prerendered HTML hydrates in place
// instead of suspending into a spinner (see main.tsx). Keep this route table in
// sync with entry-server.tsx.
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
import HighRiseManagement from './pages/services/HighRiseManagement';
import SmallCondoManagement from './pages/services/SmallCondoManagement';
import ResaleDisclosures from './pages/services/ResaleDisclosures';
import ServiceAreas from './pages/ServiceAreas';
import ChicagoPage from './pages/ChicagoPage';
import NorthShorePage from './pages/NorthShorePage';
import Pricing from './pages/Pricing';
import Reviews from './pages/Reviews';
import NeighborhoodPage from './pages/NeighborhoodPage';
import Blog from './pages/Blog';
import BlogTopic from './pages/BlogTopic';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import CondoLiving from './pages/CondoLiving';
import AiInfo from './pages/AiInfo';
import CompareProposals from './pages/CompareProposals';
import BoardToolkit from './pages/BoardToolkit';
import AuthorMirsadCerimovic from './pages/AuthorMirsadCerimovic';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';

// Staff-only page keeps its own chunk: it pulls Supabase auth/storage that the
// public bundle should never pay for.
const KnowledgeAdmin = lazy(() => import('./pages/KnowledgeAdmin'));

/**
 * React Router v7 does not support partial dynamic segments like
 * "/property-management-:slug", so those URLs never matched and all 72
 * neighborhood pages rendered blank. This catch-all keeps the existing
 * (indexed) URL pattern working and routes everything else to a real 404.
 */
function CatchAllRoute() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/property-management-')) {
    return <NeighborhoodPage />;
  }
  return <NotFound />;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-navy-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Staff-only, outside the public Layout (no header/footer/chat widget) */}
        <Route
          path="/knowledge"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <KnowledgeAdmin />
            </Suspense>
          }
        />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mirsad-cerimovic" element={<AuthorMirsadCerimovic />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/condominium-management" element={<CondominiumManagement />} />
          <Route path="/services/hoa-management" element={<HOAManagement />} />
          <Route path="/services/townhome-management" element={<TownhomeManagement />} />
          <Route path="/services/financial-management" element={<FinancialManagement />} />
          <Route path="/services/maintenance-coordination" element={<MaintenanceCoordination />} />
          <Route path="/services/board-support" element={<BoardSupport />} />
          <Route path="/services/violation-management" element={<ViolationManagement />} />
          <Route path="/services/high-rise-condominium-management" element={<HighRiseManagement />} />
          <Route path="/services/small-condo-association-management" element={<SmallCondoManagement />} />
          <Route path="/services/resale-disclosures" element={<ResaleDisclosures />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/property-management-chicago" element={<ChicagoPage />} />
          <Route path="/property-management-north-shore" element={<NorthShorePage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/topic/:topic" element={<BlogTopic />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/condo-living" element={<CondoLiving />} />
          <Route path="/ai-info" element={<AiInfo />} />
          <Route path="/tools/compare-management-proposals" element={<CompareProposals />} />
          <Route path="/board-toolkit" element={<BoardToolkit />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<CatchAllRoute />} />
        </Route>
      </Routes>
    </>
  );
}
