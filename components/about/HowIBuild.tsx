'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { howIBuildData } from '@/data/about';
import { Check, ArrowRight, CornerDownLeft, Workflow } from 'lucide-react';

export default function HowIBuild() {
  const { language, t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section aria-labelledby="how-i-build-heading" className="space-y-6">
      {/* Section Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
          <Workflow className="w-3.5 h-3.5" />
          <span>{t(howIBuildData.title)}</span>
        </div>
        <h2
          id="how-i-build-heading"
          className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]"
        >
          {t(howIBuildData.title)}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          {t(howIBuildData.subtitle)}
        </p>
      </div>

      {/* Pipeline Grid & Loop */}
      <motion.div
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
      >
        {/* 4 Pipeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {howIBuildData.steps.map((step, idx) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              className="p-5 sm:p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all flex flex-col justify-between group relative overflow-hidden shadow-sm"
            >
              {/* Subtle accent glow on card header */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/40 via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Step Header: Number + Passing CI badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                    STEP {step.stepNumber}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                    <span>pass</span>
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-display font-bold text-[var(--text-primary)] mb-2 group-hover:text-cyan-400 transition-colors">
                  {t(step.title)}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t(step.description)}
                </p>
              </div>

              {/* Connecting arrow indicator for desktop (between cards 1, 2, 3) */}
              {idx < howIBuildData.steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-muted)] group-hover:text-cyan-400 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ∞ Improve Loop Element */}
        <motion.div
          variants={cardVariants}
          className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden group shadow-sm"
        >
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 flex items-center justify-center shrink-0 text-xl font-bold font-mono">
              {howIBuildData.loopStep.badge}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-display font-bold text-[var(--text-primary)]">
                  {t(howIBuildData.loopStep.title)}
                </h3>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  Continuous Feedback Loop
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-0.5 leading-relaxed">
                {t(howIBuildData.loopStep.description)}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 shrink-0 self-end sm:self-center px-3 py-1.5 rounded-lg bg-[var(--bg-primary)]/80 border border-cyan-500/20">
            <CornerDownLeft className="w-3.5 h-3.5 text-cyan-400 rotate-90 sm:rotate-0" />
            <span>{language === 'fr' && t(howIBuildData.title) ? 'Boucle vers 01 Imagine' : 'Loops back to 01 Imagine'}</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
