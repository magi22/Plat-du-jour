import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logomascotte.svg';
import { useScrolled } from '../hooks/useScrolled';
import { getStoreLink } from '../lib/getStoreLink';
import { NAV_LINKS } from '../constants/nav';

const Header: React.FC = () => {
  const isScrolled = useScrolled(20);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <a href="#" className="flex items-center" aria-label="Retour à l'accueil">
            <img
              src={Logo}
              alt="Plat du Jour"
              className="h-14 md:h-16 w-auto object-contain select-none"
              draggable={false}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href={getStoreLink()}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full hover:bg-primary transition-all transform hover:scale-105 shadow-lg"
            >
              Télécharger l'app
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute w-full bg-white/90 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-4 flex flex-col items-center">
          {NAV_LINKS.map((link) => (
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
            className="block w-full text-center bg-primary text-white px-6 py-4 rounded-xl font-bold hover:brightness-95 transition-all shadow-lg mt-4"
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
