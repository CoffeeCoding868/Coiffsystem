import { Phone, Calendar, MapPin, ArrowRight, Scissors } from 'lucide-react';
import { salon, formatDayHours, getTodayHours, isOpenNow } from '@/data/salonInfo';
import { routeToPath, handleInternalLinkClick } from '@/router';
import { useSeo } from '@/hooks/useSeo';
import { useReveal } from '@/hooks/useReveal';
import { ChampionBadge } from '@/components/ChampionBadge';
import { SectionHeading } from '@/components/SectionHeading';
import { StarRating } from '@/components/StarRating';
import { CtaBanner } from '@/components/CtaBanner';
import { homeFeatures, reviews } from '@/data/salon';

const heroImg = 'https://images.pexels.com/photos/7750108/pexels-photo-7750108.jpeg?auto=compress&cs=tinysrgb&w=1600';
const aboutImg = 'https://images.pexels.com/photos/8834076/pexels-photo-8834076.jpeg?auto=compress&cs=tinysrgb&w=1200';

export function HomePage() {
  useSeo({
    title: "Coiff'System — Coiffeur mixte à Strasbourg Neudorf | Champion du monde 2010",
    description: 'Salon de coiffure mixte à Strasbourg-Neudorf. Femme, homme, enfant. Coloration, balayage, coiffure de mariée. Salon familial champion du monde 2010 & d\'Europe 2011. Prenez rendez-vous au 03 88 34 26 77.',
  });

  const today = getTodayHours();
  const { ref: introRef, visible: introVisible } = useReveal<HTMLDivElement>();

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-ink-900">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Intérieur du salon Coiff'System à Strasbourg"
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/50 to-ink-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 to-transparent" />
        </div>

        <div className="relative container-content flex min-h-screen flex-col justify-center pt-20">
          <div className="max-w-2xl animate-fade-up">
            <ChampionBadge size="md" />
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-paper-50 sm:text-6xl md:text-7xl">
              L'art de la coupe,<br />
              <span className="text-gold-400">à Strasbourg Neudorf</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-200/80">
              Salon de coiffure mixte, familial et chaleureux. Femme, homme, enfant.
              Un savoir-faire reconnu au plus haut niveau, au cœur du Neudorf.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={routeToPath('contact')} onClick={(e) => handleInternalLinkClick(e, 'contact')} className="btn-gold">
                <Calendar size={18} /> Prendre rendez-vous
              </a>
              <a href={`tel:${salon.phoneRaw}`} className="btn-outline !border-paper-200/30 !text-paper-50 hover:!bg-paper-50 hover:!text-ink-900">
                <Phone size={18} /> {salon.phone}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-paper-200/60">
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-gold-400" />
                {salon.address}, {salon.city}
              </span>
              <span className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${isOpenNow() ? 'bg-success-500' : 'bg-paper-200/40'}`} />
                {isOpenNow() ? 'Ouvert maintenant' : 'Fermé'} · {formatDayHours(today)}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px gold-divider" />
      </section>

      {/* FEATURES STRIP */}
      <section className="bg-paper-50 py-16">
        <div className="container-content">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 sm:grid-cols-4">
            {homeFeatures.slice(0, 4).map((feature) => (
              <div
                key={feature.label}
                className="group flex flex-col items-center gap-3 bg-paper-50 p-6 text-center transition-colors hover:bg-paper-100"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900/5 text-ink-900 transition-colors group-hover:bg-gold-500/15 group-hover:text-gold-600">
                  <feature.icon size={22} />
                </span>
                <div>
                  <p className="font-serif text-base font-semibold text-ink-900">{feature.label}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO + IMAGE */}
      <section className="bg-paper-50 py-20 sm:py-28">
        <div className="container-content">
          <div
            ref={introRef}
            className={`reveal ${introVisible ? 'is-visible' : ''} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}
          >
            <div className="order-2 lg:order-1">
              <p className="eyebrow">Le salon</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl md:text-5xl">
                Un salon de quartier,<br />une exigence de champion
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-500 sm:text-lg">
                Chez Coiff'System, la coiffure est une histoire de famille. Muriel,
                ancienne compétitrice de haut niveau, et son fils Brice — champion
                d'Europe 2011 et champion du monde 2010 en coiffure masculine —
                vous accueillent dans un écrin noir et blanc épuré, chaleureux et convivial.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                Salon de quartier fidèle à sa clientèle, de la première coupe de
                l'enfant au chignon de la mariée. On prend le temps, on écoute,
                on conseille.
              </p>
              <a
                href={routeToPath('about')}
                onClick={(e) => handleInternalLinkClick(e, 'about')}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-900 transition-colors hover:text-gold-600"
              >
                Découvrir notre histoire
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={aboutImg}
                  alt="Coiffure de précision au salon Coiff'System"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink-900/10" />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-ink-400">
                <span className="flex items-center gap-1.5">
                  <Scissors size={14} className="text-gold-600" />
                  Savoir-faire d'exception
                </span>
                <span>Strasbourg-Neudorf</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAMPION HIGHLIGHT */}
      <section className="bg-ink-900 py-20 sm:py-28">
        <div className="container-content">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/11333875/pexels-photo-11333875.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Geste de précision en coiffure masculine"
                  className="aspect-[3/4] w-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-gold-500 px-6 py-5 text-ink-900 shadow-xl sm:block">
                <p className="font-serif text-3xl font-bold leading-none">2010</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-widest">Champion du Monde</p>
              </div>
            </div>

            <div>
              <ChampionBadge size="lg" />
              <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight text-paper-50 sm:text-4xl md:text-5xl">
                Un palmarès au service de votre coupe
              </h2>
              <p className="mt-6 text-base leading-relaxed text-paper-200/70 sm:text-lg">
                Brice Specht a porté haut les couleurs de la coiffure française :
                champion du monde 2010, champion d'Europe 2011 en coiffure masculine.
                Un parcours sportif qui se traduit aujourd'hui par une exigence
                de précision dans chaque geste, au quotidien, pour vous.
              </p>
              <p className="mt-4 text-base leading-relaxed text-paper-200/70 sm:text-lg">
                Aux côtés de sa mère Muriel et de son frère Régis, il perpétue
                une tradition familiale d'excellence et de convivialité — loin
                de l'esprit parisien, profondément ancré dans le Neudorf.
              </p>
              <a
                href={routeToPath('about')}
                onClick={(e) => handleInternalLinkClick(e, 'about')}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
              >
                La famille Specht
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-paper-50 py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading
            eyebrow="Nos prestations"
            title={<>Tout le savoir-faire<br />sous un même toit</>}
            description="De la coupe enfant au chignon de mariée, en passant par la coloration et le barbier — chaque prestation est réalisée avec attention et précision."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeFeatures.map((feature, i) => (
              <ServiceCard key={feature.label} feature={feature} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href={routeToPath('services')} onClick={(e) => handleInternalLinkClick(e, 'services')} className="btn-primary">
              Voir toutes les prestations & tarifs
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="bg-paper-100 py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading
            eyebrow="Ils nous font confiance"
            title="Ce que disent nos clients"
            description="Une clientèle fidèle, multigénérationnelle, qui revient avec plaisir."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 3).map((review, i) => (
              <ReviewCard key={review.author} review={review} index={i} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href={routeToPath('reviews')} onClick={(e) => handleInternalLinkClick(e, 'reviews')} className="btn-outline">
              Lire tous les avis
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* MAP + ACCESS */}
      <section className="bg-paper-50 py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading
            eyebrow="Nous trouver"
            title="Au cœur du Neudorf"
            description="50 Rue de Sélestat, à deux pas du centre de Strasbourg. Facile d'accès, facile de se garer."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-sm">
              <iframe
                title="Carte Coiff'System Strasbourg"
                src={`https://www.google.com/maps?q=${salon.mapsEmbedQuery}&output=embed`}
                className="h-full min-h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 rounded-2xl bg-ink-900 p-8 text-paper-50">
              <div>
                <p className="eyebrow text-gold-400">Adresse</p>
                <p className="mt-2 font-serif text-xl font-semibold">
                  {salon.address}<br />
                  {salon.postalCode} {salon.city}
                </p>
                <p className="mt-1 text-sm text-paper-200/60">{salon.district}</p>
              </div>

              <div className="border-t border-paper-200/10 pt-6">
                <p className="eyebrow text-gold-400">Aujourd'hui</p>
                <p className="mt-2 font-serif text-xl font-semibold">
                  {formatDayHours(today)}
                </p>
                <p className={`mt-1 flex items-center gap-1.5 text-sm ${isOpenNow() ? 'text-success-500' : 'text-paper-200/50'}`}>
                  <span className={`h-2 w-2 rounded-full ${isOpenNow() ? 'bg-success-500' : 'bg-paper-200/40'}`} />
                  {isOpenNow() ? 'Ouvert' : 'Fermé'}
                </p>
              </div>

              <div className="flex flex-col gap-3 border-t border-paper-200/10 pt-6">
                <a href={`tel:${salon.phoneRaw}`} className="btn-gold w-full">
                  <Phone size={16} /> {salon.phone}
                </a>
                <a href={salon.mapsDirections} target="_blank" rel="noopener noreferrer" className="btn-outline w-full !border-paper-200/30 !text-paper-50 hover:!bg-paper-50 hover:!text-ink-900">
                  <MapPin size={16} /> Itinéraire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

function ServiceCard({ feature, index }: { feature: typeof homeFeatures[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 4) + 1} ${visible ? 'is-visible' : ''} group flex flex-col items-start gap-4 rounded-2xl border border-ink-100 bg-paper-50 p-6 transition-all duration-300 hover:border-gold-500/30 hover:shadow-lg hover:shadow-ink-900/5`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-900/5 text-ink-900 transition-colors group-hover:bg-gold-500/15 group-hover:text-gold-600">
        <feature.icon size={24} />
      </span>
      <div>
        <h3 className="font-serif text-lg font-semibold text-ink-900">{feature.label}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{feature.description}</p>
      </div>
    </div>
  );
}

function ReviewCard({ review, index }: { review: typeof reviews[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''} flex flex-col rounded-2xl border border-ink-100 bg-paper-50 p-6`}
    >
      <StarRating rating={review.rating} />
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">"{review.text}"</p>
      <div className="mt-5 border-t border-ink-100 pt-4">
        <p className="font-serif text-base font-semibold text-ink-900">{review.author}</p>
        <p className="text-xs text-ink-400">{review.context} · {review.date}</p>
      </div>
    </div>
  );
}
