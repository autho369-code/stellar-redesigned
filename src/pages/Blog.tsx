import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { blogPosts } from '../data/blog-posts';

function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Blog() {
  return (
    <>
      <SEOHead
        title="Property Management Blog | Stellar Property Management"
        description="Expert insights, tips, and resources for Chicago condo board members and property owners. Stay informed on property management best practices, Illinois regulations, and community governance."
        canonical="https://stellarpropertygroup.com/blog"
      />

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
                &amp; Property <em className="font-medium text-gold-600">Owners.</em>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Expert guidance on property management, board governance,
                financial planning, and building maintenance from the Stellar
                Property Management team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Index ──────────────────────────────────────────── */}
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
            Our team is here to help Chicago board members and property owners
            navigate the complexities of community management. Reach out for a
            free consultation.
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
