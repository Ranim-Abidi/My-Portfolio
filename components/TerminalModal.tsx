'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUI } from '@/context/UIContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { portfolioData } from '@/data/portfolio';
import { X, Terminal as TerminalIcon, Maximize2, Minimize2 } from 'lucide-react';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export default function TerminalModal() {
  const router = useRouter();
  const { isTerminalOpen, closeTerminal } = useUI();
  const { language, toggleLanguage, t } = useLanguage();
  const { toggleTheme } = useTheme();

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'welcome',
      command: 'motd',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            Welcome to Ranim Abidi Interactive Cloud Terminal v2.4 (x86_64-cloudnative)
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-yellow-400 font-bold">help</span> to list available commands or <span className="text-yellow-400 font-bold">ls</span> to inspect system routes.
          </p>
        </div>
      ),
    },
  ]);

  const [isMaximized, setIsMaximized] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isTerminalOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isTerminalOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isTerminalOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    if (!raw) return;

    const parts = raw.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-yellow-400 font-semibold">Available Commands:</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">ls [type]</span> List items: `ls`, `ls projects`, `ls skills`, `ls routes`</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">open &lt;route&gt;</span> Navigate to route (e.g. `open projects`, `open dejitalist-saas`)</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">cat &lt;file&gt;</span> Read file content (e.g. `cat about.md`, `cat motto.txt`)</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">whoami</span> Print engineer identity and credentials</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">theme</span> Toggle Dark / Light visual theme</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">lang</span> Switch language between English and French</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">clear</span> Clear terminal buffer</p>
            <p><span className="text-cyan-300 font-mono w-28 inline-block">exit</span> Close terminal interface</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        closeTerminal();
        return;

      case 'theme':
        toggleTheme();
        output = <p className="text-emerald-400">Theme toggled successfully.</p>;
        break;

      case 'lang':
        toggleLanguage();
        output = <p className="text-emerald-400">Language switched to {language === 'en' ? 'French (FR)' : 'English (EN)'}.</p>;
        break;

      case 'whoami':
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-white font-bold">{portfolioData.profile.name} ({portfolioData.profile.phoneticName})</p>
            <p className="text-cyan-300">Roles: Cloud & DevOps · Full-Stack Web · Applied AI</p>
            <p className="text-slate-300">Education: ESPRIT (Cloud & DevOps) & ISI KEF (Master Web Intelligent)</p>
            <p className="text-slate-300">AIESEC: VP Volunteering Exchange (Present), ex-VP Finance & Legal</p>
            <p className="text-emerald-400">Availability: {t(portfolioData.profile.availabilityBadge)}</p>
          </div>
        );
        break;

      case 'cat':
        const file = args[0]?.toLowerCase();
        if (file === 'about.md' || file === 'about') {
          output = (
            <div className="space-y-1 text-xs text-slate-300">
              {t(portfolioData.profile.fullStory).map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          );
        } else if (file === 'motto.txt' || file === 'motto') {
          output = <p className="text-amber-300 font-semibold italic">&ldquo;{t(portfolioData.profile.motto)}&rdquo;</p>;
        } else {
          output = <p className="text-rose-400">cat: {args[0] || 'file'}: No such file. Try `cat about.md` or `cat motto.txt`</p>;
        }
        break;

      case 'ls':
        const sub = args[0]?.toLowerCase();
        if (sub === 'projects') {
          output = (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
              {portfolioData.projects.map((p) => (
                <p key={p.slug}>
                  <span className="text-cyan-300">{p.slug}</span>
                  <span className="text-slate-400"> &mdash; {p.title} ({p.category})</span>
                </p>
              ))}
            </div>
          );
        } else if (sub === 'skills') {
          output = (
            <div className="grid grid-cols-2 gap-1 text-xs">
              {portfolioData.skillCategories.flatMap((c) =>
                c.skills.map((s) => (
                  <p key={s.id}>
                    <span className="text-cyan-300">{s.name}</span>
                    <span className="text-slate-500"> [{s.level}]</span>
                  </p>
                ))
              )}
            </div>
          );
        } else {
          output = (
            <div className="space-y-1 text-xs">
              <p className="text-slate-400">Directories & Routes:</p>
              <p className="text-cyan-400 font-mono">
                /about  /projects  /skills  /experience  /leadership  /achievements  /links  /contact  /blog  /secret
              </p>
              <p className="text-slate-400 mt-2">Files:</p>
              <p className="text-emerald-400 font-mono">about.md  motto.txt  cv-devops.pdf</p>
              <p className="text-[11px] text-slate-500 mt-1">Hint: Type `ls projects` or `open &lt;route&gt;` to navigate.</p>
            </div>
          );
        }
        break;

      case 'open':
        const target = args[0]?.toLowerCase().replace(/^\//, '');
        if (!target) {
          output = <p className="text-rose-400">Usage: open &lt;route_or_project&gt; (e.g. `open projects`, `open dejitalist-saas`)</p>;
        } else {
          // Check if matches project slug
          const matchProj = portfolioData.projects.find((p) => p.slug === target);
          if (matchProj) {
            router.push(`/projects/${matchProj.slug}`);
            closeTerminal();
            return;
          }
          // Otherwise navigate to route
          const validRoutes = ['about', 'projects', 'skills', 'experience', 'leadership', 'achievements', 'links', 'contact', 'blog', 'secret'];
          if (validRoutes.includes(target) || target === 'home') {
            router.push(target === 'home' ? '/' : `/${target}`);
            closeTerminal();
            return;
          }
          output = <p className="text-rose-400">open: unknown destination '{target}'. Type `ls` for routes.</p>;
        }
        break;

      default:
        output = (
          <p className="text-rose-400">
            command not found: {cmd}. Type <span className="text-yellow-400 font-bold">help</span> to view all commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        command: raw,
        output,
      },
    ]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Interactive CLI Terminal"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={closeTerminal}
    >
      <div
        className={`relative w-full ${
          isMaximized ? 'h-[95vh] max-w-6xl' : 'h-[550px] max-w-3xl'
        } bg-[#0b0f19] border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono text-sm`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#070a13] border-b border-cyan-500/20 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={closeTerminal} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" onClick={() => setIsMaximized(!isMaximized)} />
            <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>ranim@cloud-hub:~ (bash)</span>
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 hover:text-white"
              aria-label="Maximize terminal"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={closeTerminal}
              className="p-1 hover:text-white"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div
          className="flex-1 p-4 overflow-y-auto space-y-3 text-slate-200"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              {item.command && (
                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <span className="text-emerald-400 font-bold">ranim@cloud-hub</span>
                  <span className="text-slate-500">:</span>
                  <span className="text-cyan-400 font-bold">~</span>
                  <span className="text-slate-400">$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
              )}
              <div>{item.output}</div>
            </div>
          ))}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-emerald-400 font-bold text-xs">ranim@cloud-hub</span>
            <span className="text-slate-500 text-xs">:</span>
            <span className="text-cyan-400 font-bold text-xs">~</span>
            <span className="text-slate-400 text-xs">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              className="flex-1 bg-transparent text-white focus:outline-none text-xs sm:text-sm font-mono caret-cyan-400"
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Statusbar footer */}
        <div className="px-4 py-1.5 bg-[#070a13] border-t border-cyan-500/20 flex items-center justify-between text-[11px] text-slate-500 select-none">
          <span>STATUS: ONLINE · READY</span>
          <span>PRESS ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
}
