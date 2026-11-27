/**
 * Content model for the upgraded area pages (growth brief, Phase 3).
 *
 * One file per page in this folder. Every section is optional: a field that
 * is null or an empty list hides its block. Facts that wait on the owner are
 * stored as null and are never shown. Per-area managed counts are company-private
 * (owner decision, Nov 27, 2026): `managed` stays null.
 *
 * Rules: no building, association, owner or board is ever named. No invented
 * facts. Building types come from the page's earlier copy unless confirmed.
 */

export interface AreaBuildingType {
  name: string;
  /** One or two plain sentences. No ages or sizes unless the owner confirmed them. */
  detail: string;
}

export interface AreaIssue {
  title: string;
  /** Two or three sentences written for this neighborhood's building mix. */
  body: string;
  /** Slug of the cluster guide this issue links to. */
  post: string;
  /** Link text that describes the guide. */
  linkText: string;
}

export interface AreaFaq {
  q: string;
  /** Plain text. Shown on the page and mirrored word for word in FAQPage JSON-LD. */
  a: string;
  /** Slug of the guide that supports the answer. */
  post: string;
}

export interface AreaPhoto {
  /** /images/areas/<slug>-<what>.webp — real photos only, EXIF and GPS removed. */
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

export interface AreaFeeRange {
  units: number;
  low: number;
  high: number;
}

export interface AreaHousingStat {
  label: string;
  value: string;
}

/** Sourced housing data for the community (census-based, from the sources listed on the page). */
export interface AreaHousing {
  /** One to three sentences that frame the numbers. */
  intro: string;
  stats: AreaHousingStat[];
  /** What the numbers mean for a board. */
  takeaway: string;
}

/** A municipal, county or utility rule that a board in this community has to plan around. */
export interface AreaLocalItem {
  title: string;
  body: string;
}

export interface AreaSource {
  label: string;
  href: string;
}

export interface AreaContent {
  slug: string;
  targetQuery: string;
  /** Title tag, 62 characters or fewer. */
  title: string;
  /** Meta description, 140 to 155 characters, with one specific local fact. */
  metaDescription: string;
  /** Variant A data. While null, the page uses the "we serve boards here" sentence. */
  managed: { associations: number; units: number } | null;
  /** One or two sentences of neighborhood context, from the page's earlier copy. */
  context: string;
  buildingTypes: AreaBuildingType[];
  issues: AreaIssue[];
  /** Typical monthly fee ranges from real proposals. Never estimated. */
  feeRanges: AreaFeeRange[] | null;
  photos: AreaPhoto[];
  faqs: AreaFaq[];
  /** Adds the City of Chicago exterior wall program to the official links. */
  hasHighRises: boolean;
  /** Optional sourced housing snapshot. Hidden when absent. */
  housing?: AreaHousing | null;
  /** Optional village, county and utility items. Hidden when absent. */
  localItems?: AreaLocalItem[];
  /** Optional local sources, listed with the official links. */
  sources?: AreaSource[];
}
