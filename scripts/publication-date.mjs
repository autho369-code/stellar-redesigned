export function getChicagoPublicationDate(date = new Date()) {
  // Lets a local build preview a future publication day, e.g.
  //   PUBLICATION_DATE_OVERRIDE=2026-08-22 npm run build
  // Every build script (sitemap, blog modules, prerender) reads the cutoff
  // from here, so the whole pipeline stays consistent.
  const override = process.env.PUBLICATION_DATE_OVERRIDE;
  if (override) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(override)) {
      throw new Error(`PUBLICATION_DATE_OVERRIDE must be YYYY-MM-DD, got '${override}'.`);
    }
    return override;
  }

  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}
