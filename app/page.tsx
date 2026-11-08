'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import UptimeBadge from '@/components/UptimeBadge';
import {
  ArrowRight,
  ExternalLink,
  Award,
  Sparkles,
  Layers,
  FolderGit2,
  Cpu,
  Briefcase,
  Users,
  Compass,
  FileText,
  Mail,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

export default function Home() {
  const { language, t } = useLanguage();
  const { profile, projects, certificates } = portfolioData;

  // Top 3 featured projects for the hub
  const topProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestAchievement = certificates[0]; // e.g. HashiCorp Terraform or Laureate Hackathon

  const hubNavigationCards = [
    {
      href: '/about',
      title: { en: 'About & Journey', fr: 'À Propos & Parcours' },
      description: {
        en: 'Dual-degree trajectory at ESPRIT & ISI KEF, engineering philosophy, and values.',
        fr: 'Double cursus ESPRIT & ISI KEF, vision d\'ingénierie et valeurs fondamentales.',
      },
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      badge: 'ESPRIT · ISI KEF',
      accent: 'hover:border-cyan-500/40',
    },
    {
      href: '/projects',
      title: { en: 'Selected Projects', fr: 'Projets Réalisés' },
      description: {
        en: '5 production-grade architectures with live demos, videos, and full case studies.',
        fr: '5 architectures de production avec démos en direct, vidéos et études de cas.',
      },
      icon: <FolderGit2 className="w-5 h-5 text-indigo-400" />,
      badge: `${projects.length} Architectures`,
      accent: 'hover:border-indigo-500/40',
    },
    {
      href: '/skills',
      title: { en: 'Skills & Interactive Graph', fr: 'Matrice des Compétences' },
      description: {
        en: 'Explore skills by category and map them directly to projects that proved them.',
        fr: 'Explorez mes compétences et reliez-les aux projets qui en apportent la preuve.',
      },
      icon: <Cpu className="w-5 h-5 text-violet-400" />,
      badge: 'Interactive Graph',
      accent: 'hover:border-violet-500/40',
    },
    {
      href: '/experience',
      title: { en: 'Experience Timeline', fr: 'Expériences & Parcours' },
      description: {
        en: 'Cloud engineering internships, graduation PFE, hackathons, and technical mentoring.',
        fr: 'Stages en ingénierie cloud, projet PFE, hackathons et mentorat technique.',
      },
      icon: <Briefcase className="w-5 h-5 text-emerald-400" />,
      badge: '3+ Years',
      accent: 'hover:border-emerald-500/40',
    },
    {
      href: '/leadership',
      title: { en: 'AIESEC Leadership', fr: 'Leadership AIESEC' },
      description: {
        en: 'Vice President roles managing cross-border operations, finance, and 25+ leaders.',
        fr: 'Rôles de Vice-Présidente : gestion des opérations internationales et de la trésorerie.',
      },
      icon: <Users className="w-5 h-5 text-amber-400" />,
      badge: 'National VP',
      accent: 'hover:border-amber-500/40',
    },
    {
      href: '/achievements',
      title: { en: 'Wall of Proof', fr: 'Succès & Certifications' },
      description: {
        en: 'HashiCorp, AWS, Docker/K8s, and National Hackathon Laureate verification links.',
        fr: 'HashiCorp, AWS, Docker/K8s et prix du Hackathon National d\'Innovation.',
      },
      icon: <Award className="w-5 h-5 text-pink-400" />,
      badge: 'Verified ↗',
      accent: 'hover:border-pink-500/40',
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Animated Stats Row */}
      <Stats />

      {/* 3. Latest Achievement Banner / Strip */}
      {latestAchievement && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-violet-500/10 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold block">
                  {language === 'en' ? 'Latest Verified Milestone' : 'Dernière Distinction Validée'}
                </span>
                <span className="font-display font-bold text-sm sm:text-base text-[var(--text-primary)]">
                  {t(latestAchievement.title)} &middot; {latestAchievement.issuer} ({latestAchievement.year})
                </span>
              </div>
            </div>

            <Link
              href="/achievements"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-cyan-500 hover:text-cyan-400 transition-colors shrink-0"
            >
              <span>{language === 'en' ? 'View Wall of Proof' : 'Voir toutes les accréditations'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>
      )}

      {/* 4. Top 3 Featured Projects Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-cyan-500 font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold">
              <span>01 /</span>
              <span>{language === 'en' ? 'Featured Work' : 'Projets Phares'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--text-primary)] mt-1">
              {language === 'en' ? 'Top Engineering Architectures' : 'Architectures Logicielles Clés'}
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-500 dark:text-cyan-400 hover:underline"
          >
            <span>{language === 'en' ? 'View all projects & filter grid' : 'Voir tous les projets et filtres'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {topProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase">
                    {project.category}
                  </span>
                  {project.liveUrl && <UptimeBadge url={project.liveUrl} />}
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 line-clamp-3 leading-relaxed">
                    {t(project.pitch)}
                  </p>
                </div>

                {/* Impact Pill */}
                <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-emerald-400 font-mono">
                  {t(project.impact)}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] font-mono text-[var(--text-muted)] self-center">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>{language === 'en' ? 'Full Case Study' : 'Étude de cas'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--text-muted)] hover:text-white flex items-center gap-1"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. "Hire Me in 30 Seconds" Quick Executive Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-cyan-500/30 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left pitch (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs border border-cyan-400/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{language === 'en' ? 'Hire Me in 30 Seconds' : 'Recrutez-moi en 30 secondes'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight">
                {language === 'en'
                  ? 'Cloud & DevOps Engineer seeking Final-Year Internship (PFE 2027)'
                  : 'Élève-Ingénieure Cloud & DevOps en quête de Stage PFE (2027)'}
              </h2>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === 'en' ? 'Target Roles:' : 'Postes ciblés :'}</strong> Cloud / DevOps Engineer, SRE, Distributed Systems, Full-Stack SaaS.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === 'en' ? 'Academic Proof:' : 'Cursus :'}</strong> ESPRIT (Cloud & DevOps Engineering, 2027) + ISI KEF (Master Web Intelligent, 2026).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === 'en' ? 'Leadership Proof:' : 'Leadership :'}</strong> National VP at AIESEC in Tunisia overseeing cross-border operations and audits.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>{language === 'en' ? 'Languages:' : 'Langues :'}</strong> French (Bilingual / Native), English (Full Professional), Arabic (Native).
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Quick Download & Booking Buttons (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 bg-slate-950/60 p-6 rounded-2xl border border-white/10 backdrop-blur-md">
              <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                {language === 'en' ? 'Fast-Track Dossier' : 'Dossier Express'}
              </span>

              <a
                href="/cv/cv-ranim-abidi-devops.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:opacity-95 transition-opacity"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>{language === 'en' ? 'Download DevOps Resume (PDF)' : 'Télécharger CV DevOps (PDF)'}</span>
                </div>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profile.socials.bookingUrl || 'https://cal.com/ranim-abidi'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>{language === 'en' ? 'Schedule a 20-min Intro Call' : 'Réserver un appel de 20 min'}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:underline transition-colors text-center"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{language === 'en' ? 'Or send a direct message' : 'Ou envoyer un message direct'}</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Explore Every Page in the Hub (Cards Directory) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-10 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-cyan-500 font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold">
            <span>02 /</span>
            <span>{language === 'en' ? 'Hub Navigation' : 'Navigation du Hub'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--text-primary)]">
            {language === 'en' ? 'Explore Every Dimension of My Work' : 'Explorez Chaque Facette de Mon Travail'}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-2xl">
            {language === 'en'
              ? 'This is a multi-page living hub of proof. Every page holds detailed evidence, live URLs, and verified external credentials.'
              : 'Ce hub multi-pages documente l\'ensemble de mes réalisations avec des preuves concrètes et des liens vérifiés.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubNavigationCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className={`p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] ${card.accent} hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-muted)]">
                    {card.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                  {t(card.title)}
                </h3>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {t(card.description)}
                </p>
              </div>

              <div className="pt-4 mt-2 flex items-center text-xs font-semibold text-cyan-500 dark:text-cyan-400 group-hover:translate-x-1 transition-transform gap-1">
                <span>{language === 'en' ? 'Explore page' : 'Explorer la page'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
