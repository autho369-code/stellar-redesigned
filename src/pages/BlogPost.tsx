import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight, ChevronRight, Phone } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { getBlogPostBySlug, blogPosts } from '../data/blog-posts';

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

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stellar Property Management',
      url: 'https://www.stellarpropertygroup.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.stellarpropertygroup.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.metaDescription}
        canonical={`https://www.stellarpropertygroup.com/blog/${post.slug}`}
        ogType="article"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      {/* ── Header ─────────────────────────────────────────────── */}
      <header className="relative bg-paper overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)',
            backgroundSize: '96px 96px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 lg:pt-44 pb-14 lg:pb-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-1.5 text-[10px] uppercase tracking-luxe text-slate-400 flex-wrap">
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
            {post.author} · {formatDate(post.date)} · {post.readTime}
          </p>
        </div>
      </header>

      {/* ── Post Content ───────────────────────────────────────── */}
      <article className="bg-white border-t border-slate-200 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <div
            className="
              [&>h2]:font-display [&>h2]:font-light [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:text-ink [&>h2]:mt-14 [&>h2]:mb-5
              [&>h3]:font-display [&>h3]:text-xl [&>h3]:text-ink [&>h3]:mt-10 [&>h3]:mb-4
              [&>p]:text-slate-600 [&>p]:font-light [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
              [&>ul]:my-6 [&>ul]:space-y-3 [&>ul]:list-disc [&>ul]:pl-6
              [&>ul>li]:text-slate-600 [&>ul>li]:font-light [&>ul>li]:text-lg [&>ul>li]:leading-relaxed
              [&_a]:text-gold-600 [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-gold-300 hover:[&_a]:text-gold-500 hover:[&_a]:decoration-gold-500 [&_a]:transition-colors
              [&_strong]:text-ink [&_strong]:font-semibold
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* ── Related Posts ──────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
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
            Ready to elevate your
            <br />
            community <em className="font-medium text-gold-300">management?</em>
          </h2>
          <p className="text-paper/55 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Join 42 Chicago-area associations that trust Stellar Property
            Group. Contact us today for a free consultation and discover why we
            maintain a 96% client retention rate.
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
