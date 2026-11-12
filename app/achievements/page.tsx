'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { achievementsData } from '@/data/achievements';
import { AchievementItem, AchievementCategory, AchievementResult } from '@/types/portfolio';
import {
  Award,
  Trophy,
  Sparkles,
  ExternalLink,
  Calendar,
  MapPin,
  ArrowRight,
  LayoutGrid,
  ListOrdered,
  Medal,
  ShieldCheck,
  CheckCircle2,
  Info,
} from 'lucide-react';

export default function AchievementsPage() {
  const { language, t } = useLanguage();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  // Filter categories with counts
  const categories: Array<{ id: string; label: { en: string; fr: string } }> = [
    { id: 'all', label: { en: 'All Proof & Honors', fr: 'Toutes les Distinctions' } },
    { id: 'competitions', label: { en: 'Competitions & Hackathons', fr: 'Compétitions & Hackathons' } },
    { id: 'entrepreneurship', label: { en: 'Entrepreneurship', fr: 'Entrepreneuriat' } },
    { id: 'recognition', label: { en: 'Recognition', fr: 'Reconnaissances' } },
    { id: 'certifications', label: { en: 'Certifications', fr: 'Certifications' } },
  ];

  // Dynamic Headline Stats
  const podiumCount = useMemo(() => {
    return achievementsData.filter((a) => a.result === '1st Place' || a.result === '2nd Place').length;
  }, []);

  const competitionsCount = useMemo(() => {
    return achievementsData.filter((a) => a.category === 'competitions').length;
  }, []);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: achievementsData.length,
      competitions: 0,
      entrepreneurship: 0,
      recognition: 0,
      certifications: 0,
    };
    achievementsData.forEach((a) => {
      if (counts[a.category] !== undefined) {
        counts[a.category] += 1;
      }
    });
    return counts;
  }, []);

  // Filter & Chronological Sorting (Newest First)
  const filteredAndSortedItems = useMemo(() => {
    const list = activeCategory === 'all'
      ? [...achievementsData]
      : achievementsData.filter((item) => item.category === activeCategory);

    return list.sort((a, b) => {
      // Sort by year descending
      if (b.year !== a.year) return b.year - a.year;
      // Secondary fallback
      return b.date.localeCompare(a.date);
    });
  }, [activeCategory]);

  const featuredHighlights = useMemo(() => {
    return achievementsData.filter((item) => item.featured);
  }, []);

  const regularItems = useMemo(() => {
    return filteredAndSortedItems.filter((item) => !item.featured);
  }, [filteredAndSortedItems]);

  // Result Badge Component with Gold, Silver, and Neutral styling
  const renderResultBadge = (result: AchievementResult) => {
    if (result === '1st Place') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-sm">
          <Trophy className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
          <span>{result}</span>
        </span>
      );
    }

    if (result === '2nd Place') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-300/15 text-slate-200 border border-slate-300/40 shadow-sm">
          <Medal className="w-3.5 h-3.5 text-slate-300" aria-hidden="true" />
          <span>{result}</span>
        </span>
      );
    }

    if (result === 'Finalist') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
          <Sparkles className="w-3 h-3 text-indigo-400" aria-hidden="true" />
          <span>{result}</span>
        </span>
      );
    }

    if (result === 'Certification') {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
          <ShieldCheck className="w-3 h-3 text-emerald-400" aria-hidden="true" />
          <span>{result}</span>
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
        <Award className="w-3 h-3 text-purple-400" aria-hidden="true" />
        <span>{result}</span>
      </span>
    );
  };

  // Cross-Link Resolution Helper
  const getCrossLink = (item: AchievementItem) => {
    if (item.relatedProjectSlug) {
      return {
        href: `/projects/${item.relatedProjectSlug}`,
        label: language === 'en' ? 'View Project in Hub' : 'Voir le Projet Associé',
      };
    }
    if (item.relatedLeadershipId) {
      return {
        href: `/leadership#${item.relatedLeadershipId}`,
        label: language === 'en' ? 'View in Leadership Tab' : 'Voir dans le volet Leadership',
      };
    }
    if (item.category === 'certifications') {
      return {
        href: item.proofUrl || '/skills#certifications-heading',
        label: language === 'en' ? 'View in Skills Matrix' : 'Voir dans la Matrice de Compétences',
        isExternal: Boolean(item.proofUrl),
      };
    }
    return null;
  };

  // Render a Single Achievement Card
  const renderCard = (item: AchievementItem, isHighlight = false) => {
    const crossLink = getCrossLink(item);

    return (
      <article
        key={item.id}
        tabIndex={0}
        aria-label={`${t(item.title)} - ${item.result}`}
        className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group shadow-sm focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
          isHighlight
            ? 'bg-gradient-to-br from-amber-500/10 via-[var(--card-bg)] to-cyan-500/10 border-amber-500/30 hover:border-amber-400'
            : 'bg-[var(--card-bg)] border-[var(--border-color)] hover:border-cyan-500/40'
        }`}
      >
        <div className="space-y-4">
          {/* Header Row: Result Badge + Date + Location */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>{renderResultBadge(item.result)}</div>

            <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                <span>{item.date}</span>
              </span>
              {item.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{item.location}</span>
                </span>
              )}
            </div>
          </div>

          {/* Title & Issuer */}
          <div>
            <h3 className="font-display font-bold text-lg sm:text-xl text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors leading-snug">
              {t(item.title)}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-1">
              {item.issuer}
            </p>
          </div>

          {/* Context */}
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {t(item.context)}
          </p>
        </div>

        {/* Footer Links: Cross-link + Proof link */}
        <div className="pt-4 mt-4 border-t border-[var(--border-color)] flex flex-wrap items-center justify-between gap-2">
          {crossLink ? (
            crossLink.isExternal ? (
              <a
                href={crossLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:underline focus-visible:outline-none"
              >
                <span>{crossLink.label}</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            ) : (
              <Link
                href={crossLink.href}
                className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:underline focus-visible:outline-none"
              >
                <span>{crossLink.label}</span>
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            )
          ) : (
            <span className="text-[11px] font-mono text-[var(--text-muted)] uppercase">
              {item.category}
            </span>
          )}

          {item.proofUrl && (
            <a
              href={item.proofUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Official proof verification for ${t(item.title)}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500 hover:text-white border border-cyan-500/20 transition-all focus-visible:ring-1 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              <span>{language === 'en' ? 'Proof' : 'Preuve'}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          )}
        </div>
      </article>
    );
  };

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs border border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{language === 'en' ? 'Verified Honors / Track Record' : 'Distinctions Vérifiées / Palmarès'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en'
              ? 'Awards, Competition Honors & Verified Proof'
              : 'Prix, Concours & Preuves Vérifiées'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'Honors, hackathon podiums, entrepreneurial recognitions, and certified achievements presented as verifiable outcomes, linked directly to the underlying architectures and leadership portfolios.'
              : 'Distinctions, podiums de hackathons, statuts entrepreneuriaux et certifications présentés avec rigueur et reliés aux projets et responsabilités correspondants.'}
          </p>
        </div>

        {/* 1. TOP STRIP OF HEADLINE STATS (Dynamic calculations) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400">
              {podiumCount}
            </span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'Podium Finishes (1st / 2nd)' : 'Podiums (1ère / 2ème Place)'}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-cyan-400">
              {competitionsCount}
            </span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'Competitions & Hackathons' : 'Compétitions & Hackathons'}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-display font-extrabold text-indigo-400">
              1,000+
            </span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'Students Trained (GDSC)' : 'Étudiants Formés (GDSC)'}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-lg sm:text-xl font-display font-extrabold text-emerald-400 block leading-tight">
              SNEE Promo #1
            </span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'National Student Entrepreneur' : 'Statut Étudiant-Entrepreneur'}
            </p>
          </div>
        </div>

        {/* Toolbar: Category Filters & View Toggle (Grid / Timeline) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Achievements Categories">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] ?? 0;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{t(cat.label)}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-black/10 dark:bg-white/10 text-[var(--text-muted)]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Toggle: Grid / Timeline */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-black/5 dark:bg-white/5 border border-[var(--border-color)] shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode('grid')}
              aria-label="Grid view"
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                viewMode === 'grid'
                  ? 'bg-[var(--card-bg)] text-cyan-400 shadow-sm font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Grid</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('timeline')}
              aria-label="Timeline view"
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                viewMode === 'timeline'
                  ? 'bg-[var(--card-bg)] text-cyan-400 shadow-sm font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              <ListOrdered className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Timeline</span>
            </button>
          </div>

        </div>

        {/* Content Section: Grid View vs Timeline View */}
        {filteredAndSortedItems.length === 0 ? (
          <div className="p-16 text-center space-y-3 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <Info className="w-10 h-10 text-[var(--text-muted)] mx-auto opacity-40" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              {language === 'en' ? 'No achievements found in this category' : 'Aucune distinction dans cette catégorie'}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              {language === 'en' ? 'Try selecting another category filter above.' : 'Sélectionnez un autre filtre ci-dessus.'}
            </p>
          </div>
        ) : viewMode === 'grid' ? (
          /* GRID VIEW */
          <div className="space-y-12">
            
            {/* If in Default "All" View: Highlights Row at top */}
            {activeCategory === 'all' && (
              <section aria-labelledby="highlights-heading" className="space-y-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" aria-hidden="true" />
                  <h2 id="highlights-heading" className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                    {language === 'en' ? 'Flagship Awards & National Recognitions' : 'Prix Majeurs & Distinctions Nationales'}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredHighlights.map((item) => renderCard(item, true))}
                </div>
              </section>
            )}

            {/* Main Cards Grid */}
            <section aria-labelledby="all-honors-heading" className="space-y-6">
              {activeCategory === 'all' && (
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <h2 id="all-honors-heading" className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    {language === 'en' ? 'Complete Wall of Proof' : 'Palmarès Complet & Accréditations'}
                  </h2>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {(activeCategory === 'all' ? regularItems : filteredAndSortedItems).map((item) =>
                  renderCard(item, false)
                )}
              </div>
            </section>

          </div>
        ) : (
          /* CHRONOLOGICAL TIMELINE VIEW (Newest First) */
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border-color)] space-y-10" role="list">
            {filteredAndSortedItems.map((item) => (
              <div key={item.id} className="relative group" role="listitem">
                {/* Node Bullet */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--bg-secondary)] border-2 border-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                </div>

                {/* Timeline Card */}
                {renderCard(item, item.featured)}
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
