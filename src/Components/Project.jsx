import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section className="pt-20" id="projects">
      <h2 className="mb-12 mt-20 text-center text-4xl font-bold md:text-5xl lg:text-5xl">
        PROJECTS
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((Project) => (
          <motion.div
            key={Project.id}
            className="group relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img
              src={Project.image}
              alt={Project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-50 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
              <h3 className="mb-4 text-2xl  font-bold md:text-3xl lg:text-3xl">{Project.name}</h3>
              <p className="mb-4 max-w-md p-4 text-black">{Project.description}</p>
              <a
                href={Project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
              >
                <div className="flex items-center">
                  <span>View on GitHub</span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
