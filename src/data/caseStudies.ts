import { tagSlugToLabel } from "./services";

export interface CaseStudy {
  id: string;
  client: string;
  location: string;
  industry: string;
  tags: string[];       // service slugs for filtering
  tagLabels: string[];  // human-readable labels (derived from tags + extras)
  summary: string;      // 1-2 sentence teaser for the card
  description: string;  // full paragraph for detail page
  services: string[];   // what Mimik delivered
  challenge?: string;   // optional: what the client needed
  solution?: string;    // optional: how Mimik solved it
  results?: string[];   // optional: key outcomes / metrics
  websiteUrl?: string;  // optional: link to client site
  featured: boolean;    // show on homepage featured section
  images?: string[];    // Array of image paths for gallery
  coverImage?: string;  // Primary image for cards
}

/**
 * Derive display labels from tag slugs using the services lookup.
 * Falls back to the slug itself if not found (shouldn't happen for known tags).
 */
function labelsFromTags(tags: string[]): string[] {
  return tags.map((slug) => tagSlugToLabel[slug] || slug);
}

export const caseStudies: CaseStudy[] = [
  {
    id: "glo2go",
    client: "Glo2Go Aesthetics",
    location: "London, UK",
    industry: "Beauty & Wellness",
    tags: ["social-media", "performance-marketing", "photo-video"],
    tagLabels: labelsFromTags(["social-media", "performance-marketing", "photo-video"]),
    summary:
      "Building a strong digital presence for a London-based aesthetics clinic through social media management, targeted ad campaigns, and professional content creation.",
    description:
      "We manage social media, create visuals, and run targeted ad campaigns for Glo2Go Aesthetics in London. Our work drives engagement, generates leads, and builds a credible brand presence in a competitive market.",
    services: [
      "Social media management",
      "Performance marketing campaigns",
      "Content creation & visual design",
      "Targeted ad campaigns",
    ],
    challenge:
      "Glo2Go needed to stand out in London's saturated aesthetics market with no existing brand guidelines or visual direction. The client couldn't appear on camera, so we had to build credibility through design and content alone.",
    solution:
      "We built a clear visual identity and content system using treatment-focused education, graphical storytelling, and carousel-based content that established trust without founder-led camera work. Conversion-focused Meta ad campaigns targeting local audiences with seasonal promotions drove consistent bookings.",
    results: [
      "Steady lead flow via Meta ads — consistent enquiries and bookings",
      "Brand presence established in competitive London market",
      "Engagement growth from educational, design-led content strategy",
    ],
    websiteUrl: "https://glo2goaesthetics.co.uk/",
    featured: true,
    // TODO: Add Glo2Go website screenshots from https://glo2goaesthetics.co.uk/
    coverImage: "/portfolio/glo2go/1.webp",
    images: [
      "/portfolio/glo2go/1.webp",
      "/portfolio/glo2go/2.webp",
      "/portfolio/glo2go/3.webp",
      "/portfolio/glo2go/4.webp",
      "/portfolio/glo2go/5.webp",
    ],
  },
  {
    id: "slpl-uae",
    client: "SLPL UAE",
    location: "Dubai, UAE",
    industry: "Sports / Cricket",
    tags: ["social-media", "web-development", "photo-video", "events"],
    tagLabels: labelsFromTags(["social-media", "web-development", "photo-video", "events"]),
    summary:
      "Event design and digital coverage partner for the Sri Lankan Premier League UAE: real-time social media, website development, photography, and videography across the full tournament.",
    description:
      "SLPL UAE is an international cricket tournament held over weekends across a month and a half. We served as the tournament's event design and digital coverage partner: responsible for real-time social media updates, website development, photography, videography, and graphic design throughout the event's run.",
    services: [
      "Live event design & real-time social media",
      "Tournament website development",
      "Photography & videography",
      "Graphic design for match milestones",
    ],
    challenge:
      "SLPL matches kicked off after 10 PM UAE time, meaning our Sri Lanka-based team worked past midnight throughout the full tournament. Live content had to go out the moment things happened — no next-day turnarounds.",
    solution:
      "We built a fast-response creative workflow and launched the official website within days of onboarding. During matches, designers turned milestones into polished graphics within minutes, operating in real time across time zones.",
    results: [
      "Full tournament covered in real time — zero missed matches",
      "Website live as digital hub for fixtures, scores, and updates",
      "High-volume content delivered on tight deadlines throughout",
    ],
    websiteUrl: "https://www.slpl.ae",
    featured: true,
  },
  {
    id: "smartedu",
    client: "SmartEDU",
    location: "Sri Lanka, Maldives, Mauritius",
    industry: "Education & EdTech",
    tags: ["photo-video", "branding", "social-media"],
    tagLabels: labelsFromTags(["photo-video", "branding", "social-media"]),
    summary:
      "Supporting a growing online education platform with photoshoots, podcast production, video content, and branded promotional materials across multiple countries.",
    description:
      "SmartEdu is an online education platform operating across Sri Lanka, the Maldives, and Mauritius. We deliver photoshoots, podcast production, video content, and branded promotional materials.",
    services: [
      "Professional photoshoots",
      "Podcast shoot production",
      "Video content creation",
      "Brochures & promotional materials",
      "Brand collateral design",
    ],
    websiteUrl: "https://smartedu.global/",
    featured: false,
    coverImage: "/portfolio/smartedu/1.webp",
    images: [
      "/portfolio/smartedu/1.webp",
      "/portfolio/smartedu/2.webp",
      "/portfolio/smartedu/3.webp",
      "/portfolio/smartedu/4.webp",
    ],
  },
  {
    id: "bfresh",
    client: "BFresh",
    location: "Sri Lanka",
    industry: "Food & Beverage (FMCG)",
    tags: ["social-media", "photo-video", "performance-marketing"],
    tagLabels: labelsFromTags(["social-media", "photo-video", "performance-marketing"]),
    summary:
      "Creative and marketing partner for a fast-growing Sri Lankan juice brand, from product photography and seasonal campaigns to social media management.",
    description:
      "Bfresh is a rapidly growing Sri Lankan juice brand available in Keells, Glomark, and online platforms. We handle their product photography, social media, video reels, seasonal campaigns, and professional product photography portfolio.",
    services: [
      "Product photography",
      "Video reels & content creation",
      "Social media management",
      "Seasonal marketing campaigns",
      "Promotional poster design",
    ],
    featured: true,
    coverImage: "/portfolio/bfresh/1.webp",
    images: [
      "/portfolio/bfresh/1.webp",
      "/portfolio/bfresh/2.webp",
      "/portfolio/bfresh/3.webp",
      "/portfolio/bfresh/4.webp",
      "/portfolio/bfresh/5.webp",
      "/portfolio/bfresh/6.webp",
      "/portfolio/bfresh/7.webp",
      "/portfolio/bfresh/8.webp",
      "/portfolio/bfresh/9.webp",
      "/portfolio/bfresh/10.webp",
      "/portfolio/bfresh/11.webp",
      "/portfolio/bfresh/12.webp",
    ],
  },
  {
    id: "gearup",
    client: "GearUp",
    location: "Sri Lanka",
    industry: "Sports & Tech",
    tags: ["web-development", "social-media"],
    tagLabels: labelsFromTags(["web-development", "social-media"]),
    summary:
      "Designed and developed a sports arena booking platform across web and mobile, plus ongoing social media management and creative output.",
    description:
      "GearUp is a Sri Lankan sports arena booking platform. We built both the website and mobile app from scratch, and continue to manage their social media and creative output.",
    services: [
      "Website development",
      "Mobile app development",
      "Social media management",
      "Graphic design & content creation",
    ],
    challenge:
      "GearUp needed a full booking platform across web and mobile with real-time availability, online payments, and an experience intuitive enough for any sports fan — not just tech-savvy early adopters.",
    solution:
      "We designed and built both the website and mobile app, covering court selection, time slots, and payment — with a focus on speed and simplicity to get users from open to booked in under a minute.",
    results: [
      "Full booking platform live on web and mobile",
      "Online and cash payment options seamlessly integrated",
      "Consistent social presence driving ongoing user awareness",
    ],
    websiteUrl: "https://gearup.lk/",
    featured: false,
    coverImage: "/portfolio/gearup/1.webp",
    images: [
      "/portfolio/gearup/1.webp",
      "/portfolio/gearup/2.webp",
      "/portfolio/gearup/3.webp",
      "/portfolio/gearup/4.webp",
      "/portfolio/gearup/5.webp",
    ],
  },
  {
    id: "medlearning",
    client: "MedLearning",
    location: "International",
    industry: "Healthcare & Education",
    tags: ["social-media", "photo-video", "branding"],
    tagLabels: labelsFromTags(["social-media", "photo-video", "branding"]),
    summary:
      "Educational reels, social content, and brand identity for a medical education platform.",
    description:
      "MedLearning.io is an educational platform for medical professionals. We produce social media content, educational reels, and brand guidelines that simplify complex medical topics into shareable formats.",
    services: [
      "Social media content creation",
      "Educational video reels",
      "Brand identity & guidelines",
    ],
    websiteUrl: "https://medlearning.io/",
    featured: false,
    coverImage: "/portfolio/medlearning/1.webp",
    images: [
      "/portfolio/medlearning/1.webp",
      "/portfolio/medlearning/2.webp",
      "/portfolio/medlearning/3.webp",
      "/portfolio/medlearning/4.webp",
      "/portfolio/medlearning/5.webp",
    ],
  },
  {
    id: "ktea",
    client: "KTea",
    location: "Sri Lanka",
    industry: "Food & Beverage",
    tags: ["social-media", "branding", "photo-video"],
    tagLabels: labelsFromTags(["social-media", "branding", "photo-video"]),
    summary:
      "Brand identity and social media content for a Sri Lankan premium tea brand: photography, visual design, and digital presence management.",
    description:
      "Premium Sri Lankan tea brand. We deliver brand-aligned social media content, product photography, and visual storytelling.",
    services: [
      "Social media management",
      "Product photography",
      "Brand visual design",
      "Content creation",
    ],
    featured: false,
    coverImage: "/portfolio/ktea/1.webp",
    images: [
      "/portfolio/ktea/1.webp",
      "/portfolio/ktea/2.webp",
      "/portfolio/ktea/3.webp",
      "/portfolio/ktea/4.webp",
    ],
  },
  {
    id: "jni",
    client: "JNI",
    location: "Sri Lanka",
    industry: "Corporate / Professional Services",
    tags: ["social-media", "branding"],
    tagLabels: labelsFromTags(["social-media", "branding"]),
    summary:
      "Corporate branding and social media management for a professional services company: visual identity, content strategy, and digital presence.",
    description:
      "Corporate branding, social media, and creative content for JNI, a professional services company in Sri Lanka.",
    services: [
      "Corporate branding",
      "Social media management",
      "Content creation",
      "Visual identity design",
    ],
    featured: false,
    coverImage: "/portfolio/jni/1.webp",
    images: [
      "/portfolio/jni/1.webp",
      "/portfolio/jni/2.webp",
      "/portfolio/jni/3.webp",
      "/portfolio/jni/4.webp",
    ],
  },
  {
    id: "simply-nikah",
    client: "Simply Nikah",
    location: "United Kingdom",
    industry: "Tech / Matrimonial Platform",
    tags: ["social-media", "photo-video"],
    tagLabels: labelsFromTags(["social-media", "photo-video"]),
    summary:
      "150+ videos delivered in 30 days for a UK-based Islamic matrimonial app: scripting, editing, and social media managed by a 5-person creative team.",
    description:
      "Simply Nikah is an Islamic matrimonial app focused on meaningful, faith-driven partnerships. We were brought on to strengthen their digital communication through consistent content creation, video editing, and strategic storytelling, all while keeping the message culturally respectful and faith-aligned.",
    services: [
      "Content writing & scriptwriting",
      "Video editing & production (5-person team)",
      "Social media creative design",
      "Cultural & faith-aligned content strategy",
    ],
    challenge:
      "Content had to feel modern and platform-native while staying grounded in Islamic values — a balance requiring careful scripting on every piece. The bigger challenge was scale: 150 videos in a single month with a five-person team.",
    solution:
      "We built a content framework covering relationship advice, platform messaging, and educational insights — respectful and relatable in tone throughout. A structured daily workflow delivered five or more videos per day to hit production targets.",
    results: [
      "150+ videos in 30 days — zero missed deadlines",
      "Culturally sensitive content at scale",
      "Full pipeline managed end-to-end: script to screen",
    ],
    websiteUrl: "https://simplynikah.app/",
    featured: false,
    coverImage: "/portfolio/simply-nikah/1.webp",
    images: [
      "/portfolio/simply-nikah/1.webp",
      "/portfolio/simply-nikah/2.webp",
      "/portfolio/simply-nikah/3.webp",
      "/portfolio/simply-nikah/4.webp",
      "/portfolio/simply-nikah/5.webp",
      "/portfolio/simply-nikah/6.webp",
    ],
  },
  {
    id: "dearbody",
    client: "Dearbody Canada",
    location: "Canada",
    industry: "Retail / Personal Care",
    tags: ["social-media", "performance-marketing"],
    tagLabels: labelsFromTags(["social-media", "performance-marketing"]),
    summary:
      "Helped a Canadian personal care franchise grow from 1 store to 7-10 outlets through strategic social media, performance marketing, and consistent creative output.",
    description:
      "We helped the Canadian Dearbody franchise scale from 1 store to 7-10 outlets through social media strategy, targeted advertising, and consistent creative output.",
    services: [
      "Social media strategy & management",
      "Performance marketing & paid ads",
      "Content creation & visual design",
      "Audience segmentation & targeting",
    ],
    challenge:
      "The franchise needed a vibrant, contemporary brand presence appealing to both female and male consumers — with no social media strategy, no advertising framework, and limited early-stage resources.",
    solution:
      "We built a social media and performance marketing strategy using design-led storytelling and product-focused visuals to maintain high content output. Paid advertising was optimised to drive awareness and support retail expansion.",
    results: [
      "1 → 7-10 stores: digital efforts directly supported expansion",
      "Unified brand across platforms as operations scaled",
      "Paid campaigns driving consistent customer acquisition",
    ],
    websiteUrl: "https://www.dearbody.ca/",
    featured: false,
    coverImage: "/portfolio/dearbody/1.webp",
    images: [
      "/portfolio/dearbody/1.webp",
      "/portfolio/dearbody/2.webp",
      "/portfolio/dearbody/3.webp",
      "/portfolio/dearbody/4.webp",
      "/portfolio/dearbody/5.webp",
      "/portfolio/dearbody/6.webp",
    ],
  },
  {
    id: "yvl-capital",
    client: "YVL Capital",
    location: "UAE",
    industry: "Venture Capital / Investment",
    tags: ["web-development"],
    tagLabels: labelsFromTags(["web-development"]),
    summary:
      "Website delivered 1 week ahead of deadline, plus two investor-grade pitch decks: a 7-slide teaser in 2 days and a 30-slide deck in 1 week.",
    description:
      "YVL Capital Partners is a MENA-based venture studio focused on funding AI-native companies in infrastructure-heavy industries. CEO Matthew Buckingham needed a professional website and investor-facing pitch decks delivered on a tight timeline. We handled both from concept to delivery.",
    services: [
      "Website design & development",
      "7-slide fund teaser deck (delivered in 2 days)",
      "30-slide comprehensive pitch deck (delivered in 1 week)",
    ],
    challenge:
      "The client needed a polished, professional website ready within a month. On top of that, two pitch decks were required: a concise 7-slide fund teaser and a comprehensive 20-30 slide deck, both needed quickly to support active fundraising conversations.",
    solution:
      "We prioritised the website and delivered it within three weeks — clean, authoritative, and investor-ready. The fund teaser was turned around in two days; the full 30-slide deck was complete within a week.",
    results: [
      "Website delivered 1 week ahead of the 4-week deadline",
      "Two investor-grade pitch decks produced under tight turnaround",
      "Client satisfied with quality and speed of execution",
    ],
    websiteUrl: "https://yvl-capital.vercel.app/",
    featured: false,
    coverImage: "/portfolio/yvl-capital/1.webp",
    images: [
      "/portfolio/yvl-capital/1.webp",
      "/portfolio/yvl-capital/2.webp",
      "/portfolio/yvl-capital/3.webp",
      "/portfolio/yvl-capital/4.webp",
      "/portfolio/yvl-capital/5.webp",
      "/portfolio/yvl-capital/6.webp",
      "/portfolio/yvl-capital/7.webp",
      "/portfolio/yvl-capital/8.webp",
    ],
  },
  {
    id: "mr-krisps",
    client: "Mr. Krisps Arabia",
    location: "Middle East",
    industry: "Food & Beverage (FMCG)",
    tags: ["social-media"],
    tagLabels: labelsFromTags(["social-media"]),
    summary:
      "Social media content strategy and creation for Mr. Krisps Arabia's digital presence.",
    description:
      "Social media content strategy and creation for Mr. Krisps Arabia, producing engaging visual content for the FMCG snack brand's digital presence across platforms.",
    services: [
      "Social media content creation",
      "Visual content strategy",
    ],
    featured: false,
    coverImage: "/portfolio/mr-krisps/1.webp",
    images: [
      "/portfolio/mr-krisps/1.webp",
      "/portfolio/mr-krisps/2.webp",
      "/portfolio/mr-krisps/3.webp",
      "/portfolio/mr-krisps/4.webp",
      "/portfolio/mr-krisps/5.webp",
    ],
  },
  {
    id: "gcn",
    client: "GoodCannaNow",
    location: "International",
    industry: "Cannabis & Wellness",
    tags: ["photo-video"],
    tagLabels: labelsFromTags(["photo-video"]),
    summary:
      "Brand development and visual content for GoodCannaNow, a cannabis wellness brand.",
    description:
      "Brand development and digital marketing for GoodCannaNow, a cannabis wellness brand. We delivered photo and video content that positions the brand in the growing wellness space.",
    services: [
      "Photography & video production",
      "Brand visual content",
    ],
    featured: false,
    coverImage: "/portfolio/gcn/1.webp",
    images: [
      "/portfolio/gcn/1.webp",
      "/portfolio/gcn/2.webp",
      "/portfolio/gcn/3.webp",
      "/portfolio/gcn/4.webp",
      "/portfolio/gcn/5.webp",
      "/portfolio/gcn/6.webp",
    ],
  },
  {
    id: "chrx",
    client: "CannaHealRx",
    location: "International",
    industry: "Cannabis & Health",
    tags: ["photo-video"],
    tagLabels: labelsFromTags(["photo-video"]),
    summary:
      "Brand identity and visual content for CannaHealRx, a cannabis health and wellness company.",
    description:
      "Brand identity and digital presence for CannaHealRx, a cannabis health and wellness company. We produced photo and video content to establish their brand credibility.",
    services: [
      "Photography & video production",
      "Brand identity content",
    ],
    featured: false,
    coverImage: "/portfolio/chrx/1.webp",
    images: [
      "/portfolio/chrx/1.webp",
      "/portfolio/chrx/2.webp",
      "/portfolio/chrx/3.webp",
      "/portfolio/chrx/4.webp",
      "/portfolio/chrx/5.webp",
      "/portfolio/chrx/6.webp",
    ],
  },
  {
    id: "4kforex",
    client: "4Kforex",
    location: "International",
    industry: "Finance / Forex",
    tags: ["branding"],
    tagLabels: labelsFromTags(["branding"]),
    summary:
      "Complete brand identity guidelines for 4Kforex, a forex trading platform.",
    description:
      "Complete brand identity guidelines for 4Kforex, a forex trading platform. Delivered logo design, typography, colour palette, and comprehensive brand guidelines.",
    services: [
      "Brand identity design",
      "Brand guidelines document",
    ],
    featured: false,
    coverImage: "/portfolio/4kforex/1.webp",
    images: [
      "/portfolio/4kforex/1.webp",
      "/portfolio/4kforex/2.webp",
      "/portfolio/4kforex/3.webp",
      "/portfolio/4kforex/4.webp",
      "/portfolio/4kforex/5.webp",
      "/portfolio/4kforex/6.webp",
    ],
  },
  {
    id: "jaya-apparels",
    client: "Jaya Apparels",
    location: "Sri Lanka",
    industry: "Fashion & Apparel",
    tags: ["branding"],
    tagLabels: labelsFromTags(["branding"]),
    summary:
      "Brand guidelines and visual identity for Jaya Apparels, a fashion and apparel brand.",
    description:
      "Brand guidelines and visual identity for Jaya Apparels. Delivered a cohesive brand system including logo, typography, and visual identity standards.",
    services: [
      "Brand identity design",
      "Brand guidelines document",
      "Visual identity system",
    ],
    featured: false,
    coverImage: "/portfolio/jaya-apparels/1.webp",
    images: [
      "/portfolio/jaya-apparels/1.webp",
      "/portfolio/jaya-apparels/2.webp",
      "/portfolio/jaya-apparels/3.webp",
      "/portfolio/jaya-apparels/4.webp",
      "/portfolio/jaya-apparels/5.webp",
      "/portfolio/jaya-apparels/6.webp",
    ],
  },
  {
    id: "rfl",
    client: "RFL",
    location: "International",
    industry: "Corporate",
    tags: ["branding"],
    tagLabels: labelsFromTags(["branding"]),
    summary:
      "Branding package for RFL, including brand guidelines and identity system.",
    description:
      "Branding package for RFL, including brand guidelines and a complete identity system. Delivered logo, typography, colour palette, and usage standards.",
    services: [
      "Brand identity design",
      "Brand guidelines document",
    ],
    featured: false,
    coverImage: "/portfolio/rfl/1.webp",
    images: [
      "/portfolio/rfl/1.webp",
      "/portfolio/rfl/2.webp",
      "/portfolio/rfl/3.webp",
      "/portfolio/rfl/4.webp",
      "/portfolio/rfl/5.webp",
      "/portfolio/rfl/6.webp",
    ],
  },
];
