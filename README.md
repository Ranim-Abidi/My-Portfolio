# Ranim (Raneem) Abidi — Personal Engineering Portfolio

A modern, high-performance personal portfolio website for **Ranim Abidi**, a Cloud & DevOps Engineering student at **ESPRIT** Tunis (graduating 2027) and Master candidate in Intelligent Web Applications at **ISI KEF**.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Configured for static export and instantaneous deployment on **Vercel**.

---

## 🌟 Key Highlights & Design Decisions

- **Single Typed Source of Truth (`/data/portfolio.ts`)**: Every piece of text, metric, project, and experience is typed and localized (English & French). You can add a new project by adding a single object.
- **Bilingual Support (EN / FR)**: One-click header toggle switches between English and French with persistent state and automatic browser preference detection.
- **Dark / Light Theme Toggle**: Defaults to deep dark mode with custom teal-to-violet glowing gradients; light mode is clean, high-contrast, and readable.
- **Glassmorphic Sticky Header**: Features an active section spy (`IntersectionObserver`), mobile drawer menu, and quick CV action.
- **Showcase Projects Section**:
  - Filterable by domain: *All*, *Cloud & DevOps*, *Full-Stack*, *Applied AI / ML*, and *Data*.
  - Full-featured **Video Lightbox** supporting YouTube, Vimeo, Loom, and direct MP4 videos.
  - Deep-dive **Case Study Modal** detailing system architecture, key features, metrics, and engineering challenges.
  - Conditional **Live Demo** button (hides gracefully if a link is not provided).
- **Leadership & Academics**: Highlights dual-degree status (ESPRIT & ISI KEF) alongside executive leadership at **AIESEC Tunisia** (VP Volunteering Exchange, ex-VP Finance & Legals).
- **Lighthouse & A11y Optimized**:
  - Full keyboard navigation (focus rings, `Esc` listener for modals).
  - Native `prefers-reduced-motion` compliance.
  - Rich JSON-LD `Person` Schema, dynamic `robots.ts`, and `sitemap.ts`.
  - Zero browser console errors and zero runtime warnings.

---

## 📁 Project Structure

```text
├── app/
│   ├── favicon.ico            # Brand monogram favicon
│   ├── icon.svg               # SVG favicon vector
│   ├── globals.css            # Custom CSS variables, gradients & tokens
│   ├── layout.tsx             # Fonts, SEO metadata, JSON-LD Schema
│   ├── page.tsx               # Single-page assembly
│   ├── robots.ts              # Dynamic robots.txt
│   └── sitemap.ts             # Dynamic sitemap.xml
├── components/
│   ├── Navbar.tsx             # Glass header, active spy, theme & lang toggles
│   ├── Hero.tsx               # Hero headline, availability chip, portrait frame
│   ├── Stats.tsx              # Animated counter metrics
│   ├── About.tsx              # Bio narrative, motto & education cards
│   ├── Skills.tsx             # Grouped capability cards with level badges
│   ├── Projects.tsx           # Filterable projects, video & case study triggers
│   ├── ProjectModal.tsx       # Architecture case study modal
│   ├── VideoLightbox.tsx      # Video demonstration lightbox modal
│   ├── Experience.tsx         # Vertical leadership & internship timeline
│   ├── Certificates.tsx       # Verified credentials & hackathon awards
│   ├── Contact.tsx            # Contact info, copy-email & functional form
│   ├── Footer.tsx             # Brand motto, copyright, back-to-top button
│   └── Icons.tsx              # Clean SVG icons (GitHub, LinkedIn)
├── context/
│   ├── LanguageContext.tsx    # Internationalization context (EN/FR)
│   └── ThemeContext.tsx       # Theme provider (Dark/Light)
├── data/
│   └── portfolio.ts           # ⭐️ ALL CONTENT LIVES HERE (TypeScript typed)
├── public/
│   ├── portrait.jpg           # Professional headshot (placeholder provided)
│   ├── cv-ranim-abidi.pdf     # Resume PDF download
│   ├── og-image.jpg           # OpenGraph social share card
│   └── projects/              # Project cover images (WebP/SVG)
└── types/
    └── portfolio.ts           # Strict data contracts for all sections
```

