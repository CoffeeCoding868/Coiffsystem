import { Award, Heart, Users, Scissors, Sparkles } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { useReveal } from '@/hooks/useReveal';
import { ChampionBadge } from '@/components/ChampionBadge';
import { SectionHeading } from '@/components/SectionHeading';
import { CtaBanner } from '@/components/CtaBanner';
import { navigate } from '@/router';

const teamImg = 'https://images.pexels.com/photos/3993140/pexels-photo-3993140.jpeg?auto=compress&cs=tinysrgb&w=1200';
const salonImg1 = 'https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&w=1200';
const salonImg2 = 'https://images.pexels.com/photos/7750124/pexels-photo-7750124.jpeg?auto=compress&cs=tinysrgb&w=1200';

interface Member {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
}

const members: Member[] = [
  {
    name: 'Muriel Specht',
    role: 'Coiffeuse fondatrice',
    bio: "Ancienne compétitrice de haut niveau, Muriel a transmis sa passion à ses enfants. Elle incarne l'âme du salon : précision, écoute, et ce souci du détail qui fait la différence.",
    highlights: ['Ancienne compétitrice', 'Coiffure femme & coloration', 'Conseil visagiste'],
  },
  {
    name: 'Brice Specht',
    role: 'Coiffeur — Coiffure masculine',
    bio: "Champion du monde 2010 et champion d'Europe 2011 en coiffure masculine. Brice met son palmarès au service de chaque coupe, avec une exigence sportive et une humilité de quartier.",
    highlights: ['Champion du Monde 2010', 'Champion d\'Europe 2011', 'Barbier & coupe homme'],
  },
  {
    name: 'Régis Specht',
    role: 'Coiffeur',
    bio: "Régis a repris l'activité aux côtés de sa sœur. Présent au quotidien, il assure la continuité du savoir-faire familial avec chaleur et professionnalisme.",
    highlights: ['Coiffure mixte', 'Accueil & suivi client', 'Événements & cérémonies'],
  },
];

const values = [
  { icon: Heart, title: 'Convivialité', text: "Un salon où l'on se sent bien, où l'on revient, où l'on parle de tout et de rien. L'esprit quartier, sincère." },
  { icon: Award, title: 'Excellence', text: "Un palmarès sportif qui se traduit par une exigence dans chaque geste, chaque jour, pour chaque client." },
  { icon: Users, title: 'Tous les âges', text: "Enfants, jeunes, adultes, retraités. La coiffure n'a pas d'âge — et notre accueil non plus." },
  { icon: Sparkles, title: 'Écoute', text: "On prend le temps d'écouter, de conseiller, d'adapter. La coupe qui vous va, pas celle du catalogue." },
];

