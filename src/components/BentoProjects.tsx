import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Propehtic Ruqyah",
    category: "Web Development",
    image: "/Projects/ruqyah.webp",
    size: "large",
  },
  {
    title: "Jaya Apparels",
    category: "Branding",
    image: "/Projects/jaya.webp",
    size: "medium",
    href: "/our-work/jaya-apparels",
  },
  {
    title: "Keily",
    category: "Packaging",
    image: "/Projects/keily.webp",
    size: "medium",
  },
  {
    title: "Park Avenue",
    category: "Social Media",
    image: "/Projects/park.webp",
    size: "tall",
  },
  {
    title: "GearUp",
    category: "Mobile Development",
    image: "/Projects/GU.webp",
    size: "tall",
    href: "/our-work/gearup",
  },
  {
    title: "Boring Ventures",
    category: "Branding",
    image: "/Projects/boring.webp",
    size: "medium",
  },
  {
    title: "Bfresh",
    category: "Photography",
    image: "/Projects/bfresh.webp",
    size: "medium",
    href: "/our-work/bfresh",
  },
];

const BentoProjects = () => {
  return (
    <section id="projects" className="py-24 bg-mimik-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our creative portfolio from stunning brand identities to impactful digital experiences.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: index * 0.08 }}
              className={`relative group rounded-2xl overflow-hidden cursor-pointer ring-1 ring-white/0 hover:ring-white/20 transition-all duration-500 hover:shadow-2xl ${
                project.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : project.size === "tall"
                  ? "md:row-span-2"
                  : ""
              }`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
              />

              {/* Permanent subtle base overlay: keeps images slightly styled */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08113a]/40 via-transparent to-transparent" />

              {/* Always-visible category pill: glass style */}
              <div className="absolute top-3 left-3 z-10">
                <span
                  className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide text-white bg-black/50 backdrop-blur-xl backdrop-saturate-[1.8] border border-white/10"
                >
                  {project.category}
                </span>
              </div>

              {/* Hover overlay: richer gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08113a]/92 via-[#08113a]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Hover content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-1.5 text-mimik-lime"
                >
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-bold text-white leading-snug">
                  {project.title}
                </h3>
                {project.href && (
                  <span className="text-sm text-white/70 mt-2 font-medium">
                    View Project &rarr;
                  </span>
                )}
              </div>
              {project.href && (
                <Link to={project.href} className="absolute inset-0 z-20" aria-label={`View ${project.title} project`} />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/our-work"
              className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoProjects;
