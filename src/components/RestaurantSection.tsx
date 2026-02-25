import React from 'react';
import { ChefHat, TrendingUp, Users, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, fadeLeft, scaleIn, staggerContainer, defaultViewport } from '../animations/variants';
import { useLanguage } from '../i18n/LanguageContext';
import Mascotte from '../assets/Mascotte@2x.png';
import RestaurantPhoto from '../assets/restaurant (1).png';

const RestaurantSection: React.FC = () => {
  const { t } = useLanguage();
  const r = t.restaurants;

  return (
    <section id="restaurants" className="py-24 bg-transparent overflow-hidden relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div className="w-full lg:w-1/2 relative group"
            initial="hidden" whileInView="visible" viewport={defaultViewport} variants={fadeLeft}>
            {/* Mascotte collée en bas à droite de l'image */}
            <img src={Mascotte} alt="" aria-hidden draggable={false}
              className="absolute bottom-0 right-2 h-32 xl:h-36 w-auto z-20 pointer-events-none select-none hidden lg:block animate-float"
              style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,1)) drop-shadow(0 0 16px rgba(255,255,255,0.8)) drop-shadow(0 0 24px rgba(255,255,255,0.5))' }} />

            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img src={RestaurantPhoto}
                alt="Collaboration Restaurant"
                className="object-cover w-full h-[500px] transform group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex items-center gap-3 text-white">
                  <div className="bg-primary p-2 rounded-full animate-bounce"><Handshake className="w-6 h-6" /></div>
                  <div>
                    <p className="font-bold text-lg">{r.partnership[0]}</p>
                    <p className="text-sm opacity-90">{r.partnership[1]}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-2xl shadow-xl max-w-[200px] border border-gray-100 animate-float">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-500 text-xs font-bold">{r.revenue}</span>
                <TrendingUp className="text-green-500 w-4 h-4" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">+ 1,250€</div>
              <div className="text-xs text-green-600 bg-green-50 inline-block px-2 py-1 rounded-full font-medium">{r.thisMonth}</div>
            </div>
          </motion.div>

          <motion.div className="w-full lg:w-1/2"
            initial="hidden" whileInView="visible" viewport={defaultViewport} variants={staggerContainer}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg"><ChefHat className="text-primary w-6 h-6" /></div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">{r.badge}</span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {r.h2}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">{r.h2highlight}</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-lg text-gray-600 mb-8">{r.subtitle}</motion.p>

            <div className="space-y-6 mb-10">
              {r.steps.map((item, i) => (
                <motion.div key={i} variants={fadeUp}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-colors cursor-default">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-primary font-bold text-xl">{i + 1}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button variants={scaleIn}
              className="group relative bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden shadow-xl transition-all hover:shadow-2xl hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                {r.cta}
                <Users size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;
