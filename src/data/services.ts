import {
  Share2,
  TrendingUp,
  Palette,
  Monitor,
  Search,
  Camera,
  CalendarDays,
  Mail,
  Box,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;         // short card description (homepage)
  fullDescription: string;     // long description (services page)
  includes: string[];          // "What's included" bullet points
  cta: string;                 // CTA button text on services page
  active: boolean;             // false = commented out / hidden
}

/**
 * Single source of truth for all services.
 *
 * ORDER matters: this array determines display order on:
 *   - Homepage "What We Do Best" section
 *   - Services page listing
 *   - Footer links
 *   - Navbar dropdown
 *   - Contact form dropdown
 *
 * Inactive services are kept in the array (not deleted) for easy re-activation.
 */
export const allServices: Service[] = [
  // ── 1. Website Development ──────────────────────────
  {
    slug: "web-development",
    icon: Monitor,
    title: "Website Development",
    description:
      "Modern, fast websites that match your brand and guide visitors toward action: booking, buying, or enquiring.",
    fullDescription:
      "A great website is both beautiful and effective. We build experiences that make visitors trust you, then convert. Whether you need a CMS-powered business site, an e-commerce store, or a custom web application, we deliver responsive, SEO-ready, performance-optimised websites that work as your 24/7 salesperson.",
    includes: [
      "UX/UI design (wireframes to high-fidelity)",
      "Development (React, WordPress, Shopify, custom)",
      "Conversion elements (landing pages, forms, booking flows)",
      "Post-launch support & performance optimisation",
    ],
    cta: "Book a Website Review Call",
    active: true,
  },

  // ── 2. Brand Identity & Visual Design ───────────────
  {
    slug: "branding",
    icon: Palette,
    title: "Brand Identity & Visual Design",
    description:
      "We build brands people remember, with clear positioning, premium visuals, and a system that stays consistent everywhere.",
    fullDescription:
      "Your visuals should communicate your value in seconds. We craft brand identities that feel premium, consistent, and conversion-ready across every touchpoint. From logo design and typography to brand guidelines and asset creation, we give your business a visual language that's instantly recognisable and built to sell.",
    includes: [
      "Brand foundations (positioning, tone, messaging)",
      "Visual identity system (logo, typography, palette)",
      "Brand assets (social templates, pitch decks, packaging)",
      "Brand guidelines document",
    ],
    cta: "Start a Brand Sprint",
    active: true,
  },

  // ── 3. Social Media Marketing & Management ──────────
  {
    slug: "social-media",
    icon: Share2,
    title: "Social Media Marketing & Management",
    description:
      "We turn your brand into a daily habit with consistent publishing, sharp storytelling, and performance-led iteration that grows attention and leads.",
    fullDescription:
      'Social media is not just "posting." It\'s a repeatable content system that earns attention and drives action. We plan, create, and manage it end-to-end, from strategy and content calendars to creative design, publishing, and community management. Whether it\'s Instagram, Facebook, TikTok, or LinkedIn, we build your brand presence with content that stops the scroll and starts conversations.',
    includes: [
      "Content strategy & calendars",
      "Creative design (posts, carousels, reels, stories)",
      "Publishing & community management",
      "Weekly performance reporting & iteration",
    ],
    cta: "Get a Free Social Content Plan",
    active: true,
  },

  // ── 4. Performance Marketing ────────────────────────
  {
    slug: "performance-marketing",
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Conversion-first campaigns across Google and Meta with tight tracking, strong creatives, and ongoing optimisation to maximise ROI.",
    fullDescription:
      'We don\'t just "run ads." We build a performance system: testing, tracking, optimisation, and creative iteration, designed to scale what works and cut what doesn\'t. From Google Ads to Meta (Facebook & Instagram) campaigns, we structure funnels, target the right audiences, and track every conversion to ensure your ad spend turns into revenue.',
    includes: [
      "Campaign structure & audience targeting",
      "Creative testing (hooks, angles, offers, UGC)",
      "Conversion tracking & attribution",
      "Weekly optimisation & budget management",
    ],
    cta: "Request a Performance Audit",
    active: true,
  },

  // ── 5. Photography & Video ──────────────────────────
  {
    slug: "photo-video",
    icon: Camera,
    title: "Photography & Video",
    description:
      "High-quality visuals with a clear purpose: brand trust, engagement, and conversion. We plan, shoot, and edit content that works.",
    fullDescription:
      "We produce photo and video content built for today's platforms: fast hooks, strong framing, and storytelling that makes people pause, watch, and trust your brand. From product photography and lifestyle shoots to video reels and ad creatives, every asset we produce has a strategic purpose behind it.",
    includes: [
      "Creative direction (concepts, scripts, shot lists, moodboards)",
      "Production (on-site shoots, product + lifestyle, reels)",
      "Editing (ads + organic cuts, captions, motion text)",
      "Asset library delivery (organised, named, ready to use)",
    ],
    cta: "Get a Production Quote",
    active: true,
  },

  // ── 6. Event Designer & Coverage ────────────────────
  {
    slug: "events",
    icon: CalendarDays,
    title: "Event Designer & Coverage",
    description:
      "End-to-end event design, branding, and coverage, from concept and visual identity to real-time content capture and post-event storytelling.",
    fullDescription:
      "We don't just manage events. We design and cover them. From visual identity and branded environments to real-time social media coverage and post-event content packages, we bring a creative-first approach to every event. Our work with SLPL UAE demonstrated this: delivering event branding, live digital coverage, photography, videography, and a fully functional event website.",
    includes: [
      "Event branding & visual identity design",
      "Real-time social media coverage & content capture",
      "Photography & videography (on-ground coverage)",
      "Post-event content packages & highlight reels",
    ],
    cta: "Plan Your Event",
    active: true,
  },

  // ── INACTIVE SERVICES ───────────────────────────────
  // These are commented out (active: false) but kept for future re-activation.

  /* COMMENTED OUT - NOT ACTIVE: SEO & GEO Services */
  {
    slug: "seo-geo",
    icon: Search,
    title: "SEO & GEO Services",
    description:
      "We grow organic visibility through technical SEO, content strategy, and AI-ready structuring for search and discovery.",
    fullDescription:
      "We grow organic visibility through technical SEO, content strategy, and AI-ready structuring so your brand appears in traditional search and modern discovery journeys. From fixing technical issues to creating content that ranks, we help your business get found by the people who are actively searching for what you offer.",
    includes: [
      "Technical SEO audit & fixes",
      "Content strategy (topic clusters, landing pages, FAQs)",
      "Local SEO & GEO foundations",
      "Reporting & iteration (rankings, conversions, next actions)",
    ],
    cta: "Request an SEO Audit",
    active: false,
  },

  /* COMMENTED OUT - NOT ACTIVE: Email Marketing */
  {
    slug: "email-marketing",
    icon: Mail,
    title: "Email Marketing",
    description:
      "We turn your email list into a revenue asset, with segmentation, strong messaging, and automation flows that drive repeat sales.",
    fullDescription:
      "Email becomes powerful when it's structured. We create campaigns and automations that drive repeat sales and consistent conversions. From welcome sequences and abandoned cart flows to promotional campaigns and newsletters, we make sure your email list works for you around the clock.",
    includes: [
      "Strategy & segmentation",
      "Automation flows (welcome, nurture, winback, promos)",
      "Campaign creation (copy, design, testing)",
      "Reporting & optimisation (open rate, CTR, revenue)",
    ],
    cta: "Audit My Email Funnel",
    active: false,
  },

  /* COMMENTED OUT - NOT ACTIVE: 3D Animation */
  {
    slug: "3d-animation",
    icon: Box,
    title: "3D Animation",
    description:
      "High-quality 3D visuals and animations that explain products, elevate perception, and produce scroll-stopping content.",
    fullDescription:
      "We create high-quality 3D visuals and animations that explain products, elevate brand perception, and produce scroll-stopping content for ads and social media. Whether it's a product showcase, explainer animation, or branded visual, 3D content instantly sets you apart.",
    includes: [
      "Concepting (style frames, storyboard, motion direction)",
      "3D modelling & rendering",
      "Animation (short ads, explainers, loops)",
      "Final delivery pack (multiple formats & aspect ratios)",
    ],
    cta: "Get a 3D Concept Proposal",
    active: false,
  },
];

/** Active services only. Used by most consumers */
export const activeServices = allServices.filter((s) => s.active);

/** Lookup: slug → display label. Derived from services, not manually synced. */
export const tagSlugToLabel: Record<string, string> = Object.fromEntries(
  allServices.map((s) => [s.slug, s.title])
);

/** Service names for the Contact form dropdown */
export const activeServiceNames = activeServices.map((s) => s.title);

/**
 * Short labels for filter pills on the Our Work page.
 * Keyed by slug. Keeps pill text concise.
 */
const filterPillLabels: Record<string, string> = {
  "web-development": "Web Development",
  "branding": "Branding",
  "social-media": "Social Media",
  "performance-marketing": "Performance Marketing",
  "photo-video": "Photo & Video",
  "events": "Event Design",
};

/** Filter categories for Our Work page. Derived from active services */
export const filterCategories = [
  { slug: "all", label: "All Work" },
  ...activeServices.map((s) => ({
    slug: s.slug,
    label: filterPillLabels[s.slug] || s.title,
  })),
];
