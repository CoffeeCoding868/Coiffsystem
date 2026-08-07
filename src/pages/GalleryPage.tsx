import { useState } from 'react';
import { X, Camera, Home } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';
import { useReveal } from '@/hooks/useReveal';
import { CtaBanner } from '@/components/CtaBanner';
import { galleryImages, type GalleryImage } from '@/data/salon';

type Filter = 'all' | 'realisations' | 'salon';

export function GalleryPage() {
  useSeo({
    title: 'Galerie — Réalisations & Salon — Coiff\'System Strasbourg',
    description: 'Découvrez nos réalisations : coupes, colorations, balayages, chignons de mariée, et l\'ambiance de notre salon noir & blanc à Strasbourg-Neudorf.',
  });

  const [filter, setFilter] = useState<Filter>('all');
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const filtered = filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter);

  const filters: { key: Filter; label: string }[] = [
    { key: 'all', label: 'Tout' },
    { key: 'realisations', label: 'Réalisations' },
    { key: 'salon', label: 'Le salon' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-ink-900 py-24 text-paper-50 sm:py-28">
        <div className="container-content text-center">
          <p className="eyebrow text-gold-400">Galerie</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Nos réalisations
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper-200/70 sm:text-lg">
            Coupes, colorations, chignons et l'ambiance de notre salon noir & blanc.
          </p>
        </div>
      </section>

      <section className="bg-paper-50 py-16 sm:py-20">
        <div className="container-content">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  filter === f.key
                    ? 'bg-ink-900 text-paper-50'
                    : 'border border-ink-200 text-ink-600 hover:border-ink-900'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {filtered.map((img, i) => (
              <GalleryItem key={img.src} image={img} index={i} onClick={() => setLightbox(img)} />
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-paper-200/20 text-paper-50 transition-colors hover:bg-paper-50/10"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <CtaBanner />
    </div>
  );
}

function GalleryItem({ image, index, onClick }: { image: GalleryImage; index: number; onClick: () => void }) {
  const { ref, visible } = useReveal<HTMLButtonElement>();
  const isPortrait = image.category === 'realisations';

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`reveal reveal-delay-${(index % 4) + 1} ${visible ? 'is-visible' : ''} group relative block w-full overflow-hidden rounded-2xl bg-ink-100`}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          isPortrait ? 'aspect-[3/4]' : 'aspect-[4/3]'
        }`}
      />
      <div className="absolute inset-0 bg-ink-900/0 transition-colors duration-300 group-hover:bg-ink-900/30" />
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 bg-gradient-to-t from-ink-900/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Camera size={14} className="text-gold-400" />
        <span className="text-xs text-paper-50">{image.alt}</span>
      </div>
      {image.category === 'salon' && (
        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-ink-900/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-paper-50">
          <Home size={10} /> Salon
        </span>
      )}
    </button>
  );
}
