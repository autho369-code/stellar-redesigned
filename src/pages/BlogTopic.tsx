import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, ChevronRight, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SEOHead } from '../components/seo/SEOHead';
import { ServiceFAQ } from '../components/seo/ServiceFAQ';
import { topicFaqs } from '../data/topic-faqs';
import { blogPosts } from '../data/blog-posts';
import {
  contentClusters,
  getClusterFromTopicSlug,
  getPostCluster,
  type ContentCluster,
} from '../data/content-silos';

const topicSeo: Record<ContentCluster, { title: string; description: string; intro: string }> = {
  governance: {
    title: 'Illinois Condo & HOA Board Governance Guides',
    description: 'Illinois condo and HOA board guidance on meetings, records, elections, rules, fiduciary duties, and association law for Chicago community leaders.',
    intro: 'Use these guides to prepare for meetings, maintain records, apply rules consistently, and understand when an Illinois association should involve licensed counsel.',
  },
  finance: {
    title: 'Condo & HOA Finance and Reserve Guides | Illinois',
    description: 'Practical Illinois condo and HOA guidance for budgets, reserve funds, assessments, collections, insurance, loans, and board financial reporting.',
    intro: 'Build stronger budgets, reserve plans, collection procedures, and financial controls with guidance written for condominium, HOA, and townhome boards.',
  },
  buildings: {
    title: 'Chicago Condo Building & Capital Planning Guides',
    description: 'Chicago condo and HOA guidance on maintenance, vendors, emergencies, capital projects, inspections, and long-term building operations.',
    intro: 'Plan preventive maintenance, vendor selection, emergency response, and capital work with practical guidance grounded in Chicago-area building operations.',
  },
  management: {
    title: 'Choosing a Condo or HOA Management Company',
    description: 'Board guides for comparing, selecting, changing, and improving condominium and HOA management companies in Chicago and the North Shore.',
    intro: 'Compare management proposals, evaluate service, plan a transition, and establish the operating standards your board should expect from a professional management company.',
  },
};

