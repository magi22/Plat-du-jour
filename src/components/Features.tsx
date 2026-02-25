import React from 'react';
import { motion } from 'framer-motion';
import { Map, Bell, Star, Calendar } from 'lucide-react';
import { SectionContainer } from './ui/SectionContainer';
import { FadeIn } from './ui/FadeIn';
import { fadeUp } from '../animations/variants';
import { useLanguage } from '../i18n/LanguageContext';
import Mascotte from '../assets/Mascotte@2x.png';

const ICONS = [Map, Calendar, Star, Bell];

const Features: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="py-20 bg-transparent relative overflow-hidden">

      {/* Mascotte décorative */}
      <img src={Mascotte} alt="" aria-hidden draggable={false}
        className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto opacity-[0.05] pointer-events-none select-none translate-x-1/3 hidden xl:block" />

      {/* Badge flottant */}
      <div className="absolute top-20 left-4 lg:left-16 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 animate-float z-10 hidden lg:flex items-center gap-3">
        <div className="bg-red-100 p-2 rounded-lg text-xl">❤️</div>
        <div>
          <p className="font-bold text-sm text-gray-900">{t.features.float[0]}</p>
          <p className="text-[10px] text-gray-500">{t.features.float[1]}</p>
        </div>
      </div>

      <SectionContainer className="relative z-10">
        <FadeIn className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.features.h2}</h2>
          <p className="mt-3 text-gray-600">{t.features.subtitle}</p>
        </FadeIn>

        <FadeIn stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.items.map(({ title, desc }, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div key={i} variants={fadeUp}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </FadeIn>
      </SectionContainer>
    </section>
  );
};

export default Features;
