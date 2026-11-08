'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { achievementsData } from '@/data/achievements';
import {
  Award,
  ShieldCheck,
  ExternalLink,
  Trophy,
  Sparkles,
  CheckCircle,
} from 'lucide-react';

export default function AchievementsPage() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: { en: 'All Verified Proof', fr: 'Toutes les preuves' } },
    { id: 'cloud', label: { en: 'Cloud & DevOps', fr: 'Cloud & DevOps' } },
    { id: 'ai', label: { en: 'Applied AI & Python', fr: 'IA Appliquée' } },
    { id: 'awards', label: { en: 'Awards & Hackathons', fr: 'Prix & Hackathons' } },
    { id: 'leadership', label: { en: 'Leadership Certs', fr: 'Leadership' } },
  ];

  const filteredItems = achievementsData.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'cloud') return item.relatedSkillIds?.includes('cloud-devops') || item.relatedSkillIds?.includes('docker') || item.relatedSkillIds?.includes('terraform');
    if (activeFilter === 'ai') return item.relatedSkillIds?.includes('fastapi') || item.relatedSkillIds?.includes('python');
    if (activeFilter === 'awards') return item.isAward === true;
    if (activeFilter === 'leadership') return item.relatedSkillIds?.includes('team-leadership');
    return true;
  });

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Proof of Competence / Accreditations' : 'Preuves de Compétence / Certifications'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en' ? 'Wall of Proof & Industry Standards' : 'Mur des Certifications & Distinctions'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'Every credential, hackathon podium, and leadership badge is backed by live external verification links on Credly, Coursera, DeepLearning.AI, and LinkedIn.'
              : 'Chaque certification, podium de hackathon et accréditation de leadership dispose d\'un lien de vérification direct vers Credly, Coursera ou LinkedIn.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2" role="tablist">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-sm'
                    : 'bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-cyan-500/40'
                }`}
              >
                {t(tab.label)}
              </button>
            );
          })}
        </div>

        {/* Wall of Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group shadow-sm ${
                cert.isAward
                  ? 'bg-gradient-to-br from-amber-500/10 via-[var(--card-bg)] to-violet-500/10 border-amber-500/30 hover:border-amber-400'
                  : 'bg-[var(--card-bg)] border-[var(--border-color)] hover:border-cyan-500/40'
              }`}
            >
              <div className="space-y-4">
                {/* Header: Platform & Verification Tag */}
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                      cert.isAward
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                    }`}
                  >
                    {cert.isAward ? <Trophy className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium text-[var(--text-muted)]">
                      {cert.year}
                    </span>
                    {cert.verified && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Award Rank Badge if applicable */}
                {cert.isAward && cert.awardRank && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{cert.awardRank}</span>
                  </div>
                )}

                {/* Title & Issuer */}
                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                    {t(cert.title)}
                  </h3>
                  <p className="text-sm font-medium text-[var(--text-muted)] mt-1">
                    {cert.issuer} &middot; <span className="text-cyan-400 font-mono text-xs">{cert.platform}</span>
                  </p>
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-[var(--text-muted)] p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-[var(--border-color)]">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>

              {/* Action Verification Link */}
              <div className="pt-6 mt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-500 dark:text-cyan-400 hover:underline group-hover:translate-x-0.5 transition-transform"
                >
                  <span>{language === 'en' ? 'Open credential on ' : 'Voir sur '}{cert.platform} ↗</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                  {cert.platform}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
