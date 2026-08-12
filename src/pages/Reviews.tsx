import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquareText, Star } from 'lucide-react';

const GOOGLE_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJb2zkwALSD4gRew3uNzt3klM';
const GOOGLE_MAPS_URL = 'https://www.google.com/maps?cid=6022006747972898171';

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Share Feedback | Stellar Property Management</title>
        <meta name="description" content="Share an honest Google review of your Stellar Property Management experience or send feedback directly to our Chicago team." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.stellarpropertygroup.com/reviews" />
      </Helmet>

      <section className="relative min-h-[78vh] bg-paper overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-[0.35] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#dfe8ef 1px, transparent 1px), linear-gradient(90deg, #dfe8ef 1px, transparent 1px)', backgroundSize: '96px 96px' }} />
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-36 pb-24 w-full">
          <div className="max-w-3xl mb-14">
            <p className="eyebrow text-gold-600 mb-6 flex items-center gap-4"><span className="accent-rule" />Your Experience Matters</p>
            <h1 className="font-display font-light text-5xl lg:text-6xl text-ink leading-[1.04] mb-8">Share honest <em className="font-medium text-gold-600">feedback.</em></h1>
            <p className="text-lg text-slate-600 font-light leading-relaxed">Whether your experience was positive, difficult, or somewhere in between, we want to hear it. Choose either option below—there is no incentive, screening step, or request for a particular rating.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" className="group bg-white p-9 lg:p-12 hover:bg-ivory-50 transition-colors">
              <Star className="w-9 h-9 text-gold-500 mb-8" strokeWidth={1.25} />
              <h2 className="font-display text-3xl text-ink mb-4">Post a Google review</h2>
              <p className="text-slate-600 font-light leading-relaxed mb-9">Describe your genuine experience publicly so boards, owners, and residents can make an informed decision.</p>
              <span className="inline-flex items-center gap-2 text-sm text-gold-600">Open Google review form <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </a>

            <Link to="/contact?inquiry=general&source=feedback-page" className="group bg-white p-9 lg:p-12 hover:bg-ivory-50 transition-colors">
              <MessageSquareText className="w-9 h-9 text-gold-500 mb-8" strokeWidth={1.25} />
              <h2 className="font-display text-3xl text-ink mb-4">Contact our team</h2>
              <p className="text-slate-600 font-light leading-relaxed mb-9">Send a service concern, compliment, or suggestion directly to Stellar so our team can follow up with you.</p>
              <span className="inline-flex items-center gap-2 text-sm text-gold-600">Send direct feedback <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-gold-600 transition-colors">Read all public Google reviews</a>
            <a href="tel:+17737280652" className="text-slate-500 hover:text-gold-600 transition-colors">Call 773.728.0652</a>
          </div>
        </div>
      </section>
    </>
  );
}
