import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, defaultViewport } from "../animations/variants";
import { useLanguage } from "../i18n/LanguageContext";

export default function ProblemSolution() {
  const { t } = useLanguage();
  const rows = t.problem.rows;

  return (
    <section className="relative py-20 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Titre */}
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
            {t.problem.badge}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            {t.problem.h2}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            {t.problem.subtitle}
          </motion.p>
        </motion.div>

        {/* Tableau desktop */}
        <motion.div
          className="hidden md:block rounded-3xl border border-black/5 bg-white/70 backdrop-blur-sm shadow-lg overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
        >
          <div className="grid grid-cols-3">
            <div className="p-6 border-b border-black/5 bg-white/60">
              <span className="text-sm font-semibold text-gray-500">{t.problem.col1}</span>
            </div>
            <div className="p-6 border-b border-black/5 bg-white/60">
              <div className="flex items-center gap-2 font-semibold text-gray-900">
                <span className="inline-flex w-2 h-2 rounded-full bg-gray-400" />
                {t.problem.col2}
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
            <p className="font-extrabold text-gray-900">{t.problem.tagline[0]}</p>
            <p className="text-sm text-gray-600 mt-1">{t.problem.tagline[1]}</p>
          </div>
        </motion.div>

        {/* Version mobile */}
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
                    {t.problem.col2}
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
            <p className="font-extrabold text-gray-900">{t.problem.tagline[0]}</p>
            <p className="text-sm text-gray-600 mt-1">{t.problem.tagline[1]}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
