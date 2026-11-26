import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { business } from '../data/business';
import { PROPOSAL_TURNAROUND } from '../data/ctaPosts';

interface ProposalCtaProps {
  variant: 'mid' | 'end';
  /** lead_source value sent with the form, e.g. blog-<slug>-mid or area-<slug>. */
  source: string;
  /** Reported as the "page" property of Proposal CTA Click (the post slug). */
  page: string;
  /** Mid-article card only: the guide's one-sentence hook. */
  hook?: string;
}

const PHONE_HREF = 'tel:+17737280652';

const buttonClass =
  'group inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-sm font-medium tracking-wide text-paper no-underline transition-colors duration-300 hover:bg-navy-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600';
const phoneClass =
  'inline-flex items-center gap-2 font-medium text-ink underline decoration-gold-500 underline-offset-4 transition-colors hover:text-gold-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600';

/**
 * "Request a flat-fee proposal" block. Two variants: a compact mid-article
 * card and a full end-of-article block. Both the button and the phone link
 * fire "Proposal CTA Click" through the delegated listener in
 * ConversionTracking (data-proposal-cta / data-proposal-page).
 */
export default function ProposalCta({ variant, source, page, hook }: ProposalCtaProps) {
  const price = `$${business.priceFrom} per unit per month`;
  const contactHref = `/contact?source=${encodeURIComponent(source)}`;

  const actions = (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
      <Link to={contactHref} className={buttonClass}>
        Request a flat-fee proposal
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      </Link>
      <span className="inline-flex items-center gap-2 text-sm text-slate-600">
        or call
        <a href={PHONE_HREF} data-track-location={`cta-${variant}`} className={phoneClass}>
          <Phone className="h-4 w-4 text-gold-600" strokeWidth={1.5} aria-hidden />
          {business.phoneDisplay}
        </a>
      </span>
    </div>
  );

  if (variant === 'mid') {
    return (
      <aside
        aria-label="Request a flat-fee management proposal"
        data-proposal-cta="mid"
        data-proposal-page={page}
        className="my-12 border border-slate-200 border-l-4 border-l-gold-500 bg-ivory-50 p-7 sm:p-8"
      >
        <p className="font-display text-2xl text-ink">Comparing management options?</p>
        <p className="mt-3 leading-relaxed text-slate-700">
          {`${hook ? `${hook} ` : ''}Pricing starts at ${price}, ${business.priceTerms}, as a customized flat fee, never a percentage of your budget.`}
        </p>
        {actions}
      </aside>
    );
  }

  return (
    <aside
      aria-labelledby="proposal-cta-end"
      data-proposal-cta="end"
      data-proposal-page={page}
      className="mt-16 border border-slate-200 border-t-4 border-t-gold-500 bg-ivory-50 p-8 sm:p-10"
    >
      <h2 id="proposal-cta-end" className="font-display text-2xl font-light text-ink sm:text-3xl">
        Want a second set of eyes on your board&rsquo;s plan?
      </h2>
      <p className="mt-4 text-lg font-light leading-relaxed text-slate-700">
        Tell us about your building (unit count, age, amenities and what is not working) and we will respond with a
        written, flat-fee proposal{PROPOSAL_TURNAROUND ? ` ${PROPOSAL_TURNAROUND}` : ''}.{` Pricing starts at ${price}, ${business.priceTerms}.`}
      </p>
      {actions}
      <p className="mt-7 text-sm font-medium text-ink">Your Property Management Team</p>
    </aside>
  );
}
