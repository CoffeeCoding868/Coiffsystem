// Génère une version HTML statique de chaque page du site, pour que les
// robots (Google, Bing, aperçus WhatsApp/Facebook, curl…) voient le contenu
// réel immédiatement, sans avoir besoin d'exécuter le JavaScript.
//
// N'utilise ni Puppeteer ni Chromium : uniquement React (renderToString),
// via vite-node pour bénéficier des alias (@/) et variables d'env Vite.
//
// Exécution : npm run prerender (après npm run build)

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';

import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { FloatingCTA } from '../src/components/FloatingCTA';
import { HomePage } from '../src/pages/HomePage';
import { AboutPage } from '../src/pages/AboutPage';
import { ServicesPage } from '../src/pages/ServicesPage';
import { GalleryPage } from '../src/pages/GalleryPage';
import { ReviewsPage } from '../src/pages/ReviewsPage';
import { ContactPage } from '../src/pages/ContactPage';
import type { Route } from '../src/router';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

interface RouteConfig {
  route: Route;
  urlPath: string;
  title: string;
  description: string;
  Component: React.ComponentType;
}

const routes: RouteConfig[] = [
  {
    route: 'home',
    urlPath: '/',
    title: "Coiff'System — Coiffeur mixte à Strasbourg Neudorf | Champion du monde 2010",
    description:
      "Salon de coiffure mixte à Strasbourg-Neudorf. Femme, homme, enfant. Coloration, balayage, coiffure de mariée. Salon familial champion du monde 2010 & d'Europe 2011. Prenez rendez-vous au 03 88 34 26 77.",
    Component: HomePage,
  },
  {
    route: 'about',
    urlPath: '/le-salon',
    title: "Le Salon & la famille Specht — Coiff'System Strasbourg Neudorf",
    description:
      "Découvrez l'histoire de Coiff'System : Muriel, Brice (champion du monde 2010, champion d'Europe 2011) et Régis Specht. Salon familial de coiffure à Strasbourg-Neudorf.",
    Component: AboutPage,
  },
  {
    route: 'services',
    urlPath: '/prestations',
    title: "Prestations & Tarifs — Coiff'System Strasbourg Neudorf",
    description:
      "Coupe femme, homme, enfant, coloration, balayage, lissage, chignon mariage. Découvrez nos prestations et tarifs de coiffure à Strasbourg-Neudorf.",
    Component: ServicesPage,
  },
  {
    route: 'gallery',
    urlPath: '/galerie',
    title: "Galerie — Réalisations & Salon — Coiff'System Strasbourg",
    description:
      "Découvrez nos réalisations : coupes, colorations, balayages, chignons de mariée, et l'ambiance de notre salon noir & blanc à Strasbourg-Neudorf.",
    Component: GalleryPage,
  },
  {
    route: 'reviews',
    urlPath: '/avis',
    title: "Avis Clients — Coiff'System Strasbourg Neudorf",
    description:
      "Découvrez les avis de nos clients fidèles à Strasbourg-Neudorf. Coupe femme, homme, enfant, coloration, coiffure de mariée — note moyenne 5/5.",
    Component: ReviewsPage,
  },
  {
    route: 'contact',
    urlPath: '/contact',
    title: "Contact & Rendez-vous — Coiff'System Strasbourg Neudorf",
    description:
      "Prenez rendez-vous au salon Coiff'System à Strasbourg-Neudorf. Téléphone, adresse, horaires, itinéraire et formulaire de contact.",
    Component: ContactPage,
  },
];

function renderPage({ route, Component }: RouteConfig): string {
  const app = React.createElement(
    'div',
    { className: 'min-h-screen bg-paper-50' },
    React.createElement(Header, { current: route }),
    React.createElement('main', null, React.createElement(Component)),
    React.createElement(Footer),
    React.createElement(FloatingCTA)
  );
  return renderToString(app);
}

function main() {
  if (!existsSync(distDir)) {
    console.error('dist/ introuvable — lance "npm run build" avant "npm run prerender".');
    process.exit(1);
  }

  const template = readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  for (const config of routes) {
    const bodyHtml = renderPage(config);

    let html = template;
    // Injecte le HTML rendu dans la div racine
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${bodyHtml}</div>`
    );
    // Titre et meta description spécifiques à la page
    html = html.replace(/<title>.*?<\/title>/, `<title>${config.title}</title>`);
    html = html.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${config.description.replace(/"/g, '&quot;')}" />`
    );

    const outDir = config.urlPath === '/' ? distDir : path.join(distDir, config.urlPath);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
    console.log(`✓ Prerendu : ${config.urlPath === '/' ? '/' : config.urlPath + '/'}`);
  }

  console.log(`\n${routes.length} pages prerendues avec succès.`);
}

main();
