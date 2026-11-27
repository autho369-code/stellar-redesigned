import { useEffect, useState } from 'react';
import { getPillarContent, getPillarGuides } from '../data/pillar-links';
import { getBody, hasBody, loadBody } from '../data/article-bodies';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight, ChevronRight, Phone } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { getBlogPostBySlug, allBlogPosts, blogPosts } from '../data/blog-posts';
import { neighborhoods } from '../data/neighborhoods';
import { contentClusters, getPostCluster, getPostNeighborhoods, getPostRegion, getRelatedClusterPosts } from '../data/content-silos';
import { getPostSilo, getSiloSiblings, moneyPageLabels } from '../data/post-silos';
import { ctaPosts, splitForMidCta, withoutClosingCta } from '../data/ctaPosts';
import ProposalCta from '../components/ProposalCta';
import SeriesNav from '../components/seo/SeriesNav';
import NearbyAreas from '../components/seo/NearbyAreas';
import { getClusterFor, getNearbyAreas, getSeriesNav } from '../data/clusters';
import { getAreasLinkingPost } from '../data/areas';
import TrustBar from '../components/TrustBar';
import ArticleToc, { type TocHeading } from '../components/ArticleToc';
import { brand } from '../brand/brand.config';

const ENTITIES: Record<string, string> = {
  amp: '&', lt: '<', gt: '>', quot: '"', nbsp: ' ', rsquo: '’', lsquo: '‘',
  rdquo: '”', ldquo: '“', mdash: '—', ndash: '–', sect: '§', hellip: '…',
};

function htmlToText(html: string): string {
  return html
    .replace(/<(figure|svg|script|style)[\s\S]*?<\/\1>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(#\d+|[a-z]+);/g, (entity, name: string) =>
      name.startsWith('#') ? String.fromCharCode(Number(name.slice(1))) : ENTITIES[name] ?? entity)
    .replace(/\s+/g, ' ')
    .trim();
}

// Guides written as question headings already answer each question in the
// section below it. Exposing those exact on-page pairs as FAQPage gives answer
// engines a clean question → answer map; nothing is added that is not visible.
function getFaqPairs(content: string): Array<{ question: string; answer: string }> {
  const headings = [...content.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)];
  return headings.flatMap((heading, index) => {
    const question = htmlToText(heading[1]);
    if (!question.endsWith('?')) return [];
    const start = heading.index! + heading[0].length;
    const end = headings[index + 1]?.index ?? content.length;
    const section = content
      .slice(start, end)
      .replace(/<p>(Related reading|Read next|Also useful|Keep reading):[\s\S]*?<\/p>/g, '');
    const answer = htmlToText(section);
    return answer ? [{ question, answer }] : [];
  });
}

// Give each h2 of the guide an id so the "On this page" list can link to it.
// Runs after the mid-CTA split, so the split point never moves.
function withHeadingIds(parts: string[]): { parts: string[]; headings: TocHeading[] } {
  const headings: TocHeading[] = [];
  const used = new Set<string>();
  const out = parts.map((html) =>
    html.replace(/<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/g, (whole, attrs: string | undefined, inner: string) => {
      const text = htmlToText(inner);
      const existing = attrs?.match(/\bid="([^"]+)"/)?.[1];
      let id = existing ?? (text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'section');
      if (!existing) {
        const base = id;
        for (let n = 2; used.has(id); n += 1) id = `${base}-${n}`;
      }
      used.add(id);
      headings.push({ id, text });
      return existing ? whole : `<h2${attrs ?? ''} id="${id}">${inner}</h2>`;
    }),
  );
  return { parts: out, headings };
}

