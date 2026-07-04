import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';

// Lazy-loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const CondominiumManagement = lazy(() => import('./pages/services/CondominiumManagement'));
const HOAManagement = lazy(() => import('./pages/services/HOAManagement'));
const TownhomeManagement = lazy(() => import('./pages/services/TownhomeManagement'));
const FinancialManagement = lazy(() => import('./pages/services/FinancialManagement'));
const MaintenanceCoordination = lazy(() => import('./pages/services/MaintenanceCoordination'));
const BoardSupport = lazy(() => import('./pages/services/BoardSupport'));
const ViolationManagement = lazy(() => import('./pages/services/ViolationManagement'));
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'));
const ChicagoPage = lazy(() => import('./pages/ChicagoPage'));
const NeighborhoodPage = lazy(() => import('./pages/NeighborhoodPage'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const Resources = lazy(() => import('./pages/Resources'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
      <Suspense fallback={<LoadingFallback />}>
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
      </Suspense>
    </>
  );
}
