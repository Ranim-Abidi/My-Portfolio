'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { experienceData } from '@/data/experience';
import {
  Briefcase,
  Users,
  Trophy,
  BookOpen,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const categoryIcons = {
  work: <Briefcase className="w-4 h-4 text-cyan-400" />,
  leadership: <Users className="w-4 h-4 text-indigo-400" />,
  competition: <Trophy className="w-4 h-4 text-amber-400" />,
  mentoring: <BookOpen className="w-4 h-4 text-emerald-400" />,
};

const categoryLabels = {
  work: { en: 'Engineering Internships & PFE', fr: 'Stages & PFE' },
  leadership: { en: 'Organizational Leadership', fr: 'Leadership Associatif' },
  competition: { en: 'Hackathons & Awards', fr: 'Hackathons & Prix' },
  mentoring: { en: 'Mentoring & Teaching', fr: 'Mentorat & Formation' },
};

export default function ExperiencePage() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = experienceData.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Track Record / Engineering Timeline' : 'Parcours / Expériences Clés'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en' ? 'Professional Experience & Engineering Milestones' : 'Expériences Professionnelles & Réalisations'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'Balancing DevOps engineering internships, software graduation research (PFE), competitive national hackathons, and technical community mentoring.'
              : 'Équilibre entre stages d\'ingénierie DevOps, projet de fin d\'études (PFE), hackathons d\'innovation et mentorat technique.'}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2" role="tablist">
          {['all', 'work', 'competition', 'mentoring'].map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-sm'
                  : 'bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-cyan-500/40'
              }`}
            >
              {cat === 'all'
                ? (language === 'en' ? 'All Roles' : 'Tous les rôles')
                : categoryLabels[cat as keyof typeof categoryLabels][language]}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border-color)] space-y-10">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--bg-secondary)] border-2 border-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                {categoryIcons[item.category] || <Briefcase className="w-4 h-4 text-cyan-400" />}
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all shadow-sm space-y-4">
                
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {categoryLabels[item.category][language]}
                  </span>

                  <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
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

        {/* Leadership Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-[var(--card-bg)] to-violet-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-display font-bold text-[var(--text-primary)]">
              {language === 'en' ? 'Looking for AIESEC executive governance details?' : 'Vous recherchez les détails de gouvernance AIESEC ?'}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              {language === 'en'
                ? 'Review national VP Volunteering Exchange and VP Finance & Legal metrics.'
                : 'Consultez les indicateurs d\'impact des mandats VP Échanges et VP Finance.'}
            </p>
          </div>

          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500 hover:text-black transition-colors shrink-0"
          >
            <span>{language === 'en' ? 'Explore Leadership Dossier' : 'Dossier Leadership'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
