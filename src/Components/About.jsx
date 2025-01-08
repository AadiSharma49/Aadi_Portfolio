import { ABOUT } from "../constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility of About section

  // Define animation variants for the About section
  const textVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -20 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  // Using IntersectionObserver to detect visibility of the About section
  useEffect(() => {
    const aboutSection = document.getElementById("About");
    if (!aboutSection) return;

    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2, // 20% of the section is visible
    });

    observer.observe(aboutSection);

    // Cleanup observer on component unmount
    return () => {
      observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <section
      id="About"
      className="flex flex-col gap-10 px-4 max-w-4xl mx-auto md:gap-12 md:px-8"
    >
      {/* Section Title */}
      <motion.h2
        className="mt-16 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textVariants}
      >
        ABOUT ME
      </motion.h2>

      {/* About Content */}
      <div>
        {ABOUT.map((aboutText, index) => (
          <motion.p
            key={index}
            className="mb-6 text-lg leading-relaxed text-center md:text-left md:text-xl lg:text-2xl"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={textVariants}
          >
            {aboutText}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
