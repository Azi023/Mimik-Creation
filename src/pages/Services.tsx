import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Share2, TrendingUp, Palette, Monitor, Search,
  Camera, CalendarDays, Mail, Box, ArrowRight, CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    slug: "social-media",
    icon: Share2,
    title: "Social Media Marketing",
    description:
      'Social media is not just "posting." It\'s a repeatable content system that earns attention and drives action. We plan, create, and manage it end-to-end — from strategy and content calendars to creative design, publishing, and community management. Whether it\'s Instagram, Facebook, TikTok, or LinkedIn, we build your brand presence with content that stops the scroll and starts conversations.',
    includes: [
      "Content strategy & calendars",
      "Creative design (posts, carousels, reels, stories)",
      "Publishing & community management",
      "Weekly performance reporting & iteration",
    ],
    cta: "Get a Free Social Content Plan",
  },
  {
    slug: "performance-marketing",
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      'We don\'t just "run ads." We build a performance system — testing, tracking, optimisation, and creative iteration — designed to scale what works and cut what doesn\'t. From Google Ads to Meta (Facebook & Instagram) campaigns, we structure funnels, target the right audiences, and track every conversion to ensure your ad spend turns into revenue.',
    includes: [
      "Campaign structure & audience targeting",
      "Creative testing (hooks, angles, offers, UGC)",
      "Conversion tracking & attribution",
      "Weekly optimisation & budget management",
    ],
    cta: "Request a Performance Audit",
  },
  {
    slug: "branding",
    icon: Palette,
    title: "Brand Identity & Visual Design",
    description:
      "Your visuals should communicate your value in seconds. We craft brand identities that feel premium, consistent, and conversion-ready across every touchpoint. From logo design and typography to brand guidelines and asset creation, we give your business a visual language that's instantly recognisable and built to sell.",
    includes: [
      "Brand foundations (positioning, tone, messaging)",
      "Visual identity system (logo, typography, palette)",
      "Brand assets (social templates, pitch decks, packaging)",
      "Brand guidelines document",
    ],
    cta: "Start a Brand Sprint",
  },
  {
    slug: "website-development",
    icon: Monitor,
    title: "Website Development",
    description:
      "A great website is both beautiful and effective. We build experiences that make visitors trust you — then convert. Whether you need a CMS-powered business site, an e-commerce store, or a custom web application, we deliver responsive, SEO-ready, performance-optimised websites that work as your 24/7 salesperson.",
    includes: [
      "UX/UI design (wireframes to high-fidelity)",
      "Development (React, WordPress, Shopify, custom)",
      "Conversion elements (landing pages, forms, booking flows)",
      "Post-launch support & performance optimisation",
    ],
    cta: "Book a Website Review Call",
  },
  {
    slug: "seo-geo",
    icon: Search,
    title: "SEO & GEO Services",
    description:
      "We grow organic visibility through technical SEO, content strategy, and AI-ready structuring so your brand appears in traditional search and modern discovery journeys. From fixing technical issues to creating content that ranks, we help your business get found by the people who are actively searching for what you offer.",
    includes: [
      "Technical SEO audit & fixes",
      "Content strategy (topic clusters, landing pages, FAQs)",
      "Local SEO & GEO foundations",
      "Reporting & iteration (rankings, conversions, next actions)",
    ],
    cta: "Request an SEO Audit",
  },
  {
    slug: "photo-video",
    icon: Camera,
    title: "Photography & Video",
    description:
      "We produce photo and video content built for today's platforms — fast hooks, strong framing, and storytelling that makes people pause, watch, and trust your brand. From product photography and lifestyle shoots to video reels and ad creatives, every asset we produce has a strategic purpose behind it.",
    includes: [
      "Creative direction (concepts, scripts, shot lists, moodboards)",
      "Production (on-site shoots, product + lifestyle, reels)",
      "Editing (ads + organic cuts, captions, motion text)",
      "Asset library delivery (organised, named, ready to use)",
    ],
    cta: "Get a Production Quote",
  },
  {
    slug: "event-management",
    icon: CalendarDays,
    title: "Event Management",
    description:
      "From planning to execution to post-event content, we manage events that feel premium, stay on schedule, and generate marketing value beyond the day itself. We handle logistics, branding, promotion, and coverage so you can focus on your audience.",
    includes: [
      "Event planning (timeline, vendors, budget, logistics)",
      "Brand experience design (stage visuals, signage, photo moments)",
      "Promotion support (social rollout, registration funnels)",
      "Coverage & recap content (photo/video highlights)",
    ],
    cta: "Plan an Event With Us",
  },
  {
    slug: "email-marketing",
    icon: Mail,
    title: "Email Marketing",
    description:
      "Email becomes powerful when it's structured. We create campaigns and automations that drive repeat sales and consistent conversions. From welcome sequences and abandoned cart flows to promotional campaigns and newsletters, we make sure your email list works for you around the clock.",
    includes: [
      "Strategy & segmentation",
      "Automation flows (welcome, nurture, winback, promos)",
      "Campaign creation (copy, design, testing)",
      "Reporting & optimisation (open rate, CTR, revenue)",
    ],
    cta: "Audit My Email Funnel",
  },
  {
    slug: "3d-animation",
    icon: Box,
    title: "3D Animation",
    description:
      "We create high-quality 3D visuals and animations that explain products, elevate brand perception, and produce scroll-stopping content for ads and social media. Whether it's a product showcase, explainer animation, or branded visual, 3D content instantly sets you apart.",
    includes: [
      "Concepting (style frames, storyboard, motion direction)",
      "3D modelling & rendering",
      "Animation (short ads, explainers, loops)",
      "Final delivery pack (multiple formats & aspect ratios)",
    ],
    cta: "Get a 3D Concept Proposal",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Services — Mimik Creations</title>
        <meta name="description" content="Full-service creative solutions: social media marketing, performance marketing, branding, web development, SEO, photography, video, events, email, and 3D animation." />
        <meta property="og:title" content="Our Services — Mimik Creations" />
        <meta property="og:description" content="Full-service creative solutions: social media marketing, performance marketing, branding, web development, SEO, photography, video, events, email, and 3D animation." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://mimikcreations.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mimikcreations.com/services" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden" style={{ backgroundColor: "#0147D3" }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0147D3] to-[#1D3FC1]" />
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full border border-white/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto mb-10"
          >
            Full-service creative solutions tailored to elevate your brand and drive business growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-colors"
              style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      <main className="flex-1">
        {services.map((service, index) => {
          const isAlt = index % 2 !== 0;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className="py-20 scroll-mt-20"
              style={{ backgroundColor: isAlt ? "#f3f4f8" : "#ffffff" }}
            >
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Icon + Label */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#FDD51E" }}
                      >
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <span
                        className="text-sm font-semibold uppercase tracking-wider"
                        style={{ color: "#1D3FC1" }}
                      >
                        Service {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* What's Included */}
                    <div className="mb-8">
                      <h3
                        className="text-sm font-bold uppercase tracking-wider mb-4"
                        style={{ color: "#1D3FC1" }}
                      >
                        What's Included
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.includes.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle2
                              className="w-5 h-5 mt-0.5 flex-shrink-0"
                              style={{ color: "#FDD51E" }}
                            />
                            <span className="text-foreground font-medium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap items-center gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-colors"
                        style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
                      >
                        {service.cta}
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link
                        to={`/our-work?filter=${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
                        style={{ color: "#1D3FC1" }}
                      >
                        View Related Work
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        })}
      </main>

      {/* CTA Banner */}
      <section className="py-20" style={{ backgroundColor: "#273a62" }}>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Ready to elevate your brand?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
              Let's talk about how Mimik Creations can help you stand out.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-xl transition-colors"
              style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
            >
              Book a Call
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
