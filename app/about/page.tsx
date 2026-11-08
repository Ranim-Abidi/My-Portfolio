'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import {
  GraduationCap,
  Sparkles,
  Calendar,
  MapPin,
  CheckCircle2,
  BookOpen,
  Hammer,
  Brain,
  Globe,
  Compass,
  ArrowRight,
  ShieldCheck,
  Users,
  Target,
} from 'lucide-react';

const valueIcons: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
  Users: <Users className="w-5 h-5 text-indigo-400" />,
  Target: <Target className="w-5 h-5 text-emerald-400" />,
};

export default function AboutPage() {
  const { language, t } = useLanguage();
  const { profile, education } = portfolioData;

  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?rel=0`;
    }
    return null;
  };

  const introEmbedUrl = getEmbedUrl(profile.introVideoUrl);

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
            <Compass className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'About & Academic Trajectory' : 'À Propos & Cursus'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en'
              ? 'Engineering at the Convergence of Cloud, Code & Leadership'
              : 'À la Croisée du Cloud, du Code et du Leadership'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {t(profile.shortBio)}
          </p>
        </div>

        {/* The Narrative */}
        <section aria-labelledby="story-heading" className="space-y-6 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
          <h2 id="story-heading" className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]">
            {language === 'en' ? 'My Engineering Vision' : 'Ma Vision d\'Ingénierie'}
          </h2>
          <div className="space-y-5">
            {t(profile.fullStory).map((p, idx) => (
              <p key={idx} className="text-justify sm:text-left leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* Motto Callout Banner (Signature Card) */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-violet-500/10 border border-cyan-500/30 flex items-start gap-4 mt-12 sm:mt-16 shadow-lg shadow-cyan-500/5">
            <Sparkles className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <div>
              <p className="font-display font-bold text-lg sm:text-xl text-[var(--text-primary)]">
                &ldquo;{t(profile.motto)}&rdquo;
              </p>
              <p className="text-xs font-mono text-[var(--text-muted)] mt-1.5">
                {language === 'en' ? 'Guiding personal & engineering principle' : 'Principe directeur d\'ingénierie'}
              </p>
            </div>
          </div>
        </section>

        {/* Video Introduction / Walkthrough if available */}
        {introEmbedUrl && (
          <section aria-labelledby="intro-video-heading" className="space-y-3">
            <h2 id="intro-video-heading" className="text-xl font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{language === 'en' ? '60-Second Video Introduction' : 'Présentation Vidéo en 60 Secondes'}</span>
            </h2>
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-[var(--border-color)] bg-black shadow-xl">
              <iframe
                src={introEmbedUrl}
                title="Ranim Abidi Video Introduction"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* "Now" Block (What I am building & learning this month) */}
        <section aria-labelledby="now-heading" className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[var(--border-color)] pb-4">
            <div>
              <h2 id="now-heading" className="text-xl font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{language === 'en' ? 'Now / Current Focus' : 'En ce Moment'}</span>
              </h2>
              <p className="text-xs text-[var(--text-muted)]">
                {language === 'en' ? 'What I am building, learning, and reading this month' : 'Projets, apprentissages et lectures du moment'}
              </p>
            </div>
            <span className="text-[11px] font-mono text-cyan-400">
              Updated: {profile.now.updatedAt}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Learning */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <Brain className="w-4 h-4" />
                <span>{language === 'en' ? 'Deepening' : 'Apprentissage'}</span>
              </div>
              <ul className="space-y-2">
                {t(profile.now.learning).map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-cyan-400 shrink-0 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Building */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                <Hammer className="w-4 h-4" />
                <span>{language === 'en' ? 'Building' : 'Conception'}</span>
              </div>
              <ul className="space-y-2">
                {t(profile.now.building).map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-indigo-400 shrink-0 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reading */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-400 uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>{language === 'en' ? 'Reading' : 'Lectures'}</span>
              </div>
              <ul className="space-y-2">
                {t(profile.now.reading).map((item, idx) => (
                  <li key={idx} className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2">
                    <span className="text-violet-400 shrink-0 mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Academic Foundations (ESPRIT & ISI KEF) */}
        <section aria-labelledby="academic-heading" className="space-y-6">
          <div className="space-y-1">
            <h2 id="academic-heading" className="text-2xl font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <span>{language === 'en' ? 'Academic Foundations & Dual Degrees' : 'Formation Académique & Double Diplôme'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              {language === 'en'
                ? 'Concurrent engineering and specialized masters curriculum.'
                : 'Double cursus d\'excellence en école d\'ingénieurs et master universitaire.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {t(item.status)}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-[var(--text-primary)] mb-1">
                    {t(item.degree)}
                  </h3>

                  <p className="text-sm font-medium text-cyan-500 dark:text-cyan-400 mb-4">
                    {item.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-muted)] mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {t(item.highlights).map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Languages & Values */}
        <section aria-labelledby="languages-values-heading" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <h2 id="languages-values-heading" className="sr-only">Languages and Values</h2>
          {/* Languages */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
            <h3 className="text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span>{language === 'en' ? 'Language Proficiencies' : 'Maîtrise des Langues'}</span>
            </h3>

            <div className="space-y-3">
              {profile.languages.map((lang, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-between">
                  <span className="font-display font-bold text-sm text-[var(--text-primary)]">
                    {t(lang.name)}
                  </span>
                  <span className="text-xs font-mono text-cyan-400 font-medium">
                    {t(lang.proficiency)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
            <h3 className="text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span>{language === 'en' ? 'Core Engineering Principles' : 'Principes d\'Ingénierie'}</span>
            </h3>

            <div className="space-y-3">
              {profile.values.map((val, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] space-y-1">
                  <div className="flex items-center gap-2">
                    {valueIcons[val.icon] || <ShieldCheck className="w-4 h-4 text-cyan-400" />}
                    <h4 className="font-display font-bold text-xs sm:text-sm text-[var(--text-primary)]">
                      {t(val.title)}
                    </h4>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {t(val.description)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA to Projects & Contact */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-violet-500/10 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">
              {language === 'en' ? 'Ready to explore my verified architectures?' : 'Prêt à découvrir mes architectures logicielles ?'}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              {language === 'en' ? 'View live demos, videos, and technical deep-dives.' : 'Découvrez les démos en direct, vidéos et études de cas.'}
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md hover:opacity-95 transition-opacity shrink-0"
          >
            <span>{language === 'en' ? 'View Selected Work' : 'Découvrir les Projets'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
