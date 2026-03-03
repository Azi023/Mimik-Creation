# Spacing Audit — Mimik Creations Homepage

**Audited:** 2026-03-03
**Scope:** All homepage section components rendered in `src/pages/Index.tsx`
**Tailwind container config:** `center: true`, `padding: 2rem`, `max-width 2xl: 1400px`

---

## Global Notes

- Every section uses `container mx-auto px-6` for its inner wrapper. The `container` class already applies `padding: 2rem` (32px) from the Tailwind config, but `px-6` (24px) is also applied. Because `px-6` is a lower specificity override in most contexts, the effective horizontal padding is **24px** on small screens and **32px** from the container config on larger screens. This creates a minor inconsistency — sections should pick one approach.
- Most content sections use `py-24` (96px top/bottom) which provides generous vertical rhythm.
- The Hero section is the outlier — it uses `min-h-screen` with no explicit `py-` value, relying on flexbox centering + `pt-20`.
- Client Logos is the only section using `py-16` (64px), making it noticeably tighter than its neighbors.
- Heading pattern is consistent: `text-4xl md:text-5xl` for most sections. BookCall bumps up to `text-4xl md:text-6xl`.
- Section heading blocks consistently use `mb-16` (64px) before the main content grid. This is well-proportioned.

---

## Section-by-Section Audit Table

