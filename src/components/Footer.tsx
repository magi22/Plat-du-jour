import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import Logo from '../assets/Logomascotte.svg';
import { useLanguage } from '../i18n/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const f = t.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070710] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Marque */}
          <div className="col-span-1">
            <div className="mb-6">
              <img src={Logo} alt="Plat du Jour" className="w-20 h-auto object-contain" draggable={false} />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{f.tagline}</p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors" aria-label="Twitter / X">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-bold text-white mb-6">{f.quickLinks}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">{f.links.howItWorks}</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">{f.links.testimonials}</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors">{f.links.download}</a></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="font-bold text-white mb-6">{f.legal}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">{f.terms}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{f.privacy}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-6">{f.contactTitle}</h4>
            <p className="text-sm text-gray-400 mb-4">{f.contactDesc}</p>
            <a href="mailto:info@platdujour.ch" className="text-primary font-medium hover:underline">
              info@platdujour.ch
            </a>
            <div className="mt-6 text-sm text-gray-400">
              {f.help}{' '}
              <a href="mailto:info@platdujour.ch" className="text-primary font-semibold hover:underline">
                {f.contactSupport}
              </a>.
            </div>
          </div>

        </div>

        {/* Bas de page */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {year} <strong className="text-gray-300">Plat du Jour</strong>. {f.allRights}
          </p>
          <div className="text-xs text-gray-500">
            {f.madeBy}{' '}
            <a href="https://wiicode.org" target="_blank" rel="noreferrer"
              className="font-semibold hover:text-primary transition-colors">
              WIICODE
            </a>.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
