import { useEffect } from 'react';

interface SeoMeta {
  title: string;
  description: string;
}

export function useSeo({ title, description }: SeoMeta) {
  useEffect(() => {
    document.title = title;
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', description);
  }, [title, description]);
}
