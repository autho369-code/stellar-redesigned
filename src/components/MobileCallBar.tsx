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
  const source = `mobile-bar${pathname === '/' ? '-home' : pathname.replace(/\//g, '-')}`.slice(0, 80);
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-paper/15 bg-ink md:hidden" data-mobile-call-bar>
      <a
        href={business.phoneHref}
        data-track-location="mobile-bar"
        className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-paper"
      >
        <Phone className="h-4 w-4 text-gold-300" aria-hidden />
        Call {business.phoneDisplay}
      </a>
      <Link
        to={`/contact?source=${encodeURIComponent(source)}`}
        data-proposal-cta="mobile-bar"
        data-proposal-page={pathname}
        className="flex items-center justify-center bg-gold-300 py-4 text-sm font-semibold text-ink"
      >
        Get a flat-fee proposal
      </Link>
    </div>
  );
}
