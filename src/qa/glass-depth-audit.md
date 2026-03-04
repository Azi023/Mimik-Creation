# Visual Depth Audit

## Section checks

| Section | What is behind the glass | Is the glass effect visible? | Status | Recommendation |
|---|---|---|---|---|
| Services section (`src/components/ServicesSection.tsx`) | `GlassBackground variant="light"` injects two large blurred blobs (`bg-mimik-blue/[0.08]` and `bg-mimik-yellow/[0.08]`, both `blur-3xl`) behind cards | Yes, moderately visible. Cards (`bg-white/60`, `blur(12px)`) have enough background variation to read as glass | PASS | Keep `GlassBackground`; improve premium feel by lowering border opacity and adding inset top highlight on cards |
| Testimonials section (`src/components/TestimonialsSection.tsx`) | `GlassBackground variant="light"` is present with same blob texture as Services | Partially visible. The card and arrows use `bg-white/80` + `blur(4px)`, so they look more opaque than glass | PASS (depth present), NEEDS WORK (surface tuning) | Keep background blobs; reduce card opacity and increase blur to make depth interaction more obvious |
| Hero section (`src/components/HeroSection.tsx`) | Gradient base + two animated liquid blobs (`blur-[80px]`) + additional floating blurred elements | Strongly visible. Badge and CTA sit over moving color fields, so blur effect is perceptible | PASS | Maintain blob layering; raise badge blur from `4px` to `12px` for cleaner Apple-like diffusion |
| Why Mimik section (`src/components/WhyMimik.tsx`) | Blue solid section plus two blurred yellow accent blobs (`bg-secondary/10` and `/5`, `blur-3xl`) | Visible but subtle; cards read as glass, though depth variation is concentrated at corners | PASS | Add one extra mid-canvas texture blob/gradient so all four cards consistently blur non-uniform content |
| Book a Call section (`src/components/BookCall.tsx`) | Mostly flat `bg-mimik-slate`; only rotating outline circles (`border-white/10` and `/5`) behind content | Weak. Glass badges/chips have little textured content to refract, so blur impact is limited | MISSING (effective depth layer) | Add 1-2 large soft color blobs (for example `bg-mimik-yellow/10` and `bg-white/6` with `blur-[100px]`) behind CTA and feature chips |

## Summary
- Required checks for Services and Testimonials: `GlassBackground` exists in both, so depth infrastructure is present.
- Hero has the strongest Apple-like depth due animated liquid blobs.
- Why Mimik has usable depth but could distribute texture more evenly behind all cards.
- Book a Call is the main depth gap: glass is applied, but the background is too flat for convincing refraction.
