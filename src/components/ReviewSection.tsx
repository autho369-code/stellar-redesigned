import ReviewCards from './ReviewCards';

/** "What boards say": the three Google reviews, placed above a page's final call to action. */
export default function ReviewSection({ placement }: { placement: string }) {
  return (
    <section className="py-16 lg:py-20 bg-paper border-t border-slate-200" aria-labelledby="page-reviews">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <h2 id="page-reviews" className="font-display font-light text-4xl text-ink leading-[1.08] mb-10">
          What boards say
        </h2>
        <ReviewCards placement={placement} />
      </div>
    </section>
  );
}
