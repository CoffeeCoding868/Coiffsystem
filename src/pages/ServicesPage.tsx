import { Phone, ArrowRight, Clock } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { salon } from '@/data/salonInfo';
import { serviceCategories } from '@/data/salon';
import { navigate } from '@/router';

export function ServicesPage() {
  useSeo({
    title: 'Prestations & Tarifs — Coiff\'System Strasbourg Neudorf',
    description: 'Coupe femme, homme, enfant, coloration, balayage, lissage, chignon mariage. Découvrez nos prestations et tarifs de coiffure à Strasbourg-Neudorf.',
  });

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="bg-ink-900 py-24 text-paper-50 sm:py-28">
        <div className="container-content text-center">
          <p className="eyebrow text-gold-400">Prestations & Tarifs</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Nos prestations
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper-200/70 sm:text-lg">
            Du quotidien aux grandes occasions. Tarifs indicatifs — un devis personnalisé
            est toujours proposé pour les techniques avancées.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      {serviceCategories.map((cat) => (
        <ServiceSection key={cat.id} category={cat} />
      ))}

      {/* NOTE */}
      <section className="bg-paper-100 py-16">
        <div className="container-content">
          <div className="mx-auto max-w-2xl rounded-2xl border border-ink-100 bg-paper-50 p-8 text-center">
            <Clock size={28} className="mx-auto text-gold-600" />
            <h2 className="mt-4 font-serif text-2xl font-semibold text-ink-900">
              Besoin d'un conseil ?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Les durées et prix sont indicatifs et peuvent varier selon la longueur,
              l'épaisseur et la technique. N'hésitez pas à nous appeler pour un
              conseil personnalisé ou un devis.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href={`tel:${salon.phoneRaw}`} className="btn-gold">
                <Phone size={16} /> {salon.phone}
              </a>
              <button onClick={() => navigate('contact')} className="btn-outline">
                Nous écrire
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

function ServiceSection({ category }: { category: typeof serviceCategories[number] }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = category.icon;

  return (
    <section className="bg-paper-50 py-16 sm:py-20" ref={ref}>
      <div className={`container-content reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16">
          {/* Sidebar */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-paper-50">
                <Icon size={26} />
              </span>
              <div>
                <h2 className="font-serif text-3xl font-semibold text-ink-900">{category.label}</h2>
                <p className="text-sm text-ink-400">{category.tagline}</p>
              </div>
            </div>
            <button
              onClick={() => navigate('contact')}
              className="mt-6 hidden w-full btn-outline lg:flex"
            >
              Prendre rendez-vous
            </button>
          </div>

          {/* Services */}
          <div className="overflow-hidden rounded-2xl border border-ink-100">
            {category.services.map((service, i) => (
              <div
                key={service.name}
                className={`flex flex-col gap-3 p-6 transition-colors hover:bg-paper-100 sm:flex-row sm:items-center sm:justify-between ${
                  i !== category.services.length - 1 ? 'border-b border-ink-100' : ''
                }`}
              >
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-semibold text-ink-900">{service.name}</h3>
                  <p className="mt-1 text-sm text-ink-400">{service.description}</p>
                </div>
                <div className="flex items-center gap-6 sm:flex-col sm:items-end sm:gap-1">
                  <span className="flex items-center gap-1.5 text-xs text-ink-400">
                    <Clock size={13} /> {service.duration}
                  </span>
                  <span className="font-serif text-xl font-semibold text-gold-600">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <button
          onClick={() => navigate('contact')}
          className="mt-6 btn-outline w-full lg:hidden"
        >
          Prendre rendez-vous — {category.label}
        </button>
      </div>
    </section>
  );
}
