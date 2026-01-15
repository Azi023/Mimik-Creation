import { motion } from "framer-motion";
import { Palette, Globe, Camera, Megaphone, PenTool, Video } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Complete brand strategy, logo design, and visual identity systems that make your brand unforgettable.",
    color: "bg-primary",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites built with cutting-edge technology that convert visitors into customers.",
    color: "bg-secondary",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional product and brand photography that showcases your offerings in the best light.",
    color: "bg-primary",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that amplify your reach and drive measurable results.",
    color: "bg-secondary",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Eye-catching designs for print and digital that communicate your message effectively.",
    color: "bg-primary",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Compelling video content from concept to final cut that tells your brand story.",
    color: "bg-secondary",
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
            What We <span className="text-primary">Do Best</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-service creative solutions tailored to elevate your brand and drive business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="p-8 rounded-3xl border border-border bg-card hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${service.color === "bg-primary" ? "text-primary-foreground" : "text-secondary-foreground"}`} />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