| Section | Outer Padding | Container / Max-Width | Heading Size | Body Size | Icon Size | Card Padding | Grid Gap | Background | Assessment | Suggestions |
|---|---|---|---|---|---|---|---|---|---|---|
| **HeroSection** | `min-h-screen`, `pt-20` (no py) | `container mx-auto px-6` / 1400px | `text-5xl md:text-7xl lg:text-8xl` | `text-lg md:text-xl` | Sparkles: `w-4 h-4` | N/A (no cards) | Buttons: `gap-4` | `bg-primary` | **Balanced** | Good. The `pt-20` accounts for navbar. No bottom padding needed since flexbox centering handles it. Could add `pb-12` if bottom feels cut off on very tall screens. |
| **ClientLogos** | `py-16` (64px) | `container mx-auto px-6 mb-8` / 1400px | N/A (no heading) | `text-lg` (client names) | Logo placeholder: `w-10 h-10` | Item: `px-8 py-4` | Marquee items: `gap-16` | `bg-muted` | **Slightly tight** | `py-16` is 32px less than all other sections. This works as a "breather" strip, but feels compressed vs. neighbors. Consider `py-20` for slightly more breathing room. The `mb-8` on the container adds space before marquee but not after — asymmetric. |
| **AboutSection** | `py-24` (96px) | `container mx-auto px-6` / 1400px | `text-4xl md:text-5xl` | `text-lg` | Stat icons: `w-7 h-7` in `w-14 h-14` container | Stat cards: `p-8` | Grid: `gap-16` (cols), Stats: `gap-6` | `bg-background` | **Balanced** | Well-proportioned. The `gap-16` (64px) between left content and right stats grid gives generous breathing room on desktop. Stat card `p-8` (32px) is comfortable. Body text `mb-6` and `mb-8` create good rhythm. |
| **BentoProjects** | `py-24` (96px) | `container mx-auto px-6` / 1400px | `text-4xl md:text-5xl` | `text-lg` (intro), `text-xl` (hover title), `text-xs` (category) | N/A | Hover overlay: `p-5` | Grid: `gap-4`, `auto-rows-[200px]` | `bg-muted` | **Balanced** | The bento grid `gap-4` (16px) is intentionally tight for a mosaic feel — appropriate. Category pill uses very small `text-[11px]` which is quite tiny — consider bumping to `text-xs` (12px). The `mt-12` before the CTA button matches other sections. |
| **WhyMimik** | `py-24` (96px) | `container mx-auto px-6` / 1400px | `text-4xl md:text-5xl` | Default (16px) | `w-8 h-8` in `w-16 h-16` container | `p-8` | Grid: `gap-8` | `bg-primary` | **Balanced** | Consistent with ServicesSection in card padding and gap. Icon container ratio (8/16 = 50%) is good. Body text has no explicit size class — inherits base (16px), which is fine for card descriptions. |
| **ServicesSection** | `py-24` (96px) | `container mx-auto px-6` / 1400px | `text-4xl md:text-5xl` | Default (16px) for description | `w-8 h-8` in `w-16 h-16` container | `p-8` | Grid: `gap-8` | `bg-background` | **Balanced** | Clean and consistent. Card `p-8` provides comfortable reading space. The `mb-6` under icon, `mb-3` under title, `mb-4` under description create good internal rhythm. Arrow icon `w-4 h-4` is proportional. |
| **HowWeWork** | `py-24` (96px) | `container mx-auto px-6` / 1400px | `text-4xl md:text-5xl` | `text-sm` (descriptions) | `w-7 h-7` in `w-14 h-14` container | N/A (no cards, open layout) | Grid: `gap-8`, inner max-w: `max-w-5xl` | `#f3f4f8` inline | **Slightly tight** | Step descriptions use `text-sm` (14px) while all other sections use `text-lg` or default (16px) for body text. The `mb-2` spacing between step number/title and `mb-4` under icon feel compressed. The `max-w-5xl` constraint is narrower than other sections' full container — intentional but creates visual narrowing. Consider `text-base` for descriptions. |
| **FeaturedWork** | `py-24` (96px) | `container mx-auto px-6` / 1400px | `text-4xl md:text-5xl` | `text-lg` (intro), `text-sm` (summary), `text-xs` (tags) | MapPin: `w-3.5 h-3.5`, Arrow: `w-4 h-4`, CTA arrow: `w-5 h-5` | Image area: `h-48`, Content: `p-6` | Grid: `gap-8` | `bg-white` (hardcoded) | **Balanced** | Cards have good hierarchy: image (h-48) then `p-6` content area. Internal spacing: `mb-3` (location), `mb-2` (title), `mb-4` (summary), `mb-5` (tags) creates clear visual flow. The `mt-12` before the "View All Work" CTA is consistent with BentoProjects. |
| **TestimonialsSection** | `py-24` (96px) | `container mx-auto px-6` / 1400px | `text-4xl md:text-5xl` | `text-lg md:text-xl` (quote), `text-sm` (role) | Quote mark: `w-12 h-12`, Avatar: `w-12 h-12`, Arrows: `w-5 h-5` | Card: `p-8 md:p-12` | Max-width: `max-w-3xl`, Nav: `mt-8`, Dots: `gap-2` | `#f3f4f8` inline | **Slightly spacious** | The `p-8 md:p-12` (32px to 48px) card padding is the most generous of any card on the page. Quote mark `w-12 h-12` is the largest icon. This is intentional for a testimonial — quotes need breathing room. The `mb-8` after quote text and `mb-6` after divider feel slightly generous. Consider tightening `mb-8` to `mb-6` after the quote. |
| **BookCall** | `py-24` (96px) | `container mx-auto px-6` / 1400px | `text-4xl md:text-6xl` | `text-xl` | Feature icons: `w-5 h-5` in `w-12 h-12`, CTA arrow: `w-6 h-6` | N/A (no cards) | Features: `gap-8`, Buttons: `gap-4`, Inner max: `max-w-4xl` | `#273a62` inline | **Slightly spacious** | Heading jumps to `md:text-6xl` — larger than any other section heading (others cap at `md:text-5xl`). The `mb-12` (48px) after subtitle and again after features creates very generous spacing. CTA buttons `px-10 py-5` are larger than any other buttons (`px-8 py-4` elsewhere). Consider aligning heading to `md:text-5xl` for consistency, or keep if intentional emphasis. |
| **NewsletterSection** | `py-24` (96px) | `container mx-auto px-6` / 1400px | `text-4xl md:text-5xl` | `text-xl` (subtitle), `text-sm` (disclaimer) | Mail: `w-7 h-7` in `w-14 h-14`, Send: `w-4 h-4` | N/A (form, not cards) | Form: `gap-3`, Inner max: `max-w-2xl` | Gradient `#0147D3` to `#1D3FC1` inline | **Balanced** | Good proportions. The `max-w-2xl` keeps the form narrow and focused. `mb-10` before form and `mt-6` after form create comfortable spacing. Input `px-5 py-4` and button `px-8 py-4` are well matched. |

