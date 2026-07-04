import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLink?: string;
  primaryText?: string;
  secondaryText?: string;
}

export function CTASection({
  title = 'Ready to Elevate Your Community Management?',
  description = 'Join 42 Chicago-area associations that trust Stellar Property Management. Contact us today for a free consultation and discover why we maintain a 96% client retention rate.',
  primaryLink = '/contact',
  primaryText = 'Get a Free Consultation',
  secondaryText = '773.728.0652',
}: CTASectionProps) {
  const words = title.trim().split(' ');
  const lastWord = words.pop();

  return (
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
          <span className="accent-rule" /> A Private Consultation <span className="accent-rule" />
        </p>
        <h2 className="font-display font-light text-4xl sm:text-5xl lg:text-6xl leading-[1.06] mb-8 text-balance">
          {words.join(' ')} <em className="font-medium text-gold-300">{lastWord}</em>
        </h2>
        <p className="text-paper/55 text-lg font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link
            to={primaryLink}
            className="group inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-white font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
          >
            {primaryText}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${secondaryText.replace(/\./g, '')}`}
            className="inline-flex items-center gap-3 border border-paper/25 text-paper hover:border-gold-400 hover:text-gold-300 font-medium px-10 py-4 transition-colors duration-300 text-sm tracking-wide"
          >
            <Phone className="w-4 h-4" strokeWidth={1.25} />
            {secondaryText}
          </a>
        </div>
      </div>
    </section>
  );
}
