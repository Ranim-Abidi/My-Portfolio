'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { externalLinksData } from '@/data/links';
import {
  ExternalLink,
  Share2,
  Calendar,
  Award,
  Globe,
  BookOpen,
  Mail,
  Copy,
  Check,
  Star,
  GitFork,
  Code2,
} from 'lucide-react';
import { Github, Linkedin, Gitlab } from '@/components/Icons';

const iconComponents: Record<string, React.ReactNode> = {
  Github: <Github className="w-5 h-5 text-white" />,
  Linkedin: <Linkedin className="w-5 h-5 text-cyan-400" />,
  Mail: <Mail className="w-5 h-5 text-indigo-400" />,
  Calendar: <Calendar className="w-5 h-5 text-amber-400" />,
  Award: <Award className="w-5 h-5 text-pink-400" />,
  Gitlab: <Gitlab className="w-5 h-5 text-orange-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-emerald-400" />,
  Globe: <Globe className="w-5 h-5 text-cyan-400" />,
};

interface GitHubRepoInfo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
}

export default function LinksPage() {
  const { language, t } = useLanguage();
  const [copiedLink, setCopiedLink] = useState(false);

  // Fallback repositories data
  const [repos, setRepos] = useState<GitHubRepoInfo[]>([
    {
      name: 'My-Portfolio',
      description: 'Living hub of proof & personal engineering portfolio. Next.js 15, TypeScript, Tailwind, Framer Motion.',
      stars: 1,
      forks: 0,
      language: 'TypeScript',
      url: 'https://github.com/Ranim-Abidi/My-Portfolio',
    },
    {
      name: 'cloudnative-gitops',
      description: 'Automated Kubernetes microservices delivery pipeline with ArgoCD, Helm, and Terraform.',
      stars: 3,
      forks: 1,
      language: 'HCL / Shell',
      url: 'https://github.com/Ranim-Abidi/cloudnative-gitops',
    },
    {
      name: 'eleganza-idss',
      description: 'FastAPI machine learning microservice for retail demand forecasting & basket recommendations.',
      stars: 2,
      forks: 0,
      language: 'Python',
      url: 'https://github.com/Ranim-Abidi/eleganza-idss',
    },
    {
      name: 'dash-analytics',
      description: 'International exchange operations analytics platform for AIESEC Tunisia.',
      stars: 2,
      forks: 1,
      language: 'JavaScript',
      url: 'https://github.com/Ranim-Abidi/dash-analytics',
    },
  ]);

  useEffect(() => {
    // Attempt client-side non-blocking fetch from public GitHub API
    fetch('https://api.github.com/users/Ranim-Abidi/repos?sort=updated&per_page=4')
      .then((res) => {
        if (!res.ok) throw new Error('Rate limit or offline');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const mapped = data.map((r: any) => ({
            name: r.name,
            description: r.description || 'Open source engineering repository.',
            stars: r.stargazers_count,
            forks: r.forks_count,
            language: r.language || 'Code',
            url: r.html_url,
          }));
          setRepos(mapped);
        }
      })
      .catch(() => {
        // graceful fallback to static repos
      });
  }, []);

  const copyHubLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="py-28 relative min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Profile Card Header */}
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-500 p-0.5 shadow-xl">
              <div className="w-full h-full rounded-[22px] bg-slate-950 flex items-center justify-center text-white font-display font-extrabold text-2xl">
                RA
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-emerald-500 border-2 border-slate-900" title="Active & Open to PFE 2027" />
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl font-display font-extrabold text-[var(--text-primary)]">
              Ranim Abidi
            </h1>
            <p className="text-xs sm:text-sm font-mono text-cyan-400">
              @Ranim-Abidi &middot; Cloud & DevOps Engineer
            </p>
            <p className="text-xs text-[var(--text-muted)] max-w-md mx-auto pt-1">
              {language === 'en'
                ? 'Engineering student at ESPRIT & ISI KEF. All official external profiles, repositories, and direct channels.'
                : 'Élève-ingénieure à ESPRIT & ISI KEF. Tous mes profils officiels, dépôts et canaux directs.'}
            </p>
          </div>

          <button
            onClick={copyHubLink}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-black/5 dark:bg-white/5 border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedLink ? (language === 'en' ? 'Link Copied!' : 'Lien copié !') : (language === 'en' ? 'Share Links Hub' : 'Partager la page')}</span>
          </button>
        </div>

        {/* Linktree-Style Directory */}
        <div className="space-y-3">
          {externalLinksData.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between gap-4 group ${
                link.primary
                  ? 'bg-[var(--card-bg)] border-cyan-500/30 hover:border-cyan-400 hover:scale-[1.01] shadow-md'
                  : 'bg-[var(--card-bg)] border-[var(--border-color)] hover:border-cyan-500/30 hover:scale-[1.01]'
              }`}
            >
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {iconComponents[link.icon] || <ExternalLink className="w-5 h-5 text-cyan-400" />}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-sm sm:text-base text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors">
                      {link.title}
                    </span>
                    {link.username && (
                      <span className="text-[11px] font-mono text-[var(--text-muted)] truncate hidden sm:inline">
                        {link.username}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] truncate mt-0.5">
                    {t(link.description)}
                  </p>
                </div>
              </div>

              <ExternalLink className="w-4 h-4 text-[var(--text-muted)] group-hover:text-cyan-400 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
        </div>

        {/* Live GitHub Repositories Feed */}
        <section aria-labelledby="github-feed-heading" className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3">
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-cyan-400" />
              <h2 id="github-feed-heading" className="text-base font-display font-bold text-[var(--text-primary)]">
                {language === 'en' ? 'Live GitHub Repositories' : 'Dépôts GitHub Récents'}
              </h2>
            </div>
            <a
              href="https://github.com/Ranim-Abidi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
            >
              <span>@Ranim-Abidi</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-cyan-500/40 transition-colors space-y-2 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400 group-hover:underline">
                      {repo.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 text-[var(--text-muted)]">
                      {repo.language}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--text-muted)] line-clamp-2 mt-1">
                    {repo.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-[10px] font-mono text-[var(--text-muted)] pt-2 border-t border-[var(--border-color)]">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3 h-3" />
                    <span>{repo.forks}</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
