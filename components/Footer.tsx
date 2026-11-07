'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { ArrowUp, Mail, Sparkles } from 'lucide-react';
import { Github, Linkedin } from '@/components/Icons';

export default function Footer() {
  const { language, t } = useLanguage();
  const { profile } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Motto */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-display font-bold text-lg text-[var(--text-primary)]">
                {profile.name}
              </span>
              <span className="text-xs font-mono text-cyan-400">
                &middot; Cloud & DevOps
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] italic flex items-center justify-center md:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>&ldquo;{t(profile.motto)}&rdquo;</span>
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
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

              <a
                href={`mailto:${profile.socials.email}`}
                aria-label="Email"
                className="p-2 rounded-xl text-[var(--text-muted)] hover:text-cyan-400 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="h-4 w-px bg-[var(--border-color)]" />

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-[var(--border-color)] bg-[var(--bg-primary)] text-xs font-mono text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors"
            >
              <span>{language === 'en' ? 'Back to top' : 'Haut de page'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[var(--text-muted)] gap-2 text-center sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
          </p>
          <p>
            {language === 'en'
              ? 'Built with Next.js, TypeScript & Tailwind CSS &middot; Deployed on Vercel'
              : 'Conçu avec Next.js, TypeScript & Tailwind CSS &middot; Déployé sur Vercel'}
          </p>
        </div>
      </div>
    </footer>
  );
}
