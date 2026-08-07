import { Quote, Star } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { StarRating } from '@/components/StarRating';
import { CtaBanner } from '@/components/CtaBanner';
import { reviews } from '@/data/salon';

export function ReviewsPage() {
  useSeo({
    title: 'Avis Clients — Coiff\'System Strasbourg Neudorf',
    description: 'Découvrez les avis de nos clients fidèles à Strasbourg-Neudorf. Coupe femme, homme, enfant, coloration, coiffure de mariée — note moyenne 5/5.',
  });

  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="pt-20">
      <section className="bg-ink-900 py-24 text-paper-50 sm:py-28">
        <div className="container-content text-center">
          <p className="eyebrow text-gold-400">Avis clients</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Ils nous font confiance
          </h1>
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <StarRating rating={5} size={24} />
              <span className="font-serif text-3xl font-semibold text-gold-400">
                {avg.toFixed(1)}
              </span>
            </div>
            <p className="text-sm text-paper-200/60">
              {reviews.length} avis · note moyenne
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper-50 py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading
            eyebrow="Témoignages"
            title="La parole à nos clients"
            description="Une clientèle fidèle, multigénérationnelle, qui revient avec plaisir."
          />

          <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {reviews.map((review, i) => (
              <ReviewCard key={review.author} review={review} index={i} />
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-ink-900 p-8 text-center text-paper-50 sm:p-12">
            <Quote size={32} className="mx-auto text-gold-400" />
            <p className="mx-auto mt-4 max-w-xl font-serif text-xl italic leading-relaxed text-paper-100 sm:text-2xl">
              "Un salon où l'on se sent comme à la maison, avec un savoir-faire de champion.
              C'est rare, et ça se mérite."
            </p>
            <p className="mt-4 text-sm text-paper-200/60">— La clientèle de Coiff'System</p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''} break-inside-avoid flex flex-col rounded-2xl border border-ink-100 bg-paper-50 p-6`}
    >
      <div className="flex items-center justify-between">
        <StarRating rating={review.rating} />
        <Quote size={18} className="text-ink-200" />
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">"{review.text}"</p>
      <div className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-serif text-sm font-semibold text-paper-50">
          {review.author.charAt(0)}
        </span>
        <div>
          <p className="font-serif text-base font-semibold text-ink-900">{review.author}</p>
          <p className="text-xs text-ink-400">{review.context} · {review.date}</p>
        </div>
      </div>
    </div>
  );
}