---

## Vertical Rhythm Summary (Section Flow)

| # | Section | Top/Bottom Padding | Background | Adjacent Padding Total |
|---|---|---|---|---|
| 1 | HeroSection | min-h-screen + pt-20 | Primary Blue | -- |
| 2 | ClientLogos | py-16 (64px) | Muted | 96px (Hero bottom implicit) + 64px |
| 3 | AboutSection | py-24 (96px) | Background (white) | 64px + 96px = 160px gap |
| 4 | BentoProjects | py-24 (96px) | Muted | 96px + 96px = 192px gap |
| 5 | WhyMimik | py-24 (96px) | Primary Blue | 96px + 96px = 192px gap |
| 6 | ServicesSection | py-24 (96px) | Background (white) | 96px + 96px = 192px gap |
| 7 | HowWeWork | py-24 (96px) | #f3f4f8 inline | 96px + 96px = 192px gap |
| 8 | FeaturedWork | py-24 (96px) | White (hardcoded) | 96px + 96px = 192px gap |
| 9 | TestimonialsSection | py-24 (96px) | #f3f4f8 inline | 96px + 96px = 192px gap |
| 10 | BookCall | py-24 (96px) | #273a62 inline | 96px + 96px = 192px gap |
| 11 | NewsletterSection | py-24 (96px) | Gradient inline | 96px + 96px = 192px gap |

