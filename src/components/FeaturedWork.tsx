import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import ImageCrossfade from "./ImageCrossfade";

const gradients = [
  "from-[#273a62] to-[#0147D3]",   // Glo2Go
  "from-[#1D3FC1] to-[#0147D3]",   // SLPL UAE
  "from-[#273a62] to-[#1D3FC1]",   // BFresh
];

const featured = caseStudies.filter((cs) => cs.featured);

const FeaturedWork = () => {
  return (
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
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            See How We've Helped Brands{" "}
            <span style={{ color: "#1D3FC1" }}>Stand Out</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proof, not promises. A selection of client work that speaks for itself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((cs, index) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group bg-white rounded-3xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Card image */}
              <div className="h-48 relative">
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
                    <span className="text-xl font-display font-extrabold text-white/20 select-none px-4 text-center">
                      {cs.client}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Location */}
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>{cs.location}</span>
                </div>

                {/* Client name */}
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {cs.client}
                </h3>

                {/* Summary */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {cs.summary}
                </p>

                {/* Tag pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {cs.tagLabels.slice(0, 3).map((label) => (
                    <span
                      key={label}
                      className="px-2.5 py-1 rounded-full text-xs font-semibold"
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-colors"
            style={{ backgroundColor: "#0147D3", color: "#ffffff" }}
          >
            View All Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;
