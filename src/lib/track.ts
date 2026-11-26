/**
 * Conversion events for Vercel Web Analytics.
 *
 * One list of event names so reports stay consistent. Custom events need the
 * Vercel Pro plan; on Hobby these calls are accepted and dropped, and leads
 * are still countable as page views of /contact/thanks.
 *
 * Privacy: never send a name, email address, phone number or message text.
 * Only the property keys listed per event are accepted.
 */
import { track } from '@vercel/analytics';

export const EVENT_PROPERTIES = {
  'Contact Form Submit': ['source', 'page'],
  'Phone Click': ['location', 'page'],
  'Email Click': ['location', 'page'],
  'Proposal CTA Click': ['placement', 'page'],
  'Proposal Tool Started': ['tool'],
  'Proposal Tool Completed': ['tool'],
  'Board Toolkit Download': ['file'],
  'Review Link Click': ['location'],
} as const;

export type TrackEventName = keyof typeof EVENT_PROPERTIES;

/** Vercel Pro allows two custom properties per event. */
const MAX_PROPERTIES = 2;
const MAX_VALUE_LENGTH = 254;

export function trackEvent(name: TrackEventName, props: Record<string, string | undefined> = {}): void {
  // No-op in development so local testing never pollutes the reports.
  if (import.meta.env.DEV) return;

  try {
    const allowed: readonly string[] = EVENT_PROPERTIES[name];
    if (!allowed) return;

    const clean: Record<string, string> = {};
    for (const key of allowed) {
      const value = props[key];
      if (typeof value !== 'string' || !value) continue;
      if (Object.keys(clean).length >= MAX_PROPERTIES) break;
      clean[key] = value.slice(0, MAX_VALUE_LENGTH);
    }

    track(name, clean);
  } catch {
    // Analytics must never break the page.
  }
}
