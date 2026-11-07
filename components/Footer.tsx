'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { ArrowUp, Mail, Sparkles, Terminal } from 'lucide-react';
import { Github, Linkedin, Gitlab } from '@/components/Icons';
import { useUI } from '@/context/UIContext';

export default function Footer() {
  const { language, t } = useLanguage();
  const { toggleTerminal } = useUI();
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { href: '/about', label: { en: 'About', fr: 'À propos' } },
    { href: '/projects', label: { en: 'Projects', fr: 'Projets' } },
    { href: '/skills', label: { en: 'Skills Graph', fr: 'Compétences' } },
    { href: '/experience', label: { en: 'Experience', fr: 'Parcours' } },
    { href: '/leadership', label: { en: 'AIESEC Leadership', fr: 'Leadership AIESEC' } },
    { href: '/achievements', label: { en: 'Wall of Proof', fr: 'Succès & Certificats' } },
    { href: '/links', label: { en: 'Links & GitHub', fr: 'Liens & GitHub' } },
    { href: '/blog', label: { en: 'Blog / Notes', fr: 'Blog / Notes' } },
    { href: '/contact', label: { en: 'Contact & Hire', fr: 'Contact & Recrutement' } },
  ];

  return (
    <footer className="relative border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/90 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-500 flex items-center justify-center text-white font-display font-bold text-base shadow-sm">
                RA
              </div>
              <div>
                <span className="font-display font-bold text-lg text-[var(--text-primary)] block">
                  {profile.name}
                </span>
                <span className="text-xs font-mono text-cyan-400 block -mt-0.5">
                  Cloud & DevOps Engineering
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              {t(profile.shortBio)}
            </p>

            <p className="text-xs text-[var(--text-muted)] italic flex items-center gap-1.5 pt-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>&ldquo;{t(profile.motto)}&rdquo;</span>
            </p>
          </div>

          {/* Hub Navigation Links (5 cols) */}
          <div className="md:col-span-5">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-3">
              {language === 'en' ? 'Portfolio Hub Directory' : 'Répertoire du Hub'}
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--text-secondary)] hover:text-cyan-400 transition-colors py-1"
                >
                  {t(link.label)}
                </Link>
              ))}
            </div>
          </div>

          {/* Terminal & Tools (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--text-muted)] block mb-3">
              {language === 'en' ? 'Developer Tools' : 'Outils Développeur'}
            </span>
            <button
              onClick={toggleTerminal}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors w-full justify-center"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive CLI</span>
            </button>
            <div className="text-[11px] font-mono text-[var(--text-muted)] text-center">
              Press <kbd className="px-1 py-0.5 bg-black/10 dark:bg-white/10 rounded">⌘K</kbd> to search
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl text-[var(--text-muted)] hover:text-cyan-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl text-[var(--text-muted)] hover:text-cyan-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {profile.socials.gitlab && (
              <a
                href={profile.socials.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitLab"
                className="p-2 rounded-xl text-[var(--text-muted)] hover:text-cyan-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <Gitlab className="w-4 h-4" />
              </a>
            )}

            <a
              href={`mailto:${profile.socials.email}`}
              aria-label="Email"
              className="p-2 rounded-xl text-[var(--text-muted)] hover:text-cyan-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs font-mono text-[var(--text-muted)] text-center">
            &copy; {new Date().getFullYear()} {profile.name}. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors"
          >
            <span>{language === 'en' ? 'Back to top' : 'Haut de page'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
