import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Target, Users, Globe, Trophy,
  Lightbulb, Handshake, Layers, Sparkles,
  Search, Paintbrush, Rocket, BarChart3,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { icon: Target, target: 100, suffix: "+", label: "Completed Projects" },
  { icon: Users, target: 50, suffix: "+", label: "Trusted Clients" },
  { icon: Globe, target: 10, suffix: "", label: "Countries" },
  { icon: Trophy, target: 2023, suffix: "", label: "Since" },
];

const CountUp = ({
  target,
  suffix = "",
  duration = 1600,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const differentiators = [
  {
    icon: Paintbrush,
    title: "Creative-First Approach",
    description:
      "We lead with visuals that impress, then build the strategy around them. Your brand's first impression matters. We make it count.",
  },
  {
    icon: Globe,
    title: "Global Reach, Boutique Service",
    description:
      "We serve clients across 10 countries but keep our team lean. You get direct access to senior talent, not layers of account managers.",
  },
  {
    icon: Handshake,
    title: "Partnership Over Transactions",
    description:
      "We don't just deliver and disappear. We embed into your growth, iterating with you as your business evolves.",
  },
  {
    icon: Layers,
    title: "Full-Suite Creative",
    description:
      "From brand identity to web development, social media to event management. One team, one vision, consistent execution across every channel.",
  },
];

const process = [
  {
    step: "01",
    icon: Search,
    title: "Discover",
    description:
      "We learn your business, audience, and goals. We audit what exists and identify the gaps.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Create",
    description:
      "Our team designs, builds, and produces, from brand assets to campaigns to websites. Everything is crafted with intention.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Launch",
    description:
      "We go live with your campaigns, content, or website. Real-time monitoring from day one.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Optimise",
    description:
      "We measure what works, iterate on what doesn't, and scale the wins. Growth is ongoing, not one-time.",
  },
];

const About = () => {
  const [storyExpanded, setStoryExpanded] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Mimik Creations | Our Story & Team</title>
        <meta name="description" content="Mimik Creations is a creative marketing agency in Colombo, Sri Lanka. 100+ projects, 50+ clients, 10 countries since 2023. Branding, web, social media." />
        <meta property="og:title" content="About Mimik Creations | Our Story & Team" />
        <meta property="og:description" content="Mimik Creations is a creative marketing agency in Colombo, Sri Lanka. 100+ projects, 50+ clients, 10 countries since 2023. Branding, web, social media." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://mimikcreations.com/about" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mimikcreations.com/about" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-10 pb-10 md:pt-32 md:pb-24 overflow-hidden"
        style={{ backgroundColor: "#0147D3" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0147D3] to-[#1D3FC1]" />
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md backdrop-saturate-[1.8] border border-white/10 text-white text-sm font-semibold mb-6"
          >
            Who We Are
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-7xl font-display font-extrabold text-white mb-4 md:mb-6"
          >
            We Build Brands That Compete Globally
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-xl text-white/80 max-w-2xl mx-auto"
          >
            A creative digital marketing agency based in Colombo, working with ambitious businesses worldwide.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-block px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm rounded-full font-semibold mb-4 md:mb-6"
                style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
              >
                Our Story
              </span>
              <h2 className="text-xl md:text-4xl font-display font-bold text-foreground mb-4 md:mb-8">
                Born from a big idea in{" "}
                <span style={{ color: "#1D3FC1" }}>Colombo</span>
              </h2>
              <div className={`space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed overflow-hidden ${storyExpanded ? "" : "line-clamp-[10] md:line-clamp-none"}`}>
                <p>Mimik Creations is a creative digital marketing agency based in Colombo, Sri Lanka, working with ambitious businesses across the UK, Europe, UAE, Canada, USA, and Australia.</p>
                <p>We specialize in brand identity, website development, and performance-driven digital marketing. Our team combines creative strategy with hands-on execution, from designing brand systems and building high-converting websites to managing social media, running ad campaigns, and producing content that actually drives results.</p>
                <p>Since 2023, we have delivered over 100 projects for 50+ clients across 10 countries. Our clients range from aesthetic clinics in London to sports tournaments in Dubai, tech startups in Canada, and FMCG brands across Asia.</p>
                <p>We are not a massive agency with layers of account managers. When you work with us, you work with the people doing the work. That means faster turnaround, direct communication, and a team that genuinely cares about your growth.</p>
                <p>Our approach is simple: creative-first, results-always. We lead with design that makes people stop scrolling, backed by strategy that turns attention into action.</p>
              </div>
              <button
                onClick={() => setStoryExpanded(!storyExpanded)}
                className="mt-3 text-sm font-semibold md:hidden"
                style={{ color: "#1D3FC1" }}
              >
                {storyExpanded ? "Read less ↑" : "Read more ↓"}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-10 md:py-20" style={{ backgroundColor: "#0147D3" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4"
                  style={{ backgroundColor: "rgba(253,213,30,0.2)" }}
                >
                  <stat.icon className="w-5 h-5 md:w-7 md:h-7" style={{ color: "#FDD51E" }} />
                </div>
                <div className="text-3xl md:text-5xl font-display font-extrabold text-white mb-1 md:mb-2">
                  {stat.label === "Since" ? (
                    <span>2023</span>
                  ) : (
                    <CountUp target={stat.target} suffix={stat.suffix} />
                  )}
                </div>
                <p className="text-xs md:text-base text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mimik */}
      <section className="py-10 md:py-24" style={{ backgroundColor: "#f3f4f8" }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <span
              className="inline-block px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm rounded-full font-semibold mb-4 md:mb-6"
              style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
            >
              Why Choose Us
            </span>
            <h2 className="text-xl md:text-5xl font-display font-bold text-foreground mb-4">
              Why <span style={{ color: "#1D3FC1" }}>Mimik Creations?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 md:p-8 rounded-3xl bg-white border border-border hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6"
                  style={{ backgroundColor: "#FDD51E" }}
                >
                  <item.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-base md:text-xl font-display font-bold text-foreground mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-10 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <span
              className="inline-block px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm rounded-full font-semibold mb-4 md:mb-6"
              style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
            >
              Our Process
            </span>
            <h2 className="text-xl md:text-5xl font-display font-bold text-foreground mb-4">
              How We <span style={{ color: "#1D3FC1" }}>Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center bg-white/60 rounded-2xl p-4 md:bg-transparent md:rounded-none md:p-0"
              >
                {/* Connector line (hidden on mobile) */}
                {index < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px"
                    style={{ backgroundColor: "#FDD51E", opacity: 0.4 }}
                  />
                )}
                <div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 relative z-10"
                  style={{ backgroundColor: "#0147D3" }}
                >
                  <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div
                  className="text-[10px] md:text-xs font-bold tracking-widest mb-1.5 md:mb-2"
                  style={{ color: "#FDD51E" }}
                >
                  {step.step}
                </div>
                <h3 className="text-sm md:text-lg font-display font-bold text-foreground mb-1 md:mb-2">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20" style={{ backgroundColor: "#273a62" }}>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-4 md:mb-6" style={{ color: "#FDD51E" }} />
            <h2 className="text-xl md:text-5xl font-display font-bold text-white mb-3 md:mb-4">
              Want to work with us?
            </h2>
            <p className="text-sm md:text-xl text-white/70 mb-6 md:mb-10 max-w-xl mx-auto">
              Let's talk about what you're building and how we can help.
            </p>
            <div className="flex flex-row flex-wrap gap-3 justify-center md:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-10 md:py-5 rounded-full font-bold text-sm md:text-xl transition-colors"
                style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
              >
                Book a Call
                <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-10 md:py-5 rounded-full border-2 border-white/30 text-white font-bold text-sm md:text-xl hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
