'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { leadershipData } from '@/data/leadership';
import { LeadershipRole, LeadershipCategory, LeadershipScope } from '@/types/portfolio';
import {
  Users,
  Calendar,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Award,
  Layers,
  Building2,
  GraduationCap,
} from 'lucide-react';

export default function LeadershipPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isGdscExpanded, setIsGdscExpanded] = useState<boolean>(true);

  // Compute years of leadership dynamically from earliest start (Oct 2021) to present
  const yearsOfLeadership = useMemo(() => {
    const startYear = 2021;
    const currentYear = new Date().getFullYear();
    const diff = currentYear - startYear;
    return diff > 4 ? `${diff}+` : '4+';
  }, []);

  const categories: Array<{ id: string; label: { en: string; fr: string } }> = [
    { id: 'all', label: { en: 'All Portfolios', fr: 'Tous les Rôles' } },
    {
      id: 'communities',
      label: {
        en: 'Student Organizations & Tech Communities',
        fr: 'Organisations Étudiantes & Communautés Tech',
      },
    },
    {
      id: 'entrepreneurship',
      label: {
        en: 'Entrepreneurship & Youth Organizations',
        fr: 'Entrepreneuriat & Organisations Jeunesse',
      },
    },
    {
      id: 'mentoring',
      label: {
        en: 'Mentoring & Community',
        fr: 'Mentorat & Impact Communautaire',
      },
    },
  ];

  // Filtered items
  const filteredRoles = useMemo(() => {
    if (activeCategory === 'all') return leadershipData;
    return leadershipData.filter((role) => role.category === activeCategory);
  }, [activeCategory]);

  // Scope Badge Component
  const renderScopeBadge = (scope: LeadershipScope) => {
    const scopeColors: Record<LeadershipScope, string> = {
      Local: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
      National: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      Regional: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      International: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    };

    return (
      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium border ${scopeColors[scope]}`}>
        <Globe2 className="w-3 h-3" aria-hidden="true" />
        <span>{scope}</span>
      </span>
    );
  };

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs border border-amber-500/20">
            <Users className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{language === 'en' ? 'Community Impact & Youth Leadership' : 'Impact Communautaire & Leadership Jeunesse'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en'
              ? 'Leadership, Mentorship & Organizational Governance'
              : 'Leadership, Mentorat & Gouvernance Associative'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'A trajectory of growth through responsibility: from active club contributor to elected chapter lead, technical mentor training 1,000+ students, and local committee co-founder.'
              : 'Une trajectoire d’évolution par la responsabilité : de membre active à présidente de club élue, mentore formant plus de 1 000 étudiants et co-fondatrice de comité local.'}
          </p>
        </div>

        {/* 1. TOP STRIP OF HEADLINE STATS (Real data only) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-cyan-400">1,000+</span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'Students Trained' : 'Étudiants Formés'}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-indigo-400">5</span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'Organizations' : 'Organisations'}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">{yearsOfLeadership} Years</span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'Community Leadership' : 'Leadership Communautaire'}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xl sm:text-2xl font-display font-extrabold text-amber-400 block leading-tight">Founder</span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'AIESEC Jendouba' : 'AIESEC Jendouba'}
            </p>
          </div>
        </div>

        {/* 2. CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Leadership Category Filters">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-sm'
                    : 'bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-cyan-500/40'
                }`}
              >
                {t(cat.label)}
              </button>
            );
          })}
        </div>

        {/* 3. VERTICAL TIMELINE (Newest First) */}
        {filteredRoles.length === 0 ? (
          <div className="p-16 text-center space-y-3 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <Users className="w-10 h-10 text-[var(--text-muted)] mx-auto opacity-40" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              {language === 'en' ? 'No roles in this category' : 'Aucun rôle dans cette catégorie'}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              {language === 'en' ? 'Try selecting another category filter.' : 'Sélectionnez un autre filtre de catégorie.'}
            </p>
          </div>
        ) : (
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border-color)] space-y-10" role="list">
            {filteredRoles.map((role) => {
              const isProgressionGroup = Boolean(role.progressionSteps && role.progressionSteps.length > 0);

              return (
                <article
                  key={role.id}
                  id={role.id}
                  tabIndex={0}
                  role="listitem"
                  aria-label={`${t(role.role)} at ${role.organization}`}
                  className="relative group focus-visible:outline-none"
                >
                  {/* Timeline Bullet Node */}
                  <div className={`absolute -left-[33px] sm:-left-[41px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--bg-secondary)] border-2 ${role.status === 'Current' ? 'border-emerald-400 ring-4 ring-emerald-500/20' : 'border-amber-500'} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <Users className={`w-3.5 h-3.5 ${role.status === 'Current' ? 'text-emerald-400' : 'text-amber-400'}`} aria-hidden="true" />
                  </div>

                  {/* Card Container */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 focus-within:border-cyan-500/60 transition-all shadow-sm space-y-4">
                    
                    {/* Top Metadata: Status + Scope + Dates */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {role.status === 'Current' && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                            <span>{language === 'en' ? 'Current' : 'En mandat'}</span>
                          </span>
                        )}
                        {renderScopeBadge(role.scope)}
                      </div>

                      <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                        <span>{role.period}</span>
                      </span>
                    </div>

                    {/* Role Title and Organization */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)]">
                        {t(role.role)}
                      </h2>
                      <p className="text-sm sm:text-base font-semibold text-cyan-500 dark:text-cyan-400 mt-0.5">
                        {role.organization}
                      </p>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {t(role.summary)}
                    </p>

                    {/* GROUPED GDSC PROGRESSION CARD (Member -> Comm Lead -> Lead -> Mentor) */}
                    {isProgressionGroup && role.progressionSteps && (
                      <div className="pt-2 border-t border-[var(--border-color)] space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                            {language === 'en' ? '4-Stage Chapter Progression' : 'Progression en 4 Étapes'}
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsGdscExpanded(!isGdscExpanded)}
                            className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold focus-visible:underline focus-visible:outline-none"
                            aria-expanded={isGdscExpanded}
                          >
                            <span>{isGdscExpanded ? (language === 'en' ? 'Collapse steps' : 'Masquer les étapes') : (language === 'en' ? 'View all steps' : 'Voir toutes les étapes')}</span>
                            {isGdscExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                          </button>
                        </div>

                        {isGdscExpanded && (
                          <div className="relative pl-4 border-l border-cyan-500/30 space-y-3.5 my-2">
                            {role.progressionSteps.map((step, sIdx) => (
                              <div key={sIdx} className="relative group/step">
                                <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 ring-2 ring-[var(--card-bg)]" />
                                <div>
                                  <div className="flex flex-wrap items-center justify-between gap-1">
                                    <span className="text-xs sm:text-sm font-bold text-[var(--text-primary)]">
                                      {t(step.role)}
                                    </span>
                                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                                      {step.period}
                                    </span>
                                  </div>
                                  {step.summary && (
                                    <p className="text-xs text-[var(--text-secondary)] mt-0.5">
                                      {t(step.summary)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Highlights (if not a grouped progression or in addition) */}
                    {!isProgressionGroup && role.highlights && t(role.highlights).length > 0 && (
                      <ul className="space-y-2 pt-2 border-t border-[var(--border-color)]">
                        {t(role.highlights).map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Cross-Link Footer where relevant */}
                    {role.link && (
                      <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between">
                        <Link
                          href={role.link.href}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:underline focus-visible:outline-none"
                        >
                          <span>{t(role.link.label)}</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </Link>
                      </div>
                    )}

                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
