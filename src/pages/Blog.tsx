import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { SEOHead } from '../components/seo/SEOHead';
import { blogPosts } from '../data/blog-posts';
import { contentClusters, getClusterPosts, type ContentCluster } from '../data/content-silos';

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Blog() {
  const topics = (Object.entries(contentClusters) as Array<[ContentCluster, (typeof contentClusters)[ContentCluster]]>)
    .filter(([key]) => getClusterPosts(key, blogPosts, 1).length > 0);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://www.stellarpropertygroup.com/blog#page',
    url: 'https://www.stellarpropertygroup.com/blog',
    name: 'Illinois Condo and HOA Board Guides',
    description: 'Illinois condominium, HOA, and townhome association guidance for Chicagoland board members.',
    publisher: { '@id': 'https://www.stellarpropertygroup.com/#business' },
    hasPart: topics.map(([, topic]) => ({
      '@type': 'CollectionPage',
      name: topic.label,
      url: `https://www.stellarpropertygroup.com${topic.path}`,
    })),
  };

  return (
    <>
      <SEOHead
        title="Illinois Condo & HOA Board Guides | Stellar"
        description="Illinois condominium, HOA, and townhome association guidance for Chicagoland board members: governance, reserves, maintenance, compliance, and community management."
        canonical="https://www.stellarpropertygroup.com/blog"
      />
      <Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative bg-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4">
                <span className="accent-rule" />
                The Journal
              </p>
              <h1 className="font-display font-light text-5xl lg:text-6xl xl:text-7xl text-ink leading-[1.04] text-balance">
                Insights for Board Members
                <br />
                &amp; Community <em className="font-medium text-gold-600">Leaders.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Practical guidance for condominium, HOA, and townhome
                association boards on governance, financial planning,
                compliance, and building maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Index ──────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-ivory-100 border-t border-slate-200" aria-labelledby="guide-topics">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-gold-600 mb-5 flex items-center gap-4"><span className="accent-rule" />Choose a Topic</p>
              <h2 id="guide-topics" className="font-display font-light text-4xl lg:text-5xl text-ink">Practical guidance organized around <em className="font-medium text-gold-600">board decisions.</em></h2>
            </div>
            <p className="lg:col-span-4 lg:col-start-9 text-slate-600 font-light leading-relaxed">Start with the issue your association is facing. Each topic connects board education with the relevant management service.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {topics.map(([key, topic]) => {
              const topicPosts = getClusterPosts(key, blogPosts, blogPosts.length);
              return (
                <Link key={key} to={topic.path} className="group bg-white p-8 lg:p-10 hover:bg-paper transition-colors">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-luxe text-gold-600 mb-4">{topicPosts.length} Published Guides</p>
                      <h3 className="font-display text-2xl lg:text-3xl text-ink group-hover:text-gold-600 transition-colors">{topic.label}</h3>
                      <p className="text-sm text-slate-600 font-light leading-relaxed mt-4">{topic.description}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-gold-600 shrink-0" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="border-t border-slate-200">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group grid lg:grid-cols-12 gap-4 lg:gap-8 items-baseline py-10 lg:py-12 border-b border-slate-200 transition-colors duration-300 hover:bg-ivory-50 lg:px-6 lg:-mx-6"
              >
                <div className="lg:col-span-3">
                  <p className="text-[10px] uppercase tracking-luxe text-gold-600 mb-2">{post.category}</p>
                  <p className="text-[10px] uppercase tracking-luxe text-slate-400">
                    {formatDate(post.date)} · {post.readTime}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <h2 className="font-display text-2xl lg:text-3xl text-ink group-hover:text-navy-700 transition-colors duration-300 mb-4">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 font-light leading-relaxed max-w-3xl">{post.excerpt}</p>
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

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="relative py-28 lg:py-36 bg-ink text-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#f6f8fa 1px, transparent 1px), linear-gradient(90deg, #f6f8fa 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
          aria-hidden
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <p className="eyebrow text-gold-300 mb-8 flex items-center justify-center gap-4">
            <span className="accent-rule" /> A Free Consultation <span className="accent-rule" />
          </p>
          <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.06] mb-8 text-balance">
            Have questions about
            <br />
            property <em className="font-medium text-gold-300">management?</em>
          </h2>
          <p className="text-paper/55 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Our team helps Chicagoland condominium, HOA, and townhome boards
            navigate the complexities of community association management.
            Reach out for a free consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-white font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:7737280652"
              className="inline-flex items-center gap-3 border border-paper/25 text-paper hover:border-gold-400 hover:text-gold-300 font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
            >
              <Phone className="w-4 h-4" strokeWidth={1.25} /> 773.728.0652
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
