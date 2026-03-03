import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ImageCrossfadeProps {
  images: string[];
  alt: string;
  interval?: number;
  className?: string;
  startIndex?: number;
}

/**
 * Auto-swapping image crossfade for portfolio cards.
 * - Cycles through images with a smooth crossfade
 * - Pauses on hover
 * - Respects visibility (pauses when offscreen)
 * - Each instance can start at a different index to avoid sync
 */
const ImageCrossfade = ({
  images,
  alt,
  interval = 3500,
  className = "",
  startIndex = 0,
}: ImageCrossfadeProps) => {
  const [current, setCurrent] = useState(startIndex % images.length);
  const isPaused = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useRef(true);

  useEffect(() => {
    if (images.length <= 1) return;

    const observer = new IntersectionObserver(
      ([entry]) => { isVisible.current = entry.isIntersecting; },
      { threshold: 0.1 },
    );
    if (containerRef.current) observer.observe(containerRef.current);

    const timer = setInterval(() => {
      if (!isPaused.current && isVisible.current) {
        setCurrent((c) => (c + 1) % images.length);
      }
    }, interval);

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <AnimatePresence mode="popLayout">
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          loading="lazy"
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageCrossfade;
