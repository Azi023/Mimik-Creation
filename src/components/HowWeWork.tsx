import { motion } from "framer-motion";
import { Search, Paintbrush, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Discover",
    description: "We learn your business, audience, and goals.",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Create",
    description: "Our team designs, builds, and produces with intention.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Launch",
    description: "We go live. Real-time monitoring from day one.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Optimise",
    description: "We measure, iterate, and scale the wins.",
  },
];

const HowWeWork = () => {
  return (
    <section className="py-24" style={{ backgroundColor: "#f3f4f8" }}>
      <div className="container mx-auto px-6">
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
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            How We <span style={{ color: "#1D3FC1" }}>Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A simple, proven process designed to turn strategy into results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative text-center"
            >
              {/* Connector arrow between steps — desktop only */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute top-7 items-center"
                  style={{ left: "calc(50% + 2.5rem)", right: "calc(-50% + 2.5rem)" }}
                >
                  <div
                    className="flex-1 h-px"
                    style={{ backgroundColor: "#FDD51E", opacity: 0.5 }}
                  />
                  <svg
                    width="8"
                    height="8"
                    viewBox="0 0 8 8"
                    style={{ color: "#FDD51E", opacity: 0.5, flexShrink: 0 }}
                  >
                    <path d="M0 4h8M5 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 relative z-10"
                style={{ backgroundColor: "#0147D3" }}
              >
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Step number */}
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: "#FDD51E" }}
              >
                Step {step.step}
              </p>

              {/* Title */}
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
