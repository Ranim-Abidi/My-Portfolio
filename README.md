# Ranim (Raneem) Abidi — Cloud & DevOps Living Hub of Proof

A production-grade, multi-page portfolio and living proof hub for **Ranim Abidi**, a Cloud & DevOps Engineering student at **ESPRIT** Tunis (graduating 2027) and Master candidate in Intelligent Web Applications at **ISI KEF**.

Engineered with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Statically exported with 22 optimized routes, per-page metadata, OpenGraph tags, JSON-LD schemas, and automated GitHub Actions CI.

---

## 🌟 Architecture & Features

1. **Multi-Page Living Proof Architecture**:
   - `/` — **Home Hub**: Hero with interactive portrait treatment, real-time availability badge, animated metrics, latest achievement strip, top 3 featured projects with live uptime badges, "Hire Me in 30 Seconds" quick evaluation block, and fast-track cards to all sections.
   - `/about` — Dual-degree trajectory (ESPRIT Tunis & ISI KEF), engineering philosophy, bilingual story, core values, and a live "Now" block (what Ranim is learning, building, and reading).
   - `/projects` — Filterable project catalogue (All, Cloud/DevOps, Full-Stack, AI/ML, Data) with instant client-side search, video demos, and live uptime verification badges.
   - `/projects/[slug]` — Deep-dive case studies with Problem → Solution → Impact framing, ASCII architecture blueprint diagrams, key engineering decisions, embedded demos, outcomes, and tech-to-skill linkages.
   - `/skills` — Interactive **Proof Graph**: selecting any skill (e.g. *Docker*, *Terraform*, *FastAPI*) instantly links and surfaces every delivered project, verified certification, and organizational role that validated it.
   - `/experience` — Filterable vertical engineering timeline across internships, graduation project (PFE), national hackathons, and technical mentorship.
   - `/leadership` — Executive dossier of Ranim's leadership in **AIESEC Tunisia** (VP Volunteering Exchange 2026–Present, ex-VP Finance & Legals 2025–2026), featuring team governance metrics, international exchange operations, and financial auditing scope.
   - `/achievements` — Wall of verified certifications, badges, and competition laureates with direct verification outbound links (Credly, Linux Foundation, Coursera, Devpost).
   - `/links` — Unified Linktree-style directory of all social and code repositories plus a live public GitHub activity feed with fallback.
   - `/blog` — Practical engineering field notes and architecture lessons (multi-tenancy RLS, GitOps pipelines, SRE principles in non-profit operations).
   - `/contact` — Fast-track contact hub with instant email copy, Cal.com 20-min booking link, validated contact form, and 3 tailored CV downloads (Cloud & DevOps / Full-Stack / Applied AI).
   - `/secret` — Classified on-brand developer vault easter egg with interactive sandbox terminal and recruiter access token.

2. **Command Palette (`Ctrl+K` / `Cmd+K`)**:
   - Accessible keyboard-driven search indexing all pages, projects, individual skills, certificates, and quick actions (switching theme, switching language, downloading CV).

3. **Terminal Mode (`Ctrl+J` / `Cmd+J` or `>_` Navbar Pill)**:
   - Built-in interactive CLI sandbox with Mac window chrome.
   - Commands: `help`, `ls [projects|skills|routes]`, `open <route|slug>`, `cat about.md`, `cat motto.txt`, `whoami`, `theme`, `lang`, `clear`, `exit`.

4. **Modular Typed Single Source of Truth (`/data/`)**:
   - All content lives in strongly-typed data modules under `/data/` (`projects.ts`, `skills.ts`, `experience.ts`, `leadership.ts`, `achievements.ts`, `links.ts`, `profile.ts`).
   - Adding or modifying one object automatically updates Home, Projects, the interactive Skills Graph, and Achievements across both English and French.

5. **Uptime Verification Badges**:
   - Non-blocking client-side health indicator displaying live operational status next to external deployments.

6. **Continuous Integration**:
   - Automated GitHub Actions workflow (`.github/workflows/ci.yml`) testing linting, TypeScript types, and static page generation on every push.

---

## 📁 Repository Structure

