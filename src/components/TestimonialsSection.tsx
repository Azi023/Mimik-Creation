import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import GlassBackground from "@/components/GlassBackground";

const testimonials = [
  {
    id: 1,
    quote:
      "I've worked with the Mimik team for numerous projects spanning from a course site that they built from scratch to helping me with my digital and social media marketing tasks. I find their work professional and reliable, done with great care. A huge thanks to the team for their great work.",
    client: "Fahim",
    role: "Founder, Simply Nikah",
    brand: "Simply Nikah",
  },
  {
    id: 2,
    quote:
      "Mimik has been one of the best decisions for my aesthetic clinic. Their team has elevated my brand and online presence, positioning my clinic as professional, premium, and highly credible. They also designed and developed a beautiful website that perfectly reflects the standard of my clinic: modern, cohesive, and intentional.",
    client: "Harfena",
    role: "Founder, Glo2Go Aesthetics",
    brand: "Glo2Go Aesthetics",
  },
  {
    id: 3,
    quote:
      "Mimik understands our brand and executes it beautifully. From strategy to design, their work keeps everything aligned and elevated. We're happy to be partnered with Mimik and look forward to continuing to work together.",
    client: "Riyaf",
    role: "Founder, Dear Body",
    brand: "Dear Body",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div
    className="rounded-2xl p-5 md:p-8 flex flex-col h-full bg-mimik-slate backdrop-blur-md backdrop-saturate-[1.8] border border-white/10 shadow-xl shadow-black/5"
  >
    {/* Brand name */}
    <p className="text-xs font-bold tracking-widest uppercase mb-5 text-mimik-yellow">
      {testimonial.brand}
    </p>

    {/* Quote icon */}
    <div className="w-10 h-10 rounded-full bg-mimik-yellow/15 backdrop-blur-md flex items-center justify-center mb-4 flex-shrink-0">
      <Quote
        className="w-5 h-5 text-mimik-yellow"
        strokeWidth={1.5}
      />
    </div>

    {/* Quote text */}
    <p className="text-white/90 leading-relaxed italic text-sm md:text-base flex-1 mb-8">
      "{testimonial.quote}"
    </p>

    {/* Client info */}
    <div className="flex items-center gap-3 mt-auto">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-sm flex-shrink-0 bg-mimik-blue"
      >
        {testimonial.client.charAt(0)}
      </div>
      <div>
        <p className="font-bold text-white text-sm">{testimonial.client}</p>
        <p className="text-white/60 text-xs">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = testimonials.length;

  const prev = () => setCurrentIndex((c) => (c - 1 + total) % total);
  const next = () => setCurrentIndex((c) => (c + 1) % total);

  return (
    <section className="py-8 md:py-24 bg-mimik-light relative overflow-hidden">
      <GlassBackground variant="light" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-16"
        >
          <span
            className="inline-block px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm rounded-full font-semibold mb-4 md:mb-6 bg-mimik-yellow text-mimik-darker"
          >
            Client Feedback
          </span>
          <h2 className="text-xl md:text-5xl font-display font-bold text-foreground mb-4">
            What Our <span style={{ color: "#1D3FC1" }}>Clients Say</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto">
            Hear from the brands we've helped stand out and grow.
          </p>
        </motion.div>

        {/* Desktop: 3-card grid (all visible) */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </div>

        {/* Tablet: 2-card view with arrows */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6">
            {testimonials
              .slice(currentIndex, currentIndex + 2)
              .concat(
                currentIndex + 2 > total
                  ? testimonials.slice(0, (currentIndex + 2) % total)
                  : []
              )
              .map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-border bg-white/80 backdrop-blur-md backdrop-saturate-[1.8] flex items-center justify-center hover:border-mimik-blue hover:bg-mimik-blue hover:text-white transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === currentIndex ? "2rem" : "0.5rem",
                    backgroundColor:
                      i === currentIndex ? "#0147D3" : "#cbd5e1",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-border bg-white/80 backdrop-blur-md backdrop-saturate-[1.8] flex items-center justify-center hover:border-mimik-blue hover:bg-mimik-blue hover:text-white transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile: 1 card with arrows */}
        <div className="block md:hidden">
          <TestimonialCard testimonial={testimonials[currentIndex]} />
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-border bg-white/80 backdrop-blur-md backdrop-saturate-[1.8] flex items-center justify-center hover:border-mimik-blue hover:bg-mimik-blue hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === currentIndex ? "2rem" : "0.5rem",
                    backgroundColor:
                      i === currentIndex ? "#0147D3" : "#cbd5e1",
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-border bg-white/80 backdrop-blur-md backdrop-saturate-[1.8] flex items-center justify-center hover:border-mimik-blue hover:bg-mimik-blue hover:text-white transition-colors"
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
