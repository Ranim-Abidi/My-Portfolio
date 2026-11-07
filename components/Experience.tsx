'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import {
  Briefcase,
  Users,
  Trophy,
  Calendar,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

const categoryIcons = {
  work: <Briefcase className="w-4 h-4 text-cyan-400" />,
  leadership: <Users className="w-4 h-4 text-indigo-400" />,
  competition: <Trophy className="w-4 h-4 text-amber-400" />,
};

const categoryBadges = {
  work: { en: 'Engineering Internship', fr: 'Stage Ingénieur' },
  leadership: { en: 'Executive Leadership', fr: 'Leadership Exécutif' },
  competition: { en: 'Hackathon & Award', fr: 'Hackathon & Prix' },
};

export default function Experience() {
  const { language, t } = useLanguage();
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 relative bg-[var(--bg-secondary)]/30 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm tracking-wider uppercase font-semibold">
            <span>04 /</span>
            <span>{language === 'en' ? 'Track Record & Leadership' : 'Expérience & Leadership'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)]">
            {language === 'en' ? 'Professional Experience & High-Impact Roles' : 'Parcours Professionnel & Responsabilités'}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl">
            {language === 'en'
              ? 'Balancing DevOps engineering, technical problem-solving, and executive leadership across international youth organizations.'
              : 'Équilibre entre ingénierie DevOps, résolution de problèmes techniques et gouvernance au sein d\'organisations internationales.'}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border-color)] space-y-12 max-w-4xl mx-auto">
          {experience.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Node Point */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--bg-secondary)] border-2 border-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:border-cyan-400 transition-transform">
                {categoryIcons[item.category]}
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all duration-300 shadow-sm space-y-4">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {categoryBadges[item.category][language]}
                  </span>
                  <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                      {item.period}
                    </span>
                    <span className="hidden sm:flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Role and Organization */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)]">
                    {t(item.role)}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-cyan-500 dark:text-cyan-400 mt-0.5">
                    {item.organization}
                  </p>
                </div>

                {/* Impact Bullets */}
                <ul className="space-y-2.5">
                  {t(item.bullets).map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
