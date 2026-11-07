'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useUI } from '@/context/UIContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { portfolioData } from '@/data/portfolio';
import {
  Search,
  X,
  FileCode,
  FolderGit2,
  Cpu,
  Award,
  ArrowRight,
  ExternalLink,
  Moon,
  Sun,
  Globe,
  Terminal,
  FileText,
} from 'lucide-react';

export default function CommandPalette() {
  const router = useRouter();
  const { isCommandPaletteOpen, closeCommandPalette, toggleTerminal } = useUI();
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  // Build searchable items index
  const items: Array<{
    id: string;
    type: 'page' | 'project' | 'skill' | 'achievement' | 'action';
    title: string;
    subtitle?: string;
    icon: React.ReactNode;
    action: () => void;
  }> = [
    // Pages
    {
      id: 'page-home',
      type: 'page',
      title: language === 'en' ? 'Home / Overview Hub' : 'Accueil / Hub Général',
      subtitle: '/',
      icon: <FileCode className="w-4 h-4 text-cyan-400" />,
      action: () => router.push('/'),
    },
    {
      id: 'page-about',
      type: 'page',
      title: language === 'en' ? 'About & Journey' : 'À propos & Parcours',
      subtitle: '/about',
      icon: <FileCode className="w-4 h-4 text-cyan-400" />,
      action: () => router.push('/about'),
    },
    {
      id: 'page-projects',
      type: 'page',
      title: language === 'en' ? 'Projects Showcase' : 'Tous les Projets',
      subtitle: '/projects',
      icon: <FolderGit2 className="w-4 h-4 text-indigo-400" />,
      action: () => router.push('/projects'),
    },
    {
      id: 'page-skills',
      type: 'page',
      title: language === 'en' ? 'Skills Matrix & Interactive Graph' : 'Matrice & Graphe des Compétences',
      subtitle: '/skills',
      icon: <Cpu className="w-4 h-4 text-violet-400" />,
      action: () => router.push('/skills'),
    },
    {
      id: 'page-experience',
      type: 'page',
      title: language === 'en' ? 'Experience & Career Timeline' : 'Expériences & Parcours Professionnel',
      subtitle: '/experience',
      icon: <FileCode className="w-4 h-4 text-emerald-400" />,
      action: () => router.push('/experience'),
    },
    {
      id: 'page-leadership',
      type: 'page',
      title: language === 'en' ? 'AIESEC Tunisia Executive Leadership' : 'Leadership Exécutif AIESEC Tunisie',
      subtitle: '/leadership',
      icon: <Award className="w-4 h-4 text-amber-400" />,
      action: () => router.push('/leadership'),
    },
    {
      id: 'page-achievements',
      type: 'page',
      title: language === 'en' ? 'Achievements & Wall of Proof' : 'Certifications & Succès Vérifiés',
      subtitle: '/achievements',
      icon: <Award className="w-4 h-4 text-amber-400" />,
      action: () => router.push('/achievements'),
    },
    {
      id: 'page-links',
      type: 'page',
      title: language === 'en' ? 'Links Directory & GitHub Live Feed' : 'Annuaire de Liens & Activité GitHub',
      subtitle: '/links',
      icon: <ExternalLink className="w-4 h-4 text-cyan-400" />,
      action: () => router.push('/links'),
    },
    {
      id: 'page-contact',
      type: 'page',
      title: language === 'en' ? 'Contact & Hire Me in 30 Seconds' : 'Me Contacter & Recrutement',
      subtitle: '/contact',
      icon: <FileCode className="w-4 h-4 text-pink-400" />,
      action: () => router.push('/contact'),
    },
    {
      id: 'page-blog',
      type: 'page',
      title: language === 'en' ? 'Engineering Notes & Field Lessons' : 'Notes Techniques & Retours d’Expérience',
      subtitle: '/blog',
      icon: <FileCode className="w-4 h-4 text-emerald-400" />,
      action: () => router.push('/blog'),
    },
    {
      id: 'page-secret',
      type: 'page',
      title: language === 'en' ? 'Classified Engineering Vault (Easter Egg)' : 'Coffre Caché (Easter Egg)',
      subtitle: '/secret',
      icon: <Terminal className="w-4 h-4 text-yellow-400" />,
      action: () => router.push('/secret'),
    },

    // Projects
    ...portfolioData.projects.map((p) => ({
      id: `proj-${p.slug}`,
      type: 'project' as const,
      title: p.title,
      subtitle: t(p.pitch),
      icon: <FolderGit2 className="w-4 h-4 text-indigo-400" />,
      action: () => router.push(`/projects/${p.slug}`),
    })),

    // Skills
    ...portfolioData.skillCategories.flatMap((cat) =>
      cat.skills.map((s) => ({
        id: `skill-${s.id}`,
        type: 'skill' as const,
        title: s.name,
        subtitle: `${s.level} · ${t(cat.title)}`,
        icon: <Cpu className="w-4 h-4 text-cyan-400" />,
        action: () => router.push(`/skills?focus=${s.id}`),
      }))
    ),

    // Actions
    {
      id: 'act-terminal',
      type: 'action',
      title: language === 'en' ? 'Open Interactive CLI Terminal' : 'Ouvrir le Terminal Interactif',
      subtitle: 'Command line interface',
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      action: () => {
        closeCommandPalette();
        toggleTerminal();
      },
    },
    {
      id: 'act-lang',
      type: 'action',
      title: language === 'en' ? 'Passer en Français' : 'Switch to English',
      subtitle: `Current: ${language.toUpperCase()}`,
      icon: <Globe className="w-4 h-4 text-amber-400" />,
      action: () => {
        toggleLanguage();
        closeCommandPalette();
      },
    },
    {
      id: 'act-theme',
      type: 'action',
      title: theme === 'dark' ? 'Switch to Light Mode' : 'Passer en Mode Sombre',
      subtitle: `Current: ${theme}`,
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      action: () => {
        toggleTheme();
        closeCommandPalette();
      },
    },
    {
      id: 'act-cv-devops',
      type: 'action',
      title: language === 'en' ? 'Download Cloud & DevOps CV' : 'Télécharger le CV Cloud & DevOps',
      subtitle: 'PDF format',
      icon: <FileText className="w-4 h-4 text-emerald-400" />,
      action: () => {
        window.open('/cv/cv-ranim-abidi-devops.pdf', '_blank');
        closeCommandPalette();
      },
    },
  ];

  // Filter items matching query
  const filtered = items.filter((item) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle?.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q)
    );
  }).slice(0, 8); // max 8 visible items

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        filtered[selectedIndex].action();
        closeCommandPalette();
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command search palette"
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-150"
      onClick={closeCommandPalette}
    >
      <div
        className="w-full max-w-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder={
              language === 'en'
                ? 'Type a command, page, skill, or project... (e.g. "Kubernetes", "DASH")'
                : 'Rechercher une page, un projet, une compétence... (ex: "Docker", "Eleganza")'
            }
            className="w-full bg-transparent text-sm sm:text-base text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
          />
          <button
            onClick={closeCommandPalette}
            className="p-1 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-[var(--text-muted)] font-mono">
              {language === 'en' ? 'No matching results found.' : 'Aucun résultat trouvé.'}
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.action();
                    closeCommandPalette();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between gap-3 text-xs sm:text-sm transition-colors ${
                    isSelected
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                      : 'text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium truncate">{item.title}</div>
                      {item.subtitle && (
                        <div className="text-[11px] text-[var(--text-muted)] truncate">
                          {item.subtitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-wider bg-black/10 dark:bg-white/10 text-[var(--text-muted)] shrink-0">
                    {item.type}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/80 flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span>Ranim Abidi Hub</span>
        </div>
      </div>
    </div>
  );
}
