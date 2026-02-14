export interface CaseStudy {
  id: string;
  client: string;
  location: string;
  industry: string;
  tags: string[];       // service slugs for filtering
  tagLabels: string[];  // human-readable service names
  summary: string;      // 1-2 sentence teaser for the card
  description: string;  // full paragraph for detail page
  services: string[];   // what Mimik delivered
  challenge?: string;   // optional: what the client needed
  solution?: string;    // optional: how Mimik solved it
  results?: string[];   // optional: key outcomes / metrics
  websiteUrl?: string;  // optional: link to client site
  featured: boolean;    // show on homepage featured section
}

export const caseStudies: CaseStudy[] = [
  {
    id: "glo2go",
    client: "Glo2Go Aesthetics",
    location: "London, UK",
    industry: "Beauty & Wellness",
    tags: ["social-media", "performance-marketing", "photo-video"],
    tagLabels: ["Social Media", "Performance Marketing", "Photography & Video"],
    summary:
      "Building a strong digital presence for a London-based aesthetics clinic through social media management, targeted ad campaigns, and professional content creation.",
    description:
      "Mimik Creations is proud to partner with Glo2Go Aesthetics, a growing London-based brand in the beauty and wellness industry. As their creative agency, we manage social media platforms, create captivating visuals, and run targeted ad campaigns to drive engagement and generate leads. Through innovative marketing strategies and professional content creation, we help Glo2Go showcase its expertise and build a strong, credible presence in the competitive aesthetics market.",
    services: [
      "Social media management",
      "Performance marketing campaigns",
      "Content creation & visual design",
      "Targeted ad campaigns",
    ],
    challenge:
      "Glo2Go needed to establish credibility and attract clients in the highly competitive London aesthetics market, where trust and visual presentation are everything.",
    solution:
      "We built a comprehensive social media presence with professional content showcasing their treatments, ran conversion-focused ad campaigns targeting local audiences, and created seasonal promotional materials that drove bookings.",
    results: [
      "Increased social media engagement",
      "Consistent lead generation through Meta ads",
      "Professional brand presence established in competitive market",
    ],
    websiteUrl: "https://steelblue-curlew-611702.hostingersite.com/",
    featured: true,
  },
  {
    id: "slpl-uae",
    client: "SLPL UAE",
    location: "Dubai, UAE",
    industry: "Sports & Events",
    tags: ["event-management", "website-development", "social-media", "photo-video"],
    tagLabels: ["Event Management", "Website Development", "Social Media", "Photography & Video"],
    summary:
      "Comprehensive event management for the Sri Lankan Premier League UAE 2024 — from website development with live scores to full social media and content coverage.",
    description:
      "Mimik Creations partnered with the Sri Lankan Premier League UAE (SLPL 2024) to provide comprehensive event management services. This included website development with real-time score updates, video and photo shoot coverage, and social media handling. We also managed content creation, including video reels, and provided content ideas to enhance audience engagement throughout the tournament.",
    services: [
      "Event management & coordination",
      "Website development (www.slpl.ae) with live score updates",
      "Social media management & content creation",
      "Photography & video coverage",
      "Match graphics & tournament branding",
    ],
    challenge:
      "The SLPL UAE tournament needed a full digital and event management partner to handle everything from the website to match-day content — all delivered in real-time during a fast-paced tournament schedule.",
    solution:
      "We built a dedicated website with live scoring, managed all social media channels with match updates, player stats, and highlight reels, and coordinated on-ground photography and video coverage throughout the tournament.",
    results: [
      "Full tournament website with real-time score updates",
      "Comprehensive social media coverage across all match days",
      "Professional match graphics and highlight content",
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
    tagLabels: ["Photography & Video", "Branding", "Social Media"],
    summary:
      "Supporting a growing online education platform with photoshoots, podcast production, video content, and branded promotional materials across multiple countries.",
    description:
      "SmartEdu is an online education platform that began in Sri Lanka and has expanded to countries like the Maldives and Mauritius, with a team of over 30 teachers. Mimik Creations supports SmartEdu with photoshoots, podcast shoots, video production, and creative content such as bookmarks, brochures, and promotional materials, enhancing their brand presence across platforms.",
    services: [
      "Professional photoshoots",
      "Podcast shoot production",
      "Video content creation",
      "Brochures & promotional materials",
      "Brand collateral design",
    ],
    websiteUrl: "https://smartedu.global/",
    featured: false,
  },
  {
    id: "bfresh",
    client: "BFresh",
    location: "Sri Lanka",
    industry: "Food & Beverage (FMCG)",
    tags: ["social-media", "photo-video", "performance-marketing"],
    tagLabels: ["Social Media", "Photography & Video", "Performance Marketing"],
    summary:
      "Creative and marketing partner for a fast-growing Sri Lankan juice brand — from product photography and seasonal campaigns to social media management.",
    description:
      "Bfresh is a rapidly growing Sri Lankan juice brand known for its natural fruit beverages, available in leading supermarkets like Keells, Glomark and online via platforms like Uber Eats and Pick Me. As their creative and marketing partner, Mimik Creations has provided a range of services, including product photo shoots, engaging posters, video reels, seasonal marketing campaigns, and social media management. Our efforts have played a key role in enhancing Bfresh's brand presence and driving its growth in the competitive market.",
    services: [
      "Product photography",
      "Video reels & content creation",
      "Social media management",
      "Seasonal marketing campaigns",
      "Promotional poster design",
    ],
    featured: false,
  },
  {
    id: "gearup",
    client: "GearUp",
    location: "Sri Lanka",
    industry: "Sports & Tech",
    tags: ["website-development", "social-media"],
    tagLabels: ["Website Development", "Social Media"],
    summary:
      "Designing and developing a web platform for sports facility bookings, plus social media content to showcase the app's features.",
    description:
      "GearUp is an innovative app and web platform in Sri Lanka that allows users to pre-book, cancel, and make payments for indoor sports complexes and various other grounds. Mimik Creations partnered with GearUp to design and develop their website and handle their social media content creation and edits, showcasing the app's features and services to a broader audience.",
    services: [
      "Website design & development",
      "Social media content creation",
      "App feature showcase content",
    ],
    websiteUrl: "https://gearup.lk/",
    featured: false,
  },
  {
    id: "medlearning",
    client: "MedLearning",
    location: "International",
    industry: "Healthcare & Education",
    tags: ["social-media", "photo-video"],
    tagLabels: ["Social Media", "Photography & Video"],
    summary:
      "Producing engaging educational reels and social content that simplify complex medical topics into shareable, visually compelling formats.",
    description:
      "MedLearning.io is an educational platform for medical professionals. Mimik Creations produces engaging social media content and educational reels that simplify complex medical topics into visually compelling, shareable formats.",
    services: [
      "Social media content creation",
      "Educational video reels",
      "Medical illustration content",
    ],
    websiteUrl: "https://medlearning.io/",
    featured: false,
  },
];

// Filter categories for the Our Work page
export const filterCategories = [
  { slug: "all", label: "All Work" },
  { slug: "social-media", label: "Social Media" },
  { slug: "performance-marketing", label: "Performance Marketing" },
  { slug: "branding", label: "Branding" },
  { slug: "website-development", label: "Web Development" },
  { slug: "photo-video", label: "Photo & Video" },
  { slug: "event-management", label: "Events" },
  { slug: "email-marketing", label: "Email" },
  { slug: "3d-animation", label: "3D Animation" },
];
