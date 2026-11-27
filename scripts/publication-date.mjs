// Publishing resumed 2026-11-27 (owner decision: lift the freeze). A guide goes
// live on its own date; guides dated in the future stay scheduled. To freeze
// again, set this to a YYYY-MM-DD string in BOTH files (keep this file in sync
// with src/utils/publication-date.ts) and disable the GitHub workflow
// "Publish daily association guide".
export const PUBLISHING_FROZEN_AT = null;

/** Today's calendar date in Chicago, as YYYY-MM-DD. */
export function getChicagoCalendarDate(date = new Date()) {
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
export function getChicagoPublicationDate(date = new Date()) {
  const today = getChicagoCalendarDate(date);
  return PUBLISHING_FROZEN_AT && today > PUBLISHING_FROZEN_AT ? PUBLISHING_FROZEN_AT : today;
}
