import fs from 'fs';
import path from 'path';

const publicDir = path.resolve('public');
const projectsDir = path.resolve('public/projects');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(projectsDir)) fs.mkdirSync(projectsDir, { recursive: true });

// Function to generate an SVG with clean modern styling
function createCardSvg(title, subtitle, accent1, accent2) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090d16"/>
      <stop offset="50%" stop-color="#111827"/>
      <stop offset="100%" stop-color="#0b0f19"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${accent1}" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="${accent2}" stop-opacity="0.7"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="500" fill="url(#bg)"/>
  <rect width="800" height="500" fill="url(#grid)"/>
  <circle cx="400" cy="250" r="180" fill="url(#glow)" opacity="0.25" filter="blur(40px)"/>
  <rect x="150" y="100" width="500" height="300" rx="24" fill="#0f172a" stroke="rgba(255,255,255,0.12)" stroke-width="1.5"/>
  <text x="400" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="bold" fill="#ffffff" text-anchor="middle">${title}</text>
  <text x="400" y="280" font-family="monospace" font-size="16" fill="${accent1}" text-anchor="middle">${subtitle}</text>
</svg>`;
}

// 1. Portrait placeholder
const portraitSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600">
  <defs>
    <linearGradient id="portraitBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="50%" stop-color="#1e1b4b"/>
      <stop offset="100%" stop-color="#090d16"/>
    </linearGradient>
    <linearGradient id="aura" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="50%" stop-color="#6366f1"/>
      <stop offset="100%" stop-color="#a855f7"/>
    </linearGradient>
  </defs>
  <rect width="600" height="600" rx="40" fill="url(#portraitBg)"/>
  <circle cx="300" cy="300" r="220" fill="url(#aura)" opacity="0.3"/>
  <circle cx="300" cy="240" r="90" fill="#334155" stroke="url(#aura)" stroke-width="4"/>
  <path d="M 160 490 C 170 380, 430 380, 440 490" fill="#1e293b" stroke="url(#aura)" stroke-width="3"/>
  <text x="300" y="255" font-family="system-ui, sans-serif" font-size="54" font-weight="800" fill="#ffffff" text-anchor="middle">RA</text>
  <text x="300" y="540" font-family="system-ui, sans-serif" font-size="22" font-weight="600" fill="#38bdf8" text-anchor="middle">Ranim Abidi &middot; Cloud &amp; DevOps</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'portrait.jpg'), portraitSvg);
fs.writeFileSync(path.join(publicDir, 'og-image.jpg'), createCardSvg('Ranim Abidi', 'Cloud & DevOps Engineer | ESPRIT & ISI KEF', '#06b6d4', '#8b5cf6'));

// Project covers
const projects = [
  { file: 'dejitalist.webp', title: 'Dejitalist', sub: 'Multi-Tenant E-Commerce SaaS', c1: '#06b6d4', c2: '#3b82f6' },
  { file: 'dash.webp', title: 'DASH Analytics', sub: 'Exchange & Intelligence Hub', c1: '#6366f1', c2: '#8b5cf6' },
  { file: 'eleganza.webp', title: 'Eleganza IDSS', sub: 'FastAPI Machine Learning Service', c1: '#10b981', c2: '#06b6d4' },
  { file: 'gitops.webp', title: 'GitOps Pipeline', sub: 'ArgoCD & Kubernetes Orchestrator', c1: '#8b5cf6', c2: '#ec4899' },
  { file: 'smartcv.webp', title: 'SmartCV Screener', sub: 'Semantic Resume Intelligence', c1: '#f59e0b', c2: '#ef4444' },
];

for (const p of projects) {
  fs.writeFileSync(path.join(projectsDir, p.file), createCardSvg(p.title, p.sub, p.c1, p.c2));
}

// Minimal placeholder PDF for CV
const samplePdf = `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>endobj
xref
0 4
0000000000 65535 f
0000000009 00000 n
0000000052 00000 n
0000000101 00000 n
trailer<</Size 4/Root 1 0 R>>
startxref
178
%%EOF`;

fs.writeFileSync(path.join(publicDir, 'cv-ranim-abidi.pdf'), samplePdf);
console.log('Generated placeholder assets successfully!');