export function AboutPage() {
  useSeo({
    title: 'Le Salon & la famille Specht — Coiff\'System Strasbourg Neudorf',
    description: 'Découvrez l\'histoire de Coiff\'System : Muriel, Brice (champion du monde 2010, champion d\'Europe 2011) et Régis Specht. Salon familial de coiffure à Strasbourg-Neudorf.',
  });

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-900 py-24 text-paper-50 sm:py-32">
        <div className="absolute inset-0">
          <img src={salonImg1} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/80 to-ink-900/60" />
        </div>
        <div className="relative container-content">
          <div className="max-w-2xl">
            <ChampionBadge size="md" />
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] sm:text-5xl md:text-6xl">
              Une histoire<br />de famille
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-paper-200/80">
              Trois générations de passion, un savoir-faire reconnu au plus haut niveau,
              et un salon ancré dans son quartier depuis toujours.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-paper-50 py-20 sm:py-28">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={salonImg2}
                alt="Ambiance du salon Coiff'System"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="eyebrow">Notre philosophie</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
                Le luxe de la simplicité
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink-500 sm:text-lg">
                Coiff'System n'est pas un salon parisien. C'est un salon de quartier,
                et nous en sommes fiers. Une déco noir et blanc épurée, une ambiance
                chaleureuse, une clientèle qui revient parfois depuis des générations.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
                On coiffe la grand-mère le matin, l'enfant l'après-midi, le jeune
                le soir. Le retraité le mardi, la mariée le samedi. C'est ça,
                un salon de quartier : tout le monde y a sa place.
              </p>
              <div className="mt-8 flex items-center gap-3 text-sm text-ink-400">
                <Scissors size={18} className="text-gold-600" />
                Salon familial · Strasbourg-Neudorf · depuis toujours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-paper-100 py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading
            eyebrow="Ce qui nous anime"
            title="Nos valeurs"
            description="Quatre principes simples qui guident chacun de nos gestes, chaque jour."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-paper-50 py-20 sm:py-28">
        <div className="container-content">
          <SectionHeading
            eyebrow="La famille Specht"
            title="Trois coiffeurs, une passion"
            description="Muriel, Brice et Régis — un trio familial au savoir-faire complémentaire."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {members.map((m, i) => (
              <TeamCard key={m.name} member={m} index={i} featured={m.name === 'Brice Specht'} />
            ))}
          </div>
        </div>
      </section>

      {/* PALMARÈS */}
      <section className="relative overflow-hidden bg-ink-900 py-20 sm:py-28">
        <div className="absolute inset-0">
          <img src={teamImg} alt="" className="h-full w-full object-cover opacity-15 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/90 to-ink-900" />
        </div>
        <div className="relative container-content">
          <div className="mx-auto max-w-2xl text-center">
            <ChampionBadge size="lg" />
            <h2 className="mt-6 font-serif text-3xl font-semibold leading-tight text-paper-50 sm:text-4xl md:text-5xl">
              Le palmarès de Brice
            </h2>
            <p className="mt-6 text-base leading-relaxed text-paper-200/70 sm:text-lg">
              Champion du monde 2010. Champion d'Europe 2011. Coiffure masculine.
              Un parcours sportif qui se vit aujourd'hui au salon, geste après geste,
              coupe après coupe.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-gold-500/20 bg-paper-50/5 p-8 text-center backdrop-blur-sm">
              <p className="font-serif text-5xl font-bold text-gold-400 sm:text-6xl">2010</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-widest text-paper-200/80">Champion du Monde</p>
              <p className="mt-2 text-sm text-paper-200/50">Coiffure masculine</p>
            </div>
            <div className="rounded-2xl border border-gold-500/20 bg-paper-50/5 p-8 text-center backdrop-blur-sm">
              <p className="font-serif text-5xl font-bold text-gold-400 sm:text-6xl">2011</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-widest text-paper-200/80">Champion d'Europe</p>
              <p className="mt-2 text-sm text-paper-200/50">Coiffure masculine</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

function ValueCard({ value, index }: { value: typeof values[number]; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 4) + 1} ${visible ? 'is-visible' : ''} flex flex-col items-start gap-4 rounded-2xl border border-ink-100 bg-paper-50 p-6`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/10 text-gold-600">
        <value.icon size={22} />
      </span>
      <div>
        <h3 className="font-serif text-lg font-semibold text-ink-900">{value.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-400">{value.text}</p>
      </div>
    </div>
  );
}

function TeamCard({ member, index, featured }: { member: Member; index: number; featured: boolean }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-delay-${(index % 3) + 1} ${visible ? 'is-visible' : ''} flex flex-col rounded-2xl border p-8 ${
        featured ? 'border-gold-500/30 bg-gold-50/40' : 'border-ink-100 bg-paper-50'
      }`}
    >
      {featured && (
        <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold-500/15 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-gold-700">
          <Award size={12} /> Palmarès sportif
        </span>
      )}
      <h3 className="font-serif text-2xl font-semibold text-ink-900">{member.name}</h3>
      <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gold-600">{member.role}</p>
      <p className="mt-4 text-sm leading-relaxed text-ink-500">{member.bio}</p>
      <ul className="mt-6 flex flex-wrap gap-2 border-t border-ink-100 pt-5">
        {member.highlights.map((h) => (
          <li key={h} className="rounded-full bg-ink-900/5 px-3 py-1 text-xs text-ink-600">
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}
