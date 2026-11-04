// Publishing stopped 2026-11-03 (owner decision: the Stellar site is being
// retired for CenterPoint). No guide dated after this day is ever released.
// Keep in sync with scripts/publication-date.mjs. To restart daily
// publishing, set this to null in BOTH files and re-enable the GitHub
// workflow "Publish daily association guide".
export const PUBLISHING_FROZEN_AT: string | null = '2026-11-03';

/** Today's calendar date in Chicago, as YYYY-MM-DD. */
export function getChicagoCalendarDate(date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

/** Latest guide date that may be shown: today, but never past the freeze. */
export function getChicagoPublicationDate(date = new Date()): string {
  const today = getChicagoCalendarDate(date);
  return PUBLISHING_FROZEN_AT && today > PUBLISHING_FROZEN_AT ? PUBLISHING_FROZEN_AT : today;
}
