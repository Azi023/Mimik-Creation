import { motion } from "framer-motion";
import { Paintbrush, Globe, Handshake, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Reason = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    id: "creative-first",
    icon: Paintbrush,
    title: "Creative-First Approach",
    description:
      "We lead with design that makes people stop scrolling. Your brand's first impression is visual. We make it count.",
  },
  {
    id: "global-reach",
    icon: Globe,
    title: "Global Reach, Boutique Team",
    description:
      "Clients across 10 countries, but a team small enough that you work directly with the people doing the work. No layers, no handoffs.",
  },
  {
    id: "partnership",
    icon: Handshake,
    title: "Partnership, Not Transactions",
    description:
      "We don't just deliver and disappear. We embed into your growth, iterating as your business evolves.",
  },
  {
    id: "full-suite",
    icon: Layers,
    title: "Full-Suite Under One Roof",
    description:
      "Brand identity, websites, social media, ads, content, events. One team, one vision, no coordination headaches.",
  },
];

const WhyMimik = () => {
  return (
    <section className="py-8 md:py-24 bg-primary relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm rounded-full bg-secondary/20 text-secondary font-semibold mb-4 md:mb-6">
            Why Choose Us
          </span>
          <h2 className="text-xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Why <span className="text-secondary">Mimik Creations?</span>
          </h2>
          <p className="text-sm md:text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            What makes us different from every other agency pitching you the same thing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 md:gap-5 lg:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Card: flex-row on mobile (icon | text), flex-col on desktop */}
              <div className="flex flex-row gap-3 p-3 md:flex-col md:gap-0 md:p-6 lg:p-8 rounded-3xl bg-white/[0.12] backdrop-blur-lg backdrop-saturate-[1.8] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.18] transition-all duration-300 h-full items-center md:items-start">
                {/* Icon: flex-shrink-0 so it never compresses */}
                <div className="w-10 h-10 md:w-10 md:h-10 lg:w-14 lg:h-14 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 md:mb-5 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-5 h-5 md:w-5 md:h-5 lg:w-7 lg:h-7 text-secondary-foreground" />
                </div>
                {/* Text content wrapper */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold md:text-xl font-display font-bold text-primary-foreground mb-0.5 md:mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-xs leading-snug line-clamp-1 md:line-clamp-none md:text-base text-primary-foreground/70">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMimik;
