# Link & Route Audit — Mimik Creations (Sprint 5)

Scope: Scan for `Link`, `NavLink`, `href`, `to` across src/components and src/pages.
Audit date: [auto-generated]

## Declared Routes (src/App.tsx)
- `/` → Index
- `/about` → About (lazy)
- `/services` → Services (lazy)
- `/our-work` → OurWork (lazy)
- `/our-work/:id` → CaseStudyDetail (lazy)
- `/contact` → Contact (lazy)
- `*` → NotFound (lazy)

## Findings

- src/components/Navbar.tsx
  - `to="/"`, `to="/about"`, `to="/services"`, `to="/our-work"`, `to="/contact"` — OK (all declared)
  - CTA `to="/contact"` — OK

- src/components/Footer.tsx
  - Brand `to="/"` — OK
  - Services deep links `to="/services#<slug>"` — OK (ids exist on Services sections for all slugs)
  - Quick links `to="/about"`, `to="/services"`, `to="/our-work"`, `to="/contact"` — OK
  - Social links `href="#"` (Instagram/LinkedIn/Facebook) — Placeholder links — ACTION: Replace with real URLs or mark disabled.

- src/components/HeroSection.tsx
  - `to="/our-work"`, `to="/contact"` — OK

- src/components/BentoProjects.tsx
  - `to="/our-work"` — OK

- src/components/ServicesSection.tsx
  - Card deep links `to="/services#<slug>"` — OK (ids exist on Services sections)

- src/components/FeaturedWork.tsx
  - Case study deep link `to="/our-work/${cs.id}"` — OK (handled by `/our-work/:id`)

- src/components/BookCall.tsx
  - `to="/our-work"` — OK

- src/pages/Index.tsx
  - Page contains above component links — All OK

- src/pages/About.tsx
  - `to="/contact"`, `to="/our-work"` — OK

- src/pages/Services.tsx
  - `to="/our-work"`, `to="/contact"`, `to="/our-work?filter=<slug>"` — OK (`/our-work` route exists; query param handled client-side)

- src/pages/OurWork.tsx
  - CTA `to="/contact"` — OK
  - Card deep link `to="/our-work/${cs.id}` — OK (dynamic detail route)
  - Overlay external site icon button `href={cs.websiteUrl}` — External — OK (has `target`+`rel`), but lacks `aria-label` (see a11y report)

- src/pages/CaseStudyDetail.tsx
  - `to="/our-work"` back link — OK
  - Next case study `to="/our-work/${nextCs.id}` — OK (dynamic route)
  - External site link `href={cs.websiteUrl}` — External — OK (`target`+`rel` present)

- src/pages/Contact.tsx
  - External links to Calendly and mailto — OK (`target`+`rel` present on external)

- src/pages/NotFound.tsx
  - `<a href="/">Return to Home</a>` — OK (declared route)

## Broken/Placeholder Links
- src/components/Footer.tsx:26-28 — `href="#"` for social links — Replace with real URLs.

## Anchor Targets Verified
- Services section ids: `social-media`, `performance-marketing`, `branding`, `website-development`, `seo-geo`, `photo-video`, `event-management`, `email-marketing`, `3d-animation` exist in src/pages/Services.tsx and match card/footer links.

## Recommendation Summary
- Replace `#` placeholders with real URLs or non-link elements until ready.
- Add `aria-label` to icon-only anchors (e.g., OurWork overlay “Visit site”).
- Keep external links using `target="_blank"` paired with `rel="noopener noreferrer"` (already in place).

