import { SKILLS } from "../constants";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className="container mx-auto px-4 py-16" id="skills">
      <h2 className="mb-12 text-center text-4xl font-extrabold text-white md:text-5xl lg:text-6xl tracking-wide">
        SKILLS
      </h2>
      <div className="flex flex-wrap justify-center gap-8 lg:gap-16 rounded-3xl px-6 py-8 lg:px-20 border border-stone-500 bg-gradient-to-b from-gray-800 to-black shadow-lg">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-6 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <motion.div
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-full transition-all duration-300 bg-gray-900 text-white shadow-lg hover:bg-gray-700 hover:shadow-xl"
              whileHover={{
                scale: 1.15,
                rotate: 360,
                boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)",
                transition: { type: "spring", stiffness: 200 },
              }}
              whileTap={{ scale: 0.9, rotate: -20 }}
            >
              {skill.icon}
            </motion.div>
            <motion.p
              className="mt-3 text-lg font-semibold text-center text-gray-300 transition-all duration-300 hover:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
