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

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  featuredImage?: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
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

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
