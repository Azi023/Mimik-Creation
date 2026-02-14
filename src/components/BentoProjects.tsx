import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectPhotography from "@/assets/project-photography.jpg";
import projectWeb from "@/assets/project-web.jpg";
import projectSocial from "@/assets/project-social.jpg";
import projectPackaging from "@/assets/project-packaging.jpg";

const projects = [
  {
    title: "Propehtic Ruqyah",
    category: "Web Development",
    image: "/Projects/ruqyah.png",
    size: "large",
  },
  {
    title: "Jaya Apparels",
    category: "Branding",
    image: "/Projects/jaya.png",
    size: "medium",
  },
  {
    title: "Keily",
    category: "Packaging",
    image: "/Projects/keily.jpg",
    size: "medium",
  },
  {
    title: "Park Avenue",
    category: "Social Media",
    image: "/Projects/park.png",
    size: "tall",
  },
  {
    title: "GearUp",
    category: "Mobile Development",
    image: "/Projects/GU.png",
    size: "tall",
  },
  {
    title: "Boring Ventures",
    category: "Branding",
    image: "/Projects/boring.png",
    size: "medium",
  },
  {
    title: "Bfresh",
    category: "Photography",
    image: "/Projects/bfresh.jpg",
    size: "medium",
  },

];

const BentoProjects = () => {
  return (
    <section id="projects" className="py-24 bg-muted">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden cursor-pointer ${
                project.size === "large"
                  ? "md:col-span-2 md:row-span-2"
                  : project.size === "tall"
                  ? "md:row-span-2"
                  : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mimik-navy/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-secondary text-sm font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  {project.title}
                </h3>
              </div>
              {/*<div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">*/}
              {/*  <svg className="w-5 h-5 text-secondary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
              {/*    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />*/}
              {/*  </svg>*/}
              {/*</div>*/}
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
