# Consolidated Glass Recommendations

Sorted by: highest visual impact + easiest implementation first.

| Priority | Component | Current CSS values | Recommended CSS values | Expected visual impact | Implementation difficulty |
|---:|---|---|---|---|---|
| 1 | Hero badge + OurWork hero badge + small glass chips (`HeroSection`, `OurWork`, `BookCall`, `Testimonials`) | Widespread `backdrop-blur-sm` (`blur(4px)`) | Standardize small surfaces to `backdrop-blur-md` (`blur(12px)`) | High | Easy |
| 2 | Contact/About/Services/CaseStudy hero pills | `bg-white/10 border-white/20` with **no** backdrop blur/saturate | Add `backdrop-blur-md backdrop-saturate-[1.8] border-white/12` | High | Easy |
| 3 | Testimonials and OurWork cards | `bg-white/80` + `backdrop-blur-sm` | Shift to `bg-white/65-70` + `backdrop-blur-md` (or `lg` for large cards) | High | Easy |
| 4 | Glass borders across cards/badges/buttons | Frequent `border-white/20`, `border-white/25`, `border-white/40` | Normalize to subtle range: `border-white/10-15` (or equivalent token opacity) | High | Easy |
| 5 | Premium glass surfaces (`Navbar`, `ServicesSection` cards, `WhyMimik` cards, Testimonials card) | Outer shadow only; no top inner catchlight | Add `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]` alongside existing outer shadow | High | Easy |
| 6 | BookCall section depth | Flat `bg-mimik-slate` with rotating outline circles only | Add 1-2 blurred color blobs behind content (for example `bg-mimik-yellow/10` + `bg-white/6` with `blur-[100px]`) | High | Easy |
| 7 | OurWork active filter chip | `bg-mimik-yellow/90 border-mimik-yellow/50 backdrop-blur-sm` | Move to translucent glass token (`bg-white/60-65`, `border-white/12`, `backdrop-blur-md`), keep active via text/icon emphasis | Medium | Easy |
| 8 | Bento category pill | `bg-black/30 backdrop-blur-xl border-white/25` | `bg-black/15-20 backdrop-blur-md/lg border-white/10-12` | Medium | Easy |
| 9 | Navbar opacity tuning | Desktop `bg-mimik-dark/70`; mobile menu `bg-mimik-dark/90` | Desktop around `60-65%`, mobile around `75-80%`, keep heavy blur | Medium | Easy |
| 10 | Animated glass context layers | Sparse `will-change` usage | Add `will-change: transform` to continuously animated blob/circle layers | Medium | Easy |
| 11 | Reduced-motion handling | CSS rule disables only `.liquid-blob` and `.glass-badge-glow::before` | Gate Framer Motion infinite animations with reduced-motion checks (`useReducedMotion`) | Medium | Medium |
| 12 | Backdrop fallback quality (`@supports not (backdrop-filter)`) | Blur/saturate disabled but no tailored visual fallback per surface context | Add fallback tokens per light/dark surfaces (higher opacity and adjusted text color where needed) | Medium | Medium |

## Suggested design token targets (Apple-style baseline)
- Light glass cards: `blur(12px)`, `bg-white/60-70`, `border-white/10-15`
- Dark glass badges/buttons: `blur(12-16px)`, white-equivalent tint `8-15%`, `border-white/10-15`
- Heavy overlays/nav: `blur(24-40px)`, lower color opacity than current mobile menu, plus inset top highlight
