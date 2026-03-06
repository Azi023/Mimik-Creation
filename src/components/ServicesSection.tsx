import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { activeServices } from "@/data/services";
import GlassBackground from "@/components/GlassBackground";

const ServicesSection = () => {
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

        {/*
         * Link IS the grid item — no motion.div wrapper.
         * Grid stretch sets each Link's height to the tallest card in the row.
         * flex-col on Link + flexGrow:1 on description pins Learn More to bottom.
         */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 md:items-stretch">
          {activeServices.map((service) => (
            <Link
              key={service.slug}
              to={`/services#${service.slug}`}
              className="group flex flex-col h-full cursor-pointer p-3 md:p-8 rounded-3xl bg-white/60 backdrop-blur-md backdrop-saturate-[1.8] border border-white/10 shadow-xl shadow-black/5 hover:bg-white/75 hover:shadow-2xl transition-all duration-300 md:hover:-translate-y-2 active:translate-y-0 touch-manipulation"
            >
              {/* Mobile: single row — icon | title | chevron */}
              <div className="flex flex-row items-center gap-3 md:hidden">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-mimik-yellow">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-display font-bold text-foreground flex-1">{service.title}</h3>
                <ChevronRight className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
              </div>

              {/* Desktop: icon+title row → description (grows) → Learn More */}
              <div className="hidden md:flex flex-col flex-1">
                {/* Icon + Title — same row */}
                <div className="flex flex-row items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-mimik-yellow">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg leading-snug">
                    {service.title}
                  </h3>
                </div>
                {/* Description — grows to fill space */}
                <p
                  className="text-sm text-muted-foreground leading-relaxed"
                  style={{ flexGrow: 1 }}
                >
                  {service.description}
                </p>
                {/* Learn More */}
                <div
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-4 transition-all"
                  style={{ color: "#1D3FC1" }}
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
