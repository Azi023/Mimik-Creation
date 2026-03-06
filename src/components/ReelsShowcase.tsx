import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { InstagramReel as ReelType } from "@/data/reels";

interface ReelsShowcaseProps {
  reels: ReelType[];
  title?: string;
  subtitle?: string;
}

const ReelsShowcase = ({
  reels,
  title = "See Our Work in Motion",
  subtitle,
}: ReelsShowcaseProps) => {
  if (reels.length === 0) return null;

  return (
    <section className="py-8 md:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-10"
        >
          <span className="inline-block px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm rounded-full bg-primary/10 text-primary font-semibold mb-4 md:mb-6">
            Instagram Reels
          </span>
          <h2 className="text-xl md:text-5xl font-display font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Custom card grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {reels.map((reel, i) => (
            <motion.a
              key={reel.url}
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative block rounded-2xl overflow-hidden bg-mimik-slate aspect-[9/16] max-h-[400px]"
            >
              {/* Gradient background with play icon */}
              <div className="w-full h-full bg-gradient-to-br from-primary/40 via-[#273a62] to-primary/20 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-xs font-semibold truncate">{reel.client}</p>
                <p className="text-white/60 text-[10px]">Watch on Instagram ↗</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 md:mt-10"
        >
          <a
            href="https://www.instagram.com/mimik.creations/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 hover:text-mimik-lime transition-all"
          >
            Follow us on Instagram
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ReelsShowcase;
