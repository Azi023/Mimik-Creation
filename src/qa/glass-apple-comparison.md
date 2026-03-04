# Apple Glass Standards Comparison

Reference rules used:
1. Blur: light `8-12px`, medium `16-20px`, heavy `24-40px`
2. Opacity: dark backgrounds `8-15%` white equivalent; light backgrounds `50-70%` white
3. Border: `1px` subtle (`8-15%` white equivalent)
4. Saturation: `150%-200%`
5. Shadow: layered outer + subtle inner highlight (`inset 0 1px 0 rgba(255,255,255,0.1)`)
6. Layering: glass should sit over visible texture/gradients
7. Consistency: similar background contexts should use consistent blur/opacity
8. Contrast: text should remain WCAG AA (4.5:1)
9. Variable intensity: nav/overlay heavier than cards/badges
10. Inner glow: premium surfaces should include top inner highlight

| Component | Element | Current values | Rating | Gap vs Apple rules | Exact recommendation |
|---|---|---|---|---|---|
| Navbar | Scrolled desktop nav | `blur(24px)`, dark 70%, border 8%, sat 180%, `shadow-lg` | CLOSE | Blur and saturation match heavy glass; opacity is too opaque and no inner highlight | Keep `blur(24px)`, move to ~`bg-mimik-dark/60`, add `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]` |
| Navbar | Mobile menu panel | `blur(40px)`, dark 90%, border 8%, sat 180% | CLOSE | Blur is correct heavy range; 90% opacity behaves near-solid | Keep `blur(40px)`, reduce to ~`bg-mimik-dark/75-80`, add subtle outer shadow + inset highlight |
| HeroSection | Hero badge outer shell | `blur(4px)`, white 10%, border 20%, sat 180% | NEEDS WORK | Blur below Apple minimum; border too strong | `backdrop-blur-md` (12px), `border-white/12`, add subtle shadow + inset top highlight |
| HeroSection | Hero badge inner layer | `blur(12px)`, white 10%, no border | CLOSE | Blur/opacity good, but missing border/highlight structure | Add `border border-white/10` or merge this layer into single premium glass token with inset highlight |
| HeroSection | Secondary CTA | `blur(4px)`, transparent base, border 40%, sat 180% | NEEDS WORK | Blur too low, border too strong, weak base fill | `backdrop-blur-md`, `bg-white/10`, `border-white/12`, optional `shadow-sm` |
| ServicesSection | Service card | `blur(12px)`, white 60% (hover 75%), border 25%, sat 180%, outer shadow | CLOSE | Good base for light background; border is too bright, hover opacity too high for glass feel | Keep `blur(12px)`, set border to `white/12-15`, lower hover to `white/68-70`, add inset highlight |
| TestimonialsSection | Testimonial card | `blur(4px)`, white 80%, border gray 50%, sat 180% | NEEDS WORK | Blur too low and opacity too high (looks opaque card, not glass) | `backdrop-blur-md` or `lg`, `bg-white/65-70`, border `white/10-12`, keep outer shadow |
| TestimonialsSection | Arrow buttons | `blur(4px)`, white 80%, token border | NEEDS WORK | Same issue as card: low blur + high opacity | `backdrop-blur-md`, `bg-white/60-65`, `border-white/12` |
| WhyMimik | Reason card | `blur(16px)`, white 12%, border 15%, sat 180%, custom shadow | CLOSE | Strong dark-mode glass baseline; missing explicit inner highlight | Keep core values; add `inset 0 1px 0 rgba(255,255,255,0.1)` to elevate quality |
| BookCall | "Let's Talk" badge | `blur(4px)`, yellow 15%, yellow border 20%, sat 180% | NEEDS WORK | Blur too low, border too strong, section lacks depth texture behind glass | `backdrop-blur-md`, `border-mimik-yellow/12`, keep `bg-mimik-yellow/12-15`, add background blobs in section |
| BookCall | Feature icon chips | `blur(4px)`, yellow 15%, yellow border 20%, sat 180% | NEEDS WORK | Same as badge; does not read as premium glass on flat background | `backdrop-blur-md`, `border-mimik-yellow/12`, optional soft shadow + inset highlight |
| NewsletterSection | Email input | `blur(12px)`, white 15%, border 25%, sat 180% | CLOSE | Blur and opacity are good for dark background; border too strong | Keep blur/opacity, reduce border to `white/12-15`, add tiny inset highlight |
| BackToTop | Floating button | `blur(16px)`, white 15%, border 15%, sat 180%, `shadow-lg` | PASS | Meets medium glass intent and contrast; minor premium polish only | Optional: add inset top highlight for consistency with other premium surfaces |
| BentoProjects | Category pill | `blur(24px)`, black 30%, border white 25%, sat 180% | NEEDS WORK | Blur too heavy for tiny badge; border too bright; dark fill too dense | Use `backdrop-blur-md`/`lg`, `bg-black/15-20`, `border-white/10-12` |
| OurWork | Hero badge | `blur(4px)`, white 10%, border 20%, sat 180% | NEEDS WORK | Same pattern as Hero badge: blur low, border high | `backdrop-blur-md`, `border-white/12`, optional inset highlight |
| OurWork | Filter chip (active) | `blur(4px)`, yellow 90%, border 50%, sat 180% | NEEDS WORK | 90% fill is near-solid and breaks glass consistency | Convert to translucent glass token (`bg-white/60-65`, `border-white/12`, `blur(12px)`) and style active state via text/icon |
| OurWork | Filter chip (inactive) | `blur(4px)`, white 60-80%, border gray 50%, sat 180% | CLOSE | Blur too low and border too visible | `backdrop-blur-md`, border `white/10-12` or neutral `10-15%`, cap opacity at `65-70%` |
| OurWork | Case study card | `blur(4px)`, white 80%, border gray 50%, sat 180%, shadow | NEEDS WORK | Too opaque + low blur => card, not glass | `backdrop-blur-md/lg`, `bg-white/65-70`, border `white/10-12` + inset highlight |
| OurWork | External-link mini button | `blur(4px)`, white 15%, border 15%, sat 180% | CLOSE | Blur low for small overlay; otherwise close | `backdrop-blur-md`, keep 15% opacity and 15% border |
| Contact page | Hero badge | no blur, white 10%, border 20% | MISSING | Frosted tint without backdrop blur/saturation | Add `backdrop-blur-md backdrop-saturate-[1.8] border-white/12` |
| About page | Hero badge | no blur, white 10%, border 20% | MISSING | Same missing glass mechanics as Contact | Add `backdrop-blur-md backdrop-saturate-[1.8] border-white/12` |
| Services page | Hero badge | no blur, white 10%, border 20% | MISSING | Same missing glass mechanics as Contact/About | Add `backdrop-blur-md backdrop-saturate-[1.8] border-white/12` |
| CaseStudyDetail page | Industry pill | no blur, white 10%, border 20% | MISSING | Same missing glass mechanics as page hero pills | Add `backdrop-blur-md backdrop-saturate-[1.8] border-white/12` |

## Cross-site findings
- Major consistency gap: `backdrop-blur-sm` (`4px`) is overused where Apple-style glass expects at least `8-12px`.
- Border opacity is often `20-40%`; Apple-style hairline borders are closer to `8-15%`.
- Premium inner highlight (`inset 0 1px 0 rgba(255,255,255,0.1)`) is mostly absent.
- Saturation is consistently strong (`180%`) and is aligned with Apple guidance.
- Text contrast appears broadly safe due dark text on light cards and white text on dark backgrounds, but exact WCAG ratios were not programmatically measured in this audit.
