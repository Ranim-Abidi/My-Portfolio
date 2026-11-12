'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { experienceData, engineeringMilestonesData } from '@/data/experience';
import { ExperienceItem, ExperienceCategory } from '@/types/portfolio';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  FileText,
  Sparkles,
  Milestone,
  Layers,
  Clock,
} from 'lucide-react';

export default function ExperiencePage() {
  const { language, t } = useLanguage();
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState<ExperienceCategory>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});

  const filterCategories: Array<{ id: ExperienceCategory; label: { en: string; fr: string } }> = [
    { id: 'all', label: { en: 'All Roles', fr: 'Tous les Rôles' } },
    { id: 'devops-cloud', label: { en: 'DevOps & Cloud', fr: 'DevOps & Cloud' } },
    { id: 'fullstack', label: { en: 'Full-Stack', fr: 'Full-Stack' } },
    { id: 'data-ml', label: { en: 'Data & ML', fr: 'Data & ML' } },
    { id: 'iot', label: { en: 'IoT', fr: 'IoT' } },
  ];

  // Calculate counts per filter
  const categoryCounts = useMemo(() => {
    return {
      all: experienceData.length,
      'devops-cloud': experienceData.filter((i) => i.categories.includes('devops-cloud')).length,
      fullstack: experienceData.filter((i) => i.categories.includes('fullstack')).length,
      'data-ml': experienceData.filter((i) => i.categories.includes('data-ml')).length,
      iot: experienceData.filter((i) => i.categories.includes('iot')).length,
    };
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return experienceData;
    return experienceData.filter((item) => item.categories.includes(activeCategory as any));
  }, [activeCategory]);

  const toggleDetails = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
              <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{language === 'en' ? 'Track Record / Engineering Timeline' : 'Parcours / Chronologie Ingénierie'}</span>
            </div>

            {/* Downloadable CV button */}
            <a
              href="/cv/cv-ranim-abidi-devops.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white border border-cyan-500/20 transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              aria-label={language === 'en' ? 'Download CV in PDF format' : 'Télécharger le CV au format PDF'}
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              <span>{language === 'en' ? 'Download CV (PDF)' : 'Télécharger le CV (PDF)'}</span>
            </a>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en' ? 'Professional Experience & Engineering Milestones' : 'Expériences Professionnelles & Jalons Clés'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'Real-world career timeline written as outcomes and evidence across cloud infrastructure, automated CI/CD pipelines, multi-tenant SaaS products, and IoT platforms.'
              : 'Chronologie professionnelle axée sur les résultats et preuves d’ingénierie : infrastructure cloud, pipelines CI/CD automatisés, plateformes SaaS multi-tenant et systèmes IoT.'}
          </p>
        </header>

        {/* 1. ENGINEERING MILESTONES STRIP (Compact, horizontally scrollable on mobile) */}
        <section aria-labelledby="milestones-heading" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Milestone className="w-4 h-4 text-cyan-400" aria-hidden="true" />
              <h2 id="milestones-heading" className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                {language === 'en' ? 'Engineering Milestones' : 'Jalons Clés d’Ingénierie'}
              </h2>
            </div>
            <span className="text-[11px] font-mono text-[var(--text-muted)] hidden sm:inline">
              {language === 'en' ? '6 verifiable milestones' : '6 jalons vérifiables'}
            </span>
          </div>

          <div
            className="flex gap-4 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-cyan-500/20 focus-visible:outline-none"
            tabIndex={0}
            role="region"
            aria-label="Engineering Milestones Timeline"
          >
            {engineeringMilestonesData.map((milestone) => (
              <div
                key={milestone.id}
                className="min-w-[260px] sm:min-w-[290px] max-w-[320px] p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all flex flex-col justify-between shrink-0 shadow-sm"
              >
                <div>
                  <span className="text-[11px] font-mono font-semibold text-cyan-400 block mb-1">
                    {milestone.period}
                  </span>
                  <h3 className="font-display font-bold text-sm text-[var(--text-primary)] leading-snug">
                    {t(milestone.title)}
                  </h3>
                  {milestone.description && (
                    <p className="text-xs text-[var(--text-muted)] mt-1.5 line-clamp-2">
                      {t(milestone.description)}
                    </p>
                  )}
                </div>

                <div className="pt-3 mt-3 border-t border-[var(--border-color)]">
                  <Link
                    href={milestone.link.href}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 font-semibold transition-colors focus-visible:underline focus-visible:outline-none"
                  >
                    <span>{t(milestone.link.label)}</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. CATEGORY FILTERS */}
        <section aria-label="Experience Category Filters" className="space-y-6">
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id as keyof typeof categoryCounts] || 0;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all inline-flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-sm'
                      : 'bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-cyan-500/40'
                  }`}
                >
                  <span>{t(cat.label)}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-black/5 dark:bg-white/10 text-[var(--text-muted)]'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 3. VERTICAL TIMELINE (Newest First) */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--border-color)] space-y-10" role="list">
            {filteredItems.map((item) => {
              const isCollapsible = Boolean(item.isCollapsible);
              const isExpanded = expandedIds[item.id] ?? false;
              const hasProjectLink = item.relatedProjectSlugs && item.relatedProjectSlugs.length > 0;
              const projectSlug = hasProjectLink ? item.relatedProjectSlugs[0] : null;

              return (
                <article
                  key={item.id}
                  id={item.id}
                  tabIndex={0}
                  role="listitem"
                  aria-label={`${t(item.role)} at ${item.organization}`}
                  className="relative group focus-visible:outline-none"
                >
                  {/* Timeline Node Bullet */}
                  <div className={`absolute -left-[33px] sm:-left-[41px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--bg-secondary)] border-2 ${item.isCurrent ? 'border-emerald-400 ring-4 ring-emerald-500/20' : 'border-cyan-500'} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <Briefcase className={`w-3.5 h-3.5 ${item.isCurrent ? 'text-emerald-400' : 'text-cyan-400'}`} aria-hidden="true" />
                  </div>

                  {/* Card Container */}
                  <div className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 focus-within:border-cyan-500/60 transition-all shadow-sm space-y-4">
                    
                    {/* Top Metadata: Badges + Period with Duration + Location */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {item.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                            <span>{language === 'en' ? 'Current' : 'En poste'}</span>
                          </span>
                        )}

                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)]">
                          {item.workMode}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-muted)]">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                          <span>{item.period}</span>
                          {item.duration && (
                            <>
                              <span className="text-[var(--text-muted)]/50">·</span>
                              <span className="text-cyan-400 font-semibold">{t(item.duration)}</span>
                            </>
                          )}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[var(--text-muted)]" aria-hidden="true" />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Role Title and Organization */}
                    <div>
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)]">
                        {t(item.role)}
                      </h2>
                      <p className="text-sm sm:text-base font-semibold text-cyan-500 dark:text-cyan-400 mt-0.5">
                        {item.organization}
                      </p>
                    </div>

                    {/* Summary (1 sentence) */}
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {t(item.summary)}
                    </p>

                    {/* Highlights (Expanded or Collapsed) */}
                    {isCollapsible ? (
                      <div>
                        {isExpanded && (
                          <ul className="space-y-2.5 pt-2 border-t border-[var(--border-color)]">
                            {t(item.highlights).map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <button
                          type="button"
                          onClick={() => toggleDetails(item.id)}
                          className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold mt-2 focus-visible:underline focus-visible:outline-none"
                          aria-expanded={isExpanded}
                        >
                          <span>{isExpanded ? (language === 'en' ? 'Hide details' : 'Masquer les détails') : (language === 'en' ? 'Show details' : 'Afficher les détails')}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" /> : <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />}
                        </button>
                      </div>
                    ) : (
                      <ul className="space-y-2.5 pt-2 border-t border-[var(--border-color)]">
                        {t(item.highlights).map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Stack Chips & Direct Links */}
                    <div className="pt-4 border-t border-[var(--border-color)] space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[var(--text-muted)]">
                        <span className="font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
                          {language === 'en' ? 'Tech & Infrastructure' : 'Technologies & Infrastructure'}
                        </span>
                        <Link
                          href="/skills"
                          className="inline-flex items-center gap-1 text-cyan-500 hover:text-cyan-400 transition-colors focus-visible:underline focus-visible:outline-none"
                        >
                          <span>{language === 'en' ? 'Open in Skills Matrix' : 'Explorer dans la Matrice'}</span>
                          <ArrowRight className="w-3 h-3" aria-hidden="true" />
                        </Link>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5">
                        {item.tech.map((tItem, tIdx) => (
                          <Link
                            key={tIdx}
                            href={`/projects?search=${encodeURIComponent(tItem)}`}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all focus-visible:ring-1 focus-visible:ring-cyan-400 focus-visible:outline-none"
                            title={`${language === 'en' ? 'Filter projects using' : 'Filtrer les projets utilisant'} ${tItem}`}
                          >
                            <span>{tItem}</span>
                          </Link>
                        ))}
                      </div>

                      {projectSlug && (
                        <div className="pt-2 flex justify-end">
                          <Link
                            href={`/projects/${projectSlug}`}
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 transition-colors focus-visible:underline focus-visible:outline-none"
                          >
                            <span>{language === 'en' ? 'View related project' : 'Voir le projet associé'}</span>
                            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </Link>
                        </div>
                      )}
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
