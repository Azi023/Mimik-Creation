import { motion } from "framer-motion";

const clients = [
  "TechCorp", "Innovate Inc", "Brand Studio", "Digital Wave", 
  "Creative Labs", "Vision Co", "NextGen", "Prime Solutions",
  "Apex Media", "Stellar Brands", "Unity Digital", "Momentum"
];

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
            className="flex gap-16 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-8 py-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">{client.charAt(0)}</span>
                </div>
                <span className="text-lg font-semibold text-foreground/70">{client}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
