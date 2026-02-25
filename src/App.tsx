import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import { AppShowcase } from './components/AppShowcase';
import RestaurantSection from './components/RestaurantSection';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

/*
 * TRANSITIONS
 * • blanc ↔ noir  : ligne simple 1 px (pas de dégradé)
 * • blanc ↔ gris  : dégradé subtil 40 px
 */

/** Ligne de séparation 1 px entre sections de couleur opposée */
const Ligne = ({ sombre = false }: { sombre?: boolean }) => (
  <div style={{ height: 1, background: sombre ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)' }}
    aria-hidden className="pointer-events-none" />
);

/** Fondu subtil entre sections de même famille (blanc ↔ gris) */
const Fondu = ({ de, vers }: { de: string; vers: string }) => (
  <div style={{ height: 40, background: `linear-gradient(to bottom, ${de}, ${vers})` }}
    aria-hidden className="pointer-events-none" />
);

const App: React.FC = () => (
  <LanguageProvider>
    <div className="relative font-sans text-gray-800 bg-white selection:bg-primary selection:text-white w-full overflow-x-hidden">

      {/* Fond animé global clair */}
      <div className="fa">
        <div className="fa-tinte" />
        <div className="fa-grille" />
        <div className="fa-lueur fa-l1" />
        <div className="fa-lueur fa-l2" />
      </div>

      <Header />

      <main>
        {/* Zone blanche animée */}
        <Hero />
        <ProblemSolution />

        <Fondu de="transparent" vers="#f9fafb" />
        <HowItWorks />                {/* gris clair */}
        <Fondu de="#f9fafb" vers="transparent" />

        <Features />                  {/* blanc animé */}

        <Ligne />                     {/* blanc → noir */}
        <AppShowcase />               {/* section sombre */}
        <Ligne sombre />              {/* noir → blanc */}

        <RestaurantSection />         {/* blanc animé */}

        <Fondu de="transparent" vers="#f9fafb" />
        <Pricing />                   {/* gris clair */}
        <Fondu de="#f9fafb" vers="transparent" />

        <Testimonials />              {/* blanc animé */}

        <Faq />                       {/* blanc animé */}

        <Ligne />                     {/* blanc → noir */}
        <DownloadSection />           {/* section sombre */}
      </main>

      <Footer />
    </div>
  </LanguageProvider>
);

export default App;
