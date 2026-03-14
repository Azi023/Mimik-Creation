import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  // Indices 0-5 preserve the mobile hardcoded layout exactly
  // Desktop: rows 1-2 (large+tall), row 3 (3×medium), rows 4-5 (tall+wide+2×medium), row 6 (3×medium)
  { title: "Jaya Apparels",     category: "Branding",         image: "/Projects/jaya.webp",             size: "large",  href: "/our-work/jaya-apparels" },
  { title: "GearUp",            category: "App Development",  image: "/Projects/GU.webp",               size: "tall",   href: "/our-work/gearup" },
  { title: "Bfresh",            category: "Photography",      image: "/Projects/bfresh.webp",           size: "medium", href: "/our-work/bfresh" },
  { title: "Simply Nikah",      category: "Content Creation", image: "/portfolio/simply-nikah/1.webp",  size: "medium", href: "/our-work/simply-nikah" },
  { title: "Dearbody Canada",   category: "Social Media",     image: "/portfolio/dearbody/1.webp",      size: "medium", href: "/our-work/dearbody" },
  { title: "YVL Capital",       category: "Web Development",  image: "/portfolio/yvl-capital/1.webp",   size: "tall",   href: "/our-work/yvl-capital" },
  // Indices 6-11 desktop only (not referenced by mobile hardcoded layout)
  { title: "Glo2Go Aesthetics", category: "Social Media",     image: "/portfolio/glo2go/1.webp",        size: "wide",   href: "/our-work/glo2go" },
  { title: "MedLearning",       category: "Branding",         image: "/portfolio/medlearning/1.webp",   size: "medium", href: "/our-work/medlearning" },
  { title: "SmartEDU",          category: "Content Creation", image: "/portfolio/smartedu/1.webp",      size: "medium", href: "/our-work/smartedu" },
  { title: "Park Avenue",       category: "Branding",         image: "/Projects/park.webp",             size: "medium", href: "" },
  { title: "Prophetic Ruqyah",  category: "Web Development",  image: "/Projects/ruqyah.webp",           size: "medium", href: "" },
  { title: "Keily",             category: "Branding",         image: "/Projects/keily.webp",            size: "medium", href: "" },
];

const sizeClasses = {
  large: "md:col-span-2 md:row-span-2",
  tall:  "md:row-span-2",
  wide:  "md:col-span-2",
  medium: "",
};

const BentoProjects = () => {
  return (
    <section id="projects" className="py-6 md:py-16 bg-mimik-light">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs md:px-4 md:py-2 md:text-sm rounded-full bg-primary/10 text-primary font-semibold mb-4 md:mb-6">
            Our Work
          </span>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xs md:text-base text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our creative portfolio from stunning brand identities to impactful digital experiences.
          </p>
        </motion.div>

        {/* Mobile Grid: landscape + portrait + portrait + landscape */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {/* Row 1: Wide landscape — Jaya Apparels */}
          <div className="col-span-2 relative rounded-2xl overflow-hidden h-[185px] bg-mimik-slate">
            <img src={projects[0].image} alt={projects[0].title} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white text-xs font-bold">{projects[0].title}</p>
              <p className="text-white/65 text-[10px]">{projects[0].category}</p>
            </div>
            {projects[0].href && <Link to={projects[0].href} className="absolute inset-0" aria-label={projects[0].title} />}
          </div>
          {/* Row 2: Portrait pair — GearUp + Bfresh */}
          {[projects[1], projects[2]].map((p) => (
            <div key={p.title} className="relative rounded-2xl overflow-hidden h-[155px] bg-mimik-slate">
              <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="text-white text-xs font-bold leading-tight">{p.title}</p>
                <p className="text-white/65 text-[10px]">{p.category}</p>
              </div>
              {p.href && <Link to={p.href} className="absolute inset-0" aria-label={p.title} />}
            </div>
          ))}
          {/* Row 3: Portrait pair — Simply Nikah + YVL Capital */}
          {[projects[3], projects[5]].map((p) => (
            <div key={p.title} className="relative rounded-2xl overflow-hidden h-[155px] bg-mimik-slate">
              <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="text-white text-xs font-bold leading-tight">{p.title}</p>
                <p className="text-white/65 text-[10px]">{p.category}</p>
              </div>
              {p.href && <Link to={p.href} className="absolute inset-0" aria-label={p.title} />}
            </div>
          ))}
          {/* Row 4: Wide landscape — Dearbody Canada */}
          <div className="col-span-2 relative rounded-2xl overflow-hidden h-[155px] bg-mimik-slate">
            <img src={projects[4].image} alt={projects[4].title} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <p className="text-white text-xs font-bold">{projects[4].title}</p>
              <p className="text-white/65 text-[10px]">{projects[4].category}</p>
            </div>
            {projects[4].href && <Link to={projects[4].href} className="absolute inset-0" aria-label={projects[4].title} />}
          </div>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4 md:auto-rows-[220px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: index * 0.06 }}
              className={`relative group rounded-2xl overflow-hidden ring-1 ring-white/0 transition-all duration-500 ${project.href ? "cursor-pointer hover:ring-white/20 hover:shadow-2xl" : "cursor-default"} ${sizeClasses[project.size as keyof typeof sizeClasses] ?? ""}`}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Permanent subtle base overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08113a]/40 via-transparent to-transparent" />
              {/* Always-visible category pill */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide text-white bg-black/50 backdrop-blur-xl backdrop-saturate-[1.8] border border-white/10">
                  {project.category}
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08113a]/92 via-[#08113a]/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              {/* Hover content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-xs font-bold uppercase tracking-widest mb-1.5 text-mimik-lime">
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
          className="text-center mt-10 md:mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/our-work"
              className="inline-flex px-5 py-2 md:px-8 md:py-4 rounded-full bg-primary text-primary-foreground font-bold text-sm md:text-base hover:bg-primary/90 transition-colors"
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
