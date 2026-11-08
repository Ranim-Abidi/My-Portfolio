import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { projectsData } from '@/data/projects';
import UptimeBadge from '@/components/UptimeBadge';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Cpu,
  Layers,
  Terminal,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Calendar,
  Sparkles,
  Share2,
} from 'lucide-react';
import { Github } from '@/components/Icons';

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study & Architecture`,
    description: project.pitch.en,
    openGraph: {
      title: `${project.title} | Case Study by Ranim Abidi`,
      description: project.pitch.en,
      images: [project.cover || '/og-image.jpg'],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projectsData[projectIndex];
  const { caseStudy } = project;

  // Next / Previous navigation loop
  const prevProject =
    projectsData[(projectIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  // Helper embed URL
  const getEmbedUrl = (url?: string) => {
    if (!url) return null;
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?rel=0`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?rel=0`;
    }
    return null;
  };

  const embedUrl = getEmbedUrl(project.videoUrl);

  const creativeWorkJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    description: project.pitch.en,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cloud / Linux / Web',
    author: {
      '@type': 'Person',
      name: 'Ranim Abidi',
      url: 'https://ranimabidi.com',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
    },
  };

  return (
    <article className="py-28 relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkJsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Hub
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-cyan-400 transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">{project.title}</span>
        </nav>

        {/* Hero Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase">
              {project.category}
            </span>
            {project.liveUrl && <UptimeBadge url={project.liveUrl} />}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[var(--text-primary)]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
            {project.pitch.en}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-all"
              >
                <span>Live Demo ↗</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:border-cyan-500 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>
          </div>
        </div>

        {/* Problem -> Solution -> Impact Highlight Triptych */}
        <section aria-labelledby="triptych-heading" className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <h2 id="triptych-heading" className="sr-only">Problem, Solution and Impact</h2>
          <div className="p-5 sm:p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-2">
            <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider block">
              01 / The Problem
            </span>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.problem.en}
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 space-y-2">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider block">
              02 / The Solution
            </span>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.solution.en}
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
              03 / The Impact
            </span>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.impact.en}
            </p>
          </div>
        </section>

        {/* Architecture Diagram & Infrastructure Notes */}
        <section aria-labelledby="architecture-heading" className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>Architecture & Topography</span>
            </div>
            <h2 id="architecture-heading" className="text-2xl font-display font-bold text-[var(--text-primary)]">
              Infrastructure Blueprint & Data Flow
            </h2>
          </div>

          {/* ASCII Blueprint Box */}
          {caseStudy.architectureDiagram && (
            <div className="p-4 sm:p-6 rounded-2xl bg-[#090d16] border border-cyan-500/30 overflow-x-auto text-[11px] sm:text-xs font-mono text-cyan-300 leading-tight">
              <pre>{caseStudy.architectureDiagram.trim()}</pre>
            </div>
          )}

          {/* Architecture Bullets */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              Key Engineering Decisions
            </h3>
            <ul className="space-y-2.5">
              {caseStudy.architectureNotes.en.map((note, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Embedded Video Demo if Available */}
        {embedUrl && (
          <section aria-labelledby="video-demo-heading" className="space-y-3">
            <h2 id="video-demo-heading" className="text-xl font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Demonstration Walkthrough</span>
            </h2>
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden border border-[var(--border-color)] bg-black shadow-2xl">
              <iframe
                src={embedUrl}
                title={`Demo of ${project.title}`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {/* Key Features & Verified Metrics Grid */}
        <section aria-labelledby="features-metrics-heading" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <h2 id="features-metrics-heading" className="sr-only">Key Features and Metrics</h2>
          {/* Key Features */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
            <h3 className="text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              <span>Core System Capabilities</span>
            </h3>
            <ul className="space-y-2.5">
              {caseStudy.keyFeatures.en.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Metrics & Outcomes */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
            <h3 className="text-lg font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-400" />
              <span>Quantified Outcomes</span>
            </h3>
            <div className="space-y-3">
              {caseStudy.metrics ? (
                caseStudy.metrics.en.map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-xs sm:text-sm font-semibold text-emerald-400">
                    {m}
                  </div>
                ))
              ) : (
                <p className="text-xs text-[var(--text-muted)]">Verified in production benchmarks.</p>
              )}
            </div>
          </div>
        </section>

        {/* Challenges & Lessons Learned */}
        <section aria-labelledby="challenges-heading" className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-6">
          <div className="space-y-1">
            <h2 id="challenges-heading" className="text-xl font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              <span>Challenges Overcome & Engineering Lessons</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-semibold text-amber-500 uppercase tracking-wider">
                Bottlenecks Solved
              </h3>
              <ul className="space-y-2.5">
                {caseStudy.challenges.en.map((c, idx) => (
                  <li key={idx} className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-[var(--text-secondary)]">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                Lessons for Scale
              </h3>
              <ul className="space-y-2.5">
                {caseStudy.lessonsLearned ? (
                  caseStudy.lessonsLearned.en.map((l, idx) => (
                    <li key={idx} className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-[var(--text-secondary)]">
                      {l}
                    </li>
                  ))
                ) : (
                  <li className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-[var(--text-secondary)]">
                    Rigorous typing and automated CI/CD guarantee smooth maintainability.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* Technologies & Related Skills Graph Links */}
        <section aria-labelledby="skills-used-heading" className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
          <h2 id="skills-used-heading" className="text-base font-display font-bold text-[var(--text-primary)] flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Technologies & Skills Used in this Architecture</span>
          </h2>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <Link
                key={idx}
                href={`/skills?focus=${tag.toLowerCase()}`}
                className="px-3 py-1.5 rounded-xl text-xs font-mono bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                title={`View ${tag} in Skills Graph`}
              >
                {tag} ↗
              </Link>
            ))}
          </div>
        </section>

        {/* Next / Prev Project Navigation Loop */}
        <nav aria-label="Next or Previous Project" className="pt-8 border-t border-[var(--border-color)] grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-colors group text-left"
          >
            <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center gap-1">
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              <span>Previous Architecture</span>
            </span>
            <span className="font-display font-bold text-base text-[var(--text-primary)] block mt-1">
              {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-5 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-colors group text-right"
          >
            <span className="text-[11px] font-mono text-[var(--text-muted)] flex items-center justify-end gap-1">
              <span>Next Architecture</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="font-display font-bold text-base text-[var(--text-primary)] block mt-1">
              {nextProject.title}
            </span>
          </Link>
        </nav>

      </div>
    </article>
  );
}
