import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, CalendarCheck } from 'lucide-react';
import { SectionContainer } from './ui/SectionContainer';
import { FadeIn } from './ui/FadeIn';
import { fadeUp } from '../animations/variants';
import { useLanguage } from '../i18n/LanguageContext';
import Mascotte from '../assets/Mascotte@2x.png';

const ICONS = [MapPin, Search, CalendarCheck];
const COULEURS = ['bg-orange-400', 'bg-red-400', 'bg-green-400'];

const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 bg-gray-50 overflow-hidden relative">
      {/* Mascotte décorative */}
      <img src={Mascotte} alt="" aria-hidden draggable={false}
        className="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-auto opacity-[0.06] pointer-events-none select-none -translate-x-1/3 hidden xl:block" />

      <SectionContainer className="relative">
        {/* Badge flottant */}
        <div className="absolute top-10 right-0 md:right-10 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 animate-float-delayed z-10 hidden lg:flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-lg text-xl">🚀</div>
          <div>
            <p className="font-bold text-sm text-gray-900">{t.howItWorks.float[0]}</p>
            <p className="text-[10px] text-gray-500">{t.howItWorks.float[1]}</p>
          </div>
        </div>

        <FadeIn className="text-center mb-14">
          <span className="inline-flex px-5 py-2 rounded-full border border-red-200 text-red-600 text-xs font-bold tracking-widest uppercase">
            {t.howItWorks.badge}
          </span>
          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold text-gray-900">{t.howItWorks.h2}</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t.howItWorks.subtitle}</p>
        </FadeIn>

        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-px border-t-2 border-dashed border-gray-200 -z-10" />
          <FadeIn stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {t.howItWorks.steps.map(({ title, desc }, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div key={i} variants={fadeUp}
                  className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative group">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-md group-hover:rotate-12 group-hover:-translate-y-1 transition-transform duration-300 ${COULEURS[i]}`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute top-4 right-5 text-6xl font-black text-gray-100 opacity-60 select-none group-hover:text-red-100 transition-colors">
                    0{i + 1}
                  </div>
                  <h4 className="text-lg font-extrabold text-gray-900 mb-2 text-center">{title}</h4>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{desc}</p>
                </motion.div>
              );
            })}
          </FadeIn>
        </div>
      </SectionContainer>
    </section>
  );
};

export default HowItWorks;
