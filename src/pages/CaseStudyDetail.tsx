import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  MapPin, Globe, CheckCircle2, ArrowLeft, ArrowRight, ExternalLink,
} from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { caseStudies } from "@/data/caseStudies";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const gradients = [
  "from-[#0147D3] to-[#273a62]",
  "from-[#273a62] to-[#1D3FC1]",
  "from-[#1D3FC1] to-[#0147D3]",
  "from-[#273a62] to-[#0147D3]",
  "from-[#0147D3] to-[#1D3FC1]",
  "from-[#1D3FC1] to-[#273a62]",
];

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const currentIndex = caseStudies.findIndex((cs) => cs.id === id);
  const cs = currentIndex !== -1 ? caseStudies[currentIndex] : null;

  // Next/prev navigation (wraps around)
  const nextIndex = currentIndex !== -1 ? (currentIndex + 1) % caseStudies.length : 0;
  const nextCs = caseStudies[nextIndex];

  if (!cs) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center py-32 px-6 text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            We couldn't find a project with that ID.
          </p>
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white"
            style={{ backgroundColor: "#0147D3" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Work
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const cardGradient = gradients[currentIndex % gradients.length];

  const metaDescription = cs.description.slice(0, 155);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{cs.client} — Case Study | Mimik Creations</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={`${cs.client} — Case Study | Mimik Creations`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content={`https://mimikcreations.com/our-work/${cs.id}`} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://mimikcreations.com/our-work/${cs.id}`} />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-24 overflow-hidden"
        style={cs.coverImage
          ? { backgroundImage: `url(${cs.coverImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : { backgroundColor: "#0147D3" }
        }
      >
        <div className={cs.coverImage
          ? "absolute inset-0 bg-gradient-to-b from-[#0147D3]/90 to-[#08113a]/95"
          : `absolute inset-0 bg-gradient-to-br ${cardGradient}`
        } />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Our Work
            </Link>

            {/* Industry pill */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold">
                {cs.industry}
              </span>
              {cs.tagLabels.map((label) => (
                <span
                  key={label}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
                >
                  {label}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-4">
              {cs.client}
            </h1>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-4 h-4" />
              <span className="text-lg">{cs.location}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
            {/* Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
                >
                  Overview
                </span>
                <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                  About This Project
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {cs.description}
                </p>
              </motion.div>
            </div>

            {/* Side panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-3xl border border-border h-fit"
              style={{ backgroundColor: "#f3f4f8" }}
            >
              <h3 className="font-display font-bold text-lg text-foreground mb-5">
                Quick Facts
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Location
                  </p>
                  <p className="font-medium text-foreground">{cs.location}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    Industry
                  </p>
                  <p className="font-medium text-foreground">{cs.industry}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Services Provided
                  </p>
                  <ul className="space-y-1">
                    {cs.services.map((s) => (
                      <li key={s} className="text-sm text-foreground flex items-start gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: "#FDD51E" }}
                        />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                {cs.websiteUrl && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      Website
                    </p>
                    <a
                      href={cs.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
                      style={{ color: "#1D3FC1" }}
                    >
                      <Globe className="w-4 h-4" />
                      Visit Site
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      {cs.challenge && (
        <section className="py-16" style={{ backgroundColor: "#f3f4f8" }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#1D3FC1" }}
              >
                The Challenge
              </span>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                What the Client Needed
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{cs.challenge}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Solution */}
      {cs.solution && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#1D3FC1" }}
              >
                Our Solution
              </span>
              <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                How We Solved It
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{cs.solution}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* What We Delivered */}
      <section className="py-16" style={{ backgroundColor: "#f3f4f8" }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#1D3FC1" }}
            >
              Deliverables
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              What We Delivered
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {cs.services.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "#FDD51E" }}
                  />
                  <span className="text-foreground font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      {cs.results && cs.results.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
                style={{ color: "#1D3FC1" }}
              >
                Outcomes
              </span>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Results
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cs.results.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-5 rounded-2xl border border-border"
                    style={{ backgroundColor: "#f3f4f8" }}
                  >
                    <div
                      className="w-8 h-1 rounded-full mb-3"
                      style={{ backgroundColor: "#FDD51E" }}
                    />
                    <p className="text-sm font-medium text-foreground">{r}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Image Gallery */}
      <section className="py-16" style={{ backgroundColor: "#f3f4f8" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: "#1D3FC1" }}
            >
              Gallery
            </span>
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">
              Project Gallery
            </h2>
            {cs.images && cs.images.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {cs.images.map((img, i) => (
                    <motion.button
                      key={i}
                      onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                      className="relative group overflow-hidden rounded-xl bg-white border border-border cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <img
                        src={img}
                        alt={`${cs.client} project ${i + 1}`}
                        className="w-full h-56 object-contain p-2"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl" />
                    </motion.button>
                  ))}
                </div>
                <Lightbox
                  open={lightboxOpen}
                  close={() => setLightboxOpen(false)}
                  index={lightboxIndex}
                  slides={cs.images.map((src) => ({ src }))}
                />
              </>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-40 rounded-2xl bg-gradient-to-br ${gradients[(currentIndex + i) % gradients.length]} flex items-center justify-center`}
                  >
                    <span className="text-white/30 text-xs font-medium">Images coming soon</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Navigation: Prev / Next */}
      <section className="py-12 bg-white border-t border-border">
        <div className="container mx-auto px-6 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 font-semibold transition-colors hover:underline"
            style={{ color: "#1D3FC1" }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Our Work
          </Link>

          <Link
            to={`/our-work/${nextCs.id}`}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white transition-colors"
            style={{ backgroundColor: "#0147D3" }}
          >
            Next: {nextCs.client}
            <ArrowRight className="w-5 h-5" />
          </Link>
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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Want results like this?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-xl mx-auto">
              Let's talk about your brand and how we can help it stand out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-xl"
                style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
              >
                Book a Call
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/our-work"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full border-2 border-white/30 text-white font-bold text-xl hover:bg-white/10 transition-colors"
              >
                View More Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
