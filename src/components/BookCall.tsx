import { motion } from "framer-motion";
import { Calendar, Clock, Video, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BookCall = () => {
  return (
    <section
      id="contact"
      className="py-8 md:py-24 relative overflow-hidden bg-mimik-slate"
    >
      {/* Glass depth blobs */}
      <div className="absolute top-1/4 -left-20 w-[40vw] h-[40vw] rounded-full bg-mimik-yellow/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[40vw] h-[40vw] rounded-full bg-mimik-blue/10 blur-[120px] pointer-events-none" />

      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full border-2 border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full border-2 border-white/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="inline-block px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm rounded-full font-semibold mb-4 md:mb-6 bg-mimik-yellow/15 text-mimik-yellow backdrop-blur-md backdrop-saturate-[1.8] border border-mimik-yellow/15"
            >
              Let's Talk
            </span>
            <h2 className="text-xl md:text-6xl font-display font-bold text-white mb-4 md:mb-6">
              Ready to <span className="text-mimik-yellow">Stand Out?</span>
            </h2>
            <p className="text-base md:text-xl text-white/80 mb-8 md:mb-12 max-w-2xl mx-auto">
              Let's discuss how Mimik Creations can help your brand grow.
            </p>
          </motion.div>

          {/* Call Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12"
          >
            {[
              { icon: Clock, text: "30 Min Free Call" },
              { icon: Video, text: "Video Conference" },
              { icon: Calendar, text: "Flexible Scheduling" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div
                  className="w-9 h-9 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-mimik-yellow/15 backdrop-blur-md backdrop-saturate-[1.8] border border-mimik-yellow/15"
                >
                  <item.icon className="w-5 h-5 text-mimik-yellow" />
                </div>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://calendly.com/mimik-creat/free-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-xl transition-colors bg-mimik-yellow text-mimik-darker"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Discovery Call
              <ArrowRight className="w-6 h-6" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/our-work"
                className="inline-flex items-center gap-3 px-7 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-xl border-2 border-white/40 text-white transition-colors hover:bg-white/10"
              >
                View Our Work
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
