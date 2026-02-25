import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, defaultViewport } from "../animations/variants";

const rows = [
  {
    label: "Recherche",
    before: "Vous naviguez entre Google, réseaux sociaux et appels.",
    after: "Une seule app, tous les menus autour de vous.",
  },
  {
    label: "Temps",
    before: "10–20 min perdues chaque midi à hésiter.",
    after: "Choix rapide en moins d'une minute.",
  },
  {
    label: "Infos",
    before: "Menus incomplets, parfois introuvables en ligne.",
    after: "Menus mis à jour en temps réel par les restaurants.",
  },
  {
    label: "Prix",
    before: "Vous découvrez le prix une fois sur place.",
    after: "Prix affichés avant de vous déplacer.",
  },
  {
    label: "Réservation",
    before: "Appels, attente, pas de réponse pendant le rush.",
    after: "Réservez ou commandez en quelques clics.",
  },
  {
    label: "Découverte",
    before: "Vous retombez souvent sur les mêmes adresses.",
    after: "Découvrez de nouveaux restaurants près de vous.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="relative py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-black/5 text-sm text-gray-700"
          >
            PROBLÈME → SOLUTION
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            Vous ne savez jamais quoi manger ?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            En quelques secondes, Plat du Jour vous aide à trouver un menu dispo
            près de vous — sans appels, sans recherches, sans surprise.
          </motion.p>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          className="hidden md:block rounded-3xl border border-black/5 bg-white/70 backdrop-blur-sm shadow-lg overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
        >
          <div className="grid grid-cols-3">
            <div className="p-6 border-b border-black/5 bg-white/60">
              <span className="text-sm font-semibold text-gray-500">Critère</span>
            </div>
            <div className="p-6 border-b border-black/5 bg-white/60">
              <div className="flex items-center gap-2 font-semibold text-gray-900">
                <span className="inline-flex w-2 h-2 rounded-full bg-gray-400" />
                Le casse-tête
              </div>
            </div>
            <div className="p-6 border-b border-black/5 bg-white/60">
              <div className="flex items-center gap-2 font-semibold text-gray-900">
                <span className="inline-flex w-2 h-2 rounded-full bg-red-500" />
                Plat du Jour
              </div>
            </div>

            {rows.map((r) => (
              <React.Fragment key={r.label}>
                <div className="p-6 border-b border-black/5">
                  <span className="font-semibold text-gray-900">{r.label}</span>
                </div>
                <div className="p-6 border-b border-black/5 text-gray-700">{r.before}</div>
                <div className="p-6 border-b border-black/5 text-gray-900 font-medium">{r.after}</div>
              </React.Fragment>
            ))}
          </div>

          <div className="px-6 py-5 text-center bg-gradient-to-r from-red-50 via-white to-yellow-50">
            <p className="font-extrabold text-gray-900">Trouvez. Choisissez. Savourez.</p>
            <p className="text-sm text-gray-600 mt-1">
              Passez de l'hésitation à la décision en quelques instants.
            </p>
          </div>
        </motion.div>

        {/* Mobile version */}
        <motion.div
          className="md:hidden space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {rows.map((r) => (
            <motion.div
              key={r.label}
              variants={fadeUp}
              className="rounded-2xl border border-black/5 bg-white/70 backdrop-blur-sm shadow-sm p-5"
            >
              <div className="font-semibold text-gray-900">{r.label}</div>
              <div className="mt-4 grid gap-3">
                <div className="rounded-xl border border-black/5 bg-white/60 p-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-700">
                    <span className="inline-flex w-2 h-2 rounded-full bg-gray-400" />
                    Le casse-tête
                  </div>
                  <p className="mt-2 text-gray-600">{r.before}</p>
                </div>
                <div className="rounded-xl border border-black/5 bg-white/60 p-4">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <span className="inline-flex w-2 h-2 rounded-full bg-red-500" />
                    Plat du Jour
                  </div>
                  <p className="mt-2 text-gray-700 font-medium">{r.after}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="text-center pt-2">
            <p className="font-extrabold text-gray-900">Trouvez. Choisissez. Savourez.</p>
            <p className="text-sm text-gray-600 mt-1">
              Passez de l'hésitation à la décision en quelques instants.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
