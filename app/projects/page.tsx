'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { ProjectCategory, ProjectItem } from '@/types/portfolio';
import VideoLightbox from '@/components/VideoLightbox';
import UptimeBadge from '@/components/UptimeBadge';
import {
  Search,
  ExternalLink,
  Play,
  ArrowRight,
  Sparkles,
  Layers,
  FolderGit2,
} from 'lucide-react';
import { Github } from '@/components/Icons';

export default function ProjectsPage() {
  const { language, t } = useLanguage();
  const { projects } = portfolioData;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; url?: string; title: string }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const categories = [
    { id: 'all', label: { en: 'All Architectures', fr: 'Tous les Projets' } },
    { id: 'cloud', label: { en: 'Cloud & DevOps', fr: 'Cloud & DevOps' } },
    { id: 'fullstack', label: { en: 'Full-Stack Web', fr: 'Web Full-Stack' } },
    { id: 'aiml', label: { en: 'Applied AI & ML', fr: 'IA Appliquée' } },
    { id: 'data', label: { en: 'Data & Systems', fr: 'Données & Systèmes' } },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchesTitle = project.title.toLowerCase().includes(q);
    const matchesPitch = t(project.pitch).toLowerCase().includes(q);
    const matchesTags = project.tags.some((tag) => tag.toLowerCase().includes(q));
    const matchesProblem = t(project.problem).toLowerCase().includes(q);

    return matchesTitle || matchesPitch || matchesTags || matchesProblem;
  });

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Portfolio / Projects Hub' : 'Portfolio / Répertoire des Projets'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en' ? 'Engineered Systems & Proof of Work' : 'Architectures Logicielles & Réalisations'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'Explore production-ready cloud architectures, multi-tenant SaaS platforms, GitOps Kubernetes pipelines, and applied machine learning microservices.'
              : 'Explorez des architectures cloud de production, des plateformes SaaS multi-tenant, des pipelines GitOps sous Kubernetes et des microservices d\'IA.'}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)]">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  {t(cat.label)}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[300px]">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'en' ? 'Search by tech, problem, or name...' : 'Recherche par mot-clé, techno...'}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 text-center space-y-3 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <Layers className="w-10 h-10 text-[var(--text-muted)] mx-auto opacity-40" />
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              {language === 'en' ? 'No matching projects found' : 'Aucun projet trouvé'}
            </h3>
            <p className="text-xs text-[var(--text-muted)]">
              {language === 'en' ? 'Try adjusting your search query or switching categories.' : 'Modifiez vos filtres ou termes de recherche.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Thumbnail / Header Area */}
                  <div className="relative aspect-video w-full bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 flex items-center justify-center overflow-hidden border-b border-[var(--border-color)]">
                    <div className="text-center p-6 select-none">
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                        <Layers className="w-6 h-6" />
                      </div>
                      <span className="font-display font-extrabold text-xl text-white block">
                        {project.title}
                      </span>
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Uptime and Featured Badges */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                      {project.featured && (
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/90 text-white font-mono text-[10px] font-semibold flex items-center gap-1 shadow-sm">
                          <Sparkles className="w-3 h-3" />
                          <span>Featured</span>
                        </span>
                      )}
                      {project.liveUrl && <UptimeBadge url={project.liveUrl} />}
                    </div>

                    {/* Watch Demo Video Overlay Button */}
                    {project.videoUrl && (
                      <button
                        onClick={() =>
                          setVideoModal({
                            isOpen: true,
                            url: project.videoUrl,
                            title: project.title,
                          })
                        }
                        aria-label={`Play demonstration video for ${project.title}`}
                        className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-slate-900 text-xs font-semibold shadow-lg hover:scale-105 transition-transform"
                      >
                        <Play className="w-3 h-3 fill-slate-900" />
                        <span>Demo</span>
                      </button>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h2 className="text-2xl font-display font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                        <Link href={`/projects/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h2>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                        {t(project.pitch)}
                      </p>
                    </div>

                    {/* Problem -> Solution -> Impact Micro Triptych */}
                    <div className="space-y-2 py-3 border-y border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
                      <div>
                        <strong className="text-amber-500 font-mono">
                          {language === 'en' ? 'Problem: ' : 'Problème : '}
                        </strong>
                        {t(project.problem)}
                      </div>
                      <div>
                        <strong className="text-cyan-400 font-mono">
                          {language === 'en' ? 'Solution: ' : 'Solution : '}
                        </strong>
                        {t(project.solution)}
                      </div>
                      <div>
                        <strong className="text-emerald-400 font-mono">
                          {language === 'en' ? 'Impact: ' : 'Impact : '}
                        </strong>
                        {t(project.impact)}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-white transition-colors"
                  >
                    <span>{language === 'en' ? 'Case Study & Architecture' : 'Étude de cas & Architecture'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub repo for ${project.title}`}
                        className="p-2 rounded-xl border border-[var(--border-color)] text-[var(--text-muted)] hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm hover:opacity-95 transition-opacity"
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Video Lightbox Modal */}
      <VideoLightbox
        isOpen={videoModal.isOpen}
        videoUrl={videoModal.url}
        title={videoModal.title}
        onClose={() => setVideoModal({ isOpen: false, url: '', title: '' })}
      />
    </div>
  );
}
