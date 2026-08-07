import {
  Scissors,
  Baby,
  User,
  Palette,
  Sparkles,
  Wind,
  Crown,
  Eye,
  Waves,
  type LucideIcon,
} from 'lucide-react';

export interface ServiceItem {
  name: string;
  description: string;
  duration: string;
  price: string;
}

export interface ServiceCategory {
  id: string;
  label: string;
  icon: LucideIcon;
  tagline: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'femme',
    label: 'Femme',
    icon: Sparkles,
    tagline: 'Coupes, brushing & conseil visagiste',
    services: [
      { name: 'Coupe femme', description: 'Coupe personnalisée selon votre visage et votre style de vie.', duration: '45 min', price: '32 €' },
      { name: 'Brushing', description: 'Lavage et séchage pour un tombé impeccable.', duration: '30 min', price: '22 €' },
      { name: 'Brushing + coupe', description: 'Coupe et mise en forme complète.', duration: '1 h', price: '42 €' },
      { name: 'Conseil visagiste', description: 'Analyse de votre morphologie pour la coupe la plus flatteuse.', duration: '15 min', price: 'Offert' },
    ],
  },
  {
    id: 'homme',
    label: 'Homme',
    icon: User,
    tagline: 'Coupe, barbier & soin de précision',
    services: [
      { name: 'Coupe homme', description: 'Coupe moderne ou classique, finitions soignées.', duration: '30 min', price: '23 €' },
      { name: 'Coupe + barbe', description: 'Coupe et taille de barbe assorties.', duration: '45 min', price: '30 €' },
      { name: 'Taille de barbe', description: 'Modelage et finitions de la barbe au rasoir.', duration: '20 min', price: '15 €' },
      { name: 'Coupe enfant', description: 'Pour les enfants jusqu\'à 12 ans.', duration: '20 min', price: '17 €' },
    ],
  },
  {
    id: 'enfant',
    label: 'Enfant',
    icon: Baby,
    tagline: 'Premières coupes & coupes de saison',
    services: [
      { name: 'Coupe enfant (-12 ans)', description: 'Patience et douceur pour les plus jeunes.', duration: '20 min', price: '17 €' },
      { name: 'Coupe bébé (-3 ans)', description: 'La toute première coupe, en douceur.', duration: '15 min', price: '14 €' },
      { name: 'Coupe + brushing enfant', description: 'Pour les petites occasions spéciales.', duration: '40 min', price: '25 €' },
    ],
  },
  {
    id: 'coloration',
    label: 'Coloration & Techniques',
    icon: Palette,
    tagline: 'Balayage, couleur & lissage',
    services: [
      { name: 'Coloration classique', description: 'Couleur uniforme racines ou longueurs.', duration: '1 h 30', price: 'dès 45 €' },
      { name: 'Balayage', description: 'Effet soleil et lumière, rendu naturel.', duration: '2 h', price: 'dès 65 €' },
      { name: 'Patine / soin repigmentant', description: 'Reflets et brillance sur couleur existante.', duration: '45 min', price: 'dès 28 €' },
      { name: 'Lissage permanent', description: 'Cheveux lisses et disciplinés durablement.', duration: '3 h', price: 'sur devis' },
      { name: 'Entretien cheveux bouclés', description: 'Coupe et soin adaptés aux textures ondulées et crépues.', duration: '1 h', price: 'dès 38 €' },
    ],
  },
  {
    id: 'evenements',
    label: 'Événements & Mariage',
    icon: Crown,
    tagline: 'Chignons & coiffures d\'exception',
    services: [
      { name: 'Chignon mariage', description: 'Essai préalable et coiffage le jour J à domicile possible.', duration: '1 h 30', price: 'sur devis' },
      { name: 'Coiffure de mariée', description: 'Coiffage complet, voile et accessoires.', duration: '1 h 30', price: 'sur devis' },
      { name: 'Chignon événementiel', description: 'Pour cérémonies, baptêmes et soirées.', duration: '1 h', price: 'dès 50 €' },
      { name: 'Essai coiffure mariée', description: 'Essai pour définir la coiffure parfaite.', duration: '1 h', price: '40 €' },
    ],
  },
];

export interface Feature {
  icon: LucideIcon;
  label: string;
  description: string;
}

export const homeFeatures: Feature[] = [
  { icon: Scissors, label: 'Coupe & coiffure', description: 'Femme, homme, enfant — un savoir-faire adapté à chacun.' },
  { icon: Palette, label: 'Coloration & balayage', description: 'Couleur, balayage, patine pour un rendu lumineux.' },
  { icon: User, label: 'Barbier homme', description: 'Coupe et barbe par un champion du monde.' },
  { icon: Crown, label: 'Mariage & événements', description: 'Chignons et coiffages pour vos grands moments.' },
  { icon: Waves, label: 'Cheveux bouclés', description: 'Entretien et coupe adaptés aux textures frisées.' },
  { icon: Eye, label: 'Conseil visagiste', description: 'La coupe qui sublime votre visage.' },
  { icon: Wind, label: 'Lissage permanent', description: 'Disciplinez vos cheveux durablement.' },
  { icon: Baby, label: 'Premières coupes', description: 'Accueil en douceur pour les enfants.' },
];

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'realisations' | 'salon';
}

