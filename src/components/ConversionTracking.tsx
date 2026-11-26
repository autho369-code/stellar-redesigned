import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { recordRoute } from '../lib/leadSource';
import { trackEvent } from '../lib/track';

const MAIN_PHONE_DIGITS = '7737280652';
const MAIN_EMAIL = 'mirsad@stellarpropertygroup.com';
const LOCATIONS = ['header', 'footer', 'contact', 'cta-mid', 'cta-end', 'area-page'];

function trackLocation(link: Element): string {
  const value = link.closest('[data-track-location]')?.getAttribute('data-track-location') ?? '';
  return LOCATIONS.includes(value) ? value : 'other';
}

/**
 * ONE delegated click listener at the app root, so links in the prerendered
 * markup are covered as soon as the page hydrates. Records non-personal
 * conversion actions only (see src/lib/track.ts).
 */
export default function ConversionTracking() {
  const { pathname } = useLocation();

  useEffect(() => {
    recordRoute(pathname);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      const page = window.location.pathname;

      const cta = link.closest('[data-proposal-cta]');
      if (cta) {
        trackEvent('Proposal CTA Click', {
          placement: cta.getAttribute('data-proposal-cta') || undefined,
          page: cta.getAttribute('data-proposal-page') || page,
        });
      }

      if (href.startsWith('tel:')) {
        if (href.replace(/\D/g, '').includes(MAIN_PHONE_DIGITS)) {
          trackEvent('Phone Click', { location: trackLocation(link), page });
        }
      } else if (href.toLowerCase().startsWith(`mailto:${MAIN_EMAIL}`)) {
        trackEvent('Email Click', { location: trackLocation(link), page });
      } else if (link.hasAttribute('data-review-link')) {
        trackEvent('Review Link Click', { location: link.getAttribute('data-review-link') || 'reviews-page' });
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
