import { motion } from "framer-motion";
import { Calendar, Clock, Video, ArrowRight } from "lucide-react";

const BookCall = () => {
  return (
    <section id="contact" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 rounded-full border-2 border-secondary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 rounded-full border-2 border-secondary/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-6">
              Let's Talk
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
              Ready to <span className="text-secondary">Transform</span> Your Brand?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
              Schedule a free 30-minute discovery call to discuss your project and how we can help bring your vision to life.
            </p>
          </motion.div>

          {/* Call Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { icon: Clock, text: "30 Min Free Call" },
              { icon: Video, text: "Video Conference" },
              { icon: Calendar, text: "Flexible Scheduling" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-primary-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-secondary text-secondary-foreground font-bold text-xl hover:bg-secondary/90 transition-colors"
              whileHover={{ scale: 1.05, gap: "20px" }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Discovery Call
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;
