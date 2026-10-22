// Authoring index: every post, including future-dated scheduled articles.
//
// NEVER import this from client code — it would pull all article content
// (including unpublished posts) into the public bundle. Its only consumers
// are scripts/generate-blog-modules.mjs (which filters by publication date
// and emits the modules the client actually uses) and entry-server.tsx
// (build-time prerendering; the server bundle is deleted after use).
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
import { scheduledGovernancePosts } from './scheduled-governance';
import { scheduledFinancePosts } from './scheduled-finance';
import { scheduledBuildingPosts } from './scheduled-buildings';
import { scheduledManagementPosts } from './scheduled-management';
import type { BlogPost } from './types';

export const allBlogPosts: BlogPost[] = [
  ...scheduledGovernancePosts,
  ...scheduledFinancePosts,
  ...scheduledBuildingPosts,
  ...scheduledManagementPosts,
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