**Observation:** When two sections with the SAME background color sit adjacent (e.g., HowWeWork `#f3f4f8` next to FeaturedWork `bg-white`), the 192px combined padding provides visual separation. However, when adjacent sections share very similar light backgrounds (HowWeWork #f3f4f8 and FeaturedWork white), the 192px gap may feel excessive since there is no strong color boundary. Conversely, dark-to-light transitions (WhyMimik blue to ServicesSection white) naturally separate even without as much padding.

---

## Background Color Alternation Pattern

| # | Section | BG Color | Type |
|---|---|---|---|
| 1 | Hero | Primary Blue | Dark |
| 2 | ClientLogos | Muted (light gray) | Light |
| 3 | About | Background (white) | Light |
| 4 | BentoProjects | Muted (light gray) | Light |
| 5 | WhyMimik | Primary Blue | Dark |
| 6 | Services | Background (white) | Light |
| 7 | HowWeWork | #f3f4f8 (light gray) | Light |
| 8 | FeaturedWork | white (hardcoded) | Light |
| 9 | Testimonials | #f3f4f8 (light gray) | Light |
| 10 | BookCall | #273a62 (slate navy) | Dark |
| 11 | Newsletter | Gradient blue | Dark |

**Issue:** Sections 6-9 are four consecutive light-background sections (white, light gray, white, light gray). This creates a long stretch without strong visual punctuation. The alternation of white/light-gray is subtle. Consider whether one of these sections could use a dark background treatment to break up the monotony.

**Issue:** Some backgrounds use Tailwind semantic tokens (`bg-muted`, `bg-background`) while others use hardcoded inline styles (`style={{ backgroundColor: "#f3f4f8" }}`). HowWeWork and TestimonialsSection use inline `#f3f4f8` which is the same as `bg-muted` — should be unified for consistency and dark-mode readiness.

---

## Consistency Issues Found

### 1. Heading Size Inconsistency
- **Standard:** `text-4xl md:text-5xl` (most sections)
- **Outlier:** BookCall uses `text-4xl md:text-6xl` (one step larger)
- **Outlier:** Hero uses `text-5xl md:text-7xl lg:text-8xl` (expected — it's the hero)

### 2. Body Text Size Inconsistency
- **Standard:** `text-lg` (18px) for section intro paragraphs
- **Outlier:** HowWeWork step descriptions use `text-sm` (14px) — smallest body text
- **Outlier:** BookCall and Newsletter subtitles use `text-xl` (20px) — largest body text outside hero
- **Outlier:** FeaturedWork card summaries use `text-sm` (14px) — appropriate for cards but worth noting

### 3. Card Padding Inconsistency
- AboutSection stat cards: `p-8` (32px)
- WhyMimik cards: `p-8` (32px)
- ServicesSection cards: `p-8` (32px)
- FeaturedWork cards: `p-6` (24px) for content area only (image above)
- TestimonialsSection card: `p-8 md:p-12` (32px to 48px) — largest

### 4. Icon Container Sizes
- **14x14 container with 7x7 icon:** AboutSection stats, HowWeWork steps, NewsletterSection
- **16x16 container with 8x8 icon:** ServicesSection, WhyMimik
- **12x12 container with 5x5 icon:** BookCall feature icons
- **Ratio:** All maintain approximately 50% icon-to-container ratio, which is good

### 5. CTA Button Sizes
- **Standard:** `px-8 py-4` + `text-lg` or default (HeroSection, AboutSection, BentoProjects, FeaturedWork)
- **Oversized:** `px-10 py-5` + `text-xl` (BookCall) — 25% larger padding, one step larger text
- **Newsletter:** `px-8 py-4` + `text-base` — slightly smaller text than standard

### 6. Section Heading Block Spacing
- Consistent `mb-16` (64px) between heading block and content grid across: BentoProjects, ServicesSection, WhyMimik, HowWeWork, FeaturedWork, TestimonialsSection
- BookCall uses `mb-12` (48px) after subtitle and `mb-12` after features — different rhythm

### 7. Background Color Application Method
| Section | Method | Value |
|---|---|---|
| ClientLogos | Tailwind class | `bg-muted` |
| BentoProjects | Tailwind class | `bg-muted` |
| HowWeWork | Inline style | `#f3f4f8` |
| TestimonialsSection | Inline style | `#f3f4f8` |
| FeaturedWork | Tailwind class | `bg-white` (hardcoded instead of `bg-background`) |
| BookCall | Inline style | `#273a62` |
| NewsletterSection | Inline style | gradient |

**Recommendation:** Unify to Tailwind classes where possible for maintainability and potential dark mode support.

---

## Top Priority Suggestions

1. **Unify background color application** — Replace inline `style={{ backgroundColor: "#f3f4f8" }}` with `bg-muted` in HowWeWork and TestimonialsSection. Replace `bg-white` in FeaturedWork with `bg-background`.

2. **Consider BookCall heading size** — Decide if `md:text-6xl` is an intentional emphasis or an inconsistency. If intentional, document it. If not, align to `md:text-5xl`.

3. **Standardize CTA button sizes** — BookCall's `px-10 py-5 text-xl` is noticeably larger than every other CTA. Either standardize all primary CTAs to one size, or create two deliberate tiers (standard + hero-level).

4. **HowWeWork body text** — `text-sm` feels undersized relative to all other sections. Bump to `text-base` for better readability and consistency.

5. **Break up the light-section streak** — Sections 6-9 (Services, HowWeWork, FeaturedWork, Testimonials) are all light backgrounds. Consider giving one a dark treatment, or introducing a stronger visual divider.

6. **ClientLogos vertical padding** — `py-16` vs. universal `py-24` is intentional as a "strip" section, but the 32px difference is noticeable. `py-20` would split the difference.
