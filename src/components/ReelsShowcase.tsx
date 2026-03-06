import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { InstagramReel as ReelType } from "@/data/reels";

function ReelCard({ reel, index }: { reel: ReelType; index: number }) {
  return (
    <motion.a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="group relative block rounded-2xl overflow-hidden bg-[#0a1628] aspect-[9/16] max-h-[400px]"
    >
      {/* Yellow accent bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-mimik-yellow z-10" />

      {/* Static thumbnail or gradient fallback */}
      {reel.thumbnail ? (
        <img
          src={reel.thumbnail}
          alt={`${reel.client} reel`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#0d1f4a] to-[#1a3580]" />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Play button — always visible */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-xs font-bold truncate">{reel.client}</p>
        <p className="text-white/60 text-[10px]">Watch on Instagram ↗</p>
      </div>
    </motion.a>
  );
}

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

        {/* Custom card grid — max 6 to limit proxy requests on load */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {reels.slice(0, 6).map((reel, i) => (
            <ReelCard key={reel.url} reel={reel} index={i} />
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
