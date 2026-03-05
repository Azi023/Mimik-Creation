import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import { filterCategories } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImageCrossfade from "@/components/ImageCrossfade";

// Gradient colours cycling per card for the placeholder image area
const gradients = [
  "from-[#0147D3] to-[#273a62]",
  "from-[#273a62] to-[#1D3FC1]",
  "from-[#1D3FC1] to-[#0147D3]",
  "from-[#273a62] to-[#0147D3]",
  "from-[#0147D3] to-[#1D3FC1]",
  "from-[#1D3FC1] to-[#273a62]",
];

const OurWork = () => {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("all");

  // Read ?filter= param on mount
  useEffect(() => {
    const filterParam = searchParams.get("filter");
    if (filterParam) {
      const valid = filterCategories.find((c) => c.slug === filterParam);
      if (valid) setActiveFilter(filterParam);
    }
  }, [searchParams]);

  const filtered =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.tags.includes(activeFilter));

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Work | Portfolio | Mimik Creations</title>
        <meta name="description" content="See how we've helped brands stand out. Explore our portfolio of social media, branding, web development, event management, and creative projects." />
        <meta property="og:title" content="Our Work | Portfolio | Mimik Creations" />
        <meta property="og:description" content="See how we've helped brands stand out. Explore our portfolio of social media, branding, web development, event management, and creative projects." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://mimikcreations.com/our-work" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://mimikcreations.com/our-work" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
        style={{ backgroundColor: "#0147D3" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0147D3] to-[#1D3FC1]" />
        <motion.div
          className="absolute top-10 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md backdrop-saturate-[1.8] border border-white/10 text-white text-sm font-semibold mb-6"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-7xl font-display font-extrabold text-white mb-4 md:mb-6"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-xl text-white/80 max-w-2xl mx-auto mb-6 md:mb-10"
          >
            Proof, not promises. See how we've helped brands across 10 countries stand out and grow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg bg-mimik-yellow text-mimik-darker"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {filterCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveFilter(cat.slug)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 border backdrop-blur-md backdrop-saturate-[1.8] ${
                  activeFilter === cat.slug
                    ? "bg-mimik-yellow/90 text-mimik-darker border-mimik-yellow/50 shadow-sm"
                    : "bg-white/60 text-mimik-slate border-gray-200/50 hover:bg-white/80 hover:border-mimik-lime/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Grid */}
      <main className="flex-1 py-8 md:py-16" style={{ backgroundColor: "#f3f4f8" }}>
        <div className="container mx-auto px-4 md:px-6">
          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <p className="text-2xl font-display font-bold text-foreground mb-2">
                  No projects in this category yet.
                </p>
                <p className="text-muted-foreground mb-6">Check back soon!</p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="px-6 py-3 rounded-full font-semibold text-white bg-mimik-blue"
                >
                  View All Work
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6"
              >
                {filtered.map((cs, index) => (
                  <motion.div
                    key={cs.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="group bg-white/80 backdrop-blur-md backdrop-saturate-[1.8] rounded-3xl overflow-hidden border border-gray-200/50 shadow-xl shadow-black/5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Card image */}
                    <div className="aspect-[4/3] relative">
                      {cs.images && cs.images.length > 1 ? (
                        <ImageCrossfade
                          images={cs.images}
                          alt={cs.client}
                          className="w-full h-full"
                          startIndex={index}
                        />
                      ) : cs.coverImage ? (
                        <img
                          src={cs.coverImage}
                          alt={cs.client}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div
                          className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}
                        >
                          <span className="text-2xl font-display font-extrabold text-white/20 select-none">
                            {cs.client}
                          </span>
                        </div>
                      )}
                      {cs.websiteUrl && (
                        <a
                          href={cs.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md backdrop-saturate-[1.8] border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          title="Visit site"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </a>
                      )}
                    </div>

                    <div className="p-3 md:p-6">
                      {/* Location */}
                      <div className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                        <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 flex-shrink-0" />
                        <span>{cs.location}</span>
                      </div>

                      {/* Client name */}
                      <h3 className="text-base md:text-xl font-display font-bold text-foreground mb-1.5 md:mb-2">
                        {cs.client}
                      </h3>

                      {/* Summary */}
                      <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 line-clamp-2">
                        {cs.summary}
                      </p>

                      {/* Tag pills (max 3) */}
                      <div className="flex flex-wrap gap-1 mb-3 md:mb-5">
                        {cs.tagLabels.slice(0, 3).map((label) => (
                          <span
                            key={label}
                            className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold"
                            style={{ backgroundColor: "#f3f4f8", color: "#273a62" }}
                          >
                            {label}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        to={`/our-work/${cs.id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                        style={{ color: "#1D3FC1" }}
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* CTA Banner */}
      <section className="py-8 md:py-20 bg-mimik-slate">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-5xl font-display font-bold text-white mb-4">
              Have a project in mind? Let's talk.
            </h2>
            <p className="text-sm md:text-xl text-white/70 mb-6 md:mb-10 max-w-xl mx-auto">
              Join our growing portfolio of brands built to stand out.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-10 md:py-5 rounded-full font-bold text-sm md:text-xl bg-mimik-yellow text-mimik-darker"
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

export default OurWork;
