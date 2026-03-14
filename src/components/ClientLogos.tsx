import { motion } from "framer-motion";

const clients = [
  { name: "Glo2Go Aesthetics", logo: "/logos/glo2go.webp" },
  { name: "Simply Nikah", logo: "/logos/simply-nikah.webp" },
  { name: "GoodCannaNow", logo: "/logos/gcn.webp" },
  { name: "Dearbody", logo: "/logos/dearbody.webp" },
  { name: "CannaHealRx", logo: "/logos/chrx.webp" },
  { name: "Mr. Krisps", logo: "/logos/mr-krisps.webp" },
  { name: "NJMCCA", logo: "/logos/njmcca.webp" },
];

const LogoPill = ({ name, logo }: { name: string; logo: string }) => (
  <div
    className="flex-shrink-0 flex items-center justify-center px-6 py-3 rounded-xl border border-border/50 bg-white shadow-sm"
    style={{ minWidth: 140, minHeight: 64 }}
  >
    <img
      src={logo}
      alt={name}
      className="h-10 md:h-12 w-auto max-w-[140px] object-contain"
      loading="lazy"
    />
  </div>
);

const ClientLogos = () => {
  return (
    <section className="py-8 md:py-16 bg-mimik-light overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-6 md:mb-8">
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
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#f3f4f8] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#f3f4f8] to-transparent z-10" />

        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...clients, ...clients].map((client, index) => (
              <LogoPill key={index} name={client.name} logo={client.logo} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
