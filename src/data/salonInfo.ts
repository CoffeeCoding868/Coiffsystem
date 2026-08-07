import { Phone, MapPin, Clock } from 'lucide-react';

export const salon = {
  name: "Coiff'System",
  legalName: 'COIFF\u2019SYSTEM',
  legalForm: 'SAS',
  siret: '902 745 892 00018',
  activeSince: 'Mai 2022',
  tagline: 'Coiffeur mixte \u00b7 Strasbourg Neudorf',
  phone: '03 88 34 26 77',
  phoneRaw: '0388342677',
  address: '50 Rue de S\u00e9lestat',
  postalCode: '67100',
  city: 'Strasbourg',
  district: 'Neudorf Sud Centre',
  email: 'contact@coiffsystem.fr',
  mapsQuery: 'Coiff\u2019System, 50 Rue de S\u00e9lestat, 67100 Strasbourg',
  mapsEmbedQuery: '50+Rue+de+S\u00e9lestat,+67100+Strasbourg',
  mapsDirections: 'https://www.google.com/maps/dir/?api=1&destination=50+Rue+de+S%C3%A9lestat+67100+Strasbourg',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Coiff%27System+50+Rue+de+S%C3%A9lestat+67100+Strasbourg',
  reservationNote: 'R\u00e9servation en ligne bient\u00f4t disponible',
};

export interface DayHours {
  day: string;
  short: string;
  closed: boolean;
  morning?: { open: string; close: string };
  afternoon?: { open: string; close: string };
  continuous?: { open: string; close: string };
}

export const hours: DayHours[] = [
  { day: 'Lundi', short: 'Lun', closed: true },
  { day: 'Mardi', short: 'Mar', closed: false, morning: { open: '08h00', close: '12h00' }, afternoon: { open: '13h30', close: '18h00' } },
  { day: 'Mercredi', short: 'Mer', closed: false, morning: { open: '08h00', close: '12h00' }, afternoon: { open: '13h30', close: '18h00' } },
  { day: 'Jeudi', short: 'Jeu', closed: false, afternoon: { open: '13h00', close: '20h00' } },
  { day: 'Vendredi', short: 'Ven', closed: false, continuous: { open: '08h00', close: '18h00' } },
  { day: 'Samedi', short: 'Sam', closed: false, continuous: { open: '08h00', close: '15h30' } },
  { day: 'Dimanche', short: 'Dim', closed: true },
];

export function getTodayHours(): DayHours {
  const jsDay = new Date().getDay();
  const idx = jsDay === 0 ? 6 : jsDay - 1;
  return hours[idx];
}

export function formatDayHours(h: DayHours): string {
  if (h.closed) return 'Fermé';
  if (h.continuous) return `${h.continuous.open} \u2013 ${h.continuous.close}`;
  const parts: string[] = [];
  if (h.morning) parts.push(`${h.morning.open}\u2013${h.morning.close}`);
  if (h.afternoon) parts.push(`${h.afternoon.open}\u2013${h.afternoon.close}`);
  return parts.join(' / ');
}

function parseTimeToMinutes(t: string): number {
  const [h, m] = t.split('h').map((n) => parseInt(n, 10));
  return h * 60 + (m || 0);
}

export function isOpenNow(): boolean {
  const now = new Date();
  const jsDay = now.getDay();
  const idx = jsDay === 0 ? 6 : jsDay - 1;
  const today = hours[idx];
  if (today.closed) return false;

  const minutes = now.getHours() * 60 + now.getMinutes();

  if (today.continuous) {
    return minutes >= parseTimeToMinutes(today.continuous.open) &&
           minutes <= parseTimeToMinutes(today.continuous.close);
  }

  if (today.morning) {
    const o = parseTimeToMinutes(today.morning.open);
    const c = parseTimeToMinutes(today.morning.close);
    if (minutes >= o && minutes <= c) return true;
  }
  if (today.afternoon) {
    const o = parseTimeToMinutes(today.afternoon.open);
    const c = parseTimeToMinutes(today.afternoon.close);
    if (minutes >= o && minutes <= c) return true;
  }
  return false;
}

export const contactItems = [
  { icon: Phone, label: salon.phone, href: `tel:${salon.phoneRaw}` },
  { icon: MapPin, label: `${salon.address}, ${salon.postalCode} ${salon.city}`, href: salon.mapsLink },
  { icon: Clock, label: salon.district, href: null },
];