export const galleryImages: GalleryImage[] = [
  { src: 'https://images.pexels.com/photos/8834076/pexels-photo-8834076.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Coiffure de précision au salon Coiff\'System', category: 'realisations' },
  { src: 'https://images.pexels.com/photos/15659494/pexels-photo-15659494.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Coupe de cheveux humides au ciseau', category: 'realisations' },
  { src: 'https://images.pexels.com/photos/7752412/pexels-photo-7752412.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Balayage rose poudré réalisé au salon', category: 'realisations' },
  { src: 'https://images.pexels.com/photos/4981460/pexels-photo-4981460.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Application de coloration au pinceau', category: 'realisations' },
  { src: 'https://images.pexels.com/photos/15507425/pexels-photo-15507425.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Chignon de mariée réalisé par l\'équipe', category: 'realisations' },
  { src: 'https://images.pexels.com/photos/16976882/pexels-photo-16976882.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Chignon élégant pour cérémonie', category: 'realisations' },
  { src: 'https://images.pexels.com/photos/4625626/pexels-photo-4625626.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Coupe homme moderne au salon', category: 'realisations' },
  { src: 'https://images.pexels.com/photos/36720012/pexels-photo-36720012.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait noir et blanc cheveux bouclés', category: 'realisations' },
  { src: 'https://images.pexels.com/photos/34334403/pexels-photo-34334403.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Portrait cheveux bouclés', category: 'realisations' },
  { src: 'https://images.pexels.com/photos/7697718/pexels-photo-7697718.jpeg?auto=compress&cs=tinysrgb&w=900', alt: 'Première coupe pour enfant au salon', category: 'realisations' },
  { src: 'https://images.pexels.com/photos/7195803/pexels-photo-7195803.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Intérieur du salon — espace styling', category: 'salon' },
  { src: 'https://images.pexels.com/photos/7750124/pexels-photo-7750124.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Salon lumineux avec miroirs ronds', category: 'salon' },
  { src: 'https://images.pexels.com/photos/7195811/pexels-photo-7195811.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Espace shampooining noir & blanc', category: 'salon' },
  { src: 'https://images.pexels.com/photos/7750120/pexels-photo-7750120.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Ambiance cozy du salon Coiff\'System', category: 'salon' },
];

export interface Review {
  author: string;
  context: string;
  rating: number;
  text: string;
  date: string;
}

export const reviews: Review[] = [
  {
    author: 'Sophie L.',
    context: 'Cliente depuis 8 ans',
    rating: 5,
    text: 'Je suis cliente depuis des années et je ne changerais pour rien au monde. Muriel et son équipe écoutent vraiment ce que tu veux. Le résultat est toujours à la hauteur. Un salon où on se sent comme à la maison.',
    date: 'Mars 2024',
  },
  {
    author: 'Karim B.',
    context: 'Coupe homme',
    rating: 5,
    text: 'Brice est un artiste. La meilleure coupe que j\'ai eue à Strasbourg, sans exagérer. Pour un champion du monde, il est resté super accessible et humble. Salon propre, accueil top.',
    date: 'Février 2024',
  },
  {
    author: 'Émilie R.',
    context: 'Balayage & coupe',
    rating: 5,
    text: 'Mon balayage est naturel et lumineux, exactement ce que je voulais. Le conseil visagiste pour la coupe m\'a vraiment surprise — je n\'aurais jamais osé seule, et le résultat me va parfaitement.',
    date: 'Janvier 2024',
  },
  {
    author: 'Famille Wagner',
    context: 'Coupe enfant',
    rating: 5,
    text: 'Mon fils de 4 ans était terrifié par les coiffeurs. Ici, il est ressorti souriant et fier de sa coupe. Patience et douceur, vraiment. On a trouvé notre salon familial.',
    date: 'Décembre 2023',
  },
  {
    author: 'Nadia M.',
    context: 'Coiffure de mariée',
    rating: 5,
    text: 'Régis a fait mon chignon de mariée et l\'essai au préalable. Le jour J, tout était parfait et tenu toute la journée. Merci d\'avoir rendu ce moment encore plus beau.',
    date: 'Septembre 2023',
  },
  {
    author: 'Thomas V.',
    context: 'Coupe & barbe',
    rating: 5,
    text: 'Salon de quartier comme on en fait plus. Convivial, professionnel, et la coupe dure. Je passe entre deux rendez-vous, toujours bien accueilli. Une adresse à Neudorf qu\'il faut connaître.',
    date: 'Novembre 2023',
  },
];
