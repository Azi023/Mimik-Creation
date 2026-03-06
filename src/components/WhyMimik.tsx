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
                {/* Icon + heading: 100% inline styles — no Tailwind on this row */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
                  <div style={{
                    width: "44px", height: "44px", minWidth: "44px",
                    borderRadius: "12px", backgroundColor: "#FDD51E",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0
                  }}>
                    <reason.icon style={{ width: "20px", height: "20px", color: "#0a1128" }} />
                  </div>
                  <h3 style={{ fontSize: "15px", fontWeight: "700", color: "white", margin: 0, lineHeight: "1.3" }}>
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
