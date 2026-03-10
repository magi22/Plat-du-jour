import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Cgu from './pages/Cgu';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import MentionsLegales from './pages/MentionsLegales';
import Header from './components/Header';
import Hero from './components/Hero';
import MascotSection from './components/MascotSection';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import { AppShowcase } from './components/AppShowcase';
import RestaurantSection from './components/RestaurantSection';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { ChatBot } from './components/ui/ChatBot';

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

/** Page d'accueil complète */
const HomePage: React.FC = () => (
  <div className="relative font-sans text-gray-800 bg-white selection:bg-primary selection:text-white w-full overflow-x-hidden">
    <div className="fa">
      <div className="fa-tinte" />
      <div className="fa-grille" />
      <div className="fa-lueur fa-l1" />
      <div className="fa-lueur fa-l2" />
    </div>
    <Header />
    <main>
      <Hero />
      <MascotSection />

      <Fondu de="transparent" vers="#f9fafb" />
      <HowItWorks />
      <Fondu de="#f9fafb" vers="transparent" />

      <Features />

      <Ligne />
      <AppShowcase />
      <Ligne sombre />

      <RestaurantSection />

      <Fondu de="transparent" vers="#f9fafb" />
      <Pricing />
      <Fondu de="#f9fafb" vers="transparent" />

      <Testimonials />
      <Faq />

      <Ligne />
      <DownloadSection />
    </main>
    <Footer />
    <ChatBot />
    <ScrollToTop />
  </div>
);

const App: React.FC = () => (
  <BrowserRouter>
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cgu" element={<Cgu />} />
        <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>
    </LanguageProvider>
  </BrowserRouter>
);

export default App;
