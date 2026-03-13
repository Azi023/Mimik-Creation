import { motion } from "framer-motion";
import { Instagram, ArrowRight, Sparkles } from "lucide-react";

const SubscribeSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <Sparkles className="w-4 h-4 text-secondary-foreground" />
            <span className="text-secondary-foreground font-semibold text-sm">Stay Connected</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Follow Our <span className="text-primary">Creative Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Get behind-the-scenes looks at our work, creative insights, and the latest from our projects. Follow us on Instagram.
          </p>

          <motion.a
            href="https://www.instagram.com/mimik.creations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold text-lg hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5" />
            Follow @mimik.creations
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscribeSection;
