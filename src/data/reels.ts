export interface InstagramReel {
  url: string;
  client: string;
  tags: string[];
  thumbnail?: string;  // Instagram CDN URL — hardcoded at build time
}

export interface ClientReels {
  client: string;
  reels: InstagramReel[];
}

export const clientReels: ClientReels[] = [
  {
    client: "Simply Nikah",
    reels: [
      { url: "https://www.instagram.com/reel/C1j47uNIhEx/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/simply-nikah/1.webp" },
      { url: "https://www.instagram.com/reel/DTVqpuFiMWg/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/simply-nikah/2.webp" },
      { url: "https://www.instagram.com/reel/DMnm1p9iD5y/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/simply-nikah/3.webp" },
      { url: "https://www.instagram.com/reel/DMnDV1WMMHP/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/simply-nikah/4.webp" },
      { url: "https://www.instagram.com/reel/DMvfaBCABX6/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/simply-nikah/5.webp" },
      { url: "https://www.instagram.com/reel/DMqEyiwBrch/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/simply-nikah/6.webp" },
    ],
  },
  {
    client: "Dearbody Canada",
    reels: [
      { url: "https://www.instagram.com/reel/DHtaXf6xBBX/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/dearbody-ca/1.webp" },
      { url: "https://www.instagram.com/reel/DHbYwNgB3pK/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/dearbody-ca/2.webp" },
      { url: "https://www.instagram.com/reel/DKXt8mkSAzu/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/dearbody-ca/3.webp" },
      { url: "https://www.instagram.com/reel/DLsS1CDuNpD/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/dearbody-ca/4.webp" },
      { url: "https://www.instagram.com/reel/DTOPUYvCo4z/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/dearbody-ca/5.webp" },
      { url: "https://www.instagram.com/reel/DVcBFJQGnUt/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/dearbody-ca/6.webp" },
    ],
  },
  {
    client: "Glo2Go Aesthetics",
    reels: [
      { url: "https://www.instagram.com/reel/DUV8OTCiDwl/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/g2g/reel-new.webp" },
      { url: "https://www.instagram.com/reel/DF24kw5ofcu/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/g2g/2.webp" },
      { url: "https://www.instagram.com/reel/DGoKYx6Ijcz/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/g2g/3.webp" },
      { url: "https://www.instagram.com/reel/DQq_3urjZ-4/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/g2g/4.webp" },
      { url: "https://www.instagram.com/reel/DUV8OTCiDwl/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/g2g/5.webp" },
      { url: "https://www.instagram.com/reel/DVbeU4JCNGc/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/g2g/6.webp" },
    ],
  },
  {
    client: "SLPL UAE",
    reels: [
      { url: "https://www.instagram.com/reel/DI_kHSEBEtH/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"], thumbnail: "/reels/slpl/1.webp" },
      { url: "https://www.instagram.com/reel/C84sxPBv06H/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"], thumbnail: "/reels/slpl/2.webp" },
      { url: "https://www.instagram.com/reel/C9wJ56-pXeo/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"], thumbnail: "/reels/slpl/3.webp" },
      { url: "https://www.instagram.com/reel/DJR_oq9xyB2/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"], thumbnail: "/reels/slpl/4.webp" },
      { url: "https://www.instagram.com/reel/DI0NDoVJNfX/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"], thumbnail: "/reels/slpl/5.webp" },
      { url: "https://www.instagram.com/reel/C-c8d5QoyF_/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"], thumbnail: "/reels/slpl/6.webp" },
    ],
  },
  {
    client: "CannaHealRx",
    reels: [
      { url: "https://www.instagram.com/reel/DFQXQS0M0mk/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"], thumbnail: "/reels/cannahealrx/1.webp" },
      { url: "https://www.instagram.com/reel/DGEQTPWM-9V/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"], thumbnail: "/reels/cannahealrx/2.webp" },
      { url: "https://www.instagram.com/reel/DHqeEzyo94v/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"], thumbnail: "/reels/cannahealrx/3.webp" },
      { url: "https://www.instagram.com/reel/DIE0fP7sDvf/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"], thumbnail: "/reels/cannahealrx/4.webp" },
      { url: "https://www.instagram.com/reel/DHMcnzOMdUp/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"], thumbnail: "/reels/cannahealrx/5.webp" },
      { url: "https://www.instagram.com/reel/DQO62XHFCnd/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"], thumbnail: "/reels/cannahealrx/6.webp" },
    ],
  },
  {
    client: "GoodCannaNow",
    reels: [
      { url: "https://www.instagram.com/reel/DGJK3UCpyXR/", client: "GoodCannaNow", tags: ["Social Media", "Photo & video"], thumbnail: "/reels/goodcannanow/1.webp" },
      { url: "https://www.instagram.com/reel/DMpe681S5Tm/", client: "GoodCannaNow", tags: ["Social Media", "Photo & video"], thumbnail: "/reels/goodcannanow/2.webp" },
      { url: "https://www.instagram.com/reel/DM7wGlCCP5r/", client: "GoodCannaNow", tags: ["Social Media", "Photo & video"], thumbnail: "/reels/goodcannanow/3.webp" },
      { url: "https://www.instagram.com/reel/DO0zUWfDFfQ/", client: "GoodCannaNow", tags: ["Social Media", "Photo & video"], thumbnail: "/reels/goodcannanow/4.webp" },
      { url: "https://www.instagram.com/reel/DPHRMVBirkc/", client: "GoodCannaNow", tags: ["Social Media", "Photo & video"], thumbnail: "/reels/goodcannanow/5.webp" },
    ],
  },
  {
    client: "MedLearning",
    reels: [
      { url: "https://www.instagram.com/reel/DF9sOFYzzUQ/", client: "MedLearning", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/medlearning/1.webp" },
      { url: "https://www.instagram.com/reel/DGf17VxPM9f/", client: "MedLearning", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/medlearning/2.webp" },
      { url: "https://www.instagram.com/reel/DG230FLs7vh/", client: "MedLearning", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/medlearning/3.webp" },
      { url: "https://www.instagram.com/reel/DIs4L92N_Xz/", client: "MedLearning", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/medlearning/4.webp" },
      { url: "https://www.instagram.com/reel/DI0tRAnSqXS/", client: "MedLearning", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/medlearning/5.webp" },
      { url: "https://www.instagram.com/reel/DKrepW-h5ga/", client: "MedLearning", tags: ["Social Media", "Content Creation"], thumbnail: "/reels/medlearning/6.webp" },
    ],
  },
];

/** Curated 1-per-client selection for homepage showcase */
export const homepageReels: InstagramReel[] = [
  clientReels[0].reels[0], // Simply Nikah
  clientReels[1].reels[0], // Dearbody Canada
  clientReels[2].reels[0], // Glo2Go Aesthetics
  clientReels[3].reels[0], // SLPL UAE
  clientReels[4].reels[0], // CannaHealRx
  clientReels[5].reels[0], // GoodCannaNow
  clientReels[6].reels[0], // MedLearning
];
