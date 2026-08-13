import { useEffect } from 'react';
import { track } from '@vercel/analytics';

function cleanLabel(value: string) {
  return value.replace(/\s+/g, ' ').trim().slice(0, 80) || 'Unlabeled link';
}

/** Records high-intent, non-personal conversion actions for Web Analytics. */
export default function ConversionTracking() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      const properties = {
        path: window.location.pathname,
        label: cleanLabel(link.textContent || link.getAttribute('aria-label') || ''),
      };

      if (href.startsWith('tel:')) track('Phone Click', properties);
      else if (href.startsWith('mailto:')) track('Email Click', properties);
      else if (href === '/contact' || href.startsWith('/contact?')) {
        track('Proposal CTA Click', properties);
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