---

## 🛠️ Getting Started (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Verification
```bash
npm run build
npm run start
```

---

## ✏️ How to Edit Content & Customize (`/data/portfolio.ts`)

All content is centralized in **[`/data/portfolio.ts`](file:///c:/Users/Raneem/OneDrive/Desktop/my%20portfolio/data/portfolio.ts)**.

### Adding a New Project
Simply append an object to the `projects` array:

```typescript
{
  id: 'my-new-project',
  slug: 'my-new-project',
  title: 'My Project Name',
  pitch: {
    en: 'One-line punchy value proposition in English.',
    fr: 'Proposition de valeur concise en français.',
  },
  category: 'cloud', // 'cloud' | 'fullstack' | 'aiml' | 'data'
  featured: true,    // set to true for large showcase card
  problem: {
    en: 'What bottleneck or problem existed?',
    fr: 'Quel était le problème ?',
  },
  solution: {
    en: 'How did you solve it architecturally?',
    fr: 'Comment l\'avez-vous résolu ?',
  },
  impact: {
    en: 'What was the quantified impact (latency, cost, scale)?',
    fr: 'Quel a été l\'impact mesurable ?',
  },
  tags: ['Docker', 'Terraform', 'Next.js', 'PostgreSQL'],
  cover: '/projects/my-project.webp',
  liveUrl: 'https://myproject.com', // Optional (hidden if omitted)
  videoUrl: 'https://youtube.com/watch?v=...', // Optional YouTube, Loom, Vimeo or MP4
  githubUrl: 'https://github.com/ranimabidi/...',
  caseStudy: {
    overview: { en: '...', fr: '...' },
    architectureNotes: { en: ['...'], fr: ['...'] },
    keyFeatures: { en: ['...'], fr: ['...'] },
    technologies: ['Terraform', 'Kubernetes'],
    metrics: { en: ['99.9% uptime'], fr: ['99.9% de disponibilité'] },
    challenges: { en: ['...'], fr: ['...'] },
  },
}
```

---

## 📋 Exact Assets to Provide / Replace

Search for `// TODO` in [`/data/portfolio.ts`](file:///c:/Users/Raneem/OneDrive/Desktop/my%20portfolio/data/portfolio.ts):

| Asset / Field | Location in Repo | Description |
| :--- | :--- | :--- |
| **Portrait Photo** | `/public/portrait.jpg` | High-res professional headshot (1:1 aspect ratio recommended). |
| **CV Document** | `/public/cv-ranim-abidi.pdf` | Your updated PDF resume. |
| **Email Address** | `portfolioData.profile.socials.email` | Set to your preferred contact email. |
| **LinkedIn URL** | `portfolioData.profile.socials.linkedin` | Your personal LinkedIn profile link. |
| **GitHub URL** | `portfolioData.profile.socials.github` | Your personal GitHub profile link. |
| **Project Covers** | `/public/projects/*.webp` | Screenshots or mockups for Dejitalist, DASH, Eleganza, GitOps, SmartCV. |
| **Live URLs** | `project.liveUrl` in each project | Production deployment links. |
| **Video Demos** | `project.videoUrl` in each project | Loom walkthrough, YouTube demo, or local MP4. |
| **Certificates** | `certificates[].url` | Credly or verification links. |

---

## 🚀 Deployment Guide (Vercel)

This repository is optimized for one-click deployment on **Vercel**:

### Option A: Via GitHub (Recommended)
1. Initialize git and commit:
   ```bash
   git add .
   git commit -m "feat: initial production portfolio"
   ```
2. Push the repository to your GitHub profile (`https://github.com/ranimabidi/portfolio`).
3. Go to [vercel.com](https://vercel.com) -> **Add New Project**.
4. Select your GitHub repository and click **Deploy**. Vercel will automatically detect Next.js and build it within seconds.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the CLI prompts to link and deploy.
