import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from '../assets/Logomascotte.svg';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070710] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6">
              <img
                src={Logo}
                alt="Plat du Jour"
                className="w-20 h-auto object-contain"
                draggable={false}
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              La meilleure façon de découvrir les menus du jour autour de vous.
              Simple, rapide et gourmand.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-bold text-white mb-6">Liens Rapides</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-primary transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-primary transition-colors">
                  Télécharger l'app
                </a>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-bold text-white mb-6">Légal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  CGU
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">Contactez-nous</h4>
            <p className="text-sm text-gray-400 mb-4">Une question ? Écrivez-nous.</p>

            <a
              href="mailto:info@platdujour.ch"
              className="text-primary font-medium hover:underline"
            >
              info@platdujour.ch
            </a>

            <div className="mt-6 text-sm text-gray-400">
              Besoin d'aide ?{' '}
              <a
                href="mailto:info@platdujour.ch"
                className="text-primary font-semibold hover:underline"
              >
                Contactez le support
              </a>
              .
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {year} <strong className="text-gray-300">Plat du Jour</strong>. Tous droits réservés.
          </p>

          <div className="text-xs text-gray-500">
            Fait par{' '}
            <a
              href="https://wiicode.org"
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:text-primary transition-colors"
            >
              WIICODE
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
