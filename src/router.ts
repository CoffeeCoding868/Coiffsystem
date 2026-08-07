import { useEffect, useState } from 'react';

export type Route = 'home' | 'about' | 'services' | 'gallery' | 'reviews' | 'contact';

const validRoutes: Route[] = ['home', 'about', 'services', 'gallery', 'reviews', 'contact'];

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0] as Route;
  return validRoutes.includes(hash) ? hash : 'home';
}

export function navigate(route: Route): void {
  window.location.hash = `/${route}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function useRouter(): { route: Route } {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return { route };
}
