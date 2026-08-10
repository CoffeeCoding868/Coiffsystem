import { useEffect, useState } from 'react';

export type Route = 'home' | 'about' | 'services' | 'gallery' | 'reviews' | 'contact';

const routePaths: Record<Route, string> = {
  home: '/',
  about: '/le-salon',
  services: '/prestations',
  gallery: '/galerie',
  reviews: '/avis',
  contact: '/contact',
};

const pathToRoute: Record<string, Route> = {
  '/': 'home',
  '/le-salon': 'about',
  '/prestations': 'services',
  '/galerie': 'gallery',
  '/avis': 'reviews',
  '/contact': 'contact',
};

const NAV_EVENT = 'app-navigate';

function parsePath(): Route {
  return pathToRoute[window.location.pathname] ?? 'home';
}

export function routeToPath(route: Route): string {
  return routePaths[route];
}

export function navigate(route: Route): void {
  const path = routePaths[route];
  if (window.location.pathname !== path) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event(NAV_EVENT));
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Gère la navigation interne via de vraies balises <a href="..."> :
 * les robots peuvent suivre le lien normalement, tandis que les
 * utilisateurs avec JavaScript obtiennent une navigation instantanée
 * sans rechargement de page.
 */
export function handleInternalLinkClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  route: Route
): void {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  navigate(route);
}

export function useRouter(): { route: Route } {
  const [route, setRoute] = useState<Route>(parsePath());

  useEffect(() => {
    const onChange = () => {
      setRoute(parsePath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('popstate', onChange);
    window.addEventListener(NAV_EVENT, onChange);
    return () => {
      window.removeEventListener('popstate', onChange);
      window.removeEventListener(NAV_EVENT, onChange);
    };
  }, []);

  return { route };
}
