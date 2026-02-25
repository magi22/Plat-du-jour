import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChefHat,
  LayoutDashboard,
  Sparkles,
  Search,
  Gift,
  CreditCard,
  MapPin,
  CalendarCheck,
  Smartphone,
} from "lucide-react";

import { ImageWithFallback } from "./figma/ImageWithFallback";

// ✅ Images locales (assets)
import img147 from "../assets/147shots_so.png";
import img882 from "../assets/882shots_so.png";
import img539 from "../assets/539shots_so.png";
import img694 from "../assets/694shots_so.png";
import img573 from "../assets/573shots_so.png";
import img661 from "../assets/661shots_so.png";
import img382 from "../assets/382shots_so.png";
import img764 from "../assets/764shots_so.png";

type FeatureItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  image: string;
  stats: { value: string; label: string }[];
};

export function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ 8 features = ordre EXACT de tes images
  const features: FeatureItem[] = useMemo(
    () => [
      {
        id: 1,
        title: "Découvrir le plat du jour",
        subtitle: "Accueil & suggestions autour de vous",
        description:
          "Accédez rapidement aux plats disponibles, repérez les bonnes adresses et explorez les menus du jour sans perdre de temps.",
        icon: ChefHat,
        image: img147,
        stats: [
          { value: "Rapide", label: "Découverte" },
          { value: "Local", label: "Autour de vous" },
        ],
      },
      {
        id: 2,
        title: "Espace restaurant",
        subtitle: "Dashboard & performance",
        description:
          "Un tableau de bord simple pour suivre vos performances, gérer vos contenus et gagner du temps au quotidien.",
        icon: LayoutDashboard,
        image: img882,
        stats: [
          { value: "Stats", label: "Claires" },
          { value: "Gestion", label: "Centralisée" },
        ],
      },
      {
        id: 3,
        title: "Onboarding fluide",
        subtitle: "Présentation en quelques écrans",
        description:
          "Une prise en main rapide : l'utilisateur comprend l'app en quelques secondes et passe à l'action immédiatement.",
        icon: Sparkles,
        image: img539,
        stats: [
          { value: "< 1 min", label: "Compréhension" },
          { value: "Simple", label: "Expérience" },
        ],
      },
      {
        id: 4,
        title: "Recherche & filtres",
        subtitle: "Trouver vite, choisir mieux",
        description:
          "Recherchez un restaurant, un plat ou une catégorie. Filtrez pour trouver exactement ce que vous voulez, au bon moment.",
        icon: Search,
        image: img694,
        stats: [
          { value: "Smart", label: "Recherche" },
          { value: "Pertinent", label: "Résultats" },
        ],
      },
      {
        id: 5,
        title: "Parrainage & récompenses",
        subtitle: "Invitez, cumulez, profitez",
        description:
          "Partagez votre lien et progressez vers des récompenses. Un système simple qui motive et fidélise.",
        icon: Gift,
        image: img573,
        stats: [
          { value: "Bonus", label: "Récompenses" },
          { value: "Fun", label: "Challenge" },
        ],
      },
      {
        id: 6,
        title: "Carte & ID Premium",
        subtitle: "Accès & avantages en un scan",
        description:
          "Une carte premium claire avec QR Code et informations utiles, pour profiter d'avantages et d'offres exclusives.",
        icon: CreditCard,
        image: img661,
        stats: [
          { value: "QR", label: "Scan rapide" },
          { value: "Premium", label: "Avantages" },
        ],
      },
      {
        id: 7,
        title: "Restaurants & menus",
        subtitle: "Vue riche, infos utiles",
        description:
          "Photos, menus, badges premium/cadeau, et infos clés : tout est présenté pour vous aider à décider rapidement.",
        icon: MapPin,
        image: img382,
        stats: [
          { value: "Menus", label: "À jour" },
          { value: "Infos", label: "Claires" },
        ],
      },
      {
        id: 8,
        title: "Réservation",
        subtitle: "Passez à l'action",
        description:
          "Réservez facilement, sans friction. Une action simple et rapide pour transformer la découverte en visite.",
        icon: CalendarCheck,
        image: img764,
        stats: [
          { value: "1 clic", label: "Réserver" },
          { value: "Direct", label: "Action" },
        ],
      },
    ],
    []
  );

  const activeFeature = features[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#0a0a0f]">
      {/* ✅ Dégradé blanc retiré */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(193,17,30,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(193,17,30,0.035)_1px,transparent_1px)] bg-[size:110px_110px]" />

      {/* ✅ Glow rouge animé */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[52%] h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        animate={{
          opacity: [0.18, 0.34, 0.18],
          scale: [0.96, 1.04, 0.96],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(193,17,30,0.55), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 backdrop-blur">
            <Smartphone size={18} className="text-[#c1111e]" />
            <span className="font-semibold text-white">Fonctionnalités</span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Tout ce qu'il faut pour{" "}
            <span className="text-[#c1111e]">découvrir, choisir, profiter</span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base text-white/70 md:text-lg">
            Une expérience simple côté utilisateur, et des outils efficaces côté restaurant.
          </p>
        </motion.div>

        {/* Main */}
        <div className="grid items-center gap-12 lg:grid-cols-3">
          {/* Tabs */}
          <div className="space-y-3 lg:col-span-1">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ x: 8 }}
                  className={`relative w-full rounded-2xl border p-4 text-left transition-all ${
                    isActive
                      ? "border-[#c1111e] bg-white/10 shadow-[0_0_30px_rgba(193,17,30,0.25)]"
                      : "border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-2xl bg-[#c1111e]/10"
                      transition={{ type: "spring", stiffness: 280, damping: 28 }}
                    />
                  )}

                  <div className="relative flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        isActive ? "bg-[#c1111e] shadow-lg" : "bg-white/10"
                      }`}
                    >
                      <Icon size={22} className={isActive ? "text-white" : "text-gray-300"} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className={`mb-1 text-sm font-bold ${isActive ? "text-white" : "text-gray-200"}`}>
                        {feature.title}
                      </h3>
                      <p className="truncate text-xs text-gray-400">{feature.subtitle}</p>
                    </div>

                    {isActive && (
                      <div className="text-[#c1111e]">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Image showcase */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-full max-w-[380px]">
              <motion.div
                className="absolute inset-0 rounded-[3.2rem] blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "conic-gradient(from 180deg, rgba(193,17,30,.10), rgba(255,71,87,.22), rgba(193,17,30,.10))",
                  opacity: 0.9,
                }}
              />

              <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/5 shadow-2xl">
                <div className="aspect-[9/19] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35 }}
                      className="h-full w-full"
                    >
                      <ImageWithFallback
                        src={activeFeature.image}
                        alt={activeFeature.title}
                        className="h-full w-full object-contain scale-[1.55]"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* mini stats */}
              <AnimatePresence mode="wait">
                {activeFeature.stats.map((stat, idx) => (
                  <motion.div
                    key={`${activeIndex}-${idx}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      x: idx === 0 ? -18 : 18,
                    }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ delay: 0.2 + idx * 0.08 }}
                    className={`absolute ${
                      idx === 0 ? "top-1/4 -left-4" : "bottom-1/4 -right-4"
                    } rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl`}
                  >
                    <div className="text-2xl font-extrabold text-[#ff4757]">{stat.value}</div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c1111e]">
                    <span className="text-sm font-bold text-white">{activeIndex + 1}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    Fonctionnalité {activeIndex + 1}/{features.length}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white">{activeFeature.title}</h3>
                  <p className="mt-2 text-lg font-semibold text-[#ff4757]">{activeFeature.subtitle}</p>
                </div>

                <p className="leading-relaxed text-gray-300">{activeFeature.description}</p>

                <div className="space-y-3 pt-2">
                  {[
                    "Interface claire et rapide",
                    "Expérience cohérente iOS & Android",
                    "Pensé pour l'utilisateur et le restaurant",
                  ].map((benefit, idx) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + idx * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#c1111e]">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-200">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#c1111e] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl">
                  Découvrir l'app
                  <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom icons */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isActive = idx === activeIndex;

            return (
              <motion.button
                key={feature.id}
                onClick={() => setActiveIndex(idx)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="group relative"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all ${
                    isActive
                      ? "border-transparent bg-[#c1111e] shadow-lg"
                      : "border-white/20 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <Icon size={20} className={isActive ? "text-white" : "text-gray-300"} />
                </div>

                <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="whitespace-nowrap rounded-lg border border-white/20 bg-gray-900 px-3 py-2 text-xs text-white shadow-xl">
                    {feature.title}
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}