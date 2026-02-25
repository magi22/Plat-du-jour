import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Zap,
  Star,
  Users,
  MapPin,
  Heart,
  Bell,
  Clock,
  TrendingUp,
  BarChart3,
  Crown,
  Shield,
} from "lucide-react";

type Axis = "user" | "restaurant";
type Billing = "monthly" | "yearly";

export function Pricing() {
  const [axis, setAxis] = useState<Axis>("user");
  const [billingPeriod, setBillingPeriod] = useState<Billing>("monthly");

  const plans = {
    user: {
      freemium: {
        badge: "Gratuit",
        title: "Pour découvrir",
        features: [
          { icon: MapPin, text: "Recherche de restaurants à proximité" },
          { icon: Clock, text: "Consultation des plats du jour" },
          { icon: Heart, text: "Enregistrer jusqu'à 3 favoris" },
          { icon: Users, text: "Avis et notes de la communauté" },
          { icon: Bell, text: "1 notification par semaine" },
        ],
        cta: "Commencer gratuitement",
      },
      premium: {
        badge: "Premium",
        title: "Pour les gourmets",
        features: [
          { icon: Crown, text: "Tout de Gratuit +" },
          { icon: Heart, text: "Favoris illimités avec collections" },
          { icon: Bell, text: "Notifications personnalisées illimitées" },
          { icon: Zap, text: "Réservation prioritaire en un clic" },
          { icon: TrendingUp, text: "Recommandations IA personnalisées" },
          { icon: Star, text: "Accès aux offres exclusives restaurants" },
          { icon: Shield, text: "Mode hors-ligne avancé" },
          { icon: BarChart3, text: "Historique complet de vos repas" },
          { icon: Crown, text: "Badge premium dans les avis" },
          { icon: Users, text: "Partage de listes avec amis" },
          { icon: MapPin, text: "Sauvegarde de lieux personnalisés" },
        ],
        pricing: {
          monthly: { amount: "4.99€", period: "/mois" },
          yearly: { amount: "49.90€", period: "/an", save: "Économisez 2 mois" },
        },
        cta: "Passer en Premium",
      },
    },
    restaurant: {
      freemium: {
        badge: "Gratuit",
        title: "Pour démarrer",
        features: [
          { icon: Users, text: "Profil restaurant visible" },
          { icon: Clock, text: "Publication de 1 plat du jour/semaine" },
          { icon: BarChart3, text: "Statistiques de base (vues)" },
          { icon: Star, text: "Page de présentation simple" },
          { icon: MapPin, text: "Localisation sur la carte" },
          { icon: Check, text: "Gestion des horaires" },
          { icon: Bell, text: "Notifications clients limitées" },
        ],
        cta: "Commencer gratuitement",
      },
      premium: {
        badge: "Premium Pro",
        title: "Pour performer",
        features: [
          { icon: Crown, text: "Tout de Gratuit +" },
          { icon: Clock, text: "Plats du jour illimités avec photos HD" },
          { icon: Zap, text: "Système de réservation intégré" },
          { icon: TrendingUp, text: "Analytics avancés en temps réel" },
          { icon: Star, text: "Badge Premium & mise en avant" },
          { icon: Bell, text: "Campagnes push personnalisées" },
          { icon: BarChart3, text: "Rapports détaillés & insights IA" },
          { icon: Shield, text: "Support prioritaire dédié" },
          { icon: Crown, text: "API & intégrations tierces" },
          { icon: Users, text: "Gestion multi-utilisateurs" },
        ],
        pricing: {
          monthly: { amount: "49€", period: "/mois" },
          yearly: { amount: "490€", period: "/an", save: "Économisez 2 mois" },
        },
        cta: "Choisir ce forfait",
      },
    },
  } as const;

  const currentPlans = plans[axis];

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-24 bg-gray-50"
    >
      {/* Background: léger + cadrillage animé (blanc theme) */}
      <div className="absolute inset-0">
        {/* base légère */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(193,17,30,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(255,71,87,0.06),transparent_55%)]" />

        {/* grid fixe */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(193,17,30,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(193,17,30,0.06)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.35]" />

        {/* grid qui bouge (effet subtil) */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(193,17,30,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(193,17,30,0.05)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.22]"
          animate={{ backgroundPosition: ["0px 0px", "160px 160px"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {/* glow */}
        <div className="absolute -top-24 -left-24 h-[380px] w-[380px] rounded-full bg-[#c1111e]/10 blur-[90px]" />
        <div className="absolute -bottom-28 -right-28 h-[420px] w-[420px] rounded-full bg-[#ff4757]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-5 py-2 rounded-full border border-black/10 shadow-sm mb-5">
            <Star size={16} className="text-[#c1111e]" />
            <span className="text-sm font-semibold text-gray-900">
              Fonctionnalités & Tarifs
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choisissez la formule{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c1111e] to-[#ff4757]">
              adaptée
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Une offre simple côté utilisateur, et des outils puissants côté restaurant.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Sans engagement • Annulez quand vous voulez
          </p>
        </div>

        {/* Axis Toggle */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-1 bg-white/70 backdrop-blur-md p-1.5 rounded-full border border-black/10 shadow-sm">
            <button
              onClick={() => setAxis("user")}
              className={`px-7 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                axis === "user"
                  ? "bg-[#c1111e] text-white shadow-[0_10px_30px_rgba(193,17,30,0.25)]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <Users className="inline-block mr-2" size={18} />
              Utilisateur
            </button>

            <button
              onClick={() => setAxis("restaurant")}
              className={`px-7 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                axis === "restaurant"
                  ? "bg-[#c1111e] text-white shadow-[0_10px_30px_rgba(193,17,30,0.25)]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              <Star className="inline-block mr-2" size={18} />
              Restaurant
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={axis}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* Freemium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05, duration: 0.35 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black/5 to-transparent blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative rounded-3xl p-8 border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] h-full flex flex-col">
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 w-fit border border-black/10">
                  <Check size={16} className="text-[#c1111e]" />
                  {currentPlans.freemium.badge}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentPlans.freemium.title}
                </h3>

                <ul className="space-y-3 mb-8 flex-grow">
                  {currentPlans.freemium.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <feature.icon
                        size={18}
                        className="text-[#c1111e] mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm leading-relaxed">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="w-full py-3.5 px-6 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold transition-all border border-black/15 hover:border-black/20 shadow-sm">
                  {currentPlans.freemium.cta}
                </button>
              </div>
            </motion.div>

            {/* Premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.12, duration: 0.35 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#c1111e]/20 to-[#ff4757]/10 blur-xl group-hover:blur-2xl transition-all" />

              <div className="relative rounded-3xl p-8 border border-[#c1111e]/20 bg-white/85 backdrop-blur-xl shadow-[0_25px_70px_rgba(193,17,30,0.12)] h-full flex flex-col">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c1111e] to-[#ff4757] text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4 w-fit shadow-sm">
                  <Crown size={16} />
                  {currentPlans.premium.badge}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {currentPlans.premium.title}
                </h3>

                <ul className="space-y-3 mb-8 flex-grow">
                  {currentPlans.premium.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-800"
                    >
                      <feature.icon
                        size={18}
                        className="text-[#c1111e] mt-0.5 flex-shrink-0"
                      />
                      <span className="text-sm leading-relaxed">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* pricing toggle */}
                {currentPlans.premium.pricing && (
                  <div className="mb-6">
                    <div className="flex justify-center mb-4">
                      <div className="inline-flex items-center gap-1 bg-gray-100 p-1 rounded-lg border border-black/10">
                        <button
                          onClick={() => setBillingPeriod("monthly")}
                          className={`px-4 py-2 rounded-md text-xs font-semibold transition-all ${
                            billingPeriod === "monthly"
                              ? "bg-[#c1111e] text-white shadow-sm"
                              : "text-gray-700 hover:text-gray-900"
                          }`}
                        >
                          Mensuel
                        </button>
                        <button
                          onClick={() => setBillingPeriod("yearly")}
                          className={`px-4 py-2 rounded-md text-xs font-semibold transition-all ${
                            billingPeriod === "yearly"
                              ? "bg-[#c1111e] text-white shadow-sm"
                              : "text-gray-700 hover:text-gray-900"
                          }`}
                        >
                          Annuel
                        </button>
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={billingPeriod}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="text-center mb-2"
                      >
                        <div className="text-4xl font-bold text-gray-900">
                          {currentPlans.premium.pricing[billingPeriod].amount}
                          <span className="text-lg text-gray-500 font-normal">
                            {currentPlans.premium.pricing[billingPeriod].period}
                          </span>
                        </div>

                        {billingPeriod === "yearly" && (
                          <p className="text-sm text-[#c1111e] font-semibold mt-1">
                            ✨ {currentPlans.premium.pricing.yearly.save}
                          </p>
                        )}
                      </motion.div>
                    </AnimatePresence>

                    <p className="text-xs text-gray-500 text-center mb-4">
                      Sans engagement • Annulez quand vous voulez
                    </p>
                  </div>
                )}

                <button className="w-full py-3.5 px-6 bg-gradient-to-r from-[#c1111e] to-[#ff4757] hover:from-[#ff4757] hover:to-[#c1111e] text-white rounded-xl font-semibold transition-all shadow-[0_18px_40px_rgba(193,17,30,0.25)] hover:shadow-[0_22px_60px_rgba(193,17,30,0.35)] hover:scale-[1.02]">
                  {currentPlans.premium.cta}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom reassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-center text-gray-600 text-sm mt-12"
        >
          Paiement sécurisé • Support réactif • Résiliation en 1 clic
        </motion.p>
      </div>
    </section>
  );
}