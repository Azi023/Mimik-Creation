import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { activeServices } from "@/data/services";
import GlassBackground from "@/components/GlassBackground";
import { useIsMobile } from "@/hooks/use-mobile";

const ServicesSection = () => {
  const isMobile = useIsMobile();
  return (
    <section id="services" className="py-8 md:py-24 bg-mimik-light relative overflow-hidden">
      <GlassBackground variant="light" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm rounded-full bg-primary/10 text-primary font-semibold mb-4 md:mb-6">
            Our Services
          </span>
          <h2 className="text-xl md:text-5xl font-display font-bold text-foreground mb-4">
            What We <span style={{ color: "#1D3FC1" }}>Do Best</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-service creative solutions tailored to elevate your brand and drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {activeServices.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services#${service.slug}`}
              className="group flex flex-col cursor-pointer"
            >
              <motion.div
                {...(isMobile ? {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: index * 0.07 },
                } : {})}
                className="flex flex-col flex-1"
              >
              {/* Card: flex-row on mobile (icon | title | chevron), flex-col on desktop */}
              <div className="flex flex-row items-center gap-3 p-3 md:flex-col md:items-start md:gap-0 md:p-8 rounded-3xl bg-white/60 backdrop-blur-md backdrop-saturate-[1.8] border border-white/10 shadow-xl shadow-black/5 hover:bg-white/75 hover:shadow-2xl transition-all duration-300 h-full md:hover:-translate-y-2 active:translate-y-0 touch-manipulation">
                {/* Icon */}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-mimik-yellow md:mb-6">
                  <service.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                {/* Title: grows to fill remaining row width on mobile */}
                <h3 className="text-sm font-semibold flex-1 md:flex-none md:text-xl font-display font-bold text-foreground">
                  {service.title}
                </h3>
                {/* Chevron: mobile only, appears at end of row */}
                <ChevronRight className="w-4 h-4 md:hidden flex-shrink-0 text-muted-foreground" />
                {/* Description: HIDDEN on mobile */}
                <p className="hidden md:block text-sm md:text-base text-muted-foreground mt-3 mb-4 flex-1 line-clamp-3">
                  {service.description}
                </p>
                {/* Learn More: HIDDEN on mobile */}
                <div
                  className="hidden md:inline-flex items-center gap-2 text-sm md:text-base font-semibold group-hover:gap-4 transition-all"
                  style={{ color: "#1D3FC1" }}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
