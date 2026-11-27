import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import { sixDisciplines as services } from '../data/six-disciplines';

export default function SixDisciplines() {
  return (
    <section className="py-24 lg:py-28 bg-paper border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600">
              <span className="accent-rule" />
              The Practice
            </p>
            <h2 className="font-display font-light text-4xl lg:text-5xl text-ink leading-[1.08]">
              Six disciplines.
              {' '}<br />
              One <em className="font-medium text-gold-500">standard</em> of care.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="text-slate-600 font-light leading-relaxed">
              Everything an association needs, practiced the way an
              architecture studio drafts: precisely, deliberately, and in
              plain sight of the board.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-slate-200">
          {services.map(({ n, title, desc, href }) => (
            <Link
              key={n}
              to={href}
              className="group relative border-r border-b border-slate-200 p-9 lg:p-11 transition-colors duration-300 hover:bg-ivory-100"
            >
              <span className="font-display font-light text-5xl lg:text-6xl text-slate-500 group-hover:text-gold-600 transition-colors duration-300 block mb-8 select-none" aria-hidden="true">
                {n}
              </span>
              <h3 className="font-display text-xl lg:text-2xl text-ink mb-4">{title}</h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed mb-8">{desc}</p>
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-luxe text-gold-600">
                Discover <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
