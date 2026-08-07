import { Phone, MapPin, Clock, Instagram, Facebook, Scissors } from 'lucide-react';
import { type Route, navigate } from '@/router';
import { salon, hours, formatDayHours } from '@/data/salonInfo';

const navLinks: { route: Route; label: string }[] = [
  { route: 'home', label: 'Accueil' },
  { route: 'about', label: 'Le Salon' },
  { route: 'services', label: 'Prestations' },
  { route: 'gallery', label: 'Galerie' },
  { route: 'reviews', label: 'Avis' },
  { route: 'contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 text-paper-100">
      <div className="container-content py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30">
                <span className="font-serif text-lg font-semibold text-paper-50">CS</span>
              </span>
              <div className="leading-tight">
                <p className="font-serif text-lg font-semibold text-paper-50">Coiff'System</p>
                <p className="text-[10px] uppercase tracking-widest text-gold-400">Strasbourg Neudorf</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-paper-200/70">
              Salon familial mixte à Strasbourg-Neudorf. Femme, homme, enfant.
              Savoir-faire reconnu, ambiance chaleureuse.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-200/20 text-paper-200/70 transition-colors hover:border-gold-500 hover:text-gold-400"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-paper-200/20 text-paper-200/70 transition-colors hover:border-gold-500 hover:text-gold-400"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-paper-50">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.route}>
                  <button
                    onClick={() => navigate(l.route)}
                    className="text-sm text-paper-200/70 transition-colors hover:text-gold-400"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-paper-50">Coordonnées</h3>
            <ul className="mt-4 space-y-3.5 text-sm text-paper-200/70">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>
                  {salon.address}<br />
                  {salon.postalCode} {salon.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${salon.phoneRaw}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-gold-400"
                >
                  <Phone size={16} className="shrink-0 text-gold-400" />
                  {salon.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Scissors size={16} className="mt-0.5 shrink-0 text-gold-400" />
                <span>
                  {salon.legalForm} · en activité depuis {salon.activeSince}<br />
                  SIRET {salon.siret}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-paper-50">Horaires</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-3">
                  <span className="text-paper-200/60">{h.day}</span>
                  <span
                    className={
                      h.closed ? 'text-paper-200/40' : 'text-paper-200/90'
                    }
                  >
                    {formatDayHours(h)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-paper-200/10 pt-6 text-xs text-paper-200/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Coiff'System — Tous droits réservés</p>
          <p className="flex items-center gap-1.5">
            <Clock size={12} className="text-gold-400" />
            Salon de coiffure mixte · Strasbourg Neudorf
          </p>
        </div>
      </div>
    </footer>
  );
}
