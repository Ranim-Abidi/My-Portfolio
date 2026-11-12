'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { ProjectCategory, ProjectItem, ProjectStatus } from '@/types/portfolio';
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
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Rocket,
  User,
  Activity,
  FileText,
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

  const categories: Array<{ id: string; label: { en: string; fr: string } }> = [
    { id: 'all', label: { en: 'All Architectures', fr: 'Tous les Projets' } },
    { id: 'cloud', label: { en: 'Cloud & DevOps', fr: 'Cloud & DevOps' } },
    { id: 'fullstack', label: { en: 'Full-Stack Web', fr: 'Web Full-Stack' } },
    { id: 'aiml', label: { en: 'Applied AI & ML', fr: 'IA Appliquée' } },
    { id: 'data', label: { en: 'Data & Systems', fr: 'Données & Systèmes' } },
  ];

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: projects.length,
      cloud: 0,
      fullstack: 0,
      aiml: 0,
      data: 0,
    };

    projects.forEach((p) => {
      const cats = p.categories && p.categories.length > 0 ? p.categories : [p.category];
      cats.forEach((cat) => {
        if (counts[cat] !== undefined) {
          counts[cat] += 1;
        }
      });
    });

    return counts;
  }, [projects]);

  // Filter projects based on category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      const projectCats = project.categories && project.categories.length > 0
        ? project.categories
        : [project.category];

      const matchesCategory =
        activeCategory === 'all' || projectCats.includes(activeCategory as ProjectCategory);

      if (!matchesCategory) return false;

      // Search match
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();

      const titleMatch = project.title.toLowerCase().includes(q);
      const taglineMatch = (t(project.tagline) || t(project.pitch) || '').toLowerCase().includes(q);
      const descMatch = (t(project.description) || '').toLowerCase().includes(q);
      const roleMatch = (t(project.role) || '').toLowerCase().includes(q);
      const techList = project.techStack || project.tags || [];
      const techMatch = techList.some((tech) => tech.toLowerCase().includes(q));
      const catMatch = projectCats.some((c) => c.toLowerCase().includes(q));

      return titleMatch || taglineMatch || descMatch || roleMatch || techMatch || catMatch;
    });
  }, [projects, activeCategory, searchQuery, t]);

  // Separate featured from non-featured when in default "all" view without search query
  const isDefaultView = activeCategory === 'all' && !searchQuery.trim();
  const featuredProjects = useMemo(
    () => projects.filter((p) => p.featured),
    [projects]
  );
  const regularProjects = useMemo(
    () => projects.filter((p) => !p.featured),
    [projects]
  );

  // Status Badge Helper Component
  const renderStatusBadge = (status: ProjectStatus) => {
    switch (status) {
      case 'Live & Operational':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span>{language === 'en' ? 'Live & Operational' : 'En Ligne & Opérationnel'}</span>
          </span>
        );
      case 'Academic':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <GraduationCap className="w-3 h-3" aria-hidden="true" />
            <span>{language === 'en' ? 'Academic' : 'Académique'}</span>
          </span>
        );
      case 'Freelance':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Briefcase className="w-3 h-3" aria-hidden="true" />
            <span>Freelance</span>
          </span>
        );
      case 'Founder':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Rocket className="w-3 h-3" aria-hidden="true" />
            <span>{language === 'en' ? 'Founder Project' : 'Projet Fondateur'}</span>
          </span>
        );
      case 'Personal':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <User className="w-3 h-3" aria-hidden="true" />
            <span>{language === 'en' ? 'Personal' : 'Personnel'}</span>
          </span>
        );
      default:
        return null;
    }
  };

  // Helper to render tech stack with +N overflow
  const renderTechChips = (stack: string[], maxVisible = 4) => {
    const visible = stack.slice(0, maxVisible);
    const overflow = stack.length - maxVisible;

    return (
      <div className="flex flex-wrap items-center gap-1.5">
        {visible.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)]"
          >
            {tech}
          </span>
        ))}
        {overflow > 0 && (
          <span
            className="px-1.5 py-0.5 rounded-md text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium"
            title={stack.slice(maxVisible).join(', ')}
          >
            +{overflow}
          </span>
        )}
      </div>
    );
  };

  // Standard Project Card Component
  const renderProjectCard = (project: ProjectItem) => {
    const techList = project.techStack || project.tags || [];
    const hasLiveLink = Boolean(project.links?.live || project.liveUrl);
    const liveHref = project.links?.live || project.liveUrl;
    const hasRepoLink = Boolean(project.links?.repo || project.githubUrl);
    const repoHref = project.links?.repo || project.githubUrl;
    const caseStudyHref = project.links?.caseStudy || `/projects/${project.slug}`;

    return (
      <article
        key={project.id}
        tabIndex={0}
        aria-label={`${project.title} - ${t(project.tagline)}`}
        className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group shadow-sm"
      >
        <div className="space-y-4">
          {/* Top metadata row: Status badge + Categories + Period */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              {renderStatusBadge(project.status)}
              {project.status === 'Live & Operational' && liveHref && (
                <UptimeBadge url={liveHref} />
              )}
            </div>
            {project.period && (
              <span className="text-[11px] font-mono text-[var(--text-muted)]">
                {project.period}
              </span>
            )}
          </div>

          {/* Title and Role */}
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
              <Link
                href={caseStudyHref}
                className="focus-visible:outline-none focus-visible:underline"
              >
                {project.title}
              </Link>
            </h3>
            {project.role && (
              <p className="text-xs font-mono text-cyan-400 mt-1">
                {t(project.role)}
              </p>
            )}
          </div>

          {/* Tagline */}
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
            {t(project.tagline) || t(project.pitch)}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <ul className="space-y-2 py-3 border-y border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
              {t(project.highlights).map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-start gap-2">
                  <CheckCircle2
                    className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech Stack Chips with +N */}
          <div className="pt-1">
            {renderTechChips(techList, 4)}
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="pt-6 mt-6 border-t border-[var(--border-color)] flex items-center justify-between gap-3">
          <Link
            href={caseStudyHref}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            aria-label={`${language === 'en' ? 'Read case study for' : 'Lire l’étude de cas pour'} ${project.title}`}
          >
            <span>{language === 'en' ? 'Case Study' : 'Étude de cas'}</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>

          <div className="flex items-center gap-2">
            {hasRepoLink && repoHref && (
              <a
                href={repoHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${language === 'en' ? 'GitHub repository for' : 'Dépôt GitHub pour'} ${project.title}`}
                className="p-2 rounded-xl border border-[var(--border-color)] text-[var(--text-muted)] hover:text-cyan-400 hover:border-cyan-500/40 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
            )}

            {hasLiveLink && liveHref && (
              <a
                href={liveHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${language === 'en' ? 'Live deployment for' : 'Déploiement en direct pour'} ${project.title}`}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm hover:opacity-95 transition-opacity focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
              >
                <span>Live</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Section */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
            <FolderGit2 className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{language === 'en' ? 'Portfolio / Projects Hub' : 'Portfolio / Répertoire des Projets'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en' ? 'Engineered Systems & Proof of Work' : 'Architectures Logicielles & Réalisations'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'Explore production-ready cloud architectures, multi-tenant SaaS platforms, CI/CD and private-cloud infrastructure, and applied machine learning services.'
              : 'Explorez des architectures cloud de production, des plateformes SaaS multi-tenant, des infrastructures de cloud privé automatisées par CI/CD et des services d’apprentissage automatique appliqués.'}
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-sm">
          
          {/* Category Tabs with live counts */}
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Project Categories">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] ?? 0;

              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold shadow-sm'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{t(cat.label)}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-black/10 dark:bg-white/10 text-[var(--text-muted)]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[300px]">
            <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'en' ? 'Search by title, stack, role, category...' : 'Recherche par titre, techno, rôle...'}
              aria-label={language === 'en' ? 'Search projects' : 'Rechercher des projets'}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-cyan-500 focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Content Section: Featured + Regular or Filtered List */}
        {filteredProjects.length === 0 ? (
          /* Empty Search State */
          <div className="p-16 text-center space-y-3 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)]">
            <Layers className="w-10 h-10 text-[var(--text-muted)] mx-auto opacity-40" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg text-[var(--text-primary)]">
              {language === 'en' ? 'No projects match' : 'Aucun projet ne correspond'}
            </h3>
            <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto">
              {language === 'en'
                ? 'No projects match, try a technology or a category.'
                : 'Aucun projet ne correspond, essayez une technologie ou une catégorie.'}
            </p>
          </div>
        ) : isDefaultView ? (
          /* Default "All Architectures" View with 3 Featured at top and the rest below */
          <div className="space-y-16">
            
            {/* Section 1: Featured Architectures (Dejitalist, DASH, Matchy Khedma) */}
            <section aria-labelledby="featured-heading" className="space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                <h2 id="featured-heading" className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  {language === 'en' ? 'Featured Architectures & Flagship Systems' : 'Architectures Phares & Systèmes Principaux'}
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <article
                    key={project.id}
                    tabIndex={0}
                    aria-label={`${project.title} - ${t(project.tagline)}`}
                    className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-sm"
                  >
                    <div>
                      {/* Thumbnail Header Area */}
                      <div className="relative aspect-video w-full bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 flex items-center justify-center overflow-hidden border-b border-[var(--border-color)]">
                        <div className="text-center p-6 select-none">
                          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                            <Layers className="w-6 h-6" aria-hidden="true" />
                          </div>
                          <span className="font-display font-extrabold text-lg text-white block">
                            {project.title}
                          </span>
                          <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>

                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2 z-10">
                          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/90 text-white font-mono text-[10px] font-semibold flex items-center gap-1 shadow-sm">
                            <Sparkles className="w-3 h-3" aria-hidden="true" />
                            <span>Featured</span>
                          </span>
                          {renderStatusBadge(project.status)}
                        </div>

                        {/* Demo Button if available */}
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
                            <Play className="w-3 h-3 fill-slate-900" aria-hidden="true" />
                            <span>Demo</span>
                          </button>
                        )}
                      </div>

                      {/* Content Body */}
                      <div className="p-6 sm:p-7 space-y-4">
                        <div>
                          <h3 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                            <Link href={`/projects/${project.slug}`}>
                              {project.title}
                            </Link>
                          </h3>
                          {project.role && (
                            <p className="text-xs font-mono text-cyan-400 mt-1">
                              {t(project.role)}
                            </p>
                          )}
                          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                            {t(project.tagline) || t(project.pitch)}
                          </p>
                        </div>

                        {/* Highlights */}
                        {project.highlights && (
                          <ul className="space-y-2 py-3 border-y border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
                            {t(project.highlights).slice(0, 3).map((h, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Tech Stack Chips */}
                        <div className="pt-1">
                          {renderTechChips(project.techStack || project.tags || [], 4)}
                        </div>
                      </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="p-6 sm:p-7 pt-0 flex items-center justify-between gap-3">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-white transition-colors"
                        aria-label={`${language === 'en' ? 'Read case study for' : 'Lire l’étude de cas pour'} ${project.title}`}
                      >
                        <span>{language === 'en' ? 'Case Study' : 'Étude de cas'}</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>

                      <div className="flex items-center gap-2">
                        {(project.links?.repo || project.githubUrl) && (
                          <a
                            href={project.links?.repo || project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repo for ${project.title}`}
                            className="p-2 rounded-xl border border-[var(--border-color)] text-[var(--text-muted)] hover:text-cyan-400 transition-colors"
                          >
                            <Github className="w-4 h-4" aria-hidden="true" />
                          </a>
                        )}
                        {(project.links?.live || project.liveUrl) && (
                          <a
                            href={project.links?.live || project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live site for ${project.title}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm hover:opacity-95 transition-opacity"
                          >
                            <span>Live</span>
                            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Section 2: All Other Architectures in Regular Grid */}
            <section aria-labelledby="all-architectures-heading" className="space-y-6">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                <h2 id="all-architectures-heading" className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  {language === 'en' ? 'All Architectures & Applied Systems' : 'Tous les Systèmes & Réalisations'}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularProjects.map((project) => renderProjectCard(project))}
              </div>
            </section>

          </div>
        ) : (
          /* Filtered Results View */
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>
                {language === 'en'
                  ? `Showing ${filteredProjects.length} matching system${filteredProjects.length > 1 ? 's' : ''}`
                  : `Affichage de ${filteredProjects.length} système${filteredProjects.length > 1 ? 's' : ''}`}
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-cyan-400 hover:underline"
                >
                  {language === 'en' ? 'Clear search' : 'Effacer la recherche'}
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => renderProjectCard(project))}
            </div>
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
