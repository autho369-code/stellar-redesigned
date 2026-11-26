import { Phone } from 'lucide-react';
import { business } from '../data/business';
import { PROPOSAL_TURNAROUND } from '../data/ctaPosts';

/**
 * The offer line under a page's hero buttons: tap-to-call phone number, the
 * proposal promise and the starting fee. Same wording on every sales page,
 * so a board sees one offer wherever it lands. Light backgrounds only.
 */
export default function HeroOffer({ className = 'mt-7' }: { className?: string }) {
  return (
    <p className={`${className} flex flex-wrap items-center gap-x-7 gap-y-2 text-sm text-slate-600`} data-hero-offer>
      <a
        href={business.phoneHref}
        data-track-location="hero"
        className="inline-flex items-center gap-2 text-base font-medium text-ink transition-colors hover:text-gold-600"
      >
        <Phone className="h-4 w-4 text-gold-600" aria-hidden />
        Call {business.phoneDisplay}
      </a>
      <span>
        Written flat-fee proposal{PROPOSAL_TURNAROUND ? ` ${PROPOSAL_TURNAROUND}` : ''}. From ${business.priceFrom} per unit
        per month, {business.priceTerms}.
      </span>
    </p>
  );
}
