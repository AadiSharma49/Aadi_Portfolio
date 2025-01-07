import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl font-bold md:text-5xl lg:text-5xl">
        SKILLS
      </h2>
      <div className="mx-2 flex flex-wrap justify-center gap-8 lg:gap-16 rounded-3xl px-4 py-2 lg:px-20 border border-stone-400">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center py-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-white hover:bg-indigo-600 hover:drop-shadow-2xl hover:transition-all hover:duration-500"
              whileHover={{
                scale: 1.2,
                rotate: 15,
                transition: { duration: 0.3 },
              }}
            >
              {skill.icon}
            </motion.div>
            <motion.p
              className="mt-2 text-lg font-medium text-center text-stone-400 transition-all duration-300 hover:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
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
