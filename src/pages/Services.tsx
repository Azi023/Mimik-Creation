import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { activeServices } from "@/data/services";

const cardColors = [
  { bg: "#ffffff", accent: "#0147D3" },
  { bg: "#f3f4f8", accent: "#1D3FC1" },
  { bg: "#ffffff", accent: "#0147D3" },
  { bg: "#f3f4f8", accent: "#1D3FC1" },
  { bg: "#ffffff", accent: "#0147D3" },
  { bg: "#f3f4f8", accent: "#1D3FC1" },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Services | Mimik Creations</title>
        <meta name="description" content="Full-service creative solutions: social media marketing, performance marketing, branding, web development, photography, video, and event design." />
        <meta property="og:title" content="Our Services | Mimik Creations" />
        <meta property="og:description" content="Full-service creative solutions: social media marketing, performance marketing, branding, web development, photography, video, and event design." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://mimikcreations.com/services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mimikcreations.com/services" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden" style={{ backgroundColor: "#0147D3" }}>
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
            className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md backdrop-saturate-[1.8] border border-white/10 text-white text-sm font-semibold mb-6"
          >
            What We Offer
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-7xl font-display font-extrabold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-10"
          >
            Full-service creative solutions tailored to elevate your brand and drive business growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-row flex-wrap gap-3 justify-center"
          >
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg transition-colors"
              style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
            >
              View Our Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 rounded-full border-2 border-white/40 text-white font-bold text-sm md:text-lg hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stacking Service Cards */}
      <main className="flex-1 py-6 md:py-20" style={{ backgroundColor: "#f3f4f8" }}>
        {activeServices.map((service, index) => {
          const colors = cardColors[index % cardColors.length];
          return (
            <div
              key={service.slug}
              id={service.slug}
              className="md:sticky scroll-mt-20 px-4 md:px-6 pb-6 md:pb-8"
              style={{
                top: `${64 + index * 16}px`,
                zIndex: index + 1,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto rounded-3xl shadow-xl border border-border overflow-hidden"
                style={{ backgroundColor: colors.bg }}
              >
                <div className="p-4 md:p-8 lg:p-12">
                  <div className="flex flex-col md:flex-row gap-0 md:gap-12">
                    {/* Mobile header row: icon | title | number */}
                    <div className="flex items-center gap-2 mb-3 md:hidden">
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#FDD51E" }}
                      >
                        <service.icon className="w-4 h-4 text-white" />
                      </div>
                      <h2 className="text-sm font-display font-bold text-foreground flex-1 min-w-0 leading-tight line-clamp-2 px-1">
                        {service.title}
                      </h2>
                      <span
                        className="text-3xl font-black leading-none select-none flex-shrink-0"
                        style={{ color: colors.accent, opacity: 0.15 }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Desktop left column: number + icon */}
                    <div className="hidden md:flex flex-col items-start gap-6 mb-0 flex-shrink-0">
                      <span
                        className="text-5xl lg:text-8xl font-black leading-none select-none"
                        style={{ color: colors.accent, opacity: 0.15 }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: "#FDD51E" }}
                      >
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 min-w-0">
                      <h2 className="hidden md:block text-3xl font-display font-bold text-foreground mb-3">
                        {service.title}
                      </h2>

                      <p className="text-xs md:text-base text-muted-foreground mb-4 md:mb-5 leading-relaxed line-clamp-2 md:line-clamp-none">
                        {service.fullDescription}
                      </p>

                      {/* What's Included — hidden on mobile to reduce card height */}
                      <div className="hidden md:block mb-6">
                        <h3
                          className="text-xs font-bold uppercase tracking-wider mb-3"
                          style={{ color: "#1D3FC1" }}
                        >
                          What's Included
                        </h3>
                        <ul className="grid sm:grid-cols-2 gap-2.5">
                          {service.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2.5">
                              <CheckCircle2
                                className="w-4.5 h-4.5 mt-0.5 flex-shrink-0"
                                style={{ color: "#FDD51E" }}
                              />
                              <span className="text-sm text-foreground font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-row flex-wrap items-center gap-x-3 gap-y-2 mt-4 md:gap-4">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-6 md:py-3 rounded-full font-bold text-xs md:text-sm transition-colors whitespace-nowrap"
                          style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
                        >
                          {service.cta}
                          <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        </Link>
                        <Link
                          to={`/our-work?filter=${service.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold transition-colors hover:underline whitespace-nowrap"
                          style={{ color: "#1D3FC1" }}
                        >
                          View Related Work
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
        {/* Spacer so the last card has room to unstick */}
        <div className="h-4 md:h-32" />
      </main>

      {/* CTA Banner */}
      <section className="py-8 md:py-20" style={{ backgroundColor: "#273a62" }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-5xl font-display font-bold text-white mb-4">
              Ready to elevate your brand?
            </h2>
            <p className="text-sm md:text-xl text-white/70 mb-6 md:mb-10 max-w-xl mx-auto">
              Let's talk about how Mimik Creations can help you stand out.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-10 md:py-5 rounded-full font-bold text-sm md:text-xl transition-colors"
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
