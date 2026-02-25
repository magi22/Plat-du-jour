import React from 'react';
import AppleHero from '../assets/apple4.png';
import AppleHeroHover from '../assets/apple6.png';
import PlayHero from '../assets/play3.gif';
import PlayHeroHover from '../assets/playcolor.png';
import Logo from '../assets/Logomascotte.svg';
import { useLanguage } from '../i18n/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-visible bg-transparent">
      {/* Formes décoratives */}
      <div className="absolute top-20 right-0 -mr-20 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
      <div className="absolute top-60 left-0 -ml-20 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Texte */}
          <div className="w-full lg:w-1/2 text-center lg:text-left z-20">
            {/* Badge mascotte */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-orange-100 shadow-lg shadow-orange-100/50 text-primary font-bold text-sm mb-8 animate-pop-in hover:scale-105 transition-transform cursor-default">
              <img src={Logo} alt="" aria-hidden className="w-9 h-9 object-contain animate-bounce" draggable={false} />
              <span>{t.hero.badge}</span>
            </div>

            <h1
              className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-8 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              {t.hero.h1pre}{' '}
              <span className="text-primary relative inline-block">
                Plat du Jour
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>{' '}
              <br />{t.hero.h1post}
            </h1>

            <p
              className="text-xl text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              {t.hero.subtitle}
            </p>

            <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {/* Disponibilité */}
              <p className="mb-4 flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
                <span className="point-statut" />
                {t.hero.available}
              </p>

              {/* Boutons stores */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {/* Apple Store */}
                <a
                  href="https://apps.apple.com/app/plat-du-jour"
                  target="_blank" rel="noreferrer"
                  className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl hover:bg-primary transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-orange-500/30"
                >
                  <div className="relative w-8 h-8">
                    <img src={AppleHero} alt="" aria-hidden className="absolute inset-0 w-full h-full transition-opacity group-hover:opacity-0" draggable={false} />
                    <img src={AppleHeroHover} alt="" aria-hidden className="absolute inset-0 w-full h-full opacity-0 transition-opacity group-hover:opacity-100" draggable={false} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium opacity-80 uppercase tracking-wider">{t.hero.downloadOn}</div>
                    <div className="text-lg font-bold leading-none">App Store</div>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.platdujour"
                  target="_blank" rel="noreferrer"
                  className="group flex items-center gap-3 bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl hover:border-gray-900 transition-all duration-300 transform hover:-translate-y-1 shadow-xl"
                >
                  <div className="relative w-8 h-8">
                    <img src={PlayHero} alt="" aria-hidden className="absolute inset-0 w-full h-full transition-opacity group-hover:opacity-0" draggable={false} />
                    <img src={PlayHeroHover} alt="" aria-hidden className="absolute inset-0 w-full h-full opacity-0 transition-opacity group-hover:opacity-100" draggable={false} />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-medium opacity-80 uppercase tracking-wider">{t.hero.availableOn}</div>
                    <div className="text-lg font-bold leading-none">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Maquette téléphone */}
          <div className="w-full lg:w-1/2 relative perspective-1000 z-10 mt-10 lg:mt-0">
            <div className="relative mx-auto w-[320px] h-[640px] bg-gray-900 rounded-[3.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border-[12px] border-gray-900 transform rotate-y-12 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out z-10">
              <div className="absolute top-24 -left-[16px] h-10 w-[4px] bg-gray-800 rounded-l-md" />
              <div className="absolute top-36 -left-[16px] h-16 w-[4px] bg-gray-800 rounded-l-md" />
              <div className="absolute top-28 -right-[16px] h-20 w-[4px] bg-gray-800 rounded-r-md" />

              <div className="absolute inset-0 bg-white rounded-[2.8rem] overflow-hidden">
                <div className="absolute top-0 w-full p-6 pt-10 flex justify-between items-center z-30 bg-gradient-to-b from-black/60 to-transparent">
                  <div className="text-white font-bold text-lg drop-shadow-md">Plat du Jour</div>
                  <div className="w-8 h-8 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  </div>
                </div>

                <div className="w-full h-full relative">
                  <img
                    src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80"
                    className="w-full h-full object-cover"
                    alt="Plat Suisse"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                </div>

                <div className="absolute bottom-0 w-full p-6 z-30">
                  <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-5 shadow-2xl animate-slide-up">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-extrabold text-2xl text-gray-900 leading-tight">Assiette du<br />Terroir</h3>
                        <p className="text-gray-500 font-medium text-sm mt-1">L&apos;Auberge Suisse • 250m</p>
                      </div>
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg shadow-orange-500/40">-20%</span>
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm mb-4">
                      ★★★★★ <span className="text-gray-400 text-xs ml-1">(124 avis)</span>
                    </div>
                    <button className="w-full bg-black text-white py-3.5 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg">
                      {t.hero.reserve} • 28.50 CHF
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bulle flottante nourriture */}
            <div className="absolute top-20 -right-16 md:-right-24 w-48 h-48 md:w-64 md:h-64 z-40 pointer-events-none animate-float-delayed">
              <div className="relative w-full h-full">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
                    className="w-full h-full object-cover scale-110"
                    alt=""
                    aria-hidden
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-4 right-0 bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-xl border border-gray-100 rotate-12">
                  {t.hero.popBadge}
                </div>
              </div>
            </div>

            {/* Badge gauche bas */}
            <div className="absolute bottom-40 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-float z-30 max-w-[180px]">
              <div className="bg-green-100 p-2 rounded-lg text-2xl">🌿</div>
              <div>
                <p className="font-bold text-sm text-gray-800">{t.hero.fresh[0]}</p>
                <p className="text-[10px] text-gray-500">{t.hero.fresh[1]}</p>
              </div>
            </div>

            {/* Badge droite milieu */}
            <div className="absolute top-32 -right-6 md:-right-12 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float z-20" style={{ animationDelay: '2s' }}>
              <div className="bg-orange-100 p-2 rounded-lg text-xl">⏱️</div>
              <div>
                <p className="font-bold text-sm text-gray-800">{t.hero.fast[0]}</p>
                <p className="text-[10px] text-gray-500">{t.hero.fast[1]}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
