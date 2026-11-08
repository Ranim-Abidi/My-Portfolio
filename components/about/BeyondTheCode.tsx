'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { beyondTheCodeData } from '@/data/about';
import { Music, BookOpen, Sprout, Palette, HeartHandshake, Compass } from 'lucide-react';

const iconMap: Record<string, { icon: React.ReactNode; colorClass: string; badgeClass: string; borderClass: string; bgClass: string }> = {
  guitar: {
    icon: (
      <div className="flex items-center -space-x-1">
        <Music className="w-5 h-5 text-amber-400" />
        <Palette className="w-4 h-4 text-orange-400" />
      </div>
    ),
    colorClass: 'text-amber-400',
    badgeClass: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    borderClass: 'hover:border-amber-500/40',
    bgClass: 'from-amber-500/5 via-orange-500/5 to-transparent',
  },
  book: {
    icon: <BookOpen className="w-5 h-5 text-rose-400" />,
    colorClass: 'text-rose-400',
    badgeClass: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    borderClass: 'hover:border-rose-500/40',
    bgClass: 'from-rose-500/5 via-pink-500/5 to-transparent',
  },
  roots: {
    icon: <Sprout className="w-5 h-5 text-emerald-400" />,
    colorClass: 'text-emerald-400',
    badgeClass: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    borderClass: 'hover:border-emerald-500/40',
    bgClass: 'from-emerald-500/5 via-teal-500/5 to-transparent',
  },
};

export default function BeyondTheCode() {
  const { language, t } = useLanguage();

  return (
    <section aria-labelledby="beyond-the-code-heading" className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs border border-amber-500/20">
          <Compass className="w-3.5 h-3.5" />
          <span>{t(beyondTheCodeData.title)}</span>
        </div>
        <h2
          id="beyond-the-code-heading"
          className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]"
        >
          {t(beyondTheCodeData.title)}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          {t(beyondTheCodeData.subtitle)}
        </p>
      </div>

      {/* 3 Warm Playful Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {beyondTheCodeData.items.map((item) => {
          const config = iconMap[item.icon] || iconMap.roots;
          return (
            <div
              key={item.id}
              className={`p-6 rounded-2xl bg-[var(--card-bg)] bg-gradient-to-br ${config.bgClass} border border-[var(--border-color)] ${config.borderClass} transition-all duration-300 hover:-translate-y-1 hover:rotate-1 hover:shadow-lg hover:shadow-black/5 flex flex-col justify-between group cursor-default`}
            >
              <div>
                {/* Card Top: Icon + Pill Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] group-hover:scale-105 transition-transform">
                    {config.icon}
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${config.badgeClass}`}
                  >
                    {t(item.tag)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-[var(--text-primary)] mb-2">
                  {t(item.title)}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t(item.description)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
