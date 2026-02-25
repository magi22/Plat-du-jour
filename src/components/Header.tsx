import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/Logomascotte.svg';
import { useScrolled } from '../hooks/useScrolled';
import { getStoreLink } from '../lib/getStoreLink';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSelector } from './ui/LanguageSelector';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const isScrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const navLinks = [
    { name: t.nav.howItWorks,   href: '#how-it-works' },
    { name: t.nav.features,     href: '#features'     },
    { name: t.nav.restaurants,  href: '#restaurants'  },
    { name: t.nav.pricing,      href: '#tarifs'       },
    { name: t.nav.testimonials, href: '#testimonials' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/75 backdrop-blur-md shadow-sm py-2 border-b border-white/20' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#" aria-label="Accueil" className="flex items-center">
            <img src={Logo} alt="Plat du Jour" className="h-12 lg:h-14 w-auto select-none" draggable={false} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map(({ name, href }) => (
              <a key={href} href={href}
                className="text-gray-600 hover:text-primary font-medium transition-colors text-sm whitespace-nowrap">
                {name}
              </a>
            ))}

            {/* Sélecteur de langue */}
            <LanguageSelector />

            <a href={getStoreLink()} target="_blank" rel="noreferrer"
              className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary transition-all hover:scale-105 shadow-md whitespace-nowrap">
              {t.nav.download}
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="lg:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Fermer' : 'Menu'}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl transition-all duration-300 origin-top overflow-hidden ${
        open ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-5 flex flex-col items-center gap-3">
          {navLinks.map(({ name, href }) => (
            <a key={href} href={href}
              className="text-gray-800 hover:text-primary font-semibold text-base py-1.5 transition-colors active:scale-95"
              onClick={close}
            >
              {name}
            </a>
          ))}

          <div className="mt-1">
            <LanguageSelector />
          </div>

          <a href={getStoreLink()} target="_blank" rel="noreferrer"
            className="mt-2 w-full text-center bg-primary text-white px-6 py-3.5 rounded-xl font-bold hover:brightness-95 transition-all shadow-md"
            onClick={close}
          >
            {t.nav.download}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
