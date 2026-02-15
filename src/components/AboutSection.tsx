import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Target, target: 150, suffix: "+", label: "Projects Delivered" },
  { icon: Lightbulb, target: 10, suffix: "+", label: "Global Footprint" },
  { icon: Users, target: 50, suffix: "+", label: "Trusted Clients" },
  { icon: Trophy, target: 7, suffix: "", label: "Team Members" },
];

const CountUp = ({
  target,
  suffix = "",
  duration = 1600,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

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

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
              >
                Explore Our Services
              </Link>
            </motion.div>
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
                  <CountUp target={stat.target} suffix={stat.suffix} />
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
