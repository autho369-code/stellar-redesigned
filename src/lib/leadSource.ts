/**
 * Lead source attribution for the contact form.
 *
 * Order: the ?source= value set by a CTA (for example
 * blog-switch-condo-management-companies-chicago-end), then the internal page
 * the visitor came from, then "direct".
 */

const visitedPaths: string[] = [];

/** Called on every route change (see ConversionTracking). */
export function recordRoute(pathname: string): void {
  if (visitedPaths[visitedPaths.length - 1] !== pathname) visitedPaths.push(pathname);
  if (visitedPaths.length > 20) visitedPaths.shift();
}

export function sanitizeSource(value: string | null | undefined): string {
  return (value ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9/_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}

export function resolveLeadSource(sourceParam: string | null): string {
  const fromParam = sanitizeSource(sourceParam);
  if (fromParam) return fromParam;
  if (typeof window === 'undefined') return 'direct';

  const here = window.location.pathname;
  for (let index = visitedPaths.length - 1; index >= 0; index--) {
    if (visitedPaths[index] !== here) return sanitizeSource(visitedPaths[index]) || '/';
  }

  try {
    if (document.referrer) {
      const referrer = new URL(document.referrer);
      if (referrer.origin === window.location.origin && referrer.pathname !== here) {
        return sanitizeSource(referrer.pathname) || '/';
      }
    }
  } catch {
    // unreadable referrer: fall through
  }

  return 'direct';
}
