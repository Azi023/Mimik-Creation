import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Target, number: "150+", label: "Projects Delivered" },
  { icon: Lightbulb, number: "10+", label: "Global Footprint" },
  { icon: Users, number: "50+", label: "Trusted Clients" },
  { icon: Trophy, number: "7", label: "Team Members" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              We're <span className="text-primary">Mimik Creations</span> Your Creative Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Mimik Creations, we do more than just provide services we build lasting partnerships. Our team is committed to understanding your unique needs and delivering solutions that exceed expectations. We love what we do, and we want to make sure you do too.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From brand identity and web development to photography and digital marketing, 
              we craft experiences that captivate audiences and drive results.
            </p>

            <motion.a
              href="#services"
              className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.a>
          </motion.div>

          {/* Right - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-4">
                  <stat.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-4xl font-display font-bold text-foreground mb-2">
                  {stat.number}
                </h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
