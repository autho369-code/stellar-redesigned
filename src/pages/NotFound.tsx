import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Stellar Property Management</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="min-h-screen flex items-center bg-paper">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center py-40">
          <p className="eyebrow text-gold-600 mb-6 flex items-center justify-center gap-4">
            <span className="accent-rule" /> Error 404 <span className="accent-rule" />
          </p>
          <h1 className="font-display font-light text-5xl lg:text-6xl text-ink leading-[1.05] mb-8">
            This address doesn&rsquo;t <em className="font-medium text-gold-600">exist.</em>
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-12 max-w-xl mx-auto">
            The page you&rsquo;re looking for may have moved. Let&rsquo;s get you back to
            a well-run part of the site.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/"
              className="group inline-flex items-center gap-3 bg-ink text-paper hover:bg-navy-700 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Back to Home
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-3 border border-slate-300 text-ink hover:border-gold-500 hover:text-gold-600 font-medium px-9 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Browse Neighborhoods
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
