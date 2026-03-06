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
              {/* Card */}
              <div className="p-3 md:p-6 lg:p-8 rounded-3xl bg-white/[0.12] backdrop-blur-lg backdrop-saturate-[1.8] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.18] transition-all duration-300 h-full">
                {/* Icon + heading: always flex-row (no md:block to break layout) */}
                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-mimik-yellow flex items-center justify-center group-hover:scale-110 transition-transform">
                    <reason.icon className="w-5 h-5 text-mimik-darker" />
                  </div>
                  <h3 className="text-sm md:text-base font-display font-bold text-primary-foreground leading-tight">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-primary-foreground/70 leading-snug md:leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMimik;
