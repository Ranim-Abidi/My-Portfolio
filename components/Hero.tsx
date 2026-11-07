'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  FileText,
  Terminal,
  Cloud,
  Cpu,
  Server,
  Sparkles,
} from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export default function Hero() {
  const { language, t } = useLanguage();
  const { profile } = portfolioData;
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-violet-500/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on desktop) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs sm:text-sm font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t(profile.availabilityBadge)}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-sm font-mono uppercase tracking-wider text-[var(--text-muted)]">
                {language === 'en' ? 'Hello, I am' : 'Bonjour, je suis'}
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
                {profile.name}{' '}
                <span className="text-xl sm:text-2xl font-normal text-[var(--text-muted)] font-sans">
                  ({profile.phoneticName})
                </span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-gradient pt-1">
                {t(profile.headline)}
              </p>
            </div>

            {/* Role Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {t(profile.roles).map((role, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1 rounded-full text-xs font-mono font-medium border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] shadow-sm"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Value Proposition & Short Bio */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t(profile.shortBio)}
            </p>

            {/* CTAs and Resume */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-200"
              >
                <span>{language === 'en' ? 'View my work' : 'Découvrir mes projets'}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-cyan-500 hover:text-cyan-400 hover:scale-[1.02] transition-all duration-200"
              >
                <span>{language === 'en' ? 'Get in touch' : 'Me contacter'}</span>
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={profile.socials.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                title="Download Curriculum Vitae"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>{language === 'en' ? 'Download CV' : 'Télécharger CV'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Social Icons & Motto Teaser */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${profile.socials.email}`}
                aria-label="Send direct email"
                className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>

              <div className="hidden sm:block h-5 w-px bg-[var(--border-color)]" />

              <div className="hidden sm:flex items-center gap-1.5 text-xs text-[var(--text-muted)] italic">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>&ldquo;{t(profile.motto)}&rdquo;</span>
              </div>
            </div>

          </div>

          {/* Right Column: Portrait Frame with Ambient Aura & Floating Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-72 sm:w-80 md:w-96 aspect-square max-w-sm">
              
              {/* Radial gradient frame backdrops */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 opacity-70 blur-xl group-hover:opacity-100 transition duration-500 group-hover:blur-2xl" />

              {/* Main Card Wrapper */}
              <div className="relative w-full h-full rounded-3xl border border-white/20 bg-[var(--bg-secondary)] overflow-hidden shadow-2xl flex flex-col items-center justify-center p-3">
                
                {/* Portrait Image or Dynamic Silhouette Fallback */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 flex flex-col items-center justify-center text-center p-6">
                  {!imageError ? (
                    <Image
                      src={profile.portraitUrl}
                      alt={`Portrait of ${profile.name}`}
                      fill
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* High-fidelity procedural avatar placeholder */
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="relative">
                        <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-600 flex items-center justify-center text-white text-3xl font-display font-extrabold shadow-inner shadow-white/30">
                          RA
                        </div>
                        <div className="absolute -bottom-2 -right-2 p-1.5 rounded-lg bg-slate-900 border border-cyan-400 text-cyan-400">
                          <Cloud className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="font-display font-bold text-white text-lg">
                          {profile.name}
                        </p>
                        <p className="text-xs font-mono text-cyan-400">
                          ESPRIT &middot; ISI KEF
                        </p>
                        <p className="text-[11px] text-slate-400 max-w-[200px]">
                          {language === 'en' ? 'Add portrait.jpg in /public' : 'Ajoutez portrait.jpg dans /public'}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Subtle inner gradient shadow at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
                  
                  {/* Bottom Portrait Tag */}
                  <div className="absolute bottom-3 inset-x-3 px-3 py-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white flex items-center justify-between pointer-events-none">
                    <span className="text-xs font-medium font-mono text-cyan-300">
                      Cloud & DevOps
                    </span>
                    <span className="text-[10px] text-slate-300 font-mono">
                      Tunis &middot; 2027
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating Tech Badges around the frame */}
              {/* Badge 1: Top-Left (Kubernetes / Cloud) */}
              <div className="absolute -top-4 -left-4 px-3 py-1.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl flex items-center gap-2 animate-float-slow">
                <Cloud className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-semibold text-[var(--text-primary)]">
                  Kubernetes / K8s
                </span>
              </div>

              {/* Badge 2: Bottom-Right (Terraform / DevOps) */}
              <div className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl flex items-center gap-2 animate-float-slow" style={{ animationDelay: '1.5s' }}>
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono font-semibold text-[var(--text-primary)]">
                  Terraform &middot; CI/CD
                </span>
              </div>

              {/* Badge 3: Middle-Left (FastAPI / AI) */}
              <div className="hidden sm:flex absolute top-1/2 -left-6 -translate-y-1/2 px-2.5 py-1.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl items-center gap-2 animate-float-slow" style={{ animationDelay: '3s' }}>
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono font-medium text-[var(--text-secondary)]">
                  FastAPI &middot; AI
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
