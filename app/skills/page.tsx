'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { coreFocusSkills, spokenLanguagesData, verifiedCertificationsData } from '@/data/skills';
import { SkillCategory, SkillItem } from '@/types/portfolio';
import {
  Cpu,
  Cloud,
  Server,
  Layers,
  Activity,
  Shield,
  Layout,
  Database,
  Brain,
  Sparkles,
  Settings,
  FolderGit2,
  Award,
  ExternalLink,
  ArrowRight,
  Globe,
  CheckCircle2,
  Info,
} from 'lucide-react';

const categoryIconMap: Record<string, React.ReactNode> = {
  'cloud-platforms': <Cloud className="w-5 h-5" aria-hidden="true" />,
  'containers-orchestration': <Server className="w-5 h-5" aria-hidden="true" />,
  'iac': <Layers className="w-5 h-5" aria-hidden="true" />,
  'cicd-automation': <Activity className="w-5 h-5" aria-hidden="true" />,
  'monitoring': <Activity className="w-5 h-5" aria-hidden="true" />,
  'security-access': <Shield className="w-5 h-5" aria-hidden="true" />,
  'languages': <Cpu className="w-5 h-5" aria-hidden="true" />,
  'web-mobile': <Layout className="w-5 h-5" aria-hidden="true" />,
  'databases': <Database className="w-5 h-5" aria-hidden="true" />,
  'data-ml': <Brain className="w-5 h-5" aria-hidden="true" />,
  'design-web': <Sparkles className="w-5 h-5" aria-hidden="true" />,
  'tools-methods': <Settings className="w-5 h-5" aria-hidden="true" />,
};

