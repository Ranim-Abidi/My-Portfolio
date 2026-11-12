'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  Search,
  Layers,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface BlogPost {
  slug: string;
  title: { en: string; fr: string };
  excerpt: { en: string; fr: string };
  date: string;
  readTime: string;
  category: 'DevOps' | 'Full-Stack' | 'Leadership';
  tags: string[];
  takeaways: { en: string; fr: string }[];
  relatedSlug?: string;
}

const posts: BlogPost[] = [
  {
    slug: 'multi-tenant-rls-postgresql',
    title: {
      en: 'Architecting Zero-Downtime Multi-Tenancy with PostgreSQL Row-Level Security',
      fr: 'Architecture Multi-Tenant sans interruption grâce au Row-Level Security PostgreSQL',
    },
    excerpt: {
      en: 'Why separate schemas crumble at scale and how RLS combined with tenant context variables provided true data isolation for 50+ stores without database explosion.',
      fr: 'Pourquoi la séparation par schéma échoue à l’échelle et comment le RLS combiné aux variables de session a permis une isolation stricte pour 50+ boutiques.',
    },
    date: '2026-02-15',
    readTime: '6 min read',
    category: 'Full-Stack',
    tags: ['PostgreSQL', 'Multi-Tenancy', 'Row-Level Security', 'Next.js'],
    takeaways: [
      {
        en: 'Dynamic session variable `app.current_tenant_id` guarantees queries cannot bleed between tenants even on shared connection pools.',
        fr: 'La variable de session `app.current_tenant_id` empêche toute fuite de données entre tenants sur un pool partagé.',
      },
      {
        en: 'Bypassing RLS requires an explicit superuser switch, creating an immutable audit boundary.',
        fr: 'Contourner le RLS nécessite des privilèges superuser stricts, créant une barrière d’audit claire.',
      },
    ],
    relatedSlug: 'dejitalist-saas',
  },
  {
    slug: 'gitops-argocd-helm-production',
    title: {
      en: 'From Ad-Hoc Scripts to GitOps: Declarative Kubernetes on ArgoCD',
      fr: 'Des scripts ad-hoc au GitOps : Kubernetes déclaratif sur ArgoCD',
    },
    excerpt: {
      en: 'Lessons from designing a self-healing Kubernetes pipeline with GitHub Actions, Helm umbrellas, and automated rollback strategies.',
      fr: 'Retour d’expérience sur la mise en place d’un cluster Kubernetes auto-cicatrisant avec GitHub Actions, Helm et rollbacks automatisés.',
    },
    date: '2026-01-20',
    readTime: '8 min read',
    category: 'DevOps',
    tags: ['Kubernetes', 'ArgoCD', 'GitOps', 'Helm', 'CI/CD'],
    takeaways: [
      {
        en: 'Never let CI push directly to the cluster with kubectl credentials; let the in-cluster ArgoCD agent pull state.',
        fr: 'Ne laissez jamais le CI pousser avec kubectl; laissez l’agent ArgoCD interne au cluster synchroniser l’état.',
      },
      {
        en: 'Separating the application code repo from the infra/manifest repo eliminates circular trigger loops.',
        fr: 'Séparer le dépôt applicatif du dépôt de manifestes prévient les boucles de déclenchement infinies.',
      },
    ],
    relatedSlug: 'matchy-khedma-cloud',
  },
  {
    slug: 'devops-mindset-in-nonprofit-governance',
    title: {
      en: 'Applying SRE & DevOps Reliability Principles to Volunteer Team Operations',
      fr: 'Appliquer les principes SRE et DevOps à la gouvernance d’équipes bénévoles',
    },
    excerpt: {
      en: 'How blameless post-mortems, observable dashboards, and runbooks transformed international exchange workflows across 25+ members in AIESEC.',
      fr: 'Comment les post-mortems sans blâme, les tableaux de bord et les runbooks ont transformé les flux de travail à l’AIESEC.',
    },
    date: '2025-11-10',
    readTime: '5 min read',
    category: 'Leadership',
    tags: ['AIESEC', 'SRE', 'Team Governance', 'Runbooks', 'Process Automation'],
    takeaways: [
      {
        en: 'Clear handoffs and visible dashboards eliminate 80% of communication friction in distributed teams.',
        fr: 'Des passages de relais clairs et des dashboards visibles éliminent 80% des frictions de communication.',
      },
      {
        en: 'A culture of blameless retrospectives encourages rapid experimentation without fear of failure.',
        fr: 'Une culture de rétrospective sans blâme stimule l’expérimentation rapide.',
      },
    ],
    relatedSlug: 'dash-analytics-hub',
  },
];

export default function BlogPage() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === 'all' || post.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesQuery =
      post.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <BookOpen className="w-4 h-4" />
          <span>{language === 'fr' ? 'Notes Techniques & Retours d’Expérience' : 'Engineering Notes & Field Lessons'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4 font-[family-name:var(--font-space-grotesk)]">
          {language === 'fr' ? 'Apprendre par la pratique.' : 'Built, broken, and documented.'}
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
          {language === 'fr'
            ? 'Retours d’expérience approfondis sur l’architecture multi-tenant, les pipelines GitOps résilients et le leadership d’équipes techniques.'
            : 'Field notes on architectural decisions, failure post-mortems, and engineering practices applied across real-world cloud and full-stack systems.'}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
          {(['all', 'DevOps', 'Full-Stack', 'Leadership'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all capitalize whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--card-border)]'
              }`}
            >
              {cat === 'all' ? (language === 'fr' ? 'Tous les articles' : 'All Notes') : cat}
            </button>
          ))}
        </div>

        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'fr' ? 'Rechercher un sujet ou mot-clé...' : 'Search topics, tags...'}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--card-border)] text-xs text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-[var(--card-border)] bg-[var(--bg-secondary)] p-6 sm:p-8 hover:border-cyan-500/40 transition-all group"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] mb-3 font-mono">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-cyan-400 transition-colors mb-3">
              {post.title[language]}
            </h2>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-5">
              {post.excerpt[language]}
            </p>

            {/* Key Engineering Takeaways Box */}
            <div className="rounded-xl bg-[var(--bg-primary)] border border-[var(--card-border)] p-4 mb-5">
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-semibold block mb-2">
                {language === 'fr' ? '⚡ Point Clé d’Architecture :' : '⚡ Core Engineering Takeaway:'}
              </span>
              <ul className="space-y-1.5 text-xs text-[var(--text-secondary)]">
                {post.takeaways.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item[language]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags & Linked Case Study */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--card-border)]">
              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[var(--bg-primary)] text-[var(--text-muted)] border border-[var(--card-border)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {post.relatedSlug && (
                <Link
                  href={`/projects/${post.relatedSlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{language === 'fr' ? 'Voir l’étude de cas liée' : 'View related case study'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
