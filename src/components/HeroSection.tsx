import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-mimik-blue-dark" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary/30 blur-xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-secondary/20 blur-2xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-white text-sm font-medium">Creative Marketing Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-tight mb-6"
        >
          WE CREATE
          <br />
          <span className="text-secondary drop-shadow-lg">BRANDS</span> THAT
          <br />
          <span className="relative inline-block">
            STAND OUT
            <motion.svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.path
                d="M0 6 Q75 0 150 6 T300 6"
                stroke="#DDFF00"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10"
        >
          A creative marketing agency specializing in branding, web development, photography, and digital marketing that helps businesses stand out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/our-work"
              className="inline-block px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-colors"
              style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
            >
              View Our Work
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 rounded-full border-2 border-white/40 text-white font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/70 text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 text-secondary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
