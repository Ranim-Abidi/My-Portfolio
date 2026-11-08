'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useUI } from '@/context/UIContext';
import { Terminal, ArrowLeft, Search, Compass } from 'lucide-react';

export default function NotFound() {
  const { language } = useLanguage();
  const { openCommandPalette } = useUI();

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] text-center space-y-6 shadow-2xl relative overflow-hidden">
        
        {/* Ambient Top Glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-rose-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-rose-400 uppercase tracking-wider font-bold">
            HTTP 404 &middot; Route Not Found
          </span>
          <h1 className="text-3xl font-display font-extrabold text-[var(--text-primary)]">
            {language === 'en' ? 'Lost in Cloud Topology?' : 'Chemin Introuvable'}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'The requested endpoint does not exist in the routing mesh. Try navigating back or using the command search.'
              : 'Ce point de terminaison n\'existe pas dans l\'infrastructure. Revenez à l\'accueil ou utilisez la recherche.'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'en' ? 'Return to Hub' : 'Retour à l\'accueil'}</span>
          </Link>

          <button
            onClick={openCommandPalette}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-[var(--border-color)] text-xs font-mono text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors"
          >
            <Search className="w-4 h-4 text-cyan-400" />
            <span>Search (⌘K)</span>
          </button>
        </div>

      </div>
    </div>
  );
}
