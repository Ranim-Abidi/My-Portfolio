'use client';

import React, { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectItem } from '@/types/portfolio';
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  Terminal,
} from 'lucide-react';
import { Github } from '@/components/Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl my-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-3xl shadow-2xl overflow-hidden text-[var(--text-primary)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/80 sticky top-0 z-20 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase">
              {project.category}
            </span>
            <span className="text-xs text-[var(--text-muted)] font-mono hidden sm:inline">
              {language === 'en' ? 'Architecture Case Study' : 'Étude de cas d\'architecture'}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Main Title & Pitch */}
          <div className="space-y-3">
            <h2 id="case-study-title" className="text-2xl sm:text-4xl font-display font-extrabold text-[var(--text-primary)]">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {t(project.pitch)}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md hover:opacity-90 transition-opacity"
              >
                <span>{language === 'en' ? 'Live Demo' : 'Démo en direct'}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-cyan-500 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{language === 'en' ? 'Source Code' : 'Code source'}</span>
              </a>
            )}
          </div>

          {/* Problem -> Solution -> Impact Highlight Trio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1">
              <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider">
                {language === 'en' ? 'Problem' : 'Problème'}
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {t(project.problem)}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 space-y-1">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                {language === 'en' ? 'Solution' : 'Solution'}
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {t(project.solution)}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                {language === 'en' ? 'Impact' : 'Impact'}
              </span>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {t(project.impact)}
              </p>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h3 className="text-lg font-display font-bold flex items-center gap-2 text-[var(--text-primary)]">
              <Layers className="w-5 h-5 text-cyan-400" />
              {language === 'en' ? 'System Overview' : 'Aperçu du système'}
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {t(caseStudy.overview)}
            </p>
          </div>

          {/* Architecture Notes */}
          <div className="space-y-3">
            <h3 className="text-lg font-display font-bold flex items-center gap-2 text-[var(--text-primary)]">
              <Cpu className="w-5 h-5 text-indigo-400" />
              {language === 'en' ? 'Architecture & Infrastructure Design' : 'Architecture & Choix Techniques'}
            </h3>
            <ul className="space-y-2.5">
              {t(caseStudy.architectureNotes).map((note, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-lg font-display font-bold flex items-center gap-2 text-[var(--text-primary)]">
              <Terminal className="w-5 h-5 text-violet-400" />
              {language === 'en' ? 'Key Capabilities & Features' : 'Fonctionnalités Principales'}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {t(caseStudy.keyFeatures).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-xs sm:text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics & Results if available */}
          {caseStudy.metrics && (
            <div className="space-y-3">
              <h3 className="text-lg font-display font-bold flex items-center gap-2 text-[var(--text-primary)]">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
                {language === 'en' ? 'Verified Metrics' : 'Indicateurs Clés & Résultats'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {t(caseStudy.metrics).map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs sm:text-sm font-medium text-emerald-400 text-center">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges & Resolution */}
          <div className="space-y-3">
            <h3 className="text-lg font-display font-bold flex items-center gap-2 text-[var(--text-primary)]">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              {language === 'en' ? 'Engineering Challenges & Resolutions' : 'Défis Techniques & Solutions'}
            </h3>
            <ul className="space-y-2.5">
              {t(caseStudy.challenges).map((chal, idx) => (
                <li key={idx} className="p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs sm:text-sm text-[var(--text-secondary)]">
                  {chal}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-3 pt-2 border-t border-[var(--border-color)]">
            <span className="text-xs font-mono text-[var(--text-muted)] block">
              {language === 'en' ? 'Technologies Stack' : 'Stack Technologique'}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-secondary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