function formatDate(dateString: string): string {
  return new Date(`${dateString}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogTopic() {
  const { topic } = useParams<{ topic: string }>();
  const clusterKey = getClusterFromTopicSlug(topic);
  if (!clusterKey) return <Navigate to="/blog" replace />;

  const cluster = contentClusters[clusterKey];
  const seo = topicSeo[clusterKey];
  const posts = blogPosts.filter((post) => getPostCluster(post) === clusterKey);
  if (posts.length === 0) return <Navigate to="/blog" replace />;

  const canonical = `https://www.stellarpropertygroup.com${cluster.path}`;
  const otherTopics = (Object.entries(contentClusters) as Array<[ContentCluster, (typeof contentClusters)[ContentCluster]]>)
    .filter(([key]) => key !== clusterKey && blogPosts.some((post) => getPostCluster(post) === key));
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${canonical}#page`,
        url: canonical,
        name: seo.title,
        description: seo.description,
        isPartOf: { '@id': 'https://www.stellarpropertygroup.com/blog#page' },
        about: { '@type': 'Thing', name: cluster.label },
      },
      {
        '@type': 'ItemList',
        itemListElement: posts.map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `https://www.stellarpropertygroup.com/blog/${post.slug}`,
          name: post.title,
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.stellarpropertygroup.com/' },
          { '@type': 'ListItem', position: 2, name: 'Board Guides', item: 'https://www.stellarpropertygroup.com/blog' },
          { '@type': 'ListItem', position: 3, name: cluster.label, item: canonical },
        ],
      },
    ],
  };

  return (
    <>
      <SEOHead title={seo.title} description={seo.description} canonical={canonical} />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>

      <header className="relative overflow-hidden bg-paper border-b border-slate-200">
        <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)', backgroundSize: '96px 96px' }} aria-hidden />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-20 lg:pb-24">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-1.5 text-[10px] uppercase tracking-luxe text-slate-400 flex-wrap">
              <li><Link to="/" className="hover:text-gold-600">Home</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li><Link to="/blog" className="hover:text-gold-600">Board Guides</Link></li>
              <li><ChevronRight className="w-3 h-3" /></li>
              <li className="text-slate-500">{cluster.label}</li>
            </ol>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" />Board Resource Center</p>
              <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.03] text-balance">{cluster.label}</h1>
            </div>
            <p className="lg:col-span-4 text-lg text-slate-600 font-light leading-relaxed">{seo.intro}</p>
          </div>
        </div>
      </header>

      <main className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20">
          <section className="lg:col-span-8" aria-labelledby="topic-guides">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className="eyebrow text-gold-600 mb-4">Published Guidance</p>
                <h2 id="topic-guides" className="font-display text-4xl text-ink">Board guides in this topic</h2>
              </div>
              <span className="text-sm text-slate-500">{posts.length} guides</span>
            </div>
            <div className="border-t border-slate-200">
              {posts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group grid sm:grid-cols-12 gap-4 py-8 border-b border-slate-200 hover:bg-ivory-50 sm:px-5 sm:-mx-5 transition-colors">
                  <div className="sm:col-span-3">
                    <p className="text-[10px] uppercase tracking-luxe text-gold-600">{post.category}</p>
                    <p className="text-xs text-slate-400 mt-2">{formatDate(post.date)}</p>
                  </div>
                  <div className="sm:col-span-8">
                    <h3 className="font-display text-2xl text-ink group-hover:text-gold-600 transition-colors">{post.title}</h3>
                    <p className="text-sm text-slate-600 font-light leading-relaxed mt-3">{post.excerpt}</p>
                  </div>
                  <ArrowUpRight className="sm:col-span-1 w-5 h-5 text-slate-400 group-hover:text-gold-600" />
                </Link>
              ))}
            </div>
          </section>

          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-ink text-paper p-8 lg:p-10">
              <p className="eyebrow text-gold-300 mb-5">Related Service</p>
              <h2 className="font-display text-3xl mb-5">{cluster.serviceLabel}</h2>
              <p className="text-paper/65 font-light leading-relaxed mb-8">See how Stellar puts this guidance into practice for Chicago and North Shore community associations.</p>
              <Link to={cluster.servicePath} className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200">Explore the service <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="border border-slate-200 p-8">
              <h2 className="font-display text-2xl text-ink mb-5">Explore other topics</h2>
              <div className="space-y-4">
                {otherTopics.map(([, config]) => <Link key={config.path} to={config.path} className="flex items-center justify-between gap-4 text-sm text-slate-600 hover:text-gold-600"><span>{config.label}</span><ArrowRight className="w-4 h-4 shrink-0" /></Link>)}
              </div>
            </div>
          </aside>
        </div>
      </main>

      <ServiceFAQ items={topicFaqs[clusterKey]} title={`What boards ask about ${cluster.label.toLowerCase()}.`} />

      <section className="bg-ivory-100 border-t border-slate-200 py-20 lg:py-24 text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="eyebrow text-gold-600 mb-6">Put the guidance to work</p>
          <h2 className="font-display font-light text-4xl lg:text-5xl text-ink mb-7">Talk with an association management specialist.</h2>
          <p className="text-slate-600 font-light leading-relaxed mb-9">Tell us what your board is facing and request a management proposal built around your community.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to={`/contact?inquiry=quote&source=topic-${clusterKey}`} className="inline-flex items-center gap-2 bg-ink text-paper px-8 py-4 text-sm hover:bg-navy-700">Request a Proposal <ArrowRight className="w-4 h-4" /></Link>
            <a href="tel:+17737280652" className="inline-flex items-center gap-2 border border-slate-300 text-ink px-8 py-4 text-sm hover:border-gold-500"><Phone className="w-4 h-4" />773.728.0652</a>
          </div>
        </div>
      </section>
    </>
  );
}
