'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { GraduationCap, Award, Compass, Sparkles, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function About() {
  const { language, t } = useLanguage();
  const { profile, education } = portfolioData;

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm tracking-wider uppercase font-semibold">
            <span>01 /</span>
            <span>{language === 'en' ? 'About & Academic Journey' : 'À propos & Parcours'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)]">
            {language === 'en' ? 'Bridging Cloud Architecture, Modern Web & AI' : 'À la croisée du Cloud, du Web Moderne et de l\'IA'}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl">
            {language === 'en'
              ? 'Engineering scalable cloud native systems backed by solid computer science foundations and proven leadership.'
              : 'Concevoir des systèmes cloud scalables reposant sur des bases académiques solides et un leadership éprouvé.'}
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          {/* Biography Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
            {t(profile.fullStory).map((paragraph, index) => (
              <p key={index} className="text-justify sm:text-left">
                {paragraph}
              </p>
            ))}

            {/* Strategic Motto Callout */}
            <div className="mt-8 p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-violet-500/10 relative overflow-hidden">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <p className="font-display font-bold text-lg sm:text-xl text-[var(--text-primary)]">
                    &ldquo;{t(profile.motto)}&rdquo;
                  </p>
                  <p className="text-xs text-[var(--text-muted)] font-mono mt-1">
                    {language === 'en' ? 'Guiding engineering principle' : 'Philosophie d\'ingénierie'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-2 hover:border-cyan-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-base text-[var(--text-primary)]">
                {language === 'en' ? 'Core Engineering Positioning' : 'Positionnement Technique'}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-normal">
                {language === 'en'
                  ? 'I bridge the gap between DevOps automation (Terraform, Docker, K8s, CI/CD), resilient full-stack web applications, and practical machine learning deployment.'
                  : 'Passerelle entre l\'automatisation DevOps (Terraform, Docker, K8s, CI/CD), les applications web réactives et le déploiement de modèles d\'IA en production.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-2 hover:border-indigo-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-base text-[var(--text-primary)]">
                {language === 'en' ? 'Leadership & Global Perspective' : 'Leadership & Impact Associatif'}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-normal">
                {language === 'en'
                  ? 'VP Volunteering Exchange at AIESEC Tunisia; previously VP Finance & Legal Affairs. Managing cross-border teams, budget compliance, and partner relationships.'
                  : 'VP Volunteering Exchange chez AIESEC Tunisie ; précédemment VP Finance & Juridique. Gestion d\'équipes, gouvernance financière et relations internationales.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-2 hover:border-violet-500/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-semibold text-base text-[var(--text-primary)]">
                {language === 'en' ? 'Dual-Academic Trajectory' : 'Double Cursus Universitaire'}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-normal">
                {language === 'en'
                  ? 'Concurrently pursuing an Engineering Diploma in Cloud & DevOps at ESPRIT Tunis alongside a Professional Master in Intelligent Web Applications at ISI KEF.'
                  : 'Cursus simultané : Diplôme d\'Ingénieur Cloud & DevOps à ESPRIT Tunis et Master Pro Applications Web Intelligentes à l\'ISI KEF.'}
              </p>
            </div>

          </div>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            <h3 className="text-2xl font-display font-bold text-[var(--text-primary)]">
              {language === 'en' ? 'Academic Foundations' : 'Formations & Diplômes'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {t(item.status)}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-display font-bold text-[var(--text-primary)] mb-2">
                    {t(item.degree)}
                  </h4>

                  <p className="text-sm font-medium text-cyan-500 dark:text-cyan-400 mb-4">
                    {item.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] mb-5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {t(item.highlights).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
