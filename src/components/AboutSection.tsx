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
    <section id="about" className="py-8 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-2 py-0.5 text-[10px] md:px-4 md:py-2 md:text-sm rounded-full bg-primary/10 text-primary font-semibold mb-4 md:mb-6">
              About Us
            </span>
            <h2 className="text-lg md:text-3xl lg:text-5xl font-display font-bold text-foreground mb-4 md:mb-6">
              We're <span className="text-primary">Mimik Creations</span> Your Creative Partner
            </h2>
            <p className="text-xs md:text-lg text-muted-foreground mb-4 md:mb-6">
              At Mimik Creations, we do more than just provide services we build lasting partnerships. Our team is committed to understanding your unique needs and delivering solutions that exceed expectations.
            </p>
            <p className="hidden md:block text-lg text-muted-foreground mb-8">
              From brand identity and web development to photography and digital marketing,
              we craft experiences that captivate audiences and drive results.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/services"
                className="inline-flex px-4 py-2 md:px-8 md:py-4 rounded-full bg-primary text-primary-foreground font-bold text-xs md:text-base hover:bg-primary/90 transition-colors"
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
            className="grid grid-cols-2 gap-2 md:gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-3 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-card border border-border hover:shadow-lg transition-shadow w-full"
              >
                <div className="flex items-center gap-2 mb-1 md:mb-3">
                  <div className="w-7 h-7 md:w-12 md:h-12 rounded-md md:rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-3.5 h-3.5 md:w-6 md:h-6 text-secondary-foreground" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-foreground">
                    <CountUp target={stat.target} suffix={stat.suffix} />
                  </h3>
                </div>
                <p className="text-[11px] md:text-sm text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