function SkillsContent() {
  const { language, t } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const { skillCategories, certificates } = portfolioData;

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0),
    };
    skillCategories.forEach((cat) => {
      counts[cat.id] = cat.skills.length;
    });
    return counts;
  }, [skillCategories]);

  // Filtered categories
  const filteredCategories = useMemo(() => {
    if (activeCategory === 'all') return skillCategories;
    return skillCategories.filter((cat) => cat.id === activeCategory);
  }, [skillCategories, activeCategory]);

  // Handle skill click: filter Projects Hub by that technology
  const handleSkillClick = (skill: SkillItem) => {
    router.push(`/projects?search=${encodeURIComponent(skill.name)}`);
  };

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{language === 'en' ? 'Technical Competencies' : 'Compétences Techniques'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en' ? 'Skills & Evidence-Backed Capabilities' : 'Compétences & Réalisations Vérifiées'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'Every skill is grounded in production deliverables, academic projects, or verified certifications. Hover or tap any skill to see where it was used, or click to filter related architectures in the Projects Hub.'
              : 'Chaque compétence repose sur des livrables de production, des projets académiques ou des certifications vérifiées. Survolez ou touchez une compétence pour voir ses preuves réelles, ou cliquez pour filtrer les projets associés.'}
          </p>
        </div>

        {/* 1. CORE FOCUS STRIP (One row of chips highlighting main engineering profile) */}
        <section aria-labelledby="core-focus-heading" className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" aria-hidden="true" />
            <h2 id="core-focus-heading" className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              {language === 'en' ? 'Core Engineering Focus' : 'Cœur de Profil & Spécialisations'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm">
            {coreFocusSkills.map((focus) => (
              <button
                key={focus}
                onClick={() => router.push(`/projects?search=${encodeURIComponent(focus)}`)}
                className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 hover:from-cyan-500/20 hover:to-indigo-500/20 border border-cyan-500/30 text-cyan-400 dark:text-cyan-300 transition-all hover:scale-105 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
                title={`${language === 'en' ? 'Filter projects matching' : 'Filtrer les projets'} ${focus}`}
              >
                <span>{focus}</span>
                <span className="ml-1 opacity-60">↗</span>
              </button>
            ))}
          </div>
        </section>

        {/* 2. CATEGORY FILTER TABS (Projects Hub style with live counts) */}
        <div className="flex flex-wrap items-center gap-2 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm" role="tablist" aria-label="Skills Category Filter">
          <button
            role="tab"
            aria-selected={activeCategory === 'all'}
            onClick={() => setActiveCategory('all')}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            <span>{language === 'en' ? 'All Skills' : 'Toutes les Compétences'}</span>
            <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${activeCategory === 'all' ? 'bg-white/20 text-white' : 'bg-black/10 dark:bg-white/10 text-[var(--text-muted)]'}`}>
              {categoryCounts.all}
            </span>
          </button>

          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = categoryCounts[cat.id] ?? 0;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-sm'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                <span>{t(cat.title)}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-black/10 dark:bg-white/10 text-[var(--text-muted)]'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. SKILLS CATEGORY GRIDS */}
        {filteredCategories.length === 0 ? (
          <div className="p-16 text-center space-y-3 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <Info className="w-10 h-10 text-[var(--text-muted)] mx-auto opacity-40" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              {language === 'en' ? 'No skills in this category' : 'Aucune compétence dans cette catégorie'}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              {language === 'en' ? 'Select another category tab to view skills.' : 'Sélectionnez un autre onglet pour afficher les compétences.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="p-6 sm:p-7 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                      {categoryIconMap[category.id] || <Cpu className="w-5 h-5" aria-hidden="true" />}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-[var(--text-primary)]">
                        {t(category.title)}
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--text-muted)]">
                        {category.skills.length} {language === 'en' ? 'skills' : 'compétences'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] mb-5 leading-relaxed">
                    {t(category.description)}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const isOpen = activeSkillId === skill.id;
                      const evidenceList = skill.evidence || [];
                      const hasEvidence = evidenceList.length > 0 || skill.projectSlugs.length > 0;

                      return (
                        <div key={skill.id} className="relative">
                          <button
                            type="button"
                            onClick={() => setActiveSkillId(isOpen ? null : skill.id)}
                            onMouseEnter={() => setActiveSkillId(skill.id)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                              isOpen
                                ? 'bg-cyan-500 text-white font-bold shadow-md scale-105'
                                : 'bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-cyan-500/50 hover:text-[var(--text-primary)]'
                            }`}
                            aria-expanded={isOpen}
                            aria-label={`${skill.name}. ${hasEvidence ? 'Has verified project evidence.' : ''} Click to view evidence or filter projects.`}
                          >
                            <span>{skill.name}</span>
                            {hasEvidence && (
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${isOpen ? 'bg-white' : 'bg-cyan-400'}`}
                                title={language === 'en' ? 'Backed by project evidence' : 'Validé par des réalisations'}
                              />
                            )}
                          </button>

                          {/* Hover / Tap Evidence Indicator Popover */}
                          {isOpen && hasEvidence && (
                            <div
                              onMouseLeave={() => setActiveSkillId(null)}
                              className="absolute left-0 bottom-full mb-2 z-30 w-72 p-3.5 rounded-2xl bg-slate-950 border border-cyan-500/40 text-white shadow-2xl space-y-2 text-xs"
                            >
                              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                                <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                                  {language === 'en' ? 'Used in / Evidence' : 'Mobilisé dans / Preuves'}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleSkillClick(skill)}
                                  className="text-[10px] font-mono text-cyan-300 hover:underline inline-flex items-center gap-0.5"
                                >
                                  <span>{language === 'en' ? 'Projects Hub' : 'Voir Projets'}</span>
                                  <ExternalLink className="w-2.5 h-2.5" />
                                </button>
                              </div>

                              {/* Evidence Items */}
                              <ul className="space-y-1.5">
                                {evidenceList.map((item, eIdx) => (
                                  <li key={eIdx}>
                                    <Link
                                      href={item.href}
                                      className="inline-flex items-center gap-1.5 text-xs text-slate-200 hover:text-cyan-400 transition-colors"
                                    >
                                      {item.type === 'project' && <FolderGit2 className="w-3 h-3 text-cyan-400 shrink-0" />}
                                      {item.type === 'cert' && <Award className="w-3 h-3 text-amber-400 shrink-0" />}
                                      {item.type === 'role' && <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />}
                                      <span className="line-clamp-1">{typeof item.title === 'string' ? item.title : t(item.title)}</span>
                                      <ArrowRight className="w-2.5 h-2.5 ml-auto opacity-70" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 4. SPOKEN LANGUAGES COMPACT BLOCK */}
        <section aria-labelledby="spoken-languages-heading" className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-cyan-400" aria-hidden="true" />
            <h2 id="spoken-languages-heading" className="text-base font-display font-bold text-[var(--text-primary)]">
              {language === 'en' ? 'Language Proficiencies' : 'Compétences Linguistiques'}
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {spokenLanguagesData.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-sm text-[var(--text-primary)]">
                    {t(item.language)}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-2">
                  {t(item.level)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CERTIFICATIONS BLOCK (Linked to skills & Credly profile) */}
        <section aria-labelledby="certifications-heading" className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
                <Award className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <h2 id="certifications-heading" className="text-lg font-display font-bold text-[var(--text-primary)]">
                  {language === 'en' ? 'Verified Certifications & Accreditations' : 'Certifications & Accréditations Vérifiées'}
                </h2>
                <p className="text-xs text-[var(--text-muted)]">
                  {language === 'en'
                    ? 'All cloud, architecture, and developer credentials verified on official issuer registries.'
                    : 'Diplômes et accréditations vérifiés sur les registres officiels.'}
                </p>
              </div>
            </div>

            <a
              href="https://www.credly.com/users/ranim-abidi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-white border border-amber-500/20 transition-all focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
              aria-label="View Ranim Abidi's verified badges on Credly"
            >
              <span>Credly Profile</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {verifiedCertificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-amber-500/40 transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] mb-1.5">
                    <span className="font-semibold text-amber-400/90">{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-[var(--text-primary)] group-hover:text-amber-400 transition-colors leading-snug">
                    {t(cert.title)}
                  </h3>

                  {/* Linked Skills */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-3">
                    {cert.skills.map((sName, sIdx) => (
                      <button
                        key={sIdx}
                        type="button"
                        onClick={() => router.push(`/projects?search=${encodeURIComponent(sName)}`)}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500/40 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400"
                        title={`${language === 'en' ? 'Filter projects using' : 'Filtrer les projets utilisant'} ${sName}`}
                      >
                        {sName}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 mt-4 border-t border-[var(--border-color)] text-[11px] font-mono">
                  <span className="text-[var(--text-muted)]">{cert.platform}</span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-semibold focus-visible:underline focus-visible:outline-none"
                    aria-label={`Verify ${t(cert.title)} on ${cert.platform}`}
                  >
                    <span>{language === 'en' ? 'Verify on Credly' : 'Vérifier sur Credly'}</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default function SkillsPage() {
  return (
    <Suspense fallback={<div className="py-28 text-center text-xs font-mono text-cyan-400">Loading Skills Matrix...</div>}>
      <SkillsContent />
    </Suspense>
  );
}
