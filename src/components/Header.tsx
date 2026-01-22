import React, { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Fonctionnement', href: '#how-it-works' },
    { name: 'Pour les Restaurants', href: '#restaurants' },
    { name: 'Avis', href: '#reviews' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-md shadow-sm py-3 border-b border-white/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
              <Utensils size={20} />
            </div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">Plat du Jour</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-600 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#download" 
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary transition-all transform hover:scale-105 shadow-lg"
            >
              Télécharger l'app
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav with Animation */}
      <div 
        className={`md:hidden absolute w-full bg-white/90 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block text-gray-800 hover:text-primary font-bold text-lg py-2 transition-transform active:scale-95"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#download"
            className="block w-full text-center bg-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-lg mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Télécharger l'app
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;