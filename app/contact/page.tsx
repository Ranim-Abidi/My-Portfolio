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
  Calendar,
  ExternalLink,
  Download,
  Sparkles,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Github, Linkedin, Gitlab } from '@/components/Icons';

export default function ContactPage() {
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
    <div className="py-28 relative min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs border border-cyan-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Get in Touch / Recruitment' : 'Contact & Recrutement'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-[var(--text-primary)]">
            {language === 'en' ? 'Let\'s Discuss High-Impact Engineering' : 'Construisons des Systèmes à Fort Impact'}
          </h1>

          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {language === 'en'
              ? 'Currently evaluating opportunities for a Final-Year Engineering Internship (PFE 2027) in Cloud Architecture, DevOps, SRE, or Applied AI. Available worldwide for hybrid, on-site, or remote missions.'
              : 'Ouverte aux opportunités de Stage de Fin d\'Études (PFE 2027) en architecture Cloud, DevOps, SRE ou IA appliquée. Disponible pour mobilités internationales, hybrides ou télétravail.'}
          </p>
        </div>

        {/* 3 Fast-Track Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Email */}
          <div className="p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-3 flex flex-col justify-between shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                {language === 'en' ? 'Direct Email' : 'Email Direct'}
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                {language === 'en' ? 'Primary inbox for formal proposals & contracts.' : 'Boîte principale pour propositions formelles.'}
              </p>
              <div className="font-mono text-xs text-cyan-400 break-all select-all pt-1">
                {profile.socials.email}
              </div>
            </div>

            <button
              onClick={copyEmail}
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-mono bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? (language === 'en' ? 'Copied to Clipboard' : 'Copié') : (language === 'en' ? 'Copy Email Address' : 'Copier l\'adresse email')}</span>
            </button>
          </div>

          {/* Card 2: Cal.com / Calendly Video Meeting */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-[var(--card-bg)] to-violet-500/10 border border-indigo-500/30 space-y-3 flex flex-col justify-between shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                {language === 'en' ? 'Book a 20-min Intro Call' : 'Réserver un appel de 20 min'}
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                {language === 'en' ? 'Schedule a video meeting directly in my calendar.' : 'Choisissez un créneau dans mon agenda.'}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-indigo-300 font-mono pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Google Meet / Teams</span>
              </div>
            </div>

            <a
              href={profile.socials.bookingUrl || 'https://cal.com/ranim-abidi'}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md hover:opacity-95 transition-opacity"
            >
              <span>{language === 'en' ? 'Open Cal.com Scheduler ↗' : 'Ouvrir Cal.com ↗'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Location & Timezone */}
          <div className="p-6 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-3 flex flex-col justify-between shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-[var(--text-primary)]">
                {language === 'en' ? 'Location & Timezone' : 'Localisation & Fuseau'}
              </h3>
              <p className="text-xs text-[var(--text-muted)]">
                {language === 'en' ? 'Based in Tunis, Tunisia (CET / GMT+1).' : 'Basée à Tunis, Tunisie (CET / UTC+1).'}
              </p>
              <div className="text-xs text-emerald-400 font-mono pt-1">
                {language === 'en' ? 'Open to relocation · Remote ready' : 'Mobilité internationale · Télétravail'}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 px-2.5 rounded-xl border border-[var(--border-color)] text-xs text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 px-2.5 rounded-xl border border-[var(--border-color)] text-xs text-[var(--text-secondary)] hover:text-cyan-400 hover:border-cyan-500 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>

        </div>

        {/* Tailored CV Downloads Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>{language === 'en' ? 'Curriculum Vitae Downloads' : 'Téléchargement des CV'}</span>
            </div>
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">
              {language === 'en' ? 'Tailored Engineering Resumes' : 'CV Spécifiques par Spécialité'}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              {language === 'en'
                ? 'Download the version targeted to your specific engineering stack.'
                : 'Téléchargez la version correspondant à votre besoin en ingénierie.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {profile.tailoredCVs.map((cv) => (
              <a
                key={cv.id}
                href={cv.path}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-cyan-500/50 transition-all group flex flex-col justify-between space-y-3"
              >
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono text-cyan-400 block font-semibold uppercase">
                    {t(cv.role)}
                  </span>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                    {t(cv.description)}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-[var(--text-primary)] group-hover:text-cyan-400 pt-2 border-t border-[var(--border-color)]">
                  <span>{cv.filename}</span>
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Interactive Contact Form */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] shadow-xl relative max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-[var(--text-primary)]">
              {language === 'en' ? 'Send a Direct Message' : 'Envoyer un Message'}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--text-muted)]">
              {language === 'en'
                ? 'Fill out the form below. I typically respond within 24 hours.'
                : 'Remplissez le formulaire ci-dessous. Je réponds généralement sous 24 heures.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-mono font-medium text-[var(--text-secondary)]">
                  {language === 'en' ? 'Full Name *' : 'Nom complet *'}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={language === 'en' ? 'Jane Doe' : 'Jean Dupont'}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-mono font-medium text-[var(--text-secondary)]">
                  {language === 'en' ? 'Email Address *' : 'Adresse Email *'}
                </label>
                <input
                  id="email"
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
              <label htmlFor="subject" className="text-xs font-mono font-medium text-[var(--text-secondary)]">
                {language === 'en' ? 'Subject' : 'Objet'}
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder={language === 'en' ? 'PFE 2027 Internship / Technical Collaboration' : 'Offre de stage PFE 2027 / Collaboration'}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:border-cyan-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-mono font-medium text-[var(--text-secondary)]">
                {language === 'en' ? 'Message *' : 'Message *'}
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder={language === 'en' ? 'Describe the project, team mission, or opportunity...' : 'Décrivez votre projet ou mission...'}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:border-cyan-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            {submitStatus === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>
                  {language === 'en'
                    ? 'Thank you! Your message has been transmitted successfully. I will get back to you shortly.'
                    : 'Merci ! Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.'}
                </span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm font-medium">
                {language === 'en'
                  ? `An error occurred. Please send a direct email to ${profile.socials.email}`
                  : `Une erreur est survenue. Veuillez envoyer un email direct à ${profile.socials.email}`}
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
  );
}
