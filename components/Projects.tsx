'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import { ProjectCategory, ProjectItem } from '@/types/portfolio';
import VideoLightbox from './VideoLightbox';
import ProjectModal from './ProjectModal';
import {
  ExternalLink,
  Play,
  FileCode2,
  Sparkles,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { Github } from '@/components/Icons';

export default function Projects() {
  const { language, t } = useLanguage();
  const { projects } = portfolioData;

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; url?: string; title: string }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const categories: { id: string; label: { en: string; fr: string } }[] = [
    { id: 'all', label: { en: 'All Projects', fr: 'Tous les projets' } },
    { id: 'cloud', label: { en: 'Cloud & DevOps', fr: 'Cloud & DevOps' } },
    { id: 'fullstack', label: { en: 'Full-Stack Web', fr: 'Web Full-Stack' } },
    { id: 'aiml', label: { en: 'Applied AI / ML', fr: 'IA & Machine Learning' } },
    { id: 'data', label: { en: 'Data & Systems', fr: 'Données & Systèmes' } },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm tracking-wider uppercase font-semibold">
            <span>03 /</span>
            <span>{language === 'en' ? 'Selected Engineering Work' : 'Projets & Réalisations'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)]">
            {language === 'en' ? 'Engineered for Performance, Scalability & Impact' : 'Conçus pour la Performance, la Scalabilité et l\'Impact'}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl">
            {language === 'en'
              ? 'From multi-tenant commerce and GitOps Kubernetes automation to predictive machine learning services and institutional analytics.'
              : 'Du SaaS e-commerce multi-tenant à l\'orchestration GitOps de Kubernetes, en passant par des microservices d\'inférence IA.'}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12" role="tablist">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md font-semibold'
                    : 'bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-cyan-500/40 hover:text-[var(--text-primary)]'
                }`}
              >
                {t(cat.label)}
              </button>
            );
          })}
        </div>

        {/* Featured Projects Showcase (Large Hero Cards) */}
        {featuredProjects.length > 0 && (
          <div className="space-y-12 mb-16">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden hover:border-cyan-500/40 transition-all duration-300 shadow-xl group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  
                  {/* Left Media Area: Thumbnail with Video Play Overlay (6 cols) */}
                  <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[280px] sm:min-h-[340px] bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 flex items-center justify-center overflow-hidden">
                    
                    {/* Visual Graphic Cover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none">
                      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Layers className="w-8 h-8" />
                      </div>
                      <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                        {project.title}
                      </span>
                      <span className="text-xs font-mono text-cyan-400 mt-1 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    {/* Video Play Button Overlay if videoUrl exists */}
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
                        className="relative z-10 inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 text-slate-900 font-semibold text-xs sm:text-sm shadow-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200"
                      >
                        <Play className="w-4 h-4 fill-slate-900 text-slate-900" />
                        <span>{language === 'en' ? 'Watch Demo' : 'Voir la Démo'}</span>
                      </button>
                    )}

                    {/* Featured Ribbon */}
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-cyan-500/90 text-white font-mono text-xs font-semibold flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{language === 'en' ? 'Featured' : 'À la une'}</span>
                    </div>
                  </div>

                  {/* Right Details Area (6 cols) */}
                  <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      
                      {/* Category & Title */}
                      <div>
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)] mt-1">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-2 leading-relaxed">
                          {t(project.pitch)}
                        </p>
                      </div>

                      {/* Problem -> Solution -> Impact Micro Summary */}
                      <div className="space-y-2 py-3 border-y border-[var(--border-color)]">
                        <div className="text-xs text-[var(--text-secondary)]">
                          <strong className="text-amber-500 font-mono">
                            {language === 'en' ? 'Problem: ' : 'Problème : '}
                          </strong>
                          {t(project.problem)}
                        </div>
                        <div className="text-xs text-[var(--text-secondary)]">
                          <strong className="text-cyan-400 font-mono">
                            {language === 'en' ? 'Solution: ' : 'Solution : '}
                          </strong>
                          {t(project.solution)}
                        </div>
                        <div className="text-xs text-[var(--text-secondary)]">
                          <strong className="text-emerald-400 font-mono">
                            {language === 'en' ? 'Impact: ' : 'Impact : '}
                          </strong>
                          {t(project.impact)}
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md hover:opacity-95 transition-opacity"
                        >
                          <span>{language === 'en' ? 'Live demo ↗' : 'Démo en direct ↗'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.videoUrl && (
                        <button
                          onClick={() =>
                            setVideoModal({
                              isOpen: true,
                              url: project.videoUrl,
                              title: project.title,
                            })
                          }
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                        >
                          <Play className="w-3.5 h-3.5" />
                          <span>{language === 'en' ? 'Watch video' : 'Vidéo'}</span>
                        </button>
                      )}

                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-indigo-500 hover:text-indigo-400 transition-colors"
                      >
                        <FileCode2 className="w-3.5 h-3.5" />
                        <span>{language === 'en' ? 'Case study' : 'Étude de cas'}</span>
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub source code for ${project.title}`}
                          className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        )}

        {/* Regular Projects Grid (2 cols on desktop) */}
        {regularProjects.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">
              {language === 'en' ? 'More Engineering Projects' : 'Autres Projets d\'Ingénierie'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {regularProjects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 sm:p-7 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-4">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Repository"
                            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live Demo Link"
                            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-cyan-400"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                        {t(project.pitch)}
                      </p>
                    </div>

                    {/* Micro problem / impact */}
                    <div className="space-y-1.5 py-2.5 border-y border-[var(--border-color)] text-xs text-[var(--text-secondary)]">
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
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Footer CTAs */}
                  <div className="pt-6 mt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                    <button
                      onClick={() => setSelectedCaseStudy(project)}
                      className="text-xs font-semibold text-cyan-500 dark:text-cyan-400 hover:underline flex items-center gap-1"
                    >
                      <span>{language === 'en' ? 'Case study & architecture' : 'Étude de cas & architecture'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    {project.videoUrl && (
                      <button
                        onClick={() =>
                          setVideoModal({
                            isOpen: true,
                            url: project.videoUrl,
                            title: project.title,
                          })
                        }
                        className="text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] flex items-center gap-1"
                      >
                        <Play className="w-3 h-3" />
                        <span>Demo</span>
                      </button>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        isOpen={!!selectedCaseStudy}
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Video Lightbox Modal */}
      <VideoLightbox
        isOpen={videoModal.isOpen}
        videoUrl={videoModal.url}
        title={videoModal.title}
        onClose={() => setVideoModal({ isOpen: false, url: '', title: '' })}
      />
    </section>
  );
}
