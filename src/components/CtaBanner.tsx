import { Phone, Calendar, Clock } from 'lucide-react';
import { salon, formatDayHours, getTodayHours, isOpenNow } from '@/data/salonInfo';
import { navigate } from '@/router';

export function CtaBanner() {
  const today = getTodayHours();

  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-paper-50">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, #CDA85E 0%, transparent 50%), radial-gradient(circle at 80% 70%, #CDA85E 0%, transparent 50%)',
      }} />
      <div className="container-content relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-gold-400">Prenez rendez-vous</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Réservez votre moment au salon
          </h2>
          <p className="mt-5 text-base leading-relaxed text-paper-200/70 sm:text-lg">
            Appelez-nous ou passez nous voir à Strasbourg-Neudorf. On vous accueille
            avec le sourire, comme toujours.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`tel:${salon.phoneRaw}`} className="btn-gold w-full sm:w-auto">
              <Phone size={18} /> Appeler le {salon.phone}
            </a>
            <button onClick={() => navigate('contact')} className="btn-outline w-full !border-paper-200/30 !text-paper-50 hover:!bg-paper-50 hover:!text-ink-900 sm:w-auto">
              <Calendar size={18} /> Prendre rendez-vous
            </button>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-paper-200/60 sm:flex-row sm:gap-6">
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-gold-400" />
              Aujourd'hui : {formatDayHours(today)}
            </span>
            <span className={`flex items-center gap-1.5 ${isOpenNow() ? 'text-success-500' : 'text-paper-200/50'}`}>
              <span className={`h-2 w-2 rounded-full ${isOpenNow() ? 'bg-success-500' : 'bg-paper-200/40'}`} />
              {isOpenNow() ? 'Ouvert maintenant' : 'Fermé actuellement'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
