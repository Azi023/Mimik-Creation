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
            /*
             * md:contents — on desktop this element "disappears" from layout so
             * the Link becomes a direct grid item. Grid stretch then sets the Link's
             * height to the row height directly, no h-full chains needed.
             * On mobile it remains a real flex element with the stagger animation.
             */
            <motion.div
              key={service.slug}
              {...(isMobile ? {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: index * 0.07 },
              } : {})}
              className="flex flex-col md:contents"
            >
              <Link
                to={`/services#${service.slug}`}
                className="group flex flex-col cursor-pointer p-3 md:p-8 rounded-3xl bg-white/60 backdrop-blur-md backdrop-saturate-[1.8] border border-white/10 shadow-xl shadow-black/5 hover:bg-white/75 hover:shadow-2xl transition-all duration-300 md:hover:-translate-y-2 active:translate-y-0 touch-manipulation"
              >
                {/* Mobile: single row — icon | title | chevron */}
                <div className="flex flex-row items-center gap-3 md:hidden">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-mimik-yellow">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-display font-bold text-foreground flex-1">{service.title}</h3>
                  <ChevronRight className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                </div>

                {/* Desktop: column — icon → title → description → Learn More pinned to bottom */}
                <div className="hidden md:flex flex-col flex-1">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-mimik-yellow mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-base text-muted-foreground mb-4 line-clamp-3">{service.description}</p>
                  <div
                    className="mt-auto inline-flex items-center gap-2 text-base font-semibold group-hover:gap-4 transition-all"
                    style={{ color: "#1D3FC1" }}
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
