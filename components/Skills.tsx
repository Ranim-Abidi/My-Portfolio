'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import {
  Cloud,
  Server,
  Layout,
  Brain,
  Database,
  Users,
  CheckCircle,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cloud: <Cloud className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Brain: <Brain className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
};

const levelStyles: Record<string, { bg: string; text: string; border: string }> = {
  Expert: {
    bg: 'bg-cyan-500/10',
    text: 'text-cyan-400',
    border: 'border-cyan-500/30',
  },
  Advanced: {
    bg: 'bg-indigo-500/10',
    text: 'text-indigo-400',
    border: 'border-indigo-500/30',
  },
  Proficient: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    border: 'border-purple-500/30',
  },
  Familiar: {
    bg: 'bg-slate-500/10',
    text: 'text-slate-400',
    border: 'border-slate-500/30',
  },
};

export default function Skills() {
  const { language, t } = useLanguage();
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-24 relative bg-[var(--bg-secondary)]/30 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm tracking-wider uppercase font-semibold">
            <span>02 /</span>
            <span>{language === 'en' ? 'Core Capabilities' : 'Compétences Techniques'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)]">
            {language === 'en' ? 'Technical Architecture & Leadership Matrix' : 'Matrice Technique & Leadership'}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl">
            {language === 'en'
              ? 'Categorized by domain proficiency — built on production-grade projects, automated pipelines, and international governance.'
              : 'Structurées par niveau de maîtrise pratique — validées par des déploiements en production, pipelines CI/CD et gestion d\'équipes.'}
          </p>
        </div>

        {/* Skills Cards Grid (3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-7 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all duration-200">
                    {iconMap[category.icon] || <Cloud className="w-5 h-5" />}
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

                <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6 leading-relaxed">
                  {t(category.description)}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => {
                    const style = levelStyles[skill.level] || levelStyles.Proficient;
                    return (
                      <div
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors ${
                          skill.isHighlight
                            ? `${style.bg} ${style.border} ${style.text} shadow-sm font-semibold`
                            : 'bg-black/5 dark:bg-white/5 border-[var(--border-color)] text-[var(--text-secondary)] hover:border-cyan-500/30'
                        }`}
                      >
                        {skill.isHighlight && <CheckCircle className="w-3 h-3 shrink-0" />}
                        <span>{skill.name}</span>
                        <span className="text-[9px] font-mono opacity-60 ml-0.5">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
