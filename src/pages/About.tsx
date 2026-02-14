import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Target, Users, Globe, Trophy,
  Lightbulb, Handshake, Layers, Sparkles,
  Search, Paintbrush, Rocket, BarChart3,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { icon: Target, number: "100+", label: "Completed Projects" },
  { icon: Users, number: "50+", label: "Trusted Clients" },
  { icon: Globe, number: "10", label: "Countries" },
  { icon: Trophy, number: "7", label: "Team Members" },
];

const differentiators = [
  {
    icon: Paintbrush,
    title: "Creative-First Approach",
    description:
      "We lead with visuals that impress, then build the strategy around them. Your brand's first impression matters — we make it count.",
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
      "From brand identity to web development, social media to event management — one team, one vision, consistent execution across every channel.",
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
      "Our team designs, builds, and produces — from brand assets to campaigns to websites. Everything is crafted with intention.",
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
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
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
            className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-6"
          >
            Who We Are
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-extrabold text-white mb-6"
          >
            About Mimik Creations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            A creative marketing agency building lasting partnerships since 2023.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
              >
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
                Born from a big idea in{" "}
                <span style={{ color: "#1D3FC1" }}>Colombo</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Born in 2023 with a vision to bridge creative excellence and business growth,
                  Mimik Creations is a full-service creative marketing agency based in Colombo,
                  Sri Lanka. What started as a small team with big ideas has grown into a trusted
                  partner for over 50 clients across 10 countries — from London and Dubai to
                  Toronto and beyond.
                </p>
                <p>
                  We believe that great marketing starts with great creative. Our approach is
                  simple: Impress first, create interest, then let the work speak for itself.
                  Every brand deserves to stand out, and we make sure ours do.
                </p>
                <p>
                  Our 7-person team brings together expertise in branding, web development,
                  social media, performance marketing, photography, video production, event
                  management, and 3D animation. We're not a huge agency — and that's our
                  strength. You get direct access to senior talent, faster turnaround, and a
                  partnership that genuinely cares about your growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-20" style={{ backgroundColor: "#0147D3" }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(253,213,30,0.2)" }}
                >
                  <stat.icon className="w-7 h-7" style={{ color: "#FDD51E" }} />
                </div>
                <div className="text-5xl font-display font-extrabold text-white mb-2">
                  {stat.number}
                </div>
                <p className="text-white/70 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mimik */}
      <section className="py-24" style={{ backgroundColor: "#f3f4f8" }}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
            >
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Why <span style={{ color: "#1D3FC1" }}>Mimik Creations?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-border hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "#FDD51E" }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
            >
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              How We <span style={{ color: "#1D3FC1" }}>Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative text-center"
              >
                {/* Connector line (hidden on mobile) */}
                {index < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px"
                    style={{ backgroundColor: "#FDD51E", opacity: 0.4 }}
                  />
                )}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10"
                  style={{ backgroundColor: "#0147D3" }}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div
                  className="text-xs font-bold tracking-widest mb-2"
                  style={{ color: "#FDD51E" }}
                >
                  {step.step}
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: "#273a62" }}>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-10 h-10 mx-auto mb-6" style={{ color: "#FDD51E" }} />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Want to work with us?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
              Let's talk about what you're building and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-xl transition-colors"
                style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
              >
                Book a Call
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border-2 border-white/30 text-white font-bold text-xl hover:bg-white/10 transition-colors"
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
