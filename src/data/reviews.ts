import { profiles } from './business';

/**
 * Real Google reviews, word for word (only trimmed). Do not edit the wording
 * and do not add a review that is not on the Google profile. No star rating
 * number is shown on the site until the owner approves one.
 */
export const reviews = [
  { quote: 'Financial reports provided are detailed and copies of each monthly invoice received.', name: 'Halid E.', context: '254-unit condominium' },
  { quote: 'Absolutely great company to manage any size of the building. We are very happy with them since 2014.', name: 'Hasan H.', context: 'Long-term client' },
  { quote: 'They managed multiple renovation and repair projects while being good stewards of our reserves.', name: 'Barbara M.', context: 'Condominium association' },
] as const;

export const GOOGLE_REVIEWS_URL = profiles.google;
