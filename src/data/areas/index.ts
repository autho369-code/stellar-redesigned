/**
 * Upgraded area pages (growth brief, Phase 3). A page listed here renders with
 * the upgraded layout (src/pages/AreaPageUpgraded.tsx). Every other area page
 * keeps the standard template.
 *
 * Batch 1 (2026-11-26): Rogers Park, Edgewater, Lincoln Square, Lakeview,
 * Lincoln Park. Search Console batch (2026-11-26, ordered by impressions):
 * Ravenswood, Wilmette, Lake Forest. The Chicago city page has its
 * own component (src/pages/ChicagoPage.tsx).
 */
import { avondale } from './avondale';
import { edgewater } from './edgewater';
import { evanston } from './evanston';
import { glenview } from './glenview';
import { lakeForest } from './lake-forest';
import { lakeview } from './lakeview';
import { lincolnPark } from './lincoln-park';
import { lincolnSquare } from './lincoln-square';
import { mortonGrove } from './morton-grove';
import { ravenswood } from './ravenswood';
import { riverNorth } from './river-north';
import { rogersPark } from './rogers-park';
import { wilmette } from './wilmette';
import { oldTown } from './old-town';
import { highlandPark } from './highland-park';
import { northbrook } from './northbrook';
import { albanyPark } from './albany-park';
import { northPark } from './north-park';
import { bucktown } from './bucktown';
import { streeterville } from './streeterville';
import { lincolnwood } from './lincolnwood';
import { uptown } from './uptown';
import { andersonville } from './andersonville';
import type { AreaContent } from './types';

export type { AreaContent } from './types';

export const areaContent: Record<string, AreaContent> = Object.fromEntries(
  [rogersPark, edgewater, lincolnSquare, lakeview, lincolnPark, ravenswood, wilmette, lakeForest, avondale, riverNorth, mortonGrove, evanston, glenview, oldTown, highlandPark, northbrook, albanyPark, northPark, bucktown, streeterville, lincolnwood, uptown, andersonville].map((area) => [area.slug, area]),
);

export function getAreaContent(slug: string): AreaContent | undefined {
  return areaContent[slug];
}

/** Guides an upgraded area page links in its issues and FAQs. */
export function getAreaPostLinks(area: AreaContent): string[] {
  return [...new Set([...area.issues.map((issue) => issue.post), ...area.faqs.map((faq) => faq.post)])];
}

/**
 * Upgraded area pages that link this guide. The guide links each of them back
 * in its "nearby neighborhoods" module, so the link is always two-way.
 */
export function getAreasLinkingPost(postSlug: string): string[] {
  return Object.values(areaContent)
    .filter((area) => getAreaPostLinks(area).includes(postSlug))
    .map((area) => area.slug);
}
