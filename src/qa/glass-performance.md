# Glass Performance Check

## 1) Backdrop-filter count on homepage

Homepage route (`/`) backdrop-filter elements by component:

| Component | Count of rendered backdrop-filter surfaces |
|---|---:|
| Navbar (scrolled desktop state) | 1 |
| HeroSection | 3 |
| BentoProjects | 7 |
| WhyMimik | 4 |
| ServicesSection | 9 |
| TestimonialsSection | 3 |
| BookCall | 4 |
| NewsletterSection | 1 |
| BackToTop (when visible) | 1 |
| **Total (desktop path)** | **33** |

Notes:
- Mobile menu adds one more backdrop surface when opened (`Navbar` mobile panel), so mobile open-state total can reach **34**.
- Typical simultaneous viewport load is lower (roughly `9-11`), but the DOM can contain 33/34 backdrop-filter nodes on the homepage.

## 2) Double blur check (`filter: blur()` + `backdrop-filter: blur()` on same element)

Result: **PASS**
- No element was found with both `filter: blur(...)` and `backdrop-filter: blur(...)` on the same node.
- `filter: blur(...)` is used on background blobs (for depth), while `backdrop-blur-*` is on glass surfaces.

## 3) `will-change` usage on animated glass elements

Result: **NEEDS WORK**
- Found: `willChange: "transform"` on Hero badge conic-gradient span (`src/components/HeroSection.tsx:71`).
- Missing on most continuously animated visuals related to glass context (for example `.liquid-blob` motion layers and rotating decorative circles).

## 4) `@supports` fallback for no-backdrop browsers

Result: **PASS**
- Present in `src/index.css:205-214`:
  - disables backdrop blur
  - disables backdrop saturate variable

## 5) `prefers-reduced-motion` handling

Result: **NEEDS WORK**
- Present in `src/index.css:217-222` for `.liquid-blob` and `.glass-badge-glow::before`.
- Not fully comprehensive for all Framer Motion loops (for example animated blobs in `NewsletterSection` and rotating circles in `BookCall`), which are not gated by reduced-motion checks in component logic.

## 6) Build output and CSS size impact

Command run: `npm run build`

Build result:
- Success (`vite v7.3.1`)
- CSS bundle: `dist/assets/index-E1FnbXUU.css` = **80.21 kB** (gzip **13.42 kB**)
- Relevant warning (non-blocking): PostCSS reported `@import` ordering warning in `src/index.css`

Glass-related CSS footprint:
- Extracted backdrop/blur/shadow glass utility rules from built CSS are relatively small compared to full Tailwind output (roughly a few KB pre-gzip).
- Primary runtime concern is not bundle size, but compositor work from many concurrent backdrop surfaces.

## Performance verdict
- Bundle-size impact from glass-specific utilities: **Low**.
- Runtime compositing risk on lower-end devices: **Medium**, due to many potential backdrop-filter nodes and repeated blur usage in card grids.