const PROSE_CLASS = `
  [&>h2]:scroll-mt-28
  [&>h2]:font-display [&>h2]:font-light [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:text-ink [&>h2]:mt-14 [&>h2]:mb-5
  [&>h3]:font-display [&>h3]:text-xl [&>h3]:text-ink [&>h3]:mt-10 [&>h3]:mb-4
  [&>p]:text-slate-600 [&>p]:font-light [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
  [&>ul]:my-6 [&>ul]:space-y-3 [&>ul]:list-disc [&>ul]:pl-6
  [&>ul>li]:text-slate-600 [&>ul>li]:font-light [&>ul>li]:text-lg [&>ul>li]:leading-relaxed
  [&_a]:text-gold-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-gold-300 hover:[&_a]:text-gold-500 hover:[&_a]:decoration-gold-500 [&_a]:transition-colors
  [&_strong]:text-ink [&_strong]:font-semibold
  [&>table]:my-8 [&>table]:w-full [&>table]:border-collapse [&>table]:text-left [&>table]:text-base
  [&_th]:border-b-2 [&_th]:border-slate-300 [&_th]:py-3 [&_th]:pr-4 [&_th]:align-bottom [&_th]:font-display [&_th]:font-normal [&_th]:text-ink
  [&_td]:border-b [&_td]:border-slate-200 [&_td]:py-4 [&_td]:pr-4 [&_td]:align-top [&_td]:font-light [&_td]:leading-relaxed [&_td]:text-slate-600
  [&_td:first-child]:font-normal [&_td:first-child]:text-ink sm:[&_td:first-child]:whitespace-nowrap
`;

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  // In the browser the bundle carries no article bodies. Arriving by a link
  // inside the site, load this guide's body, then render again.
  const [, setBodyLoads] = useState(0);
  useEffect(() => {
    if (!post || hasBody(post)) return;
    let active = true;
    loadBody(post.slug).then(() => active && setBodyLoads((n) => n + 1));
    return () => {
      active = false;
    };
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const clusterKey = getPostCluster(post);
  const cluster = contentClusters[clusterKey];
  const postRegion = getPostRegion(post);
  // Reverse silo: the guide pushes authority up to its one money page, and
  // related reading comes from the same silo before anything else.
  const silo = getPostSilo(post.slug);
  const siloSiblings = getSiloSiblings(post.slug, blogPosts);
  const bodyGuideSlugs = new Set(getPillarGuides(post, blogPosts).map((guide) => guide.slug));
  const relatedPosts = [
    ...siloSiblings,
    ...getRelatedClusterPosts(post, blogPosts, 6).filter((candidate) => !siloSiblings.includes(candidate)),
  ].filter((candidate) => !bodyGuideSlugs.has(candidate.slug)).slice(0, 3);
  const servicePath = silo?.money ?? cluster.servicePath;
  const serviceLabel = silo ? moneyPageLabels[silo.money] : cluster.serviceLabel;
  const locationLinks = getPostNeighborhoods(post, neighborhoods, allBlogPosts);
  // "Request a flat-fee proposal" blocks on the listed guides: the end block
  // replaces the guide's own closing contact sentence, and the mid card sits
  // before the heading nearest the middle (src/data/ctaPosts.ts).
  const cta = ctaPosts[post.slug];
  const fullBody = getPillarContent(post, blogPosts);
  const bodyHtml = cta ? withoutClosingCta(post.slug, fullBody) : fullBody;
  const rawParts = cta ? splitForMidCta(bodyHtml) : null;
  const { parts: idParts, headings: tocHeadings } = withHeadingIds(rawParts ?? [bodyHtml]);
  const bodyParts = rawParts ? idParts : null;
  const bodyWithIds = idParts[0];
  const showToc = tocHeadings.length >= 3;
  const faqPairs = getFaqPairs(cta ? withoutClosingCta(post.slug, getBody(post)) : getBody(post));

  // Reverse-silo modules (src/data/clusters.ts). Guides not yet in a cluster
  // (unpublished ones) keep the older related-posts and area sections below.
  const clusterEntry = getClusterFor(post.slug);
  const linkedInBody = new Set(
    [...bodyHtml.matchAll(/href="\/blog\/([^"#?]+)"/g)].map((match) => match[1]),
  );
  const seriesNav = clusterEntry ? getSeriesNav(post.slug, linkedInBody) : null;
  const guideTitles = new Map(blogPosts.map((guide) => [guide.slug, guide.title]));
  // The brief's area pages for this guide, plus any upgraded area page that
  // links this guide, so those links are always two-way.
  const nearbyAreas = [...new Set([...getNearbyAreas(post.slug), ...(clusterEntry ? getAreasLinkingPost(post.slug) : [])])]
    .map((slug) => neighborhoods.find((neighborhood) => neighborhood.slug === slug))
    .filter((neighborhood): neighborhood is (typeof neighborhoods)[number] => !!neighborhood)
    .map(({ slug, name }) => ({ slug, name }));
  const faqSchema = faqPairs.length >= 2
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqPairs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      }
    : null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.dateModified ?? post.date,
    image: post.featuredImage
      ? `https://www.stellarpropertygroup.com${post.featuredImage}`
      : 'https://www.stellarpropertygroup.com/images/stellar-property-management-og.jpg',
    author: {
      '@type': 'Person',
      '@id': 'https://www.stellarpropertygroup.com/about#mirsad-cerimovic',
      name: 'Mirsad Cerimovic',
      honorificSuffix: 'CAM, CMCA, AMS',
      jobTitle: 'Community Association Manager',
      url: 'https://www.stellarpropertygroup.com/about/mirsad-cerimovic',
      worksFor: {
        '@type': 'Organization',
        '@id': 'https://www.stellarpropertygroup.com/#organization',
        name: 'Stellar Property Management',
      },
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.stellarpropertygroup.com/#organization',
      name: 'Stellar Property Management',
      url: 'https://www.stellarpropertygroup.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.stellarpropertygroup.com/logo-icon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.stellarpropertygroup.com/blog/${post.slug}`,
    },
    ...(post.sources?.length
      ? { citation: post.sources.map((source) => source.url) }
      : {}),
  };

  return (
    <>
      <SEOHead
        title={post.seoTitle ?? (post.title.length > 62 ? `${post.title.slice(0, 59).trimEnd()}…` : post.title)}
        description={post.metaDescription}
        canonical={`https://www.stellarpropertygroup.com/blog/${post.slug}`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="relative bg-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgb(var(--color-ivory-200)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-ivory-200)) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-14 lg:pb-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-1.5 text-[11px] uppercase tracking-luxe text-slate-600 flex-wrap">
              <li>
                <Link to="/" className="hover:text-gold-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3" strokeWidth={1.25} />
              </li>
              <li>
                <Link to="/blog" className="hover:text-gold-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3" strokeWidth={1.25} />
              </li>
              <li>
                <Link to={cluster.path} className="hover:text-gold-600 transition-colors">
                  {cluster.label}
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3 h-3" strokeWidth={1.25} />
              </li>
              <li className="text-slate-500 truncate max-w-xs sm:max-w-md">
                {post.title}
              </li>
            </ol>
          </nav>

          <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
            <span className="accent-rule" />
            {post.category}
          </p>
          <h1 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.06] text-balance mb-8">
            {post.title}
          </h1>
          <p className="text-[10px] uppercase tracking-luxe text-slate-500">
            <Link to="/about/mirsad-cerimovic" rel="author" className="hover:text-gold-600 transition-colors">{post.author}</Link> · {formatDate(post.date)} · {post.readTime}
          </p>
        </div>
      </header>
      <TrustBar />

      {/* ── Post Content ───────────────────────────────────────── */}
      <article className="relative bg-white border-t border-slate-200 py-16 lg:py-24">
        {showToc && (
          <div className="hidden xl:block absolute inset-y-0 left-[max(1.5rem,calc(50%-41rem))] w-56 py-24" aria-hidden={false}>
            <ArticleToc headings={tocHeadings} />
          </div>
        )}
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          {bodyParts ? (
            <>
              <div data-article-body className={PROSE_CLASS} dangerouslySetInnerHTML={{ __html: bodyParts[0] }} />
              <ProposalCta variant="mid" source={`blog-${post.slug}-mid`} page={post.slug} hook={cta.hook} />
              <div data-article-body className={PROSE_CLASS} dangerouslySetInnerHTML={{ __html: bodyParts[1] }} />
            </>
          ) : (
            <div data-article-body className={PROSE_CLASS} dangerouslySetInnerHTML={{ __html: bodyWithIds }} />
          )}
          {seriesNav && clusterEntry && (
            <SeriesNav links={seriesNav} clusterName={clusterEntry.cluster.name} titles={guideTitles} />
          )}
          <NearbyAreas areas={nearbyAreas} />
          {cta && <ProposalCta variant="end" source={`blog-${post.slug}-end`} page={post.slug} />}
          {post.sources && post.sources.length > 0 && (
            <aside className="mt-16 border-t border-slate-200 pt-8" aria-labelledby="article-sources">
              <h2 id="article-sources" className="font-display text-2xl text-ink mb-5">
                Primary sources and further reading
              </h2>
              <ul className="space-y-3">
                {post.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-600 underline underline-offset-2 hover:text-gold-500"
                    >
                      {source.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          {/* Author box: substantiates the Article author entity and gives every
              guide an internal link into the founder profile. */}
          <aside className="mt-16 border-t border-slate-200 pt-8" aria-labelledby="article-author">
            <h2 id="article-author" className="sr-only">About the author</h2>
            <div className="flex flex-wrap items-start gap-6">
              <img
                src="/images/mirsad-cerimovic.jpg"
                alt="Mirsad Cerimovic"
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
                className="w-16 h-16 shrink-0 border border-gold-400/60 object-cover"
              />
              <div className="flex-1 min-w-[16rem]">
                <p className="font-display text-xl text-ink mb-1">
                  <Link
                    to="/about/mirsad-cerimovic"
                    rel="author"
                    className="hover:text-gold-600 transition-colors"
                  >
                    Mirsad Cerimovic, CAM, CMCA, AMS
                  </Link>
                </p>
                <p className="text-[10px] uppercase tracking-luxe text-slate-500 mb-4">
                  Founder &amp; Principal · Stellar Property Management
                </p>
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  Mirsad founded Stellar in 2007 and manages more than 30 Chicago-area
                  condominium, HOA, and townhome associations. He is a licensed
                  Illinois Community Association Manager and writes the
                  firm&rsquo;s board guides on Illinois association law,
                  reserves, and governance.{' '}
                  <Link
                    to="/about/mirsad-cerimovic"
                    className="text-gold-600 underline underline-offset-2 hover:text-gold-500 transition-colors"
                  >
                    Full profile and credentials
                  </Link>
                  .
                </p>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-paper border-t border-slate-200 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-gold-600 mb-5 flex items-center gap-4"><span className="accent-rule" />Topic Path</p>
            <h2 className="font-display font-light text-3xl lg:text-4xl text-ink leading-tight mb-5">{cluster.label}</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-7">{cluster.description}</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              <Link to={cluster.path} className="inline-flex items-center gap-2 text-sm text-gold-600 hover:text-gold-500">
                All {cluster.label} guides <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to={servicePath} className="inline-flex items-center gap-2 text-sm text-ink hover:text-gold-600">
                Explore {serviceLabel} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-slate-200 pt-8 lg:pt-0 lg:pl-12">
            <p className="text-[11px] uppercase tracking-luxe text-slate-600 mb-5">Management in the communities we serve</p>
            {!clusterEntry && <div className="flex flex-wrap gap-3 mb-7">
              {locationLinks.map((neighborhood) => (
                <Link key={neighborhood.slug} to={`/property-management-${neighborhood.slug}`} className="border border-slate-200 bg-white px-4 py-2 text-sm text-ink hover:border-gold-400 hover:text-gold-600 transition-colors">
                  {neighborhood.name}
                </Link>
              ))}
            </div>}
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {postRegion !== 'north-shore' && <Link to="/property-management-chicago" className="text-sm text-ink hover:text-gold-600">Chicago management</Link>}
              {postRegion !== 'chicago' && <Link to="/property-management-north-shore" className="text-sm text-ink hover:text-gold-600">North Shore management</Link>}
              <Link to="/service-areas" className="text-sm text-ink hover:text-gold-600">All service areas</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Posts ──────────────────────────────────────── */}
      {!clusterEntry && relatedPosts.length > 0 && (
        <section className="bg-ivory-100 border-t border-slate-200 py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
            <div className="max-w-2xl mb-14">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                Keep Reading
              </p>
              <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
                Related <em className="font-medium text-gold-600">articles.</em>
              </h2>
            </div>

            <div className="border-t border-slate-200">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group grid lg:grid-cols-12 gap-4 lg:gap-8 items-baseline py-8 lg:py-10 border-b border-slate-200 transition-colors duration-300 hover:bg-ivory-50 lg:px-6 lg:-mx-6"
                >
                  <p className="lg:col-span-3 text-[10px] uppercase tracking-luxe text-gold-600">
                    {related.category}
                  </p>
                  <div className="lg:col-span-8">
                    <h3 className="font-display text-xl lg:text-2xl text-ink group-hover:text-navy-700 transition-colors duration-300 mb-3">
                      {related.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed max-w-3xl">{related.excerpt}</p>
                  </div>
                  <span className="lg:col-span-1 justify-self-start lg:justify-self-end self-center">
                    <ArrowUpRight
                      className="w-5 h-5 text-slate-400 transition-all duration-300 group-hover:text-gold-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.25}
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="relative py-28 lg:py-36 bg-ink text-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgb(var(--color-paper)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--color-paper)) 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
          aria-hidden
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-gold-300 mb-8 flex items-center justify-center gap-4">
            <span className="accent-rule" /> A Free Consultation <span className="accent-rule" />
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.06] mb-8 text-balance">
            Ready to elevate your
            {' '}<br />
            community <em className="font-medium text-gold-300">management?</em>
          </h2>
          <p className="text-paper/55 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Join the 30+ Chicago-area associations that trust Stellar Property
            Management. Contact us today for a free consultation and discover why we
            maintain a 96% client retention rate since 2007.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-300 text-ink font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${brand.phone.digits}`}
              className="inline-flex items-center gap-3 border border-paper/25 text-paper hover:border-gold-400 hover:text-gold-300 font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" strokeWidth={1.25} /> {brand.phone.dotted}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
