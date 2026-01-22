import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import RestaurantSection from './components/RestaurantSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import DownloadSection from './components/DownloadSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <RestaurantSection />
        <Features />
        <Testimonials />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;