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
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true); // Trigger animation when About section is in view
      } else {
        setIsVisible(false); // Reset animation when About section is out of view
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // 10% of the section is visible
    });

    const aboutSection = document.getElementById("About");
    observer.observe(aboutSection);

    // Cleanup observer on component unmount
    return () => {
      observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <section className="flex max-w-4xl mx-auto flex-col gap-10 md:gap-10" id="About">
      <motion.h2
        className="mb-12 mt-20 text-center text-4xl font-bold md:text-5xl lg:text-5xl"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={textVariants}
      >
        ABOUT ME
      </motion.h2>

      <div>
        {ABOUT.map((aboutText, index) => (
          <motion.p
            key={index}
            className="mb-4 text-lg lg:text-3xl"
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
