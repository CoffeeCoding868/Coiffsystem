import { type ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'
      }`}
    >
      {eyebrow && (
        <p className={`eyebrow ${light ? 'text-gold-400' : ''}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl ${
          light ? 'text-paper-50' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? 'text-paper-200/70' : 'text-ink-500'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
