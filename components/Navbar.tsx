'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useUI } from '@/context/UIContext';
import { portfolioData } from '@/data/portfolio';
import {
  Sun,
  Moon,
  Globe,
  Menu,
  X,
  Search,
  Terminal,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { toggleCommandPalette, toggleTerminal, isTerminalOpen } = useUI();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: { en: 'Hub', fr: 'Accueil' } },
    { href: '/about', label: { en: 'About', fr: 'À propos' } },
    { href: '/projects', label: { en: 'Projects', fr: 'Projets' } },
    { href: '/skills', label: { en: 'Skills', fr: 'Compétences' } },
    { href: '/experience', label: { en: 'Experience', fr: 'Parcours' } },
    { href: '/leadership', label: { en: 'Leadership', fr: 'Leadership' } },
    { href: '/achievements', label: { en: 'Achievements', fr: 'Succès' } },
    { href: '/links', label: { en: 'Links', fr: 'Liens' } },
    { href: '/contact', label: { en: 'Contact', fr: 'Contact' } },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Skip to Content for Screen Readers & Keyboard Nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-[100] px-4 py-2 bg-cyan-500 text-white font-mono text-xs rounded-lg shadow-lg"
      >
        {language === 'en' ? 'Skip to main content' : 'Passer au contenu principal'}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-color)] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-500 flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                RA
              </div>
              <div className="hidden min-[400px]:block">
                <span className="font-display font-bold tracking-tight text-base sm:text-lg text-[var(--text-primary)] block">
                  {portfolioData.profile.name}
                </span>
                <span className="text-[11px] text-[var(--text-muted)] font-mono block -mt-0.5">
                  Cloud &middot; DevOps &middot; AI
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActiveLink(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors duration-200 relative ${
                      active
                        ? 'text-cyan-500 dark:text-cyan-400 font-semibold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {t(link.label)}
                    {active && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Tools: Search / Cmd+K, Terminal, Lang, Theme */}
            <div className="hidden sm:flex items-center gap-2">
              {/* Command Palette Trigger */}
              <button
                onClick={toggleCommandPalette}
                aria-label="Open command palette (Ctrl+K)"
                className="px-2.5 py-1.5 text-xs font-mono rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-cyan-500 transition-colors flex items-center gap-2"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden md:inline">{language === 'en' ? 'Search' : 'Recherche'}</span>
                <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] bg-black/10 dark:bg-white/10 rounded font-sans">
                  ⌘K
                </kbd>
              </button>

              {/* Terminal Mode Trigger */}
              <button
                onClick={toggleTerminal}
                aria-label="Toggle interactive CLI terminal mode"
                className={`p-2 rounded-lg border transition-colors flex items-center justify-center ${
                  isTerminalOpen
                    ? 'bg-cyan-500 text-white border-cyan-400'
                    : 'border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500'
                }`}
                title="Interactive CLI Terminal Mode (Ctrl+J)"
              >
                <Terminal className="w-4 h-4" />
              </button>

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
                className="px-2.5 py-1.5 text-xs font-mono font-semibold rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-cyan-500 transition-colors flex items-center gap-1.5"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-500" />
                <span>{language.toUpperCase()}</span>
              </button>

              {/* Dark / Light Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="ml-1 inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm hover:opacity-95 transition-opacity"
              >
                <span>Hire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                onClick={toggleCommandPalette}
                aria-label="Search"
                className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"
              >
                <Search className="w-4 h-4 text-cyan-400" />
              </button>
              <button
                onClick={toggleLanguage}
                aria-label="Toggle language"
                className="px-2 py-1 text-xs font-mono font-semibold rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"
              >
                {language.toUpperCase()}
              </button>
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)]"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-1.5 pb-3">
              {navLinks.map((link) => {
                const active = isActiveLink(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 rounded-lg text-xs font-medium ${
                      active
                        ? 'bg-cyan-500/15 text-cyan-400 font-semibold border border-cyan-500/30'
                        : 'text-[var(--text-secondary)] hover:text-cyan-400 hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {t(link.label)}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[var(--border-color)] flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  toggleTerminal();
                }}
                className="flex-1 py-2 px-3 text-xs font-mono font-semibold rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] flex items-center justify-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>CLI Mode</span>
              </button>
              <Link
                href="/contact"
                className="flex-1 text-center py-2 px-3 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
              >
                {language === 'en' ? 'Get in Touch' : 'Me Contacter'}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
