import { motion } from "framer-motion";
import { MapPin, Clock, Star, Compass } from "lucide-react";
import { fadeUp, staggerContainer, defaultViewport } from "../animations/variants";
import { useLanguage } from "../i18n/LanguageContext";
import mascotteQuestion from "../assets/Mascotte question.svg";

const ICONS = [MapPin, Clock, Star, Compass];

export default function MascotSection() {
  const { t } = useLanguage();
  const m = t.mascot;

  return (
    <section className="relative py-16 sm:py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16">

          {/* Mascotte — en premier sur mobile, à gauche sur desktop */}
          <motion.div
            className="flex-shrink-0 flex justify-center w-full lg:w-auto"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* padding-top pour les ? qui débordent en haut */}
            <div className="relative pt-10">
              <span
                className="absolute top-4 left-0 text-3xl sm:text-4xl font-black text-primary animate-bounce select-none pointer-events-none"
                style={{ animationDelay: "0s", animationDuration: "1s" }}
                aria-hidden
              >
                ?
              </span>
              <span
                className="absolute top-0 right-4 text-4xl sm:text-5xl font-black text-[#ff4757] animate-bounce select-none pointer-events-none"
                style={{ animationDelay: "0.35s", animationDuration: "1s" }}
                aria-hidden
              >
                ?
              </span>
              <img
                src={mascotteQuestion}
                alt="Mascotte Plat du Jour"
                className="w-48 sm:w-64 lg:w-[360px] xl:w-[420px] drop-shadow-2xl animate-float"
              />
            </div>
          </motion.div>

          {/* Contenu : badge, titre, lead, cartes, description, boutons */}
          <motion.div
            className="flex-1 w-full text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-black/5 text-sm text-gray-700 mb-4"
            >
              {m.badge}
            </motion.p>

            {/* Titre */}
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2 leading-tight"
            >
              {m.h2}
            </motion.h2>

            {/* Lead */}
            <motion.p
              variants={fadeUp}
              className="font-bold text-gray-800 text-base mb-5"
            >
              {m.lead}
            </motion.p>

            {/* Cartes 2×2 */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-3 mb-5"
            >
              {m.cards.map((card, i) => {
                const Icon = ICONS[i] ?? MapPin;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-2 sm:gap-3 rounded-2xl border border-black/5 bg-white/70 backdrop-blur-sm p-3 sm:p-4 shadow-sm hover:shadow-md hover:border-primary/20 transition-all text-left"
                  >
                    <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900 text-xs sm:text-sm leading-snug">{card.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed hidden sm:block">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5"
            >
              {m.subtitle}
            </motion.p>

            {/* Boutons */}
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-primary to-[#ff4757] text-white shadow-[0_12px_30px_rgba(193,17,30,0.25)] hover:shadow-[0_16px_40px_rgba(193,17,30,0.35)] hover:scale-[1.02] transition-all text-sm"
              >
                {m.cta}
              </a>
              <a
                href="#restaurants"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl font-semibold bg-white/80 border border-black/10 text-gray-700 hover:bg-white hover:border-black/20 shadow-sm hover:shadow-md transition-all text-sm"
              >
                {m.ctaRestaurant}
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
