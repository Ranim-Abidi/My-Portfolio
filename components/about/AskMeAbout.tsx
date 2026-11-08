'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { askMeAboutData } from '@/data/about';
import { MessageSquare, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

export default function AskMeAbout() {
  const { language, t } = useLanguage();
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(askMeAboutData.topics[0]?.id || null);

  const selectedTopic = askMeAboutData.topics.find((topic) => topic.id === selectedTopicId);

  const handleToggle = (id: string) => {
    setSelectedTopicId((current) => (current === id ? null : id));
  };

  return (
    <section aria-labelledby="ask-me-heading" className="space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 font-mono text-xs border border-indigo-500/20">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{t(askMeAboutData.title)}</span>
        </div>
        <h2
          id="ask-me-heading"
          className="text-2xl sm:text-3xl font-display font-bold text-[var(--text-primary)]"
        >
          {t(askMeAboutData.title)}
        </h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)]">
          {t(askMeAboutData.subtitle)}
        </p>
      </div>

      {/* Clickable Topic Chips Grid */}
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Ask Me About Topics">
        {askMeAboutData.topics.map((topic) => {
          const isSelected = selectedTopicId === topic.id;
          return (
            <button
              key={topic.id}
              onClick={() => handleToggle(topic.id)}
              role="tab"
              aria-selected={isSelected}
              aria-expanded={isSelected}
              aria-controls={`topic-answer-${topic.id}`}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-left flex items-center gap-2 border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                isSelected
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white border-transparent shadow-md shadow-cyan-500/20 font-semibold'
                  : 'bg-[var(--card-bg)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-cyan-500/40 hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
              }`}
            >
              <span>{t(topic.topic)}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isSelected ? 'rotate-180 text-white' : 'text-[var(--text-muted)] opacity-60'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Expanded Answer Card (Accordion) */}
      <AnimatePresence mode="wait">
        {selectedTopic && (
          <motion.div
            key={selectedTopic.id}
            id={`topic-answer-${selectedTopic.id}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 8, height: 'auto' }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="p-6 sm:p-7 rounded-2xl bg-[var(--card-bg)] border border-cyan-500/30 relative overflow-hidden shadow-lg shadow-cyan-500/5 space-y-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{t(selectedTopic.topic)}</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[var(--text-primary)] leading-relaxed">
              {t(selectedTopic.answer)}
            </p>

            {/* Matching Project or Dossier Link if available */}
            {selectedTopic.projectLink && (
              <div className="pt-2">
                <Link
                  href={selectedTopic.projectLink.href}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors group"
                >
                  <span>{t(selectedTopic.projectLink.label)}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
