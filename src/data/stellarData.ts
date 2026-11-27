/**
 * Stellar's own data points, shown in the "StellarData" block on upgraded
 * area pages (and on /pricing in Phase 4). A field renders ONLY when its
 * value is not null. Every published number carries its "as of" date.
 *
 * Fields that wait on the owner are null with a TODO(Jojo) comment.
 */
import { business } from './business';

export interface StellarDataPoint {
  label: string;
  value: string | null;
  asOf: string | null;
}

export const stellarData: StellarDataPoint[] = [
  { label: 'Associations managed', value: String(business.associations), asOf: 'November 2026' },
  { label: 'Residences managed', value: `approximately ${business.residences}`, asOf: 'November 2026' },
  { label: 'Client retention', value: `${business.retentionPercent}% since ${business.foundingYear}`, asOf: 'November 2026' },
  { label: 'Illinois CAM firm license', value: business.licenseNumber, asOf: null },
  // TODO(Jojo): approve publishing the portfolio average management fee. The
  // brief computed about $24 per unit per month from internal fee reports
  // (Aug-Oct 2026). NOTE: that average is below the published starting fee of
  // $30 per unit, so decide the wording before this is shown anywhere.
  { label: 'Average management fee across the portfolio', value: null, asOf: null },
  // TODO(Jojo): units for each of the 30+ associations, to compute min and max $/unit.
  { label: 'Fee range per unit across associations', value: null, asOf: null },
  // TODO(Jojo): median hours to first response, last 90 days, from AppFolio.
  { label: 'Typical owner request response time', value: null, asOf: null },
  // TODO(Jojo): work orders handled in the last 12 months, from AppFolio.
  { label: 'Work orders handled in the last 12 months', value: null, asOf: null },
  // TODO(Jojo): number of transitions and median days to complete one.
  { label: 'Median days to complete a management transition', value: null, asOf: null },
  // TODO(Jojo): share of portfolio by building type (condo, HOA, townhome; high-rise vs walk-up).
  { label: 'Portfolio by building type', value: null, asOf: null },
];

export function publishedStellarData(): StellarDataPoint[] {
  return stellarData.filter((point) => point.value !== null);
}
