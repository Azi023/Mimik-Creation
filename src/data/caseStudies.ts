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
      "Mimik Creations partners with Glo2Go Aesthetics, a London-based clinic in the beauty and wellness space. We manage their social media, create captivating visuals, and run targeted ad campaigns to drive engagement and generate leads. Through professional content and strategic marketing, we help Glo2Go build a strong, credible presence in London's competitive aesthetics market.",
    services: [
      "Social media management",
      "Performance marketing campaigns",
      "Content creation & visual design",
      "Targeted ad campaigns",
    ],
    challenge:
      "Glo2Go needed to stand out in one of London's most saturated markets. The clinic had no brand guidelines, no unified visual direction, and no dedicated creative team behind their marketing. A big constraint: the client preferred not to appear on camera. In aesthetics, where practitioner visibility builds trust, this meant we had to find other ways to connect with their audience and establish credibility.",
    solution:
      "We started by defining a clear visual identity — colour palette, typography, tone, and design direction all tailored for the beauty space. Since face-led content wasn't an option, we leaned into treatment-focused education, graphical storytelling, lifestyle visuals, and carousel-based content that built trust without relying on a personal presence. On the paid side, we ran conversion-focused ad campaigns targeting local audiences, paired with seasonal promotions to drive bookings.",
    results: [
      "Increased social media engagement — audiences responded well to the educational, design-led content",
      "Consistent lead generation through Meta ads — targeted campaigns brought a steady flow of enquiries and bookings",
      "Professional brand presence established in competitive market — credibility and trust built without founder-led content",
    ],
    websiteUrl: "https://glo2goaesthetics.co.uk/",
    featured: true,
    coverImage: "/portfolio/glo2go/1.webp",
    images: [
      "/portfolio/glo2go/1.webp",
      "/portfolio/glo2go/2.webp",
      "/portfolio/glo2go/3.webp",
      "/portfolio/glo2go/4.webp",
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
      "Event design and digital coverage partner for the Sri Lankan Premier League UAE — real-time social media, website development, photography, and videography across the full tournament.",
    description:
      "SLPL UAE is an international cricket tournament held over weekends across a month and a half. We served as the tournament's event design and digital coverage partner — responsible for real-time social media updates, website development, photography, videography, and graphic design throughout the event's run.",
    services: [
      "Live event design & real-time social media",
      "Tournament website development",
      "Photography & videography",
      "Graphic design for match milestones",
    ],
    challenge:
      "Matches were scheduled late at night in the UAE, often kicking off after 10 PM. For our Sri Lanka-based team, that meant working past midnight regularly. There was no room for next-day turnarounds — live content had to go out as moments happened. Team lists, player announcements, and match developments often came in minutes before deadlines.",
    solution:
      "We built a fast-response creative workflow tailored to the tournament's pace. The official website was developed and launched within days. During live matches, our team operated in real time — photographers shared updates as they happened, and designers turned milestones into polished graphics within minutes. Late-night shifts became the norm, with designers and editors working across time zones.",
    results: [
      "Uninterrupted live coverage across the full tournament — every match covered in real time",
      "Website served as a reliable digital hub for fixtures, scores, and updates",
      "High-volume content delivered under pressure — quality maintained despite lean team and real-time deadlines",
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
    featured: true,
    coverImage: "/portfolio/bfresh/1.webp",
    images: [
      "/portfolio/bfresh/1.webp",
      "/portfolio/bfresh/2.webp",
      "/portfolio/bfresh/3.webp",
      "/portfolio/bfresh/4.webp",
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
      "GearUp is a Sri Lankan sports arena booking platform that makes it easy for players to reserve courts — badminton, futsal, and more — without the usual back-and-forth. Users can browse available slots, book ahead, and pay online or settle in cash. We built both the website and mobile app from the ground up, and continue to manage their social media and creative output.",
    services: [
      "Website development",
      "Mobile app development",
      "Social media management",
      "Graphic design & content creation",
    ],
    challenge:
      "GearUp needed a full digital product — a booking platform that worked smoothly across web and mobile, with real-time availability, online payments, and a simple user experience. The platform had to feel intuitive for everyday users booking a weekend game, not just tech-savvy early adopters.",
    solution:
      "We designed and developed both the website and mobile application, building the core booking flow — court selection, time slot availability, reservation confirmation, and payment handling. The focus was on keeping the experience fast and straightforward so users could go from opening the app to confirming a booking in under a minute.",
    results: [
      "Fully functional booking platform across web and mobile",
      "Seamless booking experience with online and cash payment options",
      "Consistent social media presence driving user awareness",
    ],
    websiteUrl: "https://gearup.lk/",
    featured: false,
    coverImage: "/portfolio/gearup/1.webp",
    images: [
      "/portfolio/gearup/1.webp",
      "/portfolio/gearup/2.webp",
      "/portfolio/gearup/3.webp",
      "/portfolio/gearup/4.webp",
    ],
  },
  {
    id: "medlearning",
    client: "MedLearning",
    location: "International",
    industry: "Healthcare & Education",
    tags: ["social-media", "photo-video"],
    tagLabels: labelsFromTags(["social-media", "photo-video"]),
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
  {
    id: "ktea",
    client: "KTea",
    location: "Sri Lanka",
    industry: "Food & Beverage",
    tags: ["social-media", "branding", "photo-video"],
    tagLabels: labelsFromTags(["social-media", "branding", "photo-video"]),
    summary:
      "Brand identity and social media content for a Sri Lankan premium tea brand — photography, visual design, and digital presence management.",
    description:
      "KTea is a premium Sri Lankan tea brand. Mimik Creations supports KTea with brand-aligned social media content, professional product photography, and consistent visual storytelling that positions the brand in the premium tea segment.",
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
      "Corporate branding and social media management for a professional services company — visual identity, content strategy, and digital presence.",
    description:
      "JNI is a professional services company based in Sri Lanka. Mimik Creations handles their corporate branding, social media presence, and creative content to maintain a polished, professional image across all digital touchpoints.",
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
      "150+ videos delivered in 30 days for a UK-based Islamic matrimonial app — scripting, editing, and social media managed by a 5-person creative team.",
    description:
      "Simply Nikah is an Islamic matrimonial app focused on meaningful, faith-driven partnerships. We were brought on to strengthen their digital communication through consistent content creation, video editing, and strategic storytelling — all while keeping the message culturally respectful and faith-aligned.",
    services: [
      "Content writing & scriptwriting",
      "Video editing & production (5-person team)",
      "Social media creative design",
      "Cultural & faith-aligned content strategy",
    ],
    challenge:
      "The content had to feel modern and platform-native without losing its grounding in Islamic values. The bigger challenge was scale — the client needed 150 videos delivered in a single month. We started with a team of five editors managing scriptwriting, design, editing, and delivery all at once.",
    solution:
      "We built a content framework aligned with the brand's values. Our team handled the full process — scripting relationship advice, educational insights, and platform messaging in a way that was respectful and relatable. To handle the production volume, we ran a structured daily workflow with five or more videos per day.",
    results: [
      "150+ videos delivered in 30 days — daily production targets met without a single missed deadline",
      "Culturally sensitive content at scale — complex topics communicated respectfully",
      "Full creative pipeline managed end-to-end — from script to screen",
    ],
    websiteUrl: "https://simplynikah.app/",
    featured: false,
    coverImage: "/portfolio/simply-nikah/1.webp",
    images: [
      "/portfolio/simply-nikah/1.webp",
      "/portfolio/simply-nikah/2.webp",
      "/portfolio/simply-nikah/3.webp",
      "/portfolio/simply-nikah/4.webp",
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
      "Dearbody is an international personal care brand. The Canadian franchise came to us looking to grow their digital presence and retail reach. We helped the franchise scale through strategic social media management, targeted advertising, and consistent creative output.",
    services: [
      "Social media strategy & management",
      "Performance marketing & paid ads",
      "Content creation & visual design",
      "Audience segmentation & targeting",
    ],
    challenge:
      "The franchise needed to present itself as vibrant and contemporary while appealing to both female and male consumers. There was no structured social media strategy, no advertising framework, and limited resources for content production in the early stages.",
    solution:
      "We developed a social media strategy backed by performance marketing. With limited production resources early on, we got creative — using design-led storytelling, product-focused visuals, and adaptable formats to keep content output high. Paid advertising was carefully optimised to drive awareness and support retail expansion.",
    results: [
      "Franchise grew from 1 store to 7-10 outlets — digital efforts directly supported retail expansion",
      "Consistent brand presence across platforms — unified creative direction maintained as operations scaled",
      "Effective paid campaigns driving customer acquisition",
    ],
    websiteUrl: "https://www.dearbody.ca/",
    featured: false,
    coverImage: "/portfolio/dearbody/1.webp",
    images: [
      "/portfolio/dearbody/1.webp",
      "/portfolio/dearbody/2.webp",
      "/portfolio/dearbody/3.webp",
      "/portfolio/dearbody/4.webp",
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
      "Website delivered 1 week ahead of deadline, plus two investor-grade pitch decks — a 7-slide teaser in 2 days and a 30-slide deck in 1 week.",
    description:
      "YVL Capital Partners is a MENA-based venture studio focused on funding AI-native companies in infrastructure-heavy industries. CEO Matthew Buckingham needed a professional website and investor-facing pitch decks delivered on a tight timeline. We handled both from concept to delivery.",
    services: [
      "Website design & development",
      "7-slide fund teaser deck (delivered in 2 days)",
      "30-slide comprehensive pitch deck (delivered in 1 week)",
    ],
    challenge:
      "The client needed a polished, professional website ready within a month. On top of that, two pitch decks were required — a concise 7-slide fund teaser and a comprehensive 20-30 slide deck — both needed quickly to support active fundraising conversations.",
    solution:
      "We prioritised the website build and delivered it within three weeks. The site was designed to reflect YVL Capital's positioning — clean, authoritative, and investor-ready. The 7-slide fund teaser was turned around in two days. The full 30-slide deck was completed within a week.",
    results: [
      "Website delivered 1 week ahead of the 4-week deadline",
      "Two investor-grade pitch decks produced under tight turnaround",
      "Client satisfied with quality and speed of execution",
    ],
    websiteUrl: "https://yvl-capital.vercel.app/",
    featured: false,
  },
];
