import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChefHat, LayoutDashboard, Sparkles, Search,
  Gift, CreditCard, MapPin, CalendarCheck, Smartphone,
} from "lucide-react";
import { ImageWithFallback } from "./ui/ImageWithFallback";
import { useLanguage } from "../i18n/LanguageContext";

import img147 from "../assets/147shots_so.png";
import img882 from "../assets/882shots_so.png";
import img539 from "../assets/539shots_so.png";
import img694 from "../assets/694shots_so.png";
import img573 from "../assets/573shots_so.png";
import img661 from "../assets/661shots_so.png";
import img382 from "../assets/382shots_so.png";
import img764 from "../assets/764shots_so.png";

const ICONS = [ChefHat, LayoutDashboard, Sparkles, Search, Gift, CreditCard, MapPin, CalendarCheck];
const IMAGES = [img147, img882, img539, img694, img573, img661, img382, img764];

export function AppShowcase() {
  const { t } = useLanguage();
  const s = t.showcase;
  const [activeIndex, setActiveIndex] = useState(0);

  const features = useMemo(() =>
    s.features.map((f, i) => ({ ...f, icon: ICONS[i], image: IMAGES[i], id: i + 1 })),
    [s.features]
  );

  const active = features[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#0a0a0f]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(193,17,30,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(193,17,30,0.035)_1px,transparent_1px)] bg-[size:110px_110px]" />

      <motion.div aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[52%] h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        animate={{ opacity: [0.18, 0.34, 0.18], scale: [0.96, 1.04, 0.96] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle at 30% 30%, rgba(193,17,30,0.55), transparent 60%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-16 text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 backdrop-blur">
            <Smartphone size={18} className="text-[#c1111e]" />
            <span className="font-semibold text-white">{s.badge}</span>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {s.h2pre}{" "}
            <span className="text-[#c1111e]">{s.h2highlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-white/70 md:text-lg">{s.subtitle}</p>
        </motion.div>

        {/* Grille principale */}
        <div className="grid items-center gap-12 lg:grid-cols-3">
          {/* Onglets */}
          <div className="space-y-3 lg:col-span-1">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeIndex;
              return (
                <motion.button key={feature.id} onClick={() => setActiveIndex(index)}
                  whileHover={{ x: 8 }}
                  className={`relative w-full rounded-2xl border p-4 text-left transition-all ${
                    isActive ? "border-[#c1111e] bg-white/10 shadow-[0_0_30px_rgba(193,17,30,0.25)]"
                             : "border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20"
                  }`}>
                  {isActive && (
                    <motion.div layoutId="activeTab"
                      className="absolute inset-0 rounded-2xl bg-[#c1111e]/10"
                      transition={{ type: "spring", stiffness: 280, damping: 28 }} />
                  )}
                  <div className="relative flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${isActive ? "bg-[#c1111e] shadow-lg" : "bg-white/10"}`}>
                      <Icon size={22} className={isActive ? "text-white" : "text-gray-300"} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className={`mb-1 text-sm font-bold ${isActive ? "text-white" : "text-gray-200"}`}>{feature.title}</h3>
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

          {/* Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-full max-w-[380px]">
              <motion.div className="absolute inset-0 rounded-[3.2rem] blur-3xl"
                animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                style={{ background: "conic-gradient(from 180deg, rgba(193,17,30,.10), rgba(255,71,87,.22), rgba(193,17,30,.10))", opacity: 0.9 }} />
              <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-white/5 shadow-2xl">
                <div className="aspect-[9/19] w-full">
                  <AnimatePresence mode="wait">
                    <motion.div key={activeIndex}
                      initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.35 }} className="h-full w-full">
                      <ImageWithFallback src={active.image} alt={active.title} className="h-full w-full object-contain scale-[1.55]" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <AnimatePresence mode="wait">
                {active.stats.map((stat, idx) => (
                  <motion.div key={`${activeIndex}-${idx}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0, x: idx === 0 ? -18 : 18 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ delay: 0.2 + idx * 0.08 }}
                    className={`absolute ${idx === 0 ? "top-1/4 -left-4" : "bottom-1/4 -right-4"} rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl`}>
                    <div className="text-2xl font-extrabold text-[#ff4757]">{stat.value}</div>
                    <div className="text-xs text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Détails */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              <motion.div key={activeIndex}
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45 }} className="space-y-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c1111e]">
                    <span className="text-sm font-bold text-white">{activeIndex + 1}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {s.featureLabel} {activeIndex + 1}/{features.length}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold text-white">{active.title}</h3>
                  <p className="mt-2 text-lg font-semibold text-[#ff4757]">{active.subtitle}</p>
                </div>

                <p className="leading-relaxed text-gray-300">{active.description}</p>

                <div className="space-y-3 pt-2">
                  {s.benefits.map((benefit, idx) => (
                    <motion.div key={idx}
                      initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + idx * 0.08 }}
                      className="flex items-center gap-3">
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
                  {s.discover}
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Icônes bas */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isActive = idx === activeIndex;
            return (
              <motion.button key={feature.id} onClick={() => setActiveIndex(idx)}
                whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }} className="group relative">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all ${
                  isActive ? "border-transparent bg-[#c1111e] shadow-lg" : "border-white/20 bg-white/5 hover:bg-white/10"
                }`}>
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
