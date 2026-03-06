import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[auto] md:min-h-screen py-24 md:py-0 flex items-start md:items-center justify-center overflow-hidden bg-primary"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-mimik-blue-dark" />

      {/* Liquid glass blobs: static blur, animated transform only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1: Deep blue, top-left */}
        <motion.div
          className="liquid-blob absolute -top-[10%] -left-[5%] w-[500px] h-[500px] rounded-full opacity-40 blur-[80px]"
          style={{
            background: "radial-gradient(circle, #1D3FC1 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, -20, 30, 0],
            y: [0, -30, 40, 20, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Blob 2: Yellow glow, bottom-right */}
        <motion.div
          className="liquid-blob absolute -bottom-[15%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[80px]"
          style={{
            background: "radial-gradient(circle, #FDD51E 0%, transparent 70%)",
          }}
          animate={{
            x: [0, -30, 20, -10, 0],
            y: [0, 40, -20, 30, 0],
            scale: [1, 0.95, 1.1, 1.05, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 7 }}
        />
      </div>

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
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md backdrop-saturate-[1.8] border border-white/10 mb-3 md:mb-6 glass-badge-glow relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
        >
          {/* Animated conic gradient border */}
          <span
            className="absolute inset-[-1px] rounded-full -z-10"
            style={{
              background: "conic-gradient(from 0deg, transparent, rgba(253,213,30,0.3), transparent, rgba(29,63,193,0.3), transparent)",
              animation: "badge-glow-spin 8s linear infinite",
              willChange: "transform",
            }}
          />
          <span className="absolute inset-[1px] rounded-full bg-white/10 backdrop-blur-md -z-10" />
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-white/90 text-sm font-medium">Creative Marketing Agency</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-tight mb-4 md:mb-6"
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
          className="text-sm md:text-xl text-white/90 max-w-2xl mx-auto mb-6 md:mb-10"
        >
          A creative marketing agency specializing in branding, web development, photography, and digital marketing that helps businesses stand out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-row flex-wrap justify-center gap-3 md:gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/our-work"
              className="inline-block px-5 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-lg transition-colors bg-mimik-yellow text-mimik-darker"
            >
              View Our Work
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block px-5 py-3 md:px-8 md:py-4 rounded-full border-2 border-white/40 text-white font-bold text-sm md:text-lg hover:bg-white/10 transition-colors backdrop-blur-md backdrop-saturate-[1.8]"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator: removed per Sprint 6 */}
      </div>
    </section>
  );
};

export default HeroSection;
