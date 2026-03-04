# Mobile Responsiveness & Link Audit — Sprint 10
**Date:** 2026-03-04
**Branch:** sprint-10
**Viewports tested:** 375px (iPhone SE), 768px (iPad), 1024px, 1440px

---

## Summary

| Category | Total | Fixed | Deferred |
|----------|-------|-------|---------|
| Critical mobile | 2 | 2 | 0 |
| Important | 5 | 1 | 4 |
| Nice-to-have | 9 | 0 | 9 |
| Link/route issues | 3 | 3 | 0 |

---

## Critical — Fixed

### 1. BentoProjects auto-rows forced height on mobile
- **File:** `src/components/BentoProjects.tsx:74`
- **Issue:** `auto-rows-[220px]` forced every card to 220px on single-column mobile layout, distorting portrait images and truncating hover content.
- **Fix:** `auto-rows-auto md:auto-rows-[220px]` — mobile gets natural image height, desktop keeps the fixed grid.

### 2. BentoProjects misleading cursor on non-linked cards
- **File:** `src/components/BentoProjects.tsx:82`
- **Issue:** All project cards showed `cursor-pointer` regardless of whether they had an `href`, misleading users.
- **Fix:** Cursor now conditional: `project.href ? "cursor-pointer hover:ring-white/20 hover:shadow-2xl" : "cursor-default"`.

---

## Important — Fixed in this sprint

### 3. Contact form was a non-functional stub
- **File:** `src/pages/Contact.tsx`
- **Issue:** `handleSubmit` only called `setSubmitted(true)` — no data was ever sent.
- **Fix:** Full Web3Forms API integration with loading state, error handling, and email fallback. Requires access key at web3forms.com.

---

## Important — Deferred (no code changes)

### 4. InstagramReel fixed width on small screens
- **File:** `src/components/InstagramReel.tsx:142`
- **Detail:** `w-[320px]` leaves 55px for padding on a 375px screen. However, the reel cards sit inside a horizontal scroll container in `ReelsShowcase.tsx`, so overflow is intentional and doesn't cause page-level horizontal scroll. **No action needed** — the component is correctly scoped to its scroll container.

### 5. CaseStudies carousel card fixed width
- **File:** `src/components/CaseStudies.tsx` (carousel cards use `w-[350px]`)
- **Detail:** Same pattern as above — sits inside a `scrollbar-hide overflow-x-auto` container. Intentional horizontal scroll. **No action needed.**

### 6. Large decorative blobs without mobile override
- **File:** `src/components/HeroSection.tsx` (500–600px blob divs)
- **Detail:** Blobs use `w-[500px]`, `w-[600px]` with no `sm:` variant. The parent has `overflow-hidden`, containing the visual bleed. Monitor on very old devices. Low risk.

### 7. Hash-link navigation to service sections
- **File:** `src/components/Navbar.tsx` (Services dropdown)
- **Detail:** Links like `/#services` use browser anchor scrolling. Works on desktop; on mobile the browser may not always scroll correctly after navigation from another page. Low frequency path. Acceptable for now.

---

## Nice-to-Have — Deferred

- Hero section text could be slightly smaller on 375px (currently `text-5xl` → readable but dense)
- Services page mobile text overrides could be more aggressive
- `prefers-reduced-motion` guard on `HeroSection` blobs animation
- OurWork filter bar scroll could show a fade hint on mobile
- Footer social links touch target is 48px — at minimum spec, could be 52px
- CaseStudyDetail gallery grid uses `grid-cols-2 md:grid-cols-3` — col-2 on mobile means 50% width, acceptable but tight for portrait images
- AboutSection timeline could use a vertical line indicator on mobile
- Testimonials carousel arrows hidden on mobile (correct), but dot indicators could be larger
- WhyMimik cards gap could be tighter on 375px (`gap-6` → `gap-4`)

---

## Link & Route Audit

All internal routes verified against `src/App.tsx`:
| Route | Component | Status |
|-------|-----------|--------|
| `/` | Index | ✅ |
| `/about` | About | ✅ |
| `/our-work` | OurWork | ✅ |
| `/our-work/:slug` | CaseStudyDetail | ✅ |
| `/services/:slug` | Services | ✅ |
| `/contact` | Contact | ✅ |
| `*` | NotFound | ✅ |

All external links verified:
| URL | Usage | Security |
|-----|-------|---------|
| `https://www.instagram.com/mimik.creations/` | Footer, Contact | `noopener noreferrer` ✅ |
| `https://www.linkedin.com/company/mimik-creations/` | Footer, Contact | `noopener noreferrer` ✅ |
| `https://www.facebook.com/mimikcreations/` | Footer, Contact | `noopener noreferrer` ✅ |
| `https://calendly.com/mimik-creat/free-consultation` | BookCall, Contact | `noopener noreferrer` ✅ |
| `https://api.web3forms.com/submit` | Contact form | fetch POST only ✅ |

BentoProjects cards without href (now show `cursor-default`, no hover effects):
- Propehtic Ruqyah (Web Development)
- Keily (Packaging)
- Park Avenue (Social Media)
- Boring Ventures (Branding)
