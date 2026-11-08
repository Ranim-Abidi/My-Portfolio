'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useUI } from '@/context/UIContext';
import { useLanguage } from '@/context/LanguageContext';
import {
  Terminal as TerminalIcon,
  ShieldAlert,
  Sparkles,
  Zap,
  Coffee,
  CheckCircle2,
  Lock,
  Unlock,
  Home,
  RefreshCw,
  Award,
} from 'lucide-react';

export default function SecretPage() {
  const { openTerminal } = useUI();
  const { language } = useLanguage();
  const [unlocked, setUnlocked] = useState(false);
  const [terminalLog, setTerminalLog] = useState<string[]>([
    'INITIALIZING PROTOCOL...',
    'CHECKING USER INTENT: EXPLORER',
    'SECURITY LEVEL: BYPASS GRANTED',
    'WELCOME TO THE HIDDEN HUB VAULT.',
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUnlocked(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let response = `bash: command not found: ${cmd}. Try: help, coffee, hire, deploy, motto`;

    if (cmd === 'help') {
      response = 'Available secret commands: coffee, hire, deploy, motto, matrix, whoami, clear';
    } else if (cmd === 'coffee') {
      response = '☕ Brewing artisanal espresso... Caffeine level optimal. Ready to debug distributed locks.';
    } else if (cmd === 'hire' || cmd === 'hire-ranim') {
      response = '🎉 EXCELLENT DECISION! Emailing abidiranim237@gmail.com directly with an offer letter.';
    } else if (cmd === 'deploy' || cmd === 'deploy --prod') {
      response = '🚀 0-DOWNTIME CANARY DEPLOYMENT SUCCESSFUL. Traffic routed: 100% to v2.0.0. Latency p99: 12ms.';
    } else if (cmd === 'motto') {
      response = '✨ "Bold enough to imagine. Skilled enough to build." — Ranim Abidi';
    } else if (cmd === 'matrix') {
      response = '🟢 Wake up, Neo... Follow the white rabbit through Kubernetes pods.';
    } else if (cmd === 'whoami') {
      response = 'root@ranim-hub: An inquisitive engineer who inspects source code and finds easter eggs.';
    } else if (cmd === 'clear') {
      setTerminalLog(['[Terminal Cleared]']);
      setInputVal('');
      return;
    }

    setTerminalLog((prev) => [...prev, `> ${inputVal}`, response]);
    setInputVal('');
  };

  const copySecretKey = () => {
    navigator.clipboard.writeText('EASTER-EGG-RANIM-2027-HIRED');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto font-mono">
      {/* Glitch / Vault Header */}
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/10 p-6 sm:p-10 mb-8 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
            {unlocked ? <Unlock className="w-6 h-6 animate-pulse" /> : <Lock className="w-6 h-6" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                EASTER EGG UNLOCKED
              </span>
              <span className="text-xs text-[var(--text-muted)]">PATH: /secret</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] mt-1 tracking-tight">
              Classified Engineering Vault
            </h1>
          </div>
        </div>

        <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
          You didn&apos;t just read the portfolio — you inspected the routes or tested the terminal.
          That curiosity is exactly what makes great engineering teams thrive.
        </p>

        {/* Secret badge token */}
        <div className="mt-6 flex flex-wrap items-center gap-4 pt-6 border-t border-emerald-500/20">
          <button
            onClick={copySecretKey}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30 text-xs font-mono transition-colors"
          >
            <Award className="w-4 h-4 text-emerald-400" />
            {copied ? 'Code copied to clipboard!' : 'Secret Recruiter Code: RANIM-2027'}
          </button>
          <span className="text-xs text-[var(--text-muted)] font-sans">
            Mention this code when contacting Ranim for +100 respect points.
          </span>
        </div>
      </div>

      {/* Mini Interactive Sandbox Terminal */}
      <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--bg-secondary)] overflow-hidden shadow-2xl mb-8">
        <div className="px-4 py-3 bg-[var(--bg-primary)] border-b border-[var(--card-border)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs text-[var(--text-muted)] font-mono">
              guest@vault: ~/sandbox
            </span>
          </div>
          <span className="text-xs text-cyan-400">interactive sandbox</span>
        </div>

        <div className="p-4 sm:p-6 bg-black/70 font-mono text-xs sm:text-sm text-emerald-400 min-h-[260px] max-h-[380px] overflow-y-auto space-y-2">
          {terminalLog.map((line, idx) => (
            <div
              key={idx}
              className={line.startsWith('>') ? 'text-cyan-300 font-bold' : 'text-emerald-400/90'}
            >
              {line}
            </div>
          ))}

          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
            <span className="text-emerald-500 font-bold">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'coffee', 'hire', 'motto'..."
              className="flex-1 bg-transparent border-none outline-none text-emerald-300 font-mono text-xs sm:text-sm placeholder:text-emerald-600/50"
              autoFocus
            />
          </form>
        </div>
      </div>

      {/* Navigation Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={openTerminal}
          className="p-5 rounded-xl border border-cyan-500/30 bg-cyan-950/10 hover:border-cyan-500/60 transition-all text-left group"
        >
          <div className="flex items-center gap-3 text-cyan-400 mb-2">
            <TerminalIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="font-bold text-sm">Launch Global CLI Terminal (Ctrl+J)</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] font-sans">
            Access the full site navigation, inspect file contents, and execute commands across any page.
          </p>
        </button>

        <Link
          href="/"
          className="p-5 rounded-xl border border-[var(--card-border)] bg-[var(--bg-secondary)] hover:border-indigo-500/40 transition-all text-left group"
        >
          <div className="flex items-center gap-3 text-indigo-400 mb-2">
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-bold text-sm">Return to Portfolio Hub</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] font-sans">
            Back to the main portfolio showcase, featured projects, and leadership dossiers.
          </p>
        </Link>
      </div>
    </div>
  );
}
