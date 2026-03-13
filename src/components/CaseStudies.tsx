import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import projectBranding from "@/assets/project-branding.webp";
import projectPhotography from "@/assets/project-photography.webp";
import projectWeb from "@/assets/project-web.webp";
import projectPackaging from "@/assets/project-packaging.webp";

const caseStudies = [
  {
    title: "Luxe Beauty Rebrand",
    client: "Luxe Cosmetics",
    category: "Branding",
    description: "Complete brand transformation that increased market share by 45% within 6 months.",
    image: projectBranding,
    results: ["45% Market Growth", "2M+ Social Reach", "Brand of the Year Award"],
  },
  {
    title: "E-commerce Platform",
    client: "TechStart Inc",
    category: "Web Development",
    description: "Built a high-converting e-commerce platform with seamless UX that doubled online sales.",
    image: projectWeb,
    results: ["200% Sales Increase", "3s Load Time", "98% Uptime"],
  },
  {
    title: "Product Photography",
    client: "Elegance Beauty",
    category: "Photography",
    description: "Premium product photography that elevated the brand's visual presence across all channels.",
    image: projectPhotography,
    results: ["50+ Products Shot", "5x Engagement", "Featured in Vogue"],
  },
  {
    title: "Premium Packaging Design",
    client: "Heritage Spirits",
    category: "Packaging",
    description: "Luxury packaging design that positioned the brand as a premium market leader.",
    image: projectPackaging,
    results: ["3 Design Awards", "Premium Tier", "Global Distribution"],
  },
];

const CaseStudies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Success <span className="text-primary">Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Real results for real brands. Explore how we've helped businesses transform and grow.
            </p>
          </motion.div>

          <div className="flex gap-4 mt-6 md:mt-0">
            <motion.button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide px-6 pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        <div className="w-6 flex-shrink-0" /> {/* Spacer */}
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.title}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-[350px] md:w-[450px] scroll-snap-align-start"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="rounded-3xl overflow-hidden bg-card border border-border group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-semibold text-sm">
                    {study.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-primary font-semibold text-sm mb-2">{study.client}</p>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <div className="flex flex-wrap gap-2">
                  {study.results.map((result) => (
                    <span
                      key={result}
                      className="px-3 py-1 rounded-full bg-muted text-sm font-medium text-foreground"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <div className="w-6 flex-shrink-0" /> {/* Spacer */}
      </div>
    </section>
  );
};

export default CaseStudies;
