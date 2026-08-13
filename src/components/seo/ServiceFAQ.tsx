import { Helmet } from 'react-helmet-async';

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  items: ServiceFAQItem[];
  title?: string;
}

export function ServiceFAQ({
  items,
  title = 'Questions association boards ask before choosing a manager.',
}: ServiceFAQProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };

  return (
    <section className="border-y border-slate-200 bg-paper py-24 lg:py-28">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-4">
          <p className="eyebrow mb-6 flex items-center gap-4 text-gold-600">
            <span className="accent-rule" /> Board Questions
          </p>
          <h2 className="text-balance font-display text-4xl font-light leading-tight text-ink">
            {title}
          </h2>
          <p className="mt-6 text-sm font-light leading-relaxed text-slate-600">
            Clear scope, clear pricing, and a transition plan your board can evaluate before making a decision.
          </p>
        </div>
        <div className="border-t border-slate-200 lg:col-span-7 lg:col-start-6">
          {items.map(({ question, answer }) => (
            <details key={question} className="group border-b border-slate-200 py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-xl text-ink marker:content-none">
                <span>{question}</span>
                <span className="text-2xl font-light text-gold-600 transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-7 pr-10 font-light leading-relaxed text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
