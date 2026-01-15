import { motion } from "framer-motion";
import { Zap, Heart, Rocket, Shield } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "We understand time is money. Our streamlined processes ensure your projects are delivered on time, every time.",
  },
  {
    icon: Heart,
    title: "Passion-Driven Creativity",
    description: "Every project is a labor of love. Our team pours creativity and dedication into every pixel and detail.",
  },
  {
    icon: Rocket,
    title: "Results That Matter",
    description: "We don't just make things look good — we create strategies that drive real business growth and ROI.",
  },
  {
    icon: Shield,
    title: "Trusted Partnership",
    description: "We're not just vendors; we're partners invested in your success. Your goals become our mission.",
  },
];

const WhyMimik = () => {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Why <span className="text-secondary">Mimik Creations?</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            We're more than just a creative agency — we're your strategic partner in building unforgettable brands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors h-full">
                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-primary-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-primary-foreground/70">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMimik;
