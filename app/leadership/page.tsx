'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { leadershipData } from '@/data/leadership';
import {
  Users,
  ShieldAlert,
  Award,
  Calendar,
  CheckCircle2,
  TrendingUp,
  FileCheck,
  Globe2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function LeadershipPage() {
  const { language, t } = useLanguage();

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs border border-amber-500/20">
            <Users className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Governance & Executive Impact' : 'Gouvernance & Leadership Exécutif'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en'
              ? 'AIESEC Tunisia: Leading Cross-Border Teams & Operations'
              : 'AIESEC Tunisie : Direction d\'Équipes & Opérations Internationales'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'Executive roles across national volunteering exchange operations, organizational risk governance, multi-chapter budgeting, and legal statutory compliance.'
              : 'Responsabilités exécutives dans la direction des échanges internationaux, la gouvernance des risques, le pilotage budgétaire et la conformité légale.'}
          </p>
        </div>

        {/* Executive Summary Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)]">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-display font-bold text-cyan-400">25+</span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'Team Members Mentored' : 'Membres Encadrés'}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-display font-bold text-amber-400">10</span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'Local Committees Coordinated' : 'Comités Locaux Coordonnés'}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-display font-bold text-emerald-400">100%</span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'National Audit Clearance' : 'Conformité aux Audits'}
            </p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="text-2xl sm:text-3xl font-display font-bold text-violet-400">+42%</span>
            <p className="text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'Exchange Volume Growth' : 'Croissance des Échanges'}
            </p>
          </div>
        </div>

        {/* Roles Dossier */}
        <div className="space-y-12">
          {leadershipData.map((role) => (
            <section
              key={role.id}
              className="p-6 sm:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all space-y-8 shadow-sm"
            >
              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[var(--border-color)] pb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                        role.status === 'Current'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-black/5 dark:bg-white/5 text-[var(--text-muted)] border-[var(--border-color)]'
                      }`}
                    >
                      {role.status === 'Current' ? 'Active Mandate' : 'Completed Mandate'}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {role.period}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">
                    {t(role.title)}
                  </h2>

                  <p className="text-sm font-semibold text-cyan-400">
                    {role.organization}
                  </p>
                </div>

                <div className="text-xs font-mono text-right space-y-1 text-[var(--text-muted)]">
                  <div>Team: <span className="text-[var(--text-primary)] font-semibold">{role.teamSize}</span></div>
                  {role.budgetManaged && <div>Audit: <span className="text-emerald-400 font-semibold">{role.budgetManaged}</span></div>}
                </div>
              </div>

              {/* Scope Description */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Globe2 className="w-4 h-4" />
                  <span>{language === 'en' ? 'Operational Mandate Scope' : 'Périmètre Opérationnel'}</span>
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {t(role.scope)}
                </p>
              </div>

              {/* Impact Metrics */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  <span>{language === 'en' ? 'Verified Impact Metrics' : 'Impact Mesurable & Réalisations'}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {t(role.impactMetrics).map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-xs sm:text-sm font-medium text-emerald-400 flex items-start gap-2"
                    >
                      <Sparkles className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4" />
                  <span>{language === 'en' ? 'Executive Responsibilities' : 'Responsabilités Exécutives'}</span>
                </h3>
                <ul className="space-y-2.5">
                  {t(role.responsibilities).map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* Integration with Software Engineering: DASH Platform Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-violet-500/10 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase">
              <span>Convergence of Leadership & Software</span>
            </div>
            <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">
              {language === 'en' ? 'DASH — Data Analysis Systems Hub' : 'DASH — Plateforme Décisionnelle AIESEC'}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-xl">
              {language === 'en'
                ? 'Discover how operational leadership challenges at AIESEC Tunisia inspired the architecture of DASH, built as my engineering graduation project.'
                : 'Découvrez comment les défis opérationnels d\'AIESEC Tunisie ont conduit à la conception de la plateforme logicielle DASH.'}
            </p>
          </div>

          <Link
            href="/projects/dash-analytics-hub"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md hover:opacity-95 transition-opacity shrink-0"
          >
            <span>{language === 'en' ? 'Read DASH Case Study' : 'Voir l\'étude de cas DASH'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
