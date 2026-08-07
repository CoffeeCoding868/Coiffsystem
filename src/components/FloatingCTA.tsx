import { useEffect, useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { salon } from '@/data/salonInfo';
import { type Route, navigate } from '@/router';

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 transition-all duration-300 lg:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="grid grid-cols-2 gap-px bg-ink-900/10 shadow-2xl shadow-ink-900/20">
        <a
          href={`tel:${salon.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-ink-900 py-4 text-sm font-medium text-paper-50 active:bg-ink-800"
        >
          <Phone size={18} /> Appeler
        </a>
        <button
          onClick={() => navigate('contact')}
          className="flex items-center justify-center gap-2 bg-gold-500 py-4 text-sm font-medium text-ink-900 active:bg-gold-400"
        >
          <Calendar size={18} /> Rendez-vous
        </button>
      </div>
    </div>
  );
}
