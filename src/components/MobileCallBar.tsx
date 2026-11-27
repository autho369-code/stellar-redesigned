import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { business } from '../data/business';

/**
 * Phones only: a bar fixed to the bottom of the screen with the two actions
 * that matter, call or request a proposal. Hidden on the contact pages, where
 * the form is the action. The "Ask Arthur" button sits above it on phones.
 */
export default function MobileCallBar() {
  const { pathname } = useLocation();
  if (pathname.startsWith('/contact')) return null;
  const source = 'sticky-bar';
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-paper/15 bg-ink pb-[env(safe-area-inset-bottom)] md:hidden" data-mobile-call-bar>
      <a
        href={business.phoneHref}
        data-track-location="sticky-bar"
        className="flex items-center justify-center gap-2 h-16 text-sm font-semibold text-paper"
      >
        <Phone className="h-4 w-4 text-gold-300" aria-hidden />
        Call {business.phoneDisplay}
      </a>
      <Link
        to={`/contact?source=${encodeURIComponent(source)}`}
        data-proposal-cta="sticky-bar"
        data-proposal-page={pathname}
        className="flex items-center justify-center h-16 bg-gold-300 text-sm font-semibold text-ink"
      >
        Get a flat-fee proposal
      </Link>
    </div>
  );
}
