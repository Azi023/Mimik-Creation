import { motion } from "framer-motion";

const clients = [
  { name: "Glo2Go Aesthetics", accent: "#0147D3" },
  { name: "BFresh", accent: "#1D3FC1" },
  { name: "SmartEDU", accent: "#273a62" },
  { name: "GearUp", accent: "#0147D3" },
  { name: "SLPL UAE", accent: "#1D3FC1" },
  { name: "MedLearning", accent: "#273a62" },
  { name: "Dear Body", accent: "#0147D3" },
];

const LogoPill = ({ name, accent }: { name: string; accent: string }) => (
  <div
    className="flex-shrink-0 flex items-center justify-center px-8 py-3 rounded-xl border border-border/50 bg-white shadow-sm"
    style={{ minWidth: 140 }}
  >
    <span
      className="font-display font-bold text-base md:text-lg tracking-tight whitespace-nowrap"
      style={{ color: accent }}
    >
      {name}
    </span>
  </div>
);

const ClientLogos = () => {
  return (
    <section className="py-16 bg-muted overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground font-medium"
        >
          Trusted by leading brands worldwide
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...clients, ...clients].map((client, index) => (
              <LogoPill key={index} name={client.name} accent={client.accent} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
