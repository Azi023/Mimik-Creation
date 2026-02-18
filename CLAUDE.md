# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Mimik Creations — creative digital marketing agency website. Founded 2023, based in Sri Lanka, serving clients globally (Europe, UAE, Canada, USA). The actual app code lives in `/mimik-website/`.

## Directory Website 

/home/atheeque/workspace/Mimik_Creation/mimik-website

## Commands
All commands run from the `mimik-website/` directory:
```bash
npm run dev          # Dev server at localhost:8080 (NOT 5173 — configured in vite.config.ts)
npm run build        # Production build to /dist
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # ESLint (flat config, eslint.config.js)
npm run test         # Vitest — single run
npm run test:watch   # Vitest — watch mode
```

## Tech Stack
- React 18 + TypeScript + Vite 7 (SWC plugin)
- Tailwind CSS 3 with CSS custom properties (HSL format)
- shadcn/ui (Radix primitives, `@/components/ui/`)
- Framer Motion for animations
- React Router v6 (BrowserRouter)
- TanStack React Query (QueryClientProvider wraps app)
- Vitest + Testing Library + jsdom for tests

## Architecture

**Monorepo layout:** Root contains `CLAUDE.md` and `MIMIK_WEBSITE_DEV_PLAN_FINAL.md` (the dev plan). All source code is in `mimik-website/`.

**Path alias:** `@/` maps to `mimik-website/src/` (configured in tsconfig.json, vite.config.ts, and vitest.config.ts).

**App entry:** `src/main.tsx` → `src/App.tsx` wraps everything in QueryClientProvider + TooltipProvider + BrowserRouter.

**Routing:** Currently only `/` (Index page) and `*` (NotFound). About, CaseStudies, Contact pages are planned but not yet routed — add routes in `App.tsx` above the catch-all.

**Home page (Index):** Single page composed of 10 section components rendered sequentially in `src/pages/Index.tsx`: Navbar → HeroSection → ClientLogos → AboutSection → BentoProjects → WhyMimik → ServicesSection → CaseStudies → BookCall → SubscribeSection → Footer.

**Component organization:**
- `src/components/` — Page-level section components (Navbar, HeroSection, Footer, etc.)
- `src/components/ui/` — shadcn/ui primitives (do not edit directly; managed by shadcn CLI)
- `src/hooks/` — Custom hooks (use-mobile, use-toast)
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)
- `src/data/` — Planned for case studies, services, team data (not yet created)

**Styling system:** Tailwind + CSS custom properties defined in `src/index.css`. Colors use HSL values via `hsl(var(--variable))`. The `mimik` color namespace in tailwind.config.ts provides brand-specific colors. Two font families: `font-display` (Syne) for headings, `font-body` (Space Grotesk) for body text. Custom utility classes: `.text-gradient`, `.hero-gradient`, `.accent-gradient`, `.card-shadow`, `.elevated-shadow`, `.scrollbar-hide`.

**Testing:** Vitest with jsdom environment. Setup file at `src/test/setup.ts` (includes matchMedia polyfill). Test files use `src/**/*.{test,spec}.{ts,tsx}` pattern.

**TypeScript:** Strict mode is off — `noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false`, `noUnusedParameters: false`.

## Brand Palette
```
Primary Blue (hero/bg):      #0147D3
Deep Blue (accent/text):     #1D3FC1
Gold Yellow (primary accent): #FDD51E
Lime Yellow (subtle accent):  #DDFF00  (use sparingly)
Slate Navy (cards/secondary): #273a62
Light Gray (light bg):        #f3f4f8
White:                        #ffffff
```

## Key Behaviors
- This is a MARKETING AGENCY website — visual impact is paramount
- "Creative-first" philosophy: Impress → Create Interest → Then They Read
- Animations should feel premium and intentional, not flashy
- Mobile-first responsive design
- Service cards on homepage link to `/case-studies?service=[slug]`
- Keep the developer's existing design foundation — enhance, don't rebuild
- Use Mimik brand palette consistently across all components

## Content Reference
- 9 services: Social Media Marketing, Performance Marketing, Brand Identity & Visual Design, Website Development, SEO & GEO, Photography & Video, Event Management, Email Marketing, 3D Animation
- 5 case studies: Glo2Go Aesthetics (London), SLPL UAE, BFresh, Dearbody (Canada), SN
- Stats: 7 team members, 50+ clients, 100+ projects, 10 countries
- See `MIMIK_WEBSITE_DEV_PLAN_FINAL.md` at project root for full content details and sprint plan

## Deployment
- Spaceship web hosting (static files from `/dist`)
- SPA routing requires `.htaccess` with rewrite rules in `/dist` (see dev plan)
- Project was scaffolded with Lovable — `lovable-tagger` in devDependencies is a build-time dev tool, not a runtime dependency

## Git Workflow
- `main` = production, `dev` = active development
- Feature branches off `dev` (e.g., `feat/section-name`)
- Merge features → dev → main when ready to deploy

## Environment
- All commands must be run in this WSL2 Linux terminal
- Project root: ./mimik-website/
- Never use Windows paths or PowerShell commands

## Client Testimonials Section
The website should include a "What Our Clients Say" section on the homepage (between Why Mimik and Book a Call sections). Also display testimonials on service detail pages and the Our Work page.
Testimonial display format:

Quote text (2-3 sentences max)
Client name
Company name
Client role/title
Optional: client photo (circular avatar)
Optional: company logo

Testimonial component behavior:

Homepage: horizontal carousel (auto-scroll, pausable, with dots/arrows)
Service pages: 1-2 relevant testimonials inline near CTA
Mobile: stack vertically with swipe
Design: use Slate Navy (#273a62) background card with white text, or Light Gray (#f3f4f8) card with dark text
Quote mark icon in Gold Yellow (#FDD51E)

Testimonial data:
Testimonials are stored in the content data file (MIMIK_WEBSITE_CONTENT_DATA.md).
Look for ## CLIENT TESTIMONIALS section.
Entries marked [CHANGE_ME] are placeholders — the team will fill these with real client quotes.
Build the component to read from a data array so new testimonials can be added easily.