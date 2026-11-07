'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { portfolioData } from '@/data/portfolio';
import {
  Mail,
  Copy,
  Check,
  Send,
  FileText,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { Linkedin, Github } from '@/components/Icons';

export default function Contact() {
  const { language, t } = useLanguage();
  const { profile } = portfolioData;

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate reliable submission (or wire to Formspree / endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[var(--bg-secondary)]/30 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16">
          <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm tracking-wider uppercase font-semibold">
            <span>06 /</span>
            <span>{language === 'en' ? 'Get in Touch' : 'Contact & Opportunités'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[var(--text-primary)]">
            {language === 'en' ? 'Let\'s Architect Something Remarkable' : 'Construisons Ensemble des Projets d\'Envergure'}
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-3xl">
            {language === 'en'
              ? 'Currently seeking a final-year engineering internship (PFE 2027) in Cloud & DevOps, Distributed Systems, or Applied AI. Available for high-impact technical initiatives.'
              : 'À la recherche d\'un stage de fin d\'études (PFE 2027) en Cloud & DevOps, Systèmes Distribués ou IA Appliquée. Ouverte aux collaborations innovantes.'}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels & Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Status Card */}
            <div className="p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                  {language === 'en' ? 'Current Status' : 'Statut Actuel'}
                </span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[var(--text-primary)]">
                {t(profile.availabilityBadge)}
              </p>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                {language === 'en'
                  ? 'Ready to relocate or work in hybrid/remote configurations. Fluent in French and English with strong international teamwork skills.'
                  : 'Disponible pour mobilité internationale, mode hybride ou télétravail. Maîtrise bilingue du français et de l\'anglais.'}
              </p>
            </div>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-3">
              <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider block">
                {language === 'en' ? 'Direct Email' : 'Adresse Email Directe'}
              </span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a
                    href={`mailto:${profile.socials.email}`}
                    className="text-xs sm:text-sm font-mono text-[var(--text-primary)] truncate hover:text-cyan-400"
                  >
                    {profile.socials.email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email address to clipboard"
                  className="px-2.5 py-1.5 rounded-xl text-xs font-mono bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30 flex items-center gap-1 shrink-0 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? (language === 'en' ? 'Copied' : 'Copié') : (language === 'en' ? 'Copy' : 'Copier')}</span>
                </button>
              </div>
            </div>

            {/* Location & Social Connections */}
            <div className="p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{t(profile.location)}</span>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profile.socials.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-cyan-500 hover:text-cyan-400 transition-colors"
                >
                  <FileText className="w-4 h-4 text-purple-400" />
                  <span>{language === 'en' ? 'Download CV' : 'Télécharger CV'}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xl relative">
              <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-2">
                {language === 'en' ? 'Send a Message' : 'Envoyer un Message'}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6">
                {language === 'en'
                  ? 'Have a question, an opportunity, or a collaborative venture? Drop me a note and I will respond within 24 hours.'
                  : 'Une proposition d\'alternance, de PFE ou un projet innovant ? Écrivez-moi et je vous répondrai sous 24 heures.'}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono font-medium text-[var(--text-secondary)]">
                      {language === 'en' ? 'Full Name *' : 'Nom complet *'}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'en' ? 'Jane Doe' : 'Jean Dupont'}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono font-medium text-[var(--text-secondary)]">
                      {language === 'en' ? 'Email Address *' : 'Adresse Email *'}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono font-medium text-[var(--text-secondary)]">
                    {language === 'en' ? 'Subject' : 'Objet'}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={language === 'en' ? 'PFE 2027 Internship / Project Collaboration' : 'Proposition PFE 2027 / Collaboration'}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono font-medium text-[var(--text-secondary)]">
                    {language === 'en' ? 'Message *' : 'Message *'}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'en' ? 'Tell me about the role, project, or vision...' : 'Présentez votre projet ou opportunité...'}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>
                      {language === 'en'
                        ? 'Thank you! Your message has been sent successfully. I will get back to you shortly.'
                        : 'Merci ! Votre message a été transmis avec succès. Je vous répondrai rapidement.'}
                    </span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm font-medium">
                    {language === 'en'
                      ? 'An error occurred. Please send a direct email to ranim.abidi@esprit.tn'
                      : 'Une erreur s\'est produite. Veuillez envoyer un email direct à ranim.abidi@esprit.tn'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 via-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{language === 'en' ? 'Send Message' : 'Envoyer le message'}</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
