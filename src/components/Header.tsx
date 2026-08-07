import { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { type Route, navigate } from '@/router';
import { salon, isOpenNow } from '@/data/salonInfo';

interface NavLink {
  route: Route;
  label: string;
}

const links: NavLink[] = [
  { route: 'home', label: 'Accueil' },
  { route: 'about', label: 'Le Salon' },
  { route: 'services', label: 'Prestations' },
  { route: 'gallery', label: 'Galerie' },
  { route: 'reviews', label: 'Avis' },
  { route: 'contact', label: 'Contact' },
];

export function Header({ current }: { current: Route }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const go = (route: Route) => {
    setMobileOpen(false);
    navigate(route);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-paper-50/95 backdrop-blur-md shadow-sm shadow-ink-900/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container-content flex h-20 items-center justify-between">
          <button
            onClick={() => go('home')}
            className="group flex items-center gap-3 text-left"
            aria-label="Coiff'System accueil"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 transition-colors group-hover:border-gold-500">
              <span className="font-serif text-lg font-semibold text-ink-900">CS</span>
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-serif text-lg font-semibold text-ink-900">Coiff'System</span>
              <span className="text-[10px] uppercase tracking-widest text-ink-400">Strasbourg Neudorf</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <button
                key={link.route}
                onClick={() => go(link.route)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  current === link.route
                    ? 'text-ink-900'
                    : 'text-ink-500 hover:text-ink-900'
                }`}
              >
                {link.label}
                {current === link.route && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gold-500" />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <span
              className={`flex items-center gap-1.5 text-xs font-medium ${
                isOpenNow() ? 'text-success-600' : 'text-ink-400'
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isOpenNow() ? 'bg-success-500' : 'bg-ink-300'
                }`}
              />
              {isOpenNow() ? 'Ouvert' : 'Fermé'}
            </span>
            <button
              onClick={() => go('contact')}
              className="btn-gold !px-5 !py-2.5"
            >
              Rendez-vous
            </button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink-900/40 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-paper-50 p-6 pt-24 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <button
                key={link.route}
                onClick={() => go(link.route)}
                className={`rounded-xl px-4 py-3 text-left font-serif text-xl transition-colors ${
                  current === link.route
                    ? 'bg-ink-900 text-paper-50'
                    : 'text-ink-700 hover:bg-paper-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3 border-t border-ink-200 pt-6">
            <a
              href={`tel:${salon.phoneRaw}`}
              className="btn-outline"
            >
              <Phone size={16} /> {salon.phone}
            </a>
            <button
              onClick={() => go('contact')}
              className="btn-gold"
            >
              Prendre rendez-vous
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
