import type { BlogPost } from './blog-posts';
import type { Neighborhood } from './neighborhoods';

export type ContentCluster =
  | 'governance'
  | 'finance'
  | 'buildings'
  | 'management';

interface ClusterConfig {
  label: string;
  path: string;
  serviceLabel: string;
  servicePath: string;
  description: string;
}

export const contentClusters: Record<ContentCluster, ClusterConfig> = {
  governance: {
    label: 'Board Governance & Illinois Law',
    path: '/blog/topic/board-governance-illinois-law',
    serviceLabel: 'Board Support',
    servicePath: '/services/board-support',
    description: 'Illinois law, meetings, records, rules, elections, fiduciary duties, and board decision-making.',
  },
  finance: {
    label: 'Association Finance & Reserves',
    path: '/blog/topic/association-finance-reserves',
    serviceLabel: 'Financial Management',
    servicePath: '/services/financial-management',
    description: 'Budgets, reserves, assessments, disclosures, collections, insurance, loans, and financial reporting.',
  },
  buildings: {
    label: 'Building Operations & Capital Planning',
    path: '/blog/topic/building-operations-capital-planning',
    serviceLabel: 'Maintenance Coordination',
    servicePath: '/services/maintenance-coordination',
    description: 'Maintenance, vendors, capital projects, building compliance, emergencies, and physical operations.',
  },
  management: {
    label: 'Choosing & Improving Management',
    path: '/blog/topic/choosing-association-management',
    serviceLabel: 'Condominium Management',
    servicePath: '/services/condominium-management',
    description: 'Selecting, evaluating, and transitioning association management with stronger systems and accountability.',
  },
};

export function getClusterFromTopicSlug(slug?: string): ContentCluster | undefined {
  if (!slug) return undefined;
  return (Object.entries(contentClusters) as Array<[ContentCluster, ClusterConfig]>)
    .find(([, config]) => config.path.endsWith(`/${slug}`))?.[0];
}

export function getPostCluster(post: Pick<BlogPost, 'slug' | 'title' | 'category'>): ContentCluster {
  const searchable = `${post.slug} ${post.title} ${post.category}`;
  const buildingCategories = new Set(['Maintenance', 'Building Compliance', 'Building Operations']);
  const financeCategories = new Set(['Financial Management', 'Financial Planning', 'Reserve Planning', 'Insurance']);
  const managementCategories = new Set(['Choosing Management', 'Property Management', 'Technology', 'Board Education', 'Board Leadership']);

  // A few Board Operations guides have a more specific commercial destination.
  if (/emergency-planning|vendor-rfp|water-leak|facade|life-safety|snow-removal|ev-charging/i.test(searchable)) return 'buildings';
  if (/22-1|disclosure|delinquen|late-fee|lien|budget|reserve|financial-statement|capital-project-loan|insurance|fannie|freddie/i.test(searchable)) return 'finance';
  if (/management-company|management-agreement|management-proposal|manager-license|self-managed|communication-system|technology/i.test(searchable)) return 'management';
  if (buildingCategories.has(post.category)) return 'buildings';
  if (financeCategories.has(post.category)) return 'finance';
  if (managementCategories.has(post.category)) return 'management';
  return 'governance';
}

export function getPostRegion(post: Pick<BlogPost, 'slug' | 'title'>): 'chicago' | 'north-shore' | 'both' {
  const searchable = `${post.slug} ${post.title}`;
  if (/north shore/i.test(searchable)) return 'north-shore';
  if (/chicago/i.test(searchable)) return 'chicago';
  return 'both';
}

export function getRelatedClusterPosts(post: BlogPost, posts: BlogPost[], count = 3): BlogPost[] {
  const cluster = getPostCluster(post);
  const sameCluster = posts.filter((candidate) =>
    candidate.slug !== post.slug && getPostCluster(candidate) === cluster
  );

  const related = sameCluster
    .sort((a, b) => {
      const sameCategoryA = a.category === post.category ? 1 : 0;
      const sameCategoryB = b.category === post.category ? 1 : 0;
      return sameCategoryB - sameCategoryA || b.date.localeCompare(a.date);
    })
    .slice(0, count);

  if (related.length < count) {
    related.push(...posts
      .filter((candidate) => candidate.slug !== post.slug && !related.some(({ slug }) => slug === candidate.slug))
      .sort((a, b) => b.date.localeCompare(a.date))
      .slice(0, count - related.length));
  }

  return related;
}

export function getClusterPosts(cluster: ContentCluster, posts: BlogPost[], count = 3): BlogPost[] {
  return posts
    .filter((post) => getPostCluster(post) === cluster)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count);
}

export function getNeighborhoodCluster(neighborhood: Neighborhood): ContentCluster {
  const types = neighborhood.propertyTypes.join(' ').toLowerCase();
  if (/high-rise/.test(types)) return 'buildings';
  if (/hoa|townhome/.test(types) && !/condominium/.test(types)) return 'governance';
  if (neighborhood.region === 'north-shore') return 'finance';
  return 'management';
}

function stableOffset(value: string, length: number): number {
  const total = [...value].reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return length === 0 ? 0 : total % length;
}

function rotate<T>(items: T[], offset: number): T[] {
  return items.length === 0 ? [] : [...items.slice(offset), ...items.slice(0, offset)];
}

export function getPostNeighborhoods(
  post: BlogPost,
  neighborhoods: Neighborhood[],
  posts: BlogPost[],
  count = 6,
): Neighborhood[] {
  const region = getPostRegion(post);
  const cluster = getPostCluster(post);
  const eligible = (candidate: Neighborhood) =>
    cluster !== 'buildings' || candidate.propertyTypes.some((type) => /condominium|high-rise/i.test(type));
  const chicago = neighborhoods.filter((candidate) => candidate.region !== 'north-shore' && eligible(candidate));
  const northShore = neighborhoods.filter((candidate) => candidate.region === 'north-shore' && eligible(candidate));
  const clusterPosts = posts
    .filter((candidate) => getPostCluster(candidate) === cluster)
    .sort((a, b) => a.date.localeCompare(b.date));
  const postIndex = Math.max(0, clusterPosts.findIndex(({ slug }) => slug === post.slug));
  const select = (items: Neighborhood[], requested: number) =>
    rotate(items, (postIndex * requested) % Math.max(1, items.length)).slice(0, requested);

  if (region === 'chicago') return select(chicago, count);
  if (region === 'north-shore') return select(northShore, count);

  const chicagoCount = Math.ceil(count / 2);
  return [
    ...select(chicago, chicagoCount),
    ...select(northShore, count - chicagoCount),
  ];
}

export function getNeighborhoodGuides(
  neighborhood: Neighborhood,
  posts: BlogPost[],
  count = 3,
): BlogPost[] {
  const primary = getNeighborhoodCluster(neighborhood);
  const supporting: Record<ContentCluster, ContentCluster[]> = {
    buildings: ['finance', 'governance', 'management'],
    finance: ['governance', 'management', 'buildings'],
    governance: ['finance', 'management', 'buildings'],
    management: ['finance', 'governance', 'buildings'],
  };
  const clusters = [primary, ...supporting[primary]];
  const guides: BlogPost[] = [];

  for (let index = 0; guides.length < count && index < clusters.length; index++) {
    const candidates = posts.filter((post) => getPostCluster(post) === clusters[index]);
    if (candidates.length === 0) continue;
    const offset = stableOffset(`${neighborhood.slug}-${clusters[index]}`, candidates.length);
    guides.push(rotate(candidates, offset)[0]);
  }

  return guides;
}
