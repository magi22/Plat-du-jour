import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import { AppShowcase } from './components/AppShowcase';
import RestaurantSection from './components/RestaurantSection';
import Features from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';
import { WaveDivider } from './components/transitions/WaveDivider';

/*
 * ARCHITECTURE DES BACKGROUNDS
 * ─────────────────────────────────────────────────────────
 * Le fond animé global (anim-bg-light) est positionné en absolu
 * sur ce wrapper (position:relative). Il est visible en continu
 * sous toutes les sections bg-transparent.
 *
 * Sections TRANSPARENTES (montrent l'animation) :
 *   Hero · ProblemSolution · RestaurantSection · Testimonials · Faq
 *
 * Sections OPAQUES CLAIRES (couvrent l'animation) :
 *   HowItWorks · Features · Pricing → bg-gray-50
 *
 * Sections OPAQUES SOMBRES :
 *   AppShowcase · DownloadSection → bg-[#0a0a0f] (avec anim-bg-dark)
 *   Footer → bg-[#070710]
 *
 * WaveDivider :
 *   - topColor="transparent"   → montre le fond animé light
 *   - bottomColor="transparent" → montre le fond animé light
 *   - couleurs opaques uniquement pour les sections solides
 * ─────────────────────────────────────────────────────────
 */
const App: React.FC = () => (
  <div className="relative font-sans text-gray-800 bg-white selection:bg-primary selection:text-white w-full overflow-x-hidden">

    {/* Fond animé global light – visible sous toutes les sections transparentes */}
    <div className="anim-bg-light">
      <div className="anim-bg-light-tint" />
      <div className="anim-bg-light-grid" />
      <div className="anim-bg-light-glow anim-bg-light-glow-1" />
      <div className="anim-bg-light-glow anim-bg-light-glow-2" />
    </div>

    <Header />

    <main>
      {/* ── Zone blanche animée continue ── */}
      <Hero />
      <ProblemSolution />

      {/* transparent → gray-50 */}
      <WaveDivider topColor="transparent" bottomColor="#f9fafb" height={64} variant="gentle" />
      <HowItWorks />

      {/* gray-50 → dark */}
      <WaveDivider topColor="#f9fafb" bottomColor="#0a0a0f" height={80} variant="double" />
      <AppShowcase />

      {/* dark → transparent */}
      <WaveDivider topColor="#0a0a0f" bottomColor="transparent" height={80} variant="double" flip />

      {/* ── Zone blanche animée continue ── */}
      <RestaurantSection />

      {/* transparent → gray-50 */}
      <WaveDivider topColor="transparent" bottomColor="#f9fafb" height={64} variant="gentle" flip />
      <Features />

      {/* gray-50 → transparent */}
      <WaveDivider topColor="#f9fafb" bottomColor="transparent" height={56} variant="gentle" />

      {/* ── Zone blanche animée continue ── */}
      <Testimonials />

      {/* transparent → gray-50 */}
      <WaveDivider topColor="transparent" bottomColor="#f9fafb" height={64} variant="gentle" flip />
      <Pricing />

      {/* gray-50 → transparent */}
      <WaveDivider topColor="#f9fafb" bottomColor="transparent" height={56} variant="gentle" />

      {/* ── Zone blanche animée continue ── */}
      <Faq />

      {/* transparent → dark */}
      <WaveDivider topColor="transparent" bottomColor="#0a0a0f" height={80} variant="double" />
      <DownloadSection />
    </main>

    {/* Footer s'enchaîne sans séparateur avec DownloadSection */}
    <Footer />
  </div>
);

export default App;
