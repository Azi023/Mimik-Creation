import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { activeServices } from "@/data/services";
import GlassBackground from "@/components/GlassBackground";

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 md:py-24 bg-mimik-light relative overflow-hidden">
      <GlassBackground variant="light" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            What We <span style={{ color: "#1D3FC1" }}>Do Best</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-service creative solutions tailored to elevate your brand and drive business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {activeServices.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="group cursor-pointer h-full"
            >
              <div className="p-4 md:p-8 rounded-3xl bg-white/60 backdrop-blur-md backdrop-saturate-[1.8] border border-white/10 shadow-xl shadow-black/5 hover:bg-white/75 hover:shadow-2xl transition-all duration-300 h-full hover:-translate-y-2 flex flex-col">
                {/* Mobile: icon + title inline. Desktop: stacked */}
                <div className="flex items-center gap-3 md:block mb-3 md:mb-0">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-mimik-yellow md:mb-6">
                    <service.icon className="w-5 h-5 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-base md:text-xl font-display font-bold text-foreground">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-muted-foreground mb-4 flex-1 line-clamp-2 md:line-clamp-3">
                  {service.description}
                </p>
                <Link
                  to={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm md:text-base font-semibold group-hover:gap-4 transition-all hover:underline decoration-mimik-lime underline-offset-4"
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
