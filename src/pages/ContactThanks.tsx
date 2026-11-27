import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { business } from '../data/business';

/**
 * Confirmation page shown after a successful contact form submission.
 *
 * A page view of /contact/thanks in Vercel Web Analytics counts as one lead,
 * which works on every Vercel plan (custom events need Pro). Keep this page
 * noindex, nofollow and out of the sitemap.
 */
export default function ContactThanks() {
  return (
    <>
      <Helmet>
        <title>Request Received | Stellar Property Management</title>
        <meta name="description" content="Your request reached Stellar Property Management. A licensed community association manager will respond within one business day." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://www.stellarpropertygroup.com/contact/thanks" />
      </Helmet>

      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-paper">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: 'linear-gradient(rgb(var(--color-ivory-200)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-ivory-200)) 1px, transparent 1px)', backgroundSize: '96px 96px' }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-24 pt-36 sm:px-8 lg:px-10">
          <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600"><span className="accent-rule" />Thank You</p>
          <h1 className="mb-8 font-display text-5xl font-light leading-[1.04] text-ink lg:text-6xl">
            Your request has been <em className="font-medium text-gold-600">received.</em>
          </h1>
          <p className="text-lg font-light leading-relaxed text-slate-600">
            A licensed community association manager will respond within one business day. If the matter is
            urgent, please call our office.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link to="/blog" className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-sm font-medium tracking-wide text-paper transition-colors duration-300 hover:bg-navy-700">
              Read our board guides
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
            <a href={business.phoneHref} className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-gold-600">
              <Phone className="h-4 w-4 text-gold-600" strokeWidth={1.5} aria-hidden /> {business.phoneDisplay}
            </a>
          </div>
          <p className="mt-10 text-sm font-medium text-ink">Your Property Management Team</p>
        </div>
      </section>
    </>
  );
}
