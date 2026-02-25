import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, Zap, Star, Users, MapPin, Heart,
  Bell, Clock, TrendingUp, BarChart3, Crown, Shield,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

type Axis = "user" | "restaurant";
type Billing = "monthly" | "yearly";

/* Icônes fixes par ordre — correspondent à l'ordre des features dans translations */
const USER_FREE_ICONS   = [MapPin, Clock, Heart, Users, Bell];
const USER_PREM_ICONS   = [Crown, Heart, Bell, Zap, TrendingUp, Star, Shield, BarChart3, Crown, Users, MapPin];
const REST_FREE_ICONS   = [Users, Clock, BarChart3, Star, MapPin, Check, Bell];
const REST_PREM_ICONS   = [Crown, Clock, Zap, TrendingUp, Star, Bell, BarChart3, Shield, Crown, Users];

export function Pricing() {
  const { t } = useLanguage();
  const p = t.pricing;
  const [axis, setAxis] = useState<Axis>("user");
  const [billing, setBilling] = useState<Billing>("monthly");

  const freePlan   = p.plans[axis].free;
  const premPlan   = p.plans[axis].premium;
  const freeIcons  = axis === "user" ? USER_FREE_ICONS : REST_FREE_ICONS;
  const premIcons  = axis === "user" ? USER_PREM_ICONS : REST_PREM_ICONS;

  return (
    <section id="tarifs" className="relative overflow-hidden py-24 bg-gray-50">
      {/* Arrière-plan */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(193,17,30,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(255,71,87,0.06),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(193,17,30,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(193,17,30,0.06)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.35]" />
        <motion.div aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(193,17,30,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(193,17,30,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.22]"
          animate={{ backgroundPosition: ["0px 0px", "160px 160px"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
        <div className="absolute -top-24 -left-24 h-[380px] w-[380px] rounded-full bg-[#c1111e]/10 blur-[90px]" />
        <div className="absolute -bottom-28 -right-28 h-[420px] w-[420px] rounded-full bg-[#ff4757]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-5 py-2 rounded-full border border-black/10 shadow-sm mb-5">
            <Star size={16} className="text-[#c1111e]" />
            <span className="text-sm font-semibold text-gray-900">{p.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {p.h2}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c1111e] to-[#ff4757]">{p.h2highlight}</span>
          </h2>
          <p className="text-lg text-gray-600">{p.subtitle}</p>
          <p className="text-sm text-gray-500 mt-2">{p.noCommitment}</p>
        </div>

        {/* Toggle axe */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-1 bg-white/70 backdrop-blur-md p-1.5 rounded-full border border-black/10 shadow-sm">
            {(["user", "restaurant"] as Axis[]).map((a) => (
              <button key={a} onClick={() => setAxis(a)}
                className={`px-7 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                  axis === a ? "bg-[#c1111e] text-white shadow-[0_10px_30px_rgba(193,17,30,0.25)]" : "text-gray-700 hover:text-gray-900"
                }`}>
                {a === "user" ? <><Users className="inline-block mr-2" size={18} />{p.axisUser}</> : <><Star className="inline-block mr-2" size={18} />{p.axisRestaurant}</>}
              </button>
            ))}
          </div>
        </div>

        {/* Cartes */}
        <AnimatePresence mode="wait">
          <motion.div key={axis}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Gratuit */}
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05, duration: 0.35 }} className="relative group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black/5 to-transparent blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative rounded-3xl p-8 border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] h-full flex flex-col">
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 w-fit border border-black/10">
                  <Check size={16} className="text-[#c1111e]" />
                  {freePlan.badge}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{freePlan.title}</h3>
                <ul className="space-y-3 mb-8 flex-grow">
                  {freePlan.features.map((text, idx) => {
                    const Icon = freeIcons[idx] ?? Check;
                    return (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <Icon size={18} className="text-[#c1111e] mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{text}</span>
                      </li>
                    );
                  })}
                </ul>
                <button className="w-full py-3.5 px-6 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold transition-all border border-black/15 hover:border-black/20 shadow-sm">
                  {freePlan.cta}
                </button>
              </div>
            </motion.div>

            {/* Premium */}
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12, duration: 0.35 }} className="relative group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#c1111e]/20 to-[#ff4757]/10 blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative rounded-3xl p-8 border border-[#c1111e]/20 bg-white/85 backdrop-blur-xl shadow-[0_25px_70px_rgba(193,17,30,0.12)] h-full flex flex-col">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c1111e] to-[#ff4757] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 w-fit shadow-sm">
                  <Crown size={16} />
                  {premPlan.badge}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{premPlan.title}</h3>
                <ul className="space-y-3 mb-8 flex-grow">
                  {premPlan.features.map((text, idx) => {
                    const Icon = premIcons[idx] ?? Check;
                    return (
                      <li key={idx} className="flex items-start gap-3 text-gray-800">
                        <Icon size={18} className="text-[#c1111e] mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">{text}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Toggle facturation */}
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="inline-flex items-center gap-1 bg-gray-100 p-1 rounded-lg border border-black/10">
                      {(["monthly", "yearly"] as Billing[]).map((b) => (
                        <button key={b} onClick={() => setBilling(b)}
                          className={`px-4 py-2 rounded-md text-xs font-semibold transition-all ${
                            billing === b ? "bg-[#c1111e] text-white shadow-sm" : "text-gray-700 hover:text-gray-900"
                          }`}>
                          {b === "monthly" ? p.monthly : p.yearly}
                        </button>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div key={billing}
                      initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="text-center mb-2">
                      <div className="text-4xl font-bold text-gray-900">
                        {premPlan.pricing[billing][0]}
                        <span className="text-lg text-gray-500 font-normal">{premPlan.pricing[billing][1]}</span>
                      </div>
                      {billing === "yearly" && (
                        <p className="text-sm text-[#c1111e] font-semibold mt-1">
                          ✨ {premPlan.pricing.yearly[2]}
                        </p>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <p className="text-xs text-gray-500 text-center mb-4">{p.noCommitment}</p>
                </div>

                <button className="w-full py-3.5 px-6 bg-gradient-to-r from-[#c1111e] to-[#ff4757] hover:from-[#ff4757] hover:to-[#c1111e] text-white rounded-xl font-semibold transition-all shadow-[0_18px_40px_rgba(193,17,30,0.25)] hover:shadow-[0_22px_60px_rgba(193,17,30,0.35)] hover:scale-[1.02]">
                  {premPlan.cta}
                </button>
              </div>
            </motion.div>

          </motion.div>
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
          className="text-center text-gray-600 text-sm mt-12">
          {p.security}
        </motion.p>
      </div>
    </section>
  );
}
