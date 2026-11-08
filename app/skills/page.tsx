'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { SkillItem } from '@/types/portfolio';
import {
  Cpu,
  Cloud,
  Server,
  Layout,
  Brain,
  Database,
  Users,
  CheckCircle,
  FolderGit2,
  Award,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
};

function SkillsContent() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();
  const focusParam = searchParams.get('focus');

  const { skillCategories, projects, certificates, experience } = portfolioData;

  // Selected skill for the interactive graph (default to docker or query param)
  const allSkills = skillCategories.flatMap((c) => c.skills);
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(() => {
    if (focusParam) {
      const match = allSkills.find((s) => s.id === focusParam || s.name.toLowerCase() === focusParam.toLowerCase());
      if (match) return match;
    }
    return allSkills[0]; // Docker
  });

  useEffect(() => {
    if (focusParam) {
      const match = allSkills.find((s) => s.id === focusParam || s.name.toLowerCase() === focusParam.toLowerCase());
      if (match) setSelectedSkill(match);
    }
  }, [focusParam]);

  // Derived graph relations for selected skill
  const relatedProjects = projects.filter(
    (p) =>
      selectedSkill.projectSlugs.includes(p.slug) ||
      p.relatedSkillIds.includes(selectedSkill.id) ||
      p.tags.some((t) => t.toLowerCase() === selectedSkill.name.toLowerCase())
  );

  const relatedCerts = certificates.filter(
    (c) =>
      selectedSkill.certificateIds?.includes(c.id) ||
      c.relatedSkillIds?.includes(selectedSkill.id)
  );

  const relatedExperiences = experience.filter(
    (e) =>
      e.tags.some((t) => t.toLowerCase().includes(selectedSkill.name.toLowerCase())) ||
      (selectedSkill.id === 'docker' && e.id === 'cloud-devops-intern') ||
      (selectedSkill.id === 'terraform' && e.id === 'cloud-devops-intern')
  );

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Competencies & Proof Mapping' : 'Compétences & Preuves Réelles'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en' ? 'Skills Matrix & Interactive Proof Graph' : 'Matrice & Graphe Interactif des Compétences'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'Click any technology below to explore its live connection to production architectures, verified credentials, and organizational experiences.'
              : 'Cliquez sur n\'importe quelle technologie ci-dessous pour visualiser ses connexions directes avec mes projets, certifications et expériences.'}
          </p>
        </div>

        {/* INTERACTIVE SKILL-TO-PROJECT GRAPH PANEL */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border-2 border-cyan-500/40 text-white shadow-2xl space-y-6 relative overflow-hidden">
          
          {/* Header of Active Graph Node */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center font-bold text-xl">
                ⚡
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  {language === 'en' ? 'Active Proof Node' : 'Compétence Sélectionnée'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                  {selectedSkill.name}
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/10 border border-white/20 text-cyan-300">
                {selectedSkill.level}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {relatedProjects.length} {language === 'en' ? 'projects proved' : 'projets validés'}
              </span>
            </div>
          </div>

          {/* Connected Entities Columns (3 cols) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Proved in Projects */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <FolderGit2 className="w-4 h-4" />
                <span>{language === 'en' ? 'Proved in Projects' : 'Validé en Projets'} ({relatedProjects.length})</span>
              </div>

              {relatedProjects.length === 0 ? (
                <p className="text-xs text-slate-400 italic">Academic lab and foundational coursework.</p>
              ) : (
                <div className="space-y-2">
                  {relatedProjects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/50 transition-all block group"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-white group-hover:text-cyan-400">
                        <span>{p.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                        {t(p.pitch)}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Proved in Certificates */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>{language === 'en' ? 'Verified in Certifications' : 'Certifié par'} ({relatedCerts.length})</span>
              </div>

              {relatedCerts.length === 0 ? (
                <p className="text-xs text-slate-400 italic">Applied production and engineering experience.</p>
              ) : (
                <div className="space-y-2">
                  {relatedCerts.map((c) => (
                    <a
                      key={c.id}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/50 transition-all block group"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-white group-hover:text-amber-300">
                        <span>{t(c.title)}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {c.issuer} &middot; {c.year}
                      </p>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Exercised in Experience */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>{language === 'en' ? 'Exercised in Roles' : 'Mobilisé en Rôles'} ({relatedExperiences.length})</span>
              </div>

              {relatedExperiences.length === 0 ? (
                <p className="text-xs text-slate-400 italic">Specialized academic and prototyping research.</p>
              ) : (
                <div className="space-y-2">
                  {relatedExperiences.map((e) => (
                    <Link
                      key={e.id}
                      href="/experience"
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-400/50 transition-all block group"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-white group-hover:text-emerald-300">
                        <span>{t(e.role)}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {e.organization} &middot; {e.period}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Categorized Skills Grids */}
        <div className="space-y-8">
          <div className="space-y-1">
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">
              {language === 'en' ? 'Competencies by Technical Domain' : 'Compétences par Domaine Technique'}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              {language === 'en'
                ? 'Select any badge below to recalculate the interactive proof graph.'
                : 'Sélectionnez un badge ci-dessous pour recalculer le graphe de preuve.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className="p-6 sm:p-7 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] flex flex-col justify-between group shadow-sm hover:border-cyan-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                      {iconMap[category.icon] || <Cpu className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
                        {t(category.title)}
                      </h3>
                      <span className="text-[11px] font-mono text-[var(--text-muted)]">
                        {category.skills.length} {language === 'en' ? 'competencies' : 'compétences'}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] mb-5 leading-relaxed">
                    {t(category.description)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const isSelected = selectedSkill.id === skill.id;
                      return (
                        <button
                          key={skill.id}
                          onClick={() => {
                            setSelectedSkill(skill);
                            window.scrollTo({ top: 380, behavior: 'smooth' });
                          }}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                            isSelected
                              ? 'bg-cyan-500 text-white font-bold shadow-md scale-105'
                              : skill.isHighlight
                              ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20'
                              : 'bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-cyan-500/40'
                          }`}
                        >
                          {skill.isHighlight && <CheckCircle className="w-3 h-3" />}
                          <span>{skill.name}</span>
                          <span className={`text-[9px] font-mono ml-0.5 ${isSelected ? 'text-cyan-100' : 'opacity-60'}`}>
                            {skill.level}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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
