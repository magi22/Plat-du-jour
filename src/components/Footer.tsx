import React from 'react';
import { Utensils, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                    <Utensils size={16} />
                </div>
                <span className="text-xl font-bold text-gray-900">Plat du Jour</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              La meilleure façon de découvrir les menus du jour autour de vous. Simple, rapide et gourmand.
            </p>
            <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <Instagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <Facebook size={16} />
                </a>
                 <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <Twitter size={16} />
                </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6">Liens Rapides</h4>
            <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">Accueil</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">Comment ça marche</a></li>
                <li><a href="#restaurants" className="hover:text-primary transition-colors">Pour les restaurants</a></li>
                <li><a href="#reviews" className="hover:text-primary transition-colors">Témoignages</a></li>
            </ul>
          </div>

           {/* Legal */}
           <div>
            <h4 className="font-bold text-gray-900 mb-6">Légal</h4>
            <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-primary transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">CGU</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
             <h4 className="font-bold text-gray-900 mb-6">Contactez-nous</h4>
             <p className="text-sm text-gray-600 mb-4">Une question ? Écrivez-nous.</p>
             <a href="mailto:hello@platdujour.com" className="text-primary font-medium hover:underline">hello@platdujour.com</a>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© 2024 Plat du Jour. Tous droits réservés.</p>
            <div className="text-xs text-gray-400">
                Fait avec ❤️ pour la gastronomie
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;