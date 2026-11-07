'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { Award, ExternalLink, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

export default function Certificates() {
  const { language, t } = useLanguage();
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm tracking-wider uppercase font-semibold">
            <span>05 /</span>
            <span>{language === 'en' ? 'Verified Credentials & Honors' : 'Certifications & Distinctions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)]">
            {language === 'en' ? 'Industry Standards & Competitive Honors' : 'Normes Industrielles & Prix d\'Excellence'}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl">
            {language === 'en'
              ? 'Continuous learning and verified technical proficiency in Cloud Architecture, DevOps automation, and national hackathons.'
              : 'Apprentissage continu et compétences vérifiées en architecture Cloud, automatisation DevOps et hackathons nationaux.'}
          </p>
        </div>

        {/* Certificates Grid (3 cols on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between group shadow-sm ${
                cert.isAward
                  ? 'bg-gradient-to-br from-amber-500/10 via-[var(--card-bg)] to-violet-500/10 border-amber-500/30 hover:border-amber-400'
                  : 'bg-[var(--card-bg)] border-[var(--border-color)] hover:border-cyan-500/40'
              }`}
            >
              <div className="space-y-4">
                
                {/* Header Icon & Year */}
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

                  <span className="text-xs font-mono font-medium text-[var(--text-muted)]">
                    {cert.year}
                  </span>
                </div>

                {/* Award Rank Badge if applicable */}
                {cert.isAward && cert.awardRank && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Sparkles className="w-3 h-3" />
                    <span>{cert.awardRank}</span>
                  </div>
                )}

                {/* Certificate Title & Issuer */}
                <div>
                  <h3 className="font-display font-bold text-lg text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                    {t(cert.title)}
                  </h3>
                  <p className="text-sm font-medium text-[var(--text-muted)] mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className="text-[11px] font-mono text-[var(--text-muted)]">
                    ID: {cert.credentialId}
                  </div>
                )}

              </div>

              {/* Action Link */}
              <div className="pt-6 mt-4 border-t border-[var(--border-color)]">
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-500 dark:text-cyan-400 hover:underline group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{language === 'en' ? 'View certificate ↗' : 'Vérifier l\'accréditation ↗'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {language === 'en' ? 'Verified Credential' : 'Accréditation Validée'}
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
