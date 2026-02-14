import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Share2,
  TrendingUp,
  Palette,
  Monitor,
  Search,
  Camera,
  CalendarDays,
  Mail,
  Box,
} from "lucide-react";

const services = [
  {
    slug: "social-media",
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "We turn your brand into a daily habit with consistent publishing, sharp storytelling, and performance-led iteration that grows attention and leads.",
  },
  {
    slug: "performance-marketing",
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Conversion-first campaigns across Google and Meta with tight tracking, strong creatives, and ongoing optimisation to maximise ROI.",
  },
  {
    slug: "branding",
    icon: Palette,
    title: "Brand Identity & Visual Design",
    description:
      "We build brands people remember — with clear positioning, premium visuals, and a system that stays consistent everywhere.",
  },
  {
    slug: "website-development",
    icon: Monitor,
    title: "Website Development",
    description:
      "Modern, fast websites that match your brand and guide visitors toward action — booking, buying, or enquiring.",
  },
  {
    slug: "seo-geo",
    icon: Search,
    title: "SEO & GEO Services",
    description:
      "We grow organic visibility through technical SEO, content strategy, and AI-ready structuring for search and discovery.",
  },
  {
    slug: "photo-video",
    icon: Camera,
    title: "Photography & Video",
    description:
      "High-quality visuals with a clear purpose — brand trust, engagement, and conversion. We plan, shoot, and edit content that works.",
  },
  {
    slug: "event-management",
    icon: CalendarDays,
    title: "Event Management",
    description:
      "Precision planning, strong brand presence, and content capture built into every event experience we manage.",
  },
  {
    slug: "email-marketing",
    icon: Mail,
    title: "Email Marketing",
    description:
      "We turn your email list into a revenue asset — with segmentation, strong messaging, and automation flows that drive repeat sales.",
  },
  {
    slug: "3d-animation",
    icon: Box,
    title: "3D Animation",
    description:
      "High-quality 3D visuals and animations that explain products, elevate perception, and produce scroll-stopping content.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            What We <span style={{ color: "#1D3FC1" }}>Do Best</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-service creative solutions tailored to elevate your brand and drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group cursor-pointer"
            >
              <div className="p-8 rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2 flex flex-col">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0"
                  style={{ backgroundColor: "#FDD51E" }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  {service.description}
                </p>
                <Link
                  to={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 font-semibold group-hover:gap-4 transition-all"
                  style={{ color: "#1D3FC1" }}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
