import { useState, type FormEvent } from 'react';
import { Phone, MapPin, Clock, Mail, Send, CheckCircle, ExternalLink, Calendar, AlertCircle, Loader2 } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { useReveal } from '@/hooks/useReveal';
import { SectionHeading } from '@/components/SectionHeading';
import { salon, hours, formatDayHours, isOpenNow, getTodayHours } from '@/data/salonInfo';
import { serviceCategories } from '@/data/salon';
import { supabase } from '@/lib/supabase';

export function ContactPage() {
  useSeo({
    title: 'Contact & Rendez-vous — Coiff\'System Strasbourg Neudorf',
    description: 'Prenez rendez-vous au salon Coiff\'System à Strasbourg-Neudorf. Téléphone, adresse, horaires, itinéraire et formulaire de contact.',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const today = getTodayHours();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: (formData.get('name') as string)?.trim(),
      firstName: (formData.get('firstName') as string)?.trim(),
      phone: (formData.get('phone') as string)?.trim(),
      email: (formData.get('email') as string)?.trim(),
      service: (formData.get('service') as string)?.trim(),
      message: (formData.get('message') as string)?.trim(),
    };

    const { error: fnError } = await supabase.functions.invoke('send-contact-email', {
      body: payload,
    });

    setLoading(false);

    if (fnError) {
      setError(
        `Une erreur est survenue lors de l'envoi. Merci de nous appeler directement au ${salon.phone}.`
      );
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <section className="bg-ink-900 py-24 text-paper-50 sm:py-28">
        <div className="container-content text-center">
          <p className="eyebrow text-gold-400">Contact & Rendez-vous</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Prenons rendez-vous
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper-200/70 sm:text-lg">
            Appelez-nous, écrivez-nous, ou passez nous voir. On vous accueille
            du mardi au samedi, au cœur du Neudorf.
          </p>
        </div>
      </section>

      <section className="bg-paper-50 py-16 sm:py-20">
        <div className="container-content">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            {/* LEFT — Info */}
            <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} flex flex-col gap-6`}>
              {/* Status card */}
              <div className="rounded-2xl bg-ink-900 p-8 text-paper-50">
                <div className="flex items-center gap-3">
                  <span
                    className={`h-3 w-3 rounded-full ${
                      isOpenNow() ? 'bg-success-500' : 'bg-paper-200/40'
                    }`}
                  />
                  <span className="text-sm font-medium uppercase tracking-widest text-paper-200/80">
                    {isOpenNow() ? 'Ouvert maintenant' : 'Fermé'}
                  </span>
                </div>
                <p className="mt-4 font-serif text-2xl font-semibold">
                  Aujourd'hui : {formatDayHours(today)}
                </p>
                <a
                  href={`tel:${salon.phoneRaw}`}
                  className="mt-6 btn-gold w-full"
                >
                  <Phone size={18} /> Appeler le {salon.phone}
                </a>
              </div>

              {/* Contact info */}
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard
                  icon={MapPin}
                  label="Adresse"
                  value={`${salon.address}, ${salon.postalCode} ${salon.city}`}
                  sub={salon.district}
                  action={{ label: 'Itinéraire', href: salon.mapsDirections }}
                />
                <InfoCard
                  icon={Phone}
                  label="Téléphone"
                  value={salon.phone}
                  sub="Mardi à samedi"
                  action={{ label: 'Appeler', href: `tel:${salon.phoneRaw}` }}
                />
                <InfoCard
                  icon={Mail}
                  label="Email"
                  value={salon.email}
                  sub="On répond vite"
                  action={{ label: 'Écrire', href: `mailto:${salon.email}` }}
                />
                <InfoCard
                  icon={Calendar}
                  label="Réservation en ligne"
                  value={salon.reservationNote}
                  sub="Fresha / Planity"
                />
              </div>

              {/* Hours table */}
              <div className="rounded-2xl border border-ink-100 bg-paper-50 p-6">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-gold-600" />
                  <h3 className="font-serif text-lg font-semibold text-ink-900">Horaires d'ouverture</h3>
                </div>
                <ul className="mt-4 space-y-1">
                  {hours.map((h) => (
                    <li
                      key={h.day}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${
                        h.day === today.day ? 'bg-gold-50/50 font-medium' : ''
                      }`}
                    >
                      <span className={h.closed ? 'text-ink-300' : 'text-ink-700'}>
                        {h.day}
                      </span>
                      <span
                        className={
                          h.closed ? 'text-ink-300' : 'text-ink-900'
                        }
                      >
                        {formatDayHours(h)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — Form + Map */}
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl border border-ink-100 bg-paper-50 p-8">
                <h2 className="font-serif text-2xl font-semibold text-ink-900">
                  Envoyez-nous un message
                </h2>
                <p className="mt-2 text-sm text-ink-400">
                  Pour une demande de devis, un conseil, ou simplement nous dire bonjour.
                </p>

                {submitted ? (
                  <div className="mt-6 flex flex-col items-center rounded-xl bg-success-500/10 p-8 text-center">
                    <CheckCircle size={40} className="text-success-600" />
                    <h3 className="mt-4 font-serif text-xl font-semibold text-ink-900">
                      Message envoyé !
                    </h3>
                    <p className="mt-2 text-sm text-ink-500">
                      Merci, nous vous répondrons dès que possible. Pour une prise
                      de rendez-vous rapide, appelez-nous au {salon.phone}.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-5 btn-outline"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Nom" name="name" type="text" placeholder="Votre nom" required />
                      <Field label="Prénom" name="firstName" type="text" placeholder="Votre prénom" required />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field label="Téléphone" name="phone" type="tel" placeholder="06 12 34 56 78" required />
                      <Field label="Email" name="email" type="email" placeholder="vous@email.fr" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">
                        Prestation souhaitée
                      </label>
                      <select
                        name="service"
                        className="w-full rounded-xl border border-ink-200 bg-paper-50 px-4 py-3 text-sm text-ink-900 transition-colors focus:border-ink-900 focus:outline-none focus:ring-1 focus:ring-ink-900"
                        defaultValue=""
                      >
                        <option value="" disabled>Choisir une prestation…</option>
                        {serviceCategories.flatMap((cat) =>
                          cat.services.map((s) => (
                            <option key={s.name} value={s.name}>
                              {cat.label} — {s.name}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink-700">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Décrivez votre demande, vos disponibilités…"
                        required
                        className="w-full resize-none rounded-xl border border-ink-200 bg-paper-50 px-4 py-3 text-sm text-ink-900 transition-colors focus:border-ink-900 focus:outline-none focus:ring-1 focus:ring-ink-900"
                      />
                    </div>
                    {error && (
                      <div className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-700">
                        <AlertCircle size={16} className="mt-0.5 shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}
                    <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" /> Envoi en cours…
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Envoyer le message
                        </>
                      )}
                    </button>
                    <p className="text-center text-xs text-ink-400">
                      Pour un rendez-vous immédiat, appelez le {salon.phone}.
                    </p>
                  </form>
                )}
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-ink-100">
                <iframe
                  title="Carte Coiff'System Strasbourg"
                  src={`https://www.google.com/maps?q=${salon.mapsEmbedQuery}&output=embed`}
                  className="h-72 w-full lg:h-80"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href={salon.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-ink-700 transition-colors hover:text-gold-600"
              >
                Ouvrir l'itinéraire dans Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  sub,
  action,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  sub?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="rounded-2xl border border-ink-100 bg-paper-50 p-6">
      <div className="flex items-center gap-2 text-gold-600">
        <Icon size={18} />
        <span className="text-xs font-medium uppercase tracking-widest">{label}</span>
      </div>
      <p className="mt-3 font-serif text-lg font-semibold text-ink-900">{value}</p>
      {sub && <p className="mt-0.5 text-xs text-ink-400">{sub}</p>}
      {action && (
        <a
          href={action.href}
          target={action.href.startsWith('http') ? '_blank' : undefined}
          rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-ink-700 transition-colors hover:text-gold-600"
        >
          {action.label} <ExternalLink size={12} />
        </a>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}{required && <span className="text-gold-600"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-ink-200 bg-paper-50 px-4 py-3 text-sm text-ink-900 transition-colors placeholder:text-ink-300 focus:border-ink-900 focus:outline-none focus:ring-1 focus:ring-ink-900"
      />
    </div>
  );
}
