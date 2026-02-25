import React from 'react';
import { MapPin } from 'lucide-react';

// ✅ assets (toute la ville)
import AppleBase from '../assets/apple 2.png';
import AppleHover from '../assets/apple3.gif';
import PlayBase from '../assets/play4.png';
import PlayHover from '../assets/play6.png';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      {/* Dark animated background */}
      <div className="anim-bg-dark">
        <div className="anim-bg-dark-tint" />
        <div className="anim-bg-dark-grid" />
        <div className="anim-bg-dark-glow anim-bg-dark-glow-1" />
        <div className="anim-bg-dark-glow anim-bg-dark-glow-2" />
      </div>
      {/* Fondu bas vers footer */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-b from-transparent to-[#070710] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Toute la ville <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-400">
                 dans votre poche.
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">
              De Berne à Zurich, trouvez les pépites culinaires autour de vous.
              Téléchargez Plat du Jour et commencez l&apos;exploration.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              {/* APP STORE */}
              <a
                href="https://apps.apple.com/app/plat-du-jour"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-transform transform hover:-translate-y-1 font-bold shadow-lg shadow-white/10"
              >
                <div className="relative w-7 h-7">
                  <img
                    src={AppleBase}
                    alt="App Store"
                    className="absolute inset-0 w-full h-full transition-opacity group-hover:opacity-0"
                    draggable={false}
                  />
                  <img
                    src={AppleHover}
                    alt="App Store Hover"
                    className="absolute inset-0 w-full h-full opacity-0 transition-opacity group-hover:opacity-100"
                    draggable={false}
                  />
                </div>

                <div className="text-left">
                  <div className="text-xs font-medium opacity-80 uppercase">
                    Télécharger sur
                  </div>
                  <div className="text-sm font-bold leading-none">App Store</div>
                </div>
              </a>

              {/* GOOGLE PLAY */}
              <a
                href="https://play.google.com/store/apps/details?id=com.platdujour"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-transform transform hover:-translate-y-1 font-bold"
              >
                <div className="relative w-7 h-7">
                  <img
                    src={PlayBase}
                    alt="Google Play"
                    className="absolute inset-0 w-full h-full transition-opacity group-hover:opacity-0"
                    draggable={false}
                  />
                  <img
                    src={PlayHover}
                    alt="Google Play Hover"
                    className="absolute inset-0 w-full h-full opacity-0 transition-opacity group-hover:opacity-100"
                    draggable={false}
                  />
                </div>

                <div className="text-left">
                  <div className="text-xs font-medium opacity-80 uppercase">
                    Disponible sur
                  </div>
                  <div className="text-sm font-bold leading-none">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Map Phone Visual */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-primary blur-3xl opacity-30 rounded-full animate-pulse"></div>

              {/* Phone Frame */}
              <div className="relative bg-black border-[10px] border-gray-800 rounded-[3.5rem] w-[300px] h-[600px] shadow-2xl overflow-hidden z-20">
                {/* Status Bar */}
                <div className="absolute top-0 w-full h-8 bg-black/20 z-30"></div>

                {/* Map Interface */}
                <div className="absolute inset-0 bg-gray-200">
                  {/* Map Image (Wide Switzerland/Regional View) */}
                  <img
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Carte Suisse GPS"
                    className="w-full h-full object-cover opacity-90 filter brightness-90"
                  />

                  {/* Background Dots (Other 7 restaurants) - Spread out for "Switzerland" feel */}
                  <div className="absolute top-[15%] right-[25%] w-2 h-2 bg-gray-600 rounded-full shadow-sm"></div>
                  <div className="absolute top-[25%] left-[15%] w-2 h-2 bg-gray-600 rounded-full shadow-sm"></div>
                  <div className="absolute bottom-[15%] left-[20%] w-2 h-2 bg-gray-600 rounded-full shadow-sm"></div>
                  <div className="absolute top-[45%] left-[10%] w-2 h-2 bg-gray-600 rounded-full shadow-sm"></div>
                  <div className="absolute bottom-[35%] right-[10%] w-2 h-2 bg-gray-600 rounded-full shadow-sm"></div>
                  <div className="absolute top-[65%] left-[40%] w-2 h-2 bg-gray-600 rounded-full shadow-sm"></div>
                  <div className="absolute top-[8%] right-[40%] w-2 h-2 bg-gray-600 rounded-full shadow-sm"></div>

                  {/* 3 Main Restaurants Pins (Closest) */}

                  {/* Restaurant 1: Le Palais Fédéral (Closest) */}
                  <div className="absolute top-[45%] left-[45%] z-40 animate-float cursor-pointer group">
                    <div className="relative">
                      <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center p-1 border-4 border-primary transform transition-transform group-hover:scale-110">
                        <span className="text-2xl">🥓</span>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45 z-[-1]"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                        Kornhauskeller
                      </div>
                    </div>
                  </div>

                  {/* Restaurant 2: Altes Tramdepot */}
                  <div className="absolute bottom-[25%] right-[30%] z-40 animate-float-delayed cursor-pointer group">
                    <div className="relative">
                      {/* (je garde ton style tel quel, juste je remplace le jaune par primary/60 pour cohérence) */}
                      <div className="w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center p-1 border-4 border-primary/60 transform transition-transform group-hover:scale-110">
                        <span className="text-2xl">🍺</span>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary/60 rotate-45 z-[-1]"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                        Altes Tramdepot
                      </div>
                    </div>
                  </div>

                  {/* Restaurant 3: Rosengarten */}
                  <div
                    className="absolute top-[35%] right-[20%] z-30 animate-float cursor-pointer group"
                    style={{ animationDelay: '1.5s' }}
                  >
                    <div className="relative">
                      <div className="w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center p-1 border-4 border-primary transform transition-transform group-hover:scale-110">
                        <span className="text-xl">🫕</span>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45 z-[-1]"></div>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap">
                        Rosengarten
                      </div>
                    </div>
                  </div>

                  {/* Bottom UI Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-xl z-50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 uppercase font-bold">
                          Suisse
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          10 restaurants trouvés
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
