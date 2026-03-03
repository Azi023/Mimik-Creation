import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "I've worked with the Mimik team for numerous projects spanning from a course site that they built from scratch to helping me with my digital and social media marketing tasks. I find their work professional and reliable, done with great care. A huge thanks to the team for their great work.",
    client: "Fahim",
    role: "Founder, Simply Nikah",
  },
  {
    id: 2,
    quote:
      "Mimik has been one of the best decisions for my aesthetic clinic. Their team has elevated my brand and online presence, positioning my clinic as professional, premium, and highly credible. They also designed and developed a beautiful website that perfectly reflects the standard of my clinic — modern, cohesive, and intentional. Since working with them, I've seen increased visibility, stronger engagement, and a clear rise in quality enquiries and client trust. They don't just do marketing — they understand the vision and execute it with precision.",
    client: "Harfena",
    role: "Founder, Glo2Go Aesthetics",
  },
  {
    id: 3,
    quote:
      "Mimik understands our brand and executes it beautifully. From strategy to design, their work keeps everything aligned and elevated. We're happy to be partnered with Mimik and look forward to continuing to work together.",
    client: "Riyaf",
    role: "Founder, Dear Body",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const isPaused = useRef(false);
  const total = testimonials.length;

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setCurrent((index + total) % total);
  };

  const prev = () => goTo(current - 1, -1);
  const next = () => goTo(current + 1, 1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused.current) {
        setDirection(1);
        setCurrent((c) => (c + 1) % total);
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [total]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section className="py-24" style={{ backgroundColor: "#f3f4f8" }}>
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: "#FDD51E", color: "#0a1128" }}
          >
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            What Our <span style={{ color: "#1D3FC1" }}>Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Hear from the brands we've helped stand out and grow.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          {/* Card */}
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
              >
                {/* Large quote mark */}
                <Quote
                  className="w-12 h-12 mb-6"
                  style={{ color: "#FDD51E" }}
                  strokeWidth={1.5}
                />

                {/* Quote text */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                  "{testimonials[current].quote}"
                </p>

                {/* Divider */}
                <div
                  className="w-12 h-0.5 mb-6"
                  style={{ backgroundColor: "#FDD51E" }}
                />

                {/* Client info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-lg flex-shrink-0"
                    style={{ backgroundColor: "#0147D3" }}
                  >
                    {testimonials[current].client.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonials[current].client}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-border bg-white flex items-center justify-center hover:border-[#0147D3] hover:bg-[#0147D3] hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "2rem" : "0.5rem",
                    backgroundColor: i === current ? "#0147D3" : "#cbd5e1",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-border bg-white flex items-center justify-center hover:border-[#0147D3] hover:bg-[#0147D3] hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
