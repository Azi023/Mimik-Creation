# Glass Effect Inventory

Source scope: all `.tsx` files in `src/components/` and `src/pages/`.

Tailwind values resolved from compiled CSS (`dist/assets/index-*.css`):
- `backdrop-blur-sm` = `blur(4px)`
- `backdrop-blur-md` = `blur(12px)`
- `backdrop-blur-lg` = `blur(16px)`
- `backdrop-blur-xl` = `blur(24px)`
- `backdrop-blur-2xl` = `blur(40px)`
- `backdrop-saturate-[1.8]` = `saturate(180%)`

| Component | Element | blur | bg-opacity | border-opacity | saturate | shadow | Notes |
|---|---|---|---|---|---|---|---|
| Navbar | Scrolled desktop nav (`src/components/Navbar.tsx:35`) | `blur(24px)` | `bg-mimik-dark/70` (70% of `#08113a`) | `border-white/[0.08]` (8%) | `180%` | `shadow-lg` (`0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`) | Heavy glass treatment |
| Navbar | Mobile menu panel (`src/components/Navbar.tsx:95`) | `blur(40px)` | `bg-mimik-dark/90` (90% of `#08113a`) | `border-white/[0.08]` (8%) | `180%` | none | Very heavy blur, very high opacity |
| HeroSection | Hero badge outer shell (`src/components/HeroSection.tsx:63`) | `blur(4px)` | `bg-white/10` (10%) | `border-white/20` (20%) | `180%` | none | Primary hero glass badge |
| HeroSection | Hero badge inner layer (`src/components/HeroSection.tsx:74`) | `blur(12px)` | `bg-white/10` (10%) | none | none | none | Inner frosted layer; no border/shadow |
| HeroSection | Secondary CTA (`src/components/HeroSection.tsx:135`) | `blur(4px)` | transparent (`hover:bg-white/10`) | `border-white/40` (40%) | `180%` | none | Looks like outlined glass button |
| ServicesSection | Service card (`src/components/ServicesSection.tsx:115`) | `blur(12px)` | `bg-white/60` (hover 75%) | `border-white/25` (25%) | `180%` | `shadow-xl shadow-black/5` (effective 5% black tint) | 9 cards per section |
| TestimonialsSection | Testimonial card (`src/components/TestimonialsSection.tsx:111`) | `blur(4px)` | `bg-white/80` (80%) | `border-gray-200/50` (50%) | `180%` | `shadow-xl shadow-black/5` | High-opacity glass |
| TestimonialsSection | Carousel arrow buttons (`src/components/TestimonialsSection.tsx:150`, `:174`) | `blur(4px)` | `bg-white/80` (80%) | `border-border` (token) | `180%` | none | 2 controls |
| WhyMimik | Reason card (`src/components/WhyMimik.tsx:62`) | `blur(16px)` | `bg-white/[0.12]` (12%, hover 18%) | `border-white/15` (15%) | `180%` | `shadow-[0_8px_32px_rgba(0,0,0,0.12)]` | 4 cards on blue section |
| BookCall | "Let's Talk" badge (`src/components/BookCall.tsx:30`) | `blur(4px)` | `bg-mimik-yellow/15` (15%) | `border-mimik-yellow/20` (20%) | `180%` | none | Tinted yellow glass |
| BookCall | Feature icon chips (`src/components/BookCall.tsx:55`) | `blur(4px)` | `bg-mimik-yellow/15` (15%) | `border-mimik-yellow/20` (20%) | `180%` | none | 3 chips |
| NewsletterSection | Email input (`src/components/NewsletterSection.tsx:88`) | `blur(12px)` | `bg-white/15` (focus 25%) | `border-white/25` (focus 40%) | `180%` | none | Single glass input on gradient background |
| BackToTop | Floating action button (`src/components/BackToTop.tsx:23`) | `blur(16px)` | `bg-white/15` (hover 25%) | `border-white/15` (15%) | `180%` | `shadow-lg` | Global component |
| BentoProjects | Category pill (`src/components/BentoProjects.tsx:101`) | `blur(24px)` | `bg-black/30` (30%) | `border-white/25` (25%) | `180%` | none | 7 pills over image grid |
| OurWork page | Hero badge (`src/pages/OurWork.tsx:64`) | `blur(4px)` | `bg-white/10` (10%) | `border-white/20` (20%) | `180%` | none | Same style family as Hero badge |
| OurWork page | Filter chip (active) (`src/pages/OurWork.tsx:110`) | `blur(4px)` | `bg-mimik-yellow/90` (90%) | `border-mimik-yellow/50` (50%) | `180%` | `shadow-sm` | Mostly opaque, not very glass-like |
| OurWork page | Filter chip (inactive) (`src/pages/OurWork.tsx:111`) | `blur(4px)` | `bg-white/60` (hover 80%) | `border-gray-200/50` (50%) | `180%` | none | Semi-glass chip |
| OurWork page | Case study card (`src/pages/OurWork.tsx:159`) | `blur(4px)` | `bg-white/80` (80%) | `border-gray-200/50` (50%) | `180%` | `shadow-xl shadow-black/5` (+ `hover:shadow-2xl`) | Main portfolio card |
| OurWork page | External-link mini button (`src/pages/OurWork.tsx:174`) | `blur(4px)` | `bg-white/15` (15%) | `border-white/15` (15%) | `180%` | none | Appears on hover |
| Contact page | Hero badge (`src/pages/Contact.tsx:84`) | none | `bg-white/10` (10%) | `border-white/20` (20%) | none | none | Frosted tint only (no backdrop filter) |
| About page | Hero badge (`src/pages/About.tsx:146`) | none | `bg-white/10` (10%) | `border-white/20` (20%) | none | none | Frosted tint only (no backdrop filter) |
| Services page | Hero badge (`src/pages/Services.tsx:167`) | none | `bg-white/10` (10%) | `border-white/20` (20%) | none | none | Frosted tint only (no backdrop filter) |
| CaseStudyDetail page | Industry pill (`src/pages/CaseStudyDetail.tsx:98`) | none | `bg-white/10` (10%) | `border-white/20` (20%) | none | none | Frosted tint only (no backdrop filter) |

Additional non-glass depth assets detected (not counted as glass surfaces above):
- Hero liquid blobs: `blur-[80px]` in `src/components/HeroSection.tsx`
- Section depth blobs: `blur-3xl` in `src/components/GlassBackground.tsx`, `src/components/WhyMimik.tsx`, and page hero decorations
