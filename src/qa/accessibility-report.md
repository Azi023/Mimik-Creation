# Accessibility Audit Report — Mimik Creations (Sprint 5)

Scope: src/components/**/*.tsx and src/pages/**/*.tsx
Audit date: [auto-generated]

## Summary
- Critical: 4
- Warning: 4
- Suggestion: 4
- Pass highlights: `lang` present on html, most images have alt, focus indicators retained

---

## CRITICAL

- File: src/components/Navbar.tsx:81-86
  Issue: Icon-only mobile menu toggle button missing accessible name and state.
  Impact: Screen reader users cannot identify control purpose or state.
  Fix: Add `aria-label={isOpen ? "Close menu" : "Open menu"}`, `aria-expanded={isOpen}`, and `aria-controls="mobile-menu"` to the button; add `id="mobile-menu"` to the mobile menu container.

- File: src/components/CaseStudies.tsx:78-85, 86-93
  Issue: Icon-only scroll buttons lack `aria-label`.
  Impact: Button purpose unclear for assistive tech.
  Fix: Add `aria-label="Scroll left"` on the left button and `aria-label="Scroll right"` on the right button.

- File: src/components/NewsletterSection.tsx:88-96
  Issue: Email input missing associated label.
  Impact: Screen readers do not announce purpose of the input; fails WCAG 3.3.2.
  Fix: Add `<label htmlFor="newsletter-email" className="sr-only">Email</label>` and set `id="newsletter-email"` on the input (or add `aria-label="Email"`).

- File: src/components/SubscribeSection.tsx:48-55
  Issue: Email input missing associated label.
  Impact: Screen readers do not announce purpose of the input; fails WCAG 3.3.2.
  Fix: Add a visually hidden label linked via `htmlFor` and matching `id` on the input (or an `aria-label`).

---

## WARNING

- File: src/pages/OurWork.tsx:167-185
  Issue: Icon-only external link control (overlay “visit site”) uses only `title="Visit site"`.
  Impact: `title` does not provide a reliable accessible name across AT.
  Fix: Add `aria-label="Visit site (opens in new tab)"` to the anchor.

- File: src/components/Footer.tsx:26-28 (data), 53-66 (render)
  Issue: Social links use `href="#"` placeholders.
  Impact: Keyboard users may be taken to top of page; screen readers announce as links without valid destination.
  Fix: Replace with real URLs or mark as disabled (e.g., `aria-disabled`, or render as `<button>` until live).

- File: src/components/LoadingSpinner.tsx:2-9
  Issue: Spinner lacks live region to communicate loading state.
  Impact: Screen reader users do not get notified of async loading.
  Fix: Add `role="status"` and `aria-live="polite"` to the container, and/or `aria-busy="true"` while loading.

- File: src/components/Footer.tsx:122-126
  Issue: Very low-contrast small copy uses `text-white/40` on dark background.
  Impact: Potentially fails 4.5:1 for body text depending on device/background.
  Fix: Increase contrast (e.g., `text-white/70`) or raise font-size/weight. Verify with a contrast checker.

---

## SUGGESTION

- Global: index.html (no skip link found)
  Issue: Missing “Skip to content” link.
  Impact: Keyboard users must tab through navigation on every page.
  Fix: Add a visually hidden link as first focusable element in `<body>` (e.g., `<a href="#main" class="sr-only focus:not-sr-only ...">Skip to content</a>`) and set `id="main"` on primary content wrapper of each page.

- File: src/components/Navbar.tsx:90-121
  Issue: Mobile menu does not expose relationships for disclosure pattern.
  Impact: AT cannot associate toggle with controlled region.
  Fix: In addition to `aria-controls`, consider `role="dialog"` or `role="menu"` with proper keyboard handling if treated as modal/menu.

- File: src/components/CaseStudies.tsx:98-105
  Issue: Horizontal scroll area hides scrollbar via `scrollbar-hide`.
  Impact: Some users rely on visible scrollbars as an affordance.
  Fix: Provide visible scrollbars on desktop or offer alternate pager controls (arrows already present — keep them prominently discoverable and labelled as above).

- Global: Icons used decoratively
  Issue: Many `lucide-react` icons are purely decorative.
  Impact: Unnecessary verbosity if announced.
  Fix: Ensure icons inside interactive elements have labels on the control; decorative icons inside text may use `aria-hidden="true"` when not conveying semantic meaning.

---

## PASS HIGHLIGHTS

- File: index.html:1 — `<html lang="en">` present.
- Images: All `<img>` instances include `alt` text (Navbar logo, Footer logo, CaseStudies cards, BentoProjects cards).
- Focus: No global removal of focus indicators detected (no `outline: none` / `focus:outline-none` patterns in src).
- Forms: Contact page uses proper `<Label>` with form controls; select and textarea are labelled.

---

## Notes
- Color contrast review sampled common text-on-background pairs; verify final tokens with a contrast checker across themes/states.
- No changes were made to component logic or styling in this audit; recommendations are for future implementation.

