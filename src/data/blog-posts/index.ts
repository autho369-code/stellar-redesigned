import { condoPropertyManagementChicago } from './condo-property-management-chicago';
import { illinoisCondoLawUpdates2026 } from './illinois-condo-law-updates-2026';
import { aiInCondoManagement } from './ai-in-condo-management';
import { hoaInsuranceCosts } from './hoa-insurance-costs-illinois';
import { condoReserveFundsExplained } from './condo-reserve-funds-explained';
import { condoSpecialAssessmentsIllinois } from './condo-special-assessments-illinois';
import { selfManagedCondoProblems } from './self-managed-condo-association-problems';
import { condoBoardEnterUnit } from './can-condo-boards-enter-your-unit-illinois';
import { commonCondoViolationsChicago } from './common-condo-rule-violations-chicago';
import { hoaCondoRulesEnforceable } from './are-hoa-condo-rules-enforceable-illinois';
import { whyCondoBoardsFail } from './why-condo-boards-fail';
import { technologyBehindOurManagement } from './the-technology-behind-our-management';
import { switchCondoManagementCompaniesChicago } from './switch-condo-management-companies-chicago';
import { condoRepairsOwnerVsAssociation } from './condo-repairs-owner-vs-association-illinois';
import { movingIntoChicagoCondoGuide } from './moving-into-chicago-condo-guide';
import { rentingOutYourCondoChicago } from './renting-out-your-condo-chicago-rules';
import { firstTimeCondoBuyerGuideChicago } from './first-time-condo-buyer-guide-chicago';
import { scheduledGovernancePosts } from './scheduled-governance';
import { scheduledFinancePosts } from './scheduled-finance';
import { scheduledBuildingPosts } from './scheduled-buildings';
import { scheduledManagementPosts } from './scheduled-management';
import { getChicagoPublicationDate } from '../../utils/publication-date';

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  dateModified?: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  featuredImage?: string;
  sources?: Array<{
    title: string;
    url: string;
  }>;
  content: string;
}

export const ARTICLE_AUTHOR = 'Mirsad Cerimovic, CAM, CMCA, AMS';

export const allBlogPosts: BlogPost[] = [
  ...scheduledGovernancePosts,
  ...scheduledFinancePosts,
  ...scheduledBuildingPosts,
  ...scheduledManagementPosts,
  condoRepairsOwnerVsAssociation,
  movingIntoChicagoCondoGuide,
  rentingOutYourCondoChicago,
  firstTimeCondoBuyerGuideChicago,
  switchCondoManagementCompaniesChicago,
  technologyBehindOurManagement,
  illinoisCondoLawUpdates2026,
  aiInCondoManagement,
  hoaInsuranceCosts,
  condoReserveFundsExplained,
  condoPropertyManagementChicago,
  condoSpecialAssessmentsIllinois,
  selfManagedCondoProblems,
  condoBoardEnterUnit,
  commonCondoViolationsChicago,
  hoaCondoRulesEnforceable,
  whyCondoBoardsFail,
];

// Future-dated articles can be prepared in advance without leaking into the
// journal, routes, related links, or structured data before their publish day.
const publicationCutoff = getChicagoPublicationDate();

export const blogPosts: BlogPost[] = allBlogPosts
  .filter((post) => post.date <= publicationCutoff)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
