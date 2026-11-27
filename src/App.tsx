import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import { useEffect, lazy, Suspense, type ComponentType } from 'react';
import Layout from './components/layout/Layout';

// Public pages are imported eagerly so the prerendered HTML hydrates in place
// instead of suspending into a spinner (see main.tsx). Keep this route table in
// sync with entry-server.tsx.
/**
 * R2: each page is its own chunk. A page loaded before hydration renders
 * directly, so the markup matches the prerendered HTML with no Suspense
 * boundary in between. A page reached by a link inside the site loads on
 * demand behind a small spinner. The prerender uses its own eager route table
 * (src/entry-server.tsx).
 */
type Preloadable = ComponentType & { preload: () => Promise<void> };
function page(loader: () => Promise<{ default: ComponentType }>): Preloadable {
  let Loaded: ComponentType | null = null;
  const Lazy = lazy(loader);
  const Page = (() =>
    Loaded ? (
      <Loaded />
    ) : (
      <Suspense fallback={<LoadingFallback />}>
        <Lazy />
      </Suspense>
    )) as unknown as Preloadable;
  Page.preload = () =>
    loader().then((module) => {
      Loaded = module.default;
    });
  return Page;
}

const Home = page(() => import('./pages/Home'));
const About = page(() => import('./pages/About'));
const Services = page(() => import('./pages/Services'));
const CondominiumManagement = page(() => import('./pages/services/CondominiumManagement'));
const HOAManagement = page(() => import('./pages/services/HOAManagement'));
const TownhomeManagement = page(() => import('./pages/services/TownhomeManagement'));
const FinancialManagement = page(() => import('./pages/services/FinancialManagement'));
const MaintenanceCoordination = page(() => import('./pages/services/MaintenanceCoordination'));
const BoardSupport = page(() => import('./pages/services/BoardSupport'));
const ViolationManagement = page(() => import('./pages/services/ViolationManagement'));
const HighRiseManagement = page(() => import('./pages/services/HighRiseManagement'));
const SmallCondoManagement = page(() => import('./pages/services/SmallCondoManagement'));
const ResaleDisclosures = page(() => import('./pages/services/ResaleDisclosures'));
const ServiceAreas = page(() => import('./pages/ServiceAreas'));
const ChicagoPage = page(() => import('./pages/ChicagoPage'));
const NorthShorePage = page(() => import('./pages/NorthShorePage'));
const Pricing = page(() => import('./pages/Pricing'));
const Reviews = page(() => import('./pages/Reviews'));
const CaseStudyKenmore = page(() => import('./pages/CaseStudyKenmore'));
const NeighborhoodPage = page(() => import('./pages/NeighborhoodPage'));
const Blog = page(() => import('./pages/Blog'));
const BlogTopic = page(() => import('./pages/BlogTopic'));
const BlogPost = page(() => import('./pages/BlogPost'));
const Contact = page(() => import('./pages/Contact'));
const ContactThanks = page(() => import('./pages/ContactThanks'));
const Resources = page(() => import('./pages/Resources'));
const CondoLiving = page(() => import('./pages/CondoLiving'));
const AiInfo = page(() => import('./pages/AiInfo'));
const CompareProposals = page(() => import('./pages/CompareProposals'));
const BoardToolkit = page(() => import('./pages/BoardToolkit'));
const AuthorMirsadCerimovic = page(() => import('./pages/AuthorMirsadCerimovic'));
const PrivacyPolicy = page(() => import('./pages/PrivacyPolicy'));
const TermsOfService = page(() => import('./pages/TermsOfService'));
const NotFound = page(() => import('./pages/NotFound'));

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

const PRELOAD_ROUTES: [string, Preloadable][] = [
  ['/', Home],
  ['/about', About],
  ['/about/mirsad-cerimovic', AuthorMirsadCerimovic],
  ['/services', Services],
  ['/services/condominium-management', CondominiumManagement],
  ['/services/hoa-management', HOAManagement],
  ['/services/townhome-management', TownhomeManagement],
  ['/services/financial-management', FinancialManagement],
  ['/services/maintenance-coordination', MaintenanceCoordination],
  ['/services/board-support', BoardSupport],
  ['/services/violation-management', ViolationManagement],
  ['/services/high-rise-condominium-management', HighRiseManagement],
  ['/services/small-condo-association-management', SmallCondoManagement],
  ['/services/resale-disclosures', ResaleDisclosures],
  ['/service-areas', ServiceAreas],
  ['/property-management-chicago', ChicagoPage],
  ['/property-management-north-shore', NorthShorePage],
  ['/pricing', Pricing],
  ['/reviews', Reviews],
  ['/case-studies/6150-n-kenmore-roof', CaseStudyKenmore],
  ['/blog', Blog],
  ['/blog/topic/:topic', BlogTopic],
  ['/blog/:slug', BlogPost],
  ['/contact', Contact],
  ['/contact/thanks', ContactThanks],
  ['/resources', Resources],
  ['/condo-living', CondoLiving],
  ['/ai-info', AiInfo],
  ['/tools/compare-management-proposals', CompareProposals],
  ['/board-toolkit', BoardToolkit],
  ['/privacy-policy', PrivacyPolicy],
  ['/terms-of-service', TermsOfService],
];

/** Load the page for this URL before React hydrates. */
export function preloadRoute(pathname: string): Promise<void> {
  const hit = PRELOAD_ROUTES.find(([path]) => matchPath({ path, end: true }, pathname));
  if (hit) return hit[1].preload();
  return pathname.startsWith('/property-management-') ? NeighborhoodPage.preload() : NotFound.preload();
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
          <Route path="/case-studies/6150-n-kenmore-roof" element={<CaseStudyKenmore />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/topic/:topic" element={<BlogTopic />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/thanks" element={<ContactThanks />} />
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
