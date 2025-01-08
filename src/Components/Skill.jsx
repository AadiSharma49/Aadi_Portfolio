import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div
      className="container mx-auto px-4 overflow-hidden" // Prevent horizontal scrolling
      id="skills"
    >
      <h2 className="mb-12 mt-20 text-center text-4xl font-bold md:text-5xl lg:text-5xl">
        SKILLS
      </h2>
      <div
        className="flex flex-wrap justify-center gap-6 lg:gap-16 rounded-3xl px-4 py-6 lg:px-20 border border-stone-400"
        style={{ overflow: "hidden" }} // Prevent content overflow
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center py-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-indigo-600 hover:text-white rounded-full shadow-md"
              whileHover={{
                scale: 1.2,
                rotate: 10,
                transition: { duration: 0.3 },
              }}
            >
              {skill.icon}
            </motion.div>
            <motion.p
              className="mt-2 text-base md:text-lg font-medium text-center text-stone-400 transition-colors duration-300 hover:text-indigo-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
