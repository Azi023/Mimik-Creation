import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import InstagramReel from "./InstagramReel";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  if (reels.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            Instagram Reels
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Reels row */}
        <div className="relative">
          {/* Desktop arrows */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border-2 border-border bg-white/80 backdrop-blur-md items-center justify-center hover:border-mimik-blue hover:bg-mimik-blue hover:text-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1"
          >
            {reels.map((reel, i) => (
              <motion.div
                key={reel.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex-shrink-0 snap-start"
              >
                <InstagramReel
                  url={reel.url}
                  caption={reel.client}
                />
              </motion.div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border-2 border-border bg-white/80 backdrop-blur-md items-center justify-center hover:border-mimik-blue hover:bg-mimik-blue hover:text-white transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
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
