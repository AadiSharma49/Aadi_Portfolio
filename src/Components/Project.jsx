import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section className="pt-20 px-4 md:px-8" id="projects">
      {/* Responsive Heading */}
      <h2 className="mb-12 mt-20 text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-5xl">
        PROJECTS
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl shadow-md transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-gray-50 opacity-0 backdrop-blur-md transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="mb-4 text-xl font-bold sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
              <p className="mb-4 max-w-sm px-4 text-sm sm:text-base text-center">
                {project.description}
              </p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors duration-300 hover:bg-gray-300"
              >
                <span>View on GitHub</span>
                <MdArrowOutward />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
