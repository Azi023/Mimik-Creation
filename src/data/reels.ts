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
      { url: "https://www.instagram.com/reel/C1j47uNIhEx/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"], thumbnail: "https://scontent.cdninstagram.com/v/t51.71878-15/502707730_676305228719338_2990534772310453871_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=zo9Ez1J61UMQ7kNvwHMEQar&_nc_oc=AdmemKoMJNRnFQgnYKvWsKwyYz-vmFJC5OfEVNRQDk6H62wJtHkHWYJErc3gks_lf_g&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AfzStBseZJ3rMXOxCkCesjc6L-Rxscc6q7ed8Tlrg5nEaA&oe=69B03048" },
      { url: "https://www.instagram.com/reel/DTVqpuFiMWg/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DMnm1p9iD5y/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DMnDV1WMMHP/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DMvfaBCABX6/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DMqEyiwBrch/", client: "Simply Nikah", tags: ["Social Media", "Content Creation"] },
    ],
  },
  {
    client: "Dearbody Canada",
    reels: [
      { url: "https://www.instagram.com/reel/DHtaXf6xBBX/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"], thumbnail: "https://scontent.cdninstagram.com/v/t51.75761-15/486471637_17860177818383690_8413993352350800566_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=103&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=BtPX-w3iy28Q7kNvwFy9hS4&_nc_oc=Adkl4Fc7nfloCoj-emXnkaJr7QNKgEhSJrYswE4s7ZXV8Rg0Nts-E1T35pr5JdtLVbU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_Afz3QSWOM4mLeLT-Dc__0lkD8fdinos4rBcDpltpsWA8uQ&oe=69B00589" },
      { url: "https://www.instagram.com/reel/DHbYwNgB3pK/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DKXt8mkSAzu/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DLsS1CDuNpD/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DTOPUYvCo4z/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DVcBFJQGnUt/", client: "Dearbody Canada", tags: ["Social Media", "Content Creation"] },
    ],
  },
  {
    client: "Glo2Go Aesthetics",
    reels: [
      { url: "https://www.instagram.com/reel/DFZzyzcoMhd/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"], thumbnail: "https://scontent.cdninstagram.com/v/t51.75761-15/475199727_17896245135110957_2792956302409728893_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=7k1DEFoKXXwQ7kNvwEAU3M0&_nc_oc=AdnnuqommVr6dSK4A4LqSXyhDMH2DM1R4WNSJGpl0BfLmqtGBLjcvHcEP3PyGubpHtU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_Afzj9aMYR52Fep-13I52HZvAbvP0CT2bFSHQvgpaPtl4KA&oe=69B019B9" },
      { url: "https://www.instagram.com/reel/DF24kw5ofcu/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DGoKYx6Ijcz/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DQq_3urjZ-4/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DUV8OTCiDwl/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DVbeU4JCNGc/", client: "Glo2Go Aesthetics", tags: ["Social Media", "Content Creation"] },
    ],
  },
  {
    client: "SLPL UAE",
    reels: [
      { url: "https://www.instagram.com/reel/DI_kHSEBEtH/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"], thumbnail: "https://scontent.cdninstagram.com/v/t51.71878-15/491426948_1020623409618146_6175342475342487503_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=IssdAPPljP0Q7kNvwHdzn-2&_nc_oc=AdmU5OdroMm0Qdm4JBDtIqjLbn9JdBGDmdWRuCgVLLMaf8-OtN75VqfjeYcg9hRs_cY&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AfxkckCia37reiCwrZqOiCHlEl7IBflIG7AgJ_3KlBkdzQ&oe=69B0342D" },
      { url: "https://www.instagram.com/reel/C84sxPBv06H/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"] },
      { url: "https://www.instagram.com/reel/C9wJ56-pXeo/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DJR_oq9xyB2/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DI0NDoVJNfX/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"] },
      { url: "https://www.instagram.com/reel/C-c8d5QoyF_/", client: "SLPL UAE", tags: ["Event Design", "Content Creation"] },
    ],
  },
  {
    client: "CannaHealRx",
    reels: [
      { url: "https://www.instagram.com/reel/DFQXQS0M0mk/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"], thumbnail: "https://scontent.cdninstagram.com/v/t51.71878-15/474866706_976253967715757_6144994284374898341_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=qO5NRRJG9I0Q7kNvwEC57p5&_nc_oc=Adm835X6baICNhLsVNYZCwK4D5K-vSJc6MYCYRPMxIdr0SwBPsdx8Yun-csr2Pel8-I&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AfyfdrFSQglbU5_woLf9gH1b6qLBim_0C9F8WvGQ037viw&oe=69B02664" },
      { url: "https://www.instagram.com/reel/DGEQTPWM-9V/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"] },
      { url: "https://www.instagram.com/reel/DHqeEzyo94v/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"] },
      { url: "https://www.instagram.com/reel/DIE0fP7sDvf/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"] },
      { url: "https://www.instagram.com/reel/DHMcnzOMdUp/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"] },
      { url: "https://www.instagram.com/reel/DQO62XHFCnd/", client: "CannaHealRx", tags: ["Social Media", "Photo & video"] },
    ],
  },
  {
    client: "GoodCannaNow",
    reels: [
      { url: "https://www.instagram.com/reel/DGJK3UCpyXR/", client: "GoodCannaNow", tags: ["Social Media", "Photo & video"], thumbnail: "https://scontent.cdninstagram.com/v/t51.71878-15/503804138_1480443273119759_2317599405843832745_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=OLceyso67rQQ7kNvwER-jBA&_nc_oc=AdkVY0zHZmoXlC6D3SAsLp1RzBffgrlaaTwHQwgvy-5Hs_VlnCTHtOAADGGPHVyMrzw&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_Afybxl9f5IKMU7WXjHLJY3a_3LnOSN2wjp_YV1oeSHsS4Q&oe=69B01306" },
      { url: "https://www.instagram.com/reel/DMpe681S5Tm/", client: "GoodCannaNow", tags: ["Social Media", "Photo & video"] },
      { url: "https://www.instagram.com/reel/DM7wGlCCP5r/", client: "GoodCannaNow", tags: ["Social Media", "Photo & video"] },
      { url: "https://www.instagram.com/reel/DO0zUWfDFfQ/", client: "GoodCannaNow", tags: ["Social Media", "Photo & video"] },
      { url: "https://www.instagram.com/reel/DPHRMVBirkc/", client: "GoodCannaNow", tags: ["Social Media", "Photo & video"] },
    ],
  },
  {
    client: "MedLearning",
    reels: [
      { url: "https://www.instagram.com/reel/DF9sOFYzzUQ/", client: "MedLearning", tags: ["Social Media", "Content Creation"], thumbnail: "https://scontent.cdninstagram.com/v/t51.75761-15/479484467_17890044615188542_6438906347027741057_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=100&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=aj73YDr3SSYQ7kNvwGb5GRF&_nc_oc=AdmUDKNgsZOU56-JYFy6P_yac6A-aLq8v83-DTw1-eNB5LmiLmHVzbKCrwYk5D5v1qo&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AfzcqoKpt3VsQ71_YXGdR-gHhcHc0_v7VWNoKG7ZAiy1Zw&oe=69B0148B" },
      { url: "https://www.instagram.com/reel/DGf17VxPM9f/", client: "MedLearning", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DG230FLs7vh/", client: "MedLearning", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DIs4L92N_Xz/", client: "MedLearning", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DI0tRAnSqXS/", client: "MedLearning", tags: ["Social Media", "Content Creation"] },
      { url: "https://www.instagram.com/reel/DKrepW-h5ga/", client: "MedLearning", tags: ["Social Media", "Content Creation"] },
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