```text
├── .github/workflows/ci.yml  # GitHub Actions CI for build & type checking
├── app/
│   ├── about/                # Story, dual-degree timeline, "Now" block
│   ├── achievements/         # Wall of verified credentials & hackathon wins
│   ├── blog/                 # Architecture notes & engineering takeaways
│   ├── contact/              # Booking, tailored CVs, validated contact form
│   ├── experience/           # Filterable engineering timeline
│   ├── leadership/           # AIESEC executive dossiers & governance metrics
│   ├── links/                # Social directory & live GitHub feed
│   ├── projects/             # Searchable projects catalogue
│   │   └── [slug]/           # Dynamic project case study & architecture
│   ├── secret/               # Classified developer vault (Easter egg)
│   ├── skills/               # Interactive proof graph & skill matrix
│   ├── layout.tsx            # Global providers, navbar, footer, command palette, terminal
│   ├── not-found.tsx         # Custom 404 page
│   ├── page.tsx              # Central Home Hub
│   ├── robots.ts             # SEO robots crawler rules
│   └── sitemap.ts            # Dynamic 22-route XML sitemap generator
├── components/
│   ├── CommandPalette.tsx    # Global Ctrl+K searchable modal
│   ├── Footer.tsx            # Directory footer with back-to-top & CLI trigger
│   ├── Hero.tsx              # Hero presentation with portrait & tech chips
│   ├── Icons.tsx             # Custom SVG brand icons (GitHub, LinkedIn, GitLab)
│   ├── Navbar.tsx            # Glass navigation bar with active route highlighting
│   ├── Stats.tsx             # Animated metric counters
│   ├── TerminalModal.tsx     # Full interactive CLI interface
│   ├── UptimeBadge.tsx       # Live health verification indicator
│   └── VideoLightbox.tsx     # Accessible embedded video player modal
├── context/
│   ├── LanguageContext.tsx   # EN / FR localized state with localStorage persistence
│   ├── ThemeContext.tsx      # Dark / Light theme toggle
│   └── UIContext.tsx         # Command palette & terminal state management
├── data/
│   ├── achievements.ts       # Certifications and hackathon awards
│   ├── experience.ts         # Work, competition, and mentoring history
│   ├── leadership.ts         # AIESEC executive leadership records
│   ├── links.ts              # External profile links
│   ├── portfolio.ts          # Root aggregator and re-export
│   ├── profile.ts            # Bio, contact, education, values, tailored CVs
│   ├── projects.ts           # Project items, architecture specs, case studies
│   └── skills.ts             # Categorized skills with graph relation IDs
├── public/
│   ├── cv/                   # Tailored PDF resumes (DevOps, FullStack, AI)
│   ├── projects/             # Project cover art and architectural illustrations
│   └── portrait.jpg          # High-resolution professional photograph
└── types/
    └── portfolio.ts          # Comprehensive TypeScript type definitions
```

---

## 🛠️ Local Development & Build

### Prerequisites
- Node.js 18+ (Node.js 20 recommended)
- npm or pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/Ranim-Abidi/My-Portfolio.git
cd My-Portfolio

# Checkout feature branch
git checkout feat/multipage-hub

# Install dependencies
npm install

# Run development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Static Verification
```bash
# Compile and verify all 22 static pages
npm run build

# Preview production build locally
npm run start
```

---

## 📝 How to Update Your Content

All information is separated from the UI components. To update any detail, edit the appropriate file in `/data/`:

| What to Update | File to Edit | Notes |
| :--- | :--- | :--- |
| **Name, Bio, Availability, Socials** | [`data/profile.ts`](file:///c:/Users/Raneem/OneDrive/Desktop/my%20portfolio/data/profile.ts) | Update contact email, LinkedIn, or `availabilityBadge` |
| **Projects & Case Studies** | [`data/projects.ts`](file:///c:/Users/Raneem/OneDrive/Desktop/my%20portfolio/data/projects.ts) | Add live URLs, GitHub repos, problem/solution, ASCII diagrams |
| **Skills & Proof Connections** | [`data/skills.ts`](file:///c:/Users/Raneem/OneDrive/Desktop/my%20portfolio/data/skills.ts) | Connect skills to `projectSlugs` and `certificateIds` |
| **Certifications & Awards** | [`data/achievements.ts`](file:///c:/Users/Raneem/OneDrive/Desktop/my%20portfolio/data/achievements.ts) | Add credential verification URLs from Credly or Coursera |
| **Career Timeline** | [`data/experience.ts`](file:///c:/Users/Raneem/OneDrive/Desktop/my%20portfolio/data/experience.ts) | Add new internships or hackathons |
| **AIESEC Roles** | [`data/leadership.ts`](file:///c:/Users/Raneem/OneDrive/Desktop/my%20portfolio/data/leadership.ts) | Add new terms, responsibilities, or impact numbers |
| **Link Directory** | [`data/links.ts`](file:///c:/Users/Raneem/OneDrive/Desktop/my%20portfolio/data/links.ts) | Manage external social media and coding profiles |
| **CV Resumes** | `/public/cv/` | Place your customized PDF files matching filenames in `profile.ts` |

---

## 🚀 Deployment to Vercel

1. Push your changes to GitHub:
   ```bash
   git push origin feat/multipage-hub
   ```
2. Open [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import `Ranim-Abidi/My-Portfolio`.
4. Framework preset: **Next.js**.
5. Click **Deploy**. Vercel will build all 22 static pages automatically with zero configuration.

---

## 📄 License
This portfolio codebase is private property of **Ranim Abidi**. All rights reserved.
