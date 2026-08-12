import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = join(root, 'src/data/blog-posts');
const neighborhoodSource = readFileSync(join(root, 'src/data/neighborhoods.ts'), 'utf8');
const neighborhoodSlugs = [...neighborhoodSource.matchAll(/\bslug:\s*'([^']+)'/g)].map((match) => match[1]);
const postSlugs = [];

for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.ts') || file === 'index.ts') continue;
  const source = readFileSync(join(blogDir, file), 'utf8');
  postSlugs.push(...[...source.matchAll(/\bslug:\s*'([^']+)'/g)].map((match) => match[1]));
}

if (postSlugs.length !== 52 || new Set(postSlugs).size !== 52) {
  throw new Error(`Expected 52 unique blog articles, found ${postSlugs.length}.`);
}
if (neighborhoodSlugs.length !== 83 || new Set(neighborhoodSlugs).size !== 83) {
  throw new Error(`Expected 83 unique service-area pages, found ${neighborhoodSlugs.length}.`);
}

const requiredConnections = [
  ['src/pages/BlogPost.tsx', ['getRelatedClusterPosts', 'getPostNeighborhoods', 'cluster.servicePath']],
  ['src/pages/NeighborhoodPage.tsx', ['getNeighborhoodGuides', 'neighborhoodClusterConfig.servicePath']],
  ['src/pages/services/BoardSupport.tsx', ['ClusterGuides cluster="governance"']],
  ['src/pages/services/FinancialManagement.tsx', ['ClusterGuides cluster="finance"']],
  ['src/pages/services/MaintenanceCoordination.tsx', ['ClusterGuides cluster="buildings"']],
  ['src/pages/services/CondominiumManagement.tsx', ['ClusterGuides cluster="management"']],
  ['src/pages/services/HOAManagement.tsx', ['ClusterGuides cluster="governance"']],
  ['src/pages/services/TownhomeManagement.tsx', ['ClusterGuides cluster="buildings"']],
  ['src/pages/services/ViolationManagement.tsx', ['ClusterGuides cluster="governance"']],
];

for (const [file, markers] of requiredConnections) {
  const source = readFileSync(join(root, file), 'utf8');
  for (const marker of markers) {
    if (!source.includes(marker)) throw new Error(`${file} is missing silo connection: ${marker}`);
  }
}

console.log(`Content silos verified: ${postSlugs.length} articles, ${neighborhoodSlugs.length} service areas, and 9 commercial/link surfaces.`);
