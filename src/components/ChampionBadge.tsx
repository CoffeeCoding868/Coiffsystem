import { Award } from 'lucide-react';

export function ChampionBadge({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'gap-2 px-3 py-1.5 text-[10px]',
    md: 'gap-2.5 px-4 py-2 text-xs',
    lg: 'gap-3 px-5 py-2.5 text-sm',
  };

  const iconSize = size === 'sm' ? 14 : size === 'lg' ? 20 : 16;

  return (
    <div
      className={`inline-flex items-center rounded-full border border-gold-500/30 bg-gold-50/60 font-medium uppercase tracking-widest text-gold-700 ${sizeClasses[size]}`}
    >
      <Award size={iconSize} className="text-gold-600" />
      <span>Champion du Monde 2010 · Champion d'Europe 2011</span>
    </div>
  );
}
