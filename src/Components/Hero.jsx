import { HERO } from "../constants";
import Aadicartoon from "../assets/Person.webp";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track if Hero section is in the viewport

  // Define animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  // Using IntersectionObserver to detect visibility of the Hero section
  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true); // Trigger animation when Hero section is in view
      } else {
        setIsVisible(false); // Reset animation when Hero section is out of view
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // 10% of the section is visible
    });

    const heroSection = document.getElementById("Home");
    observer.observe(heroSection);

    // Cleanup observer on component unmount
    return () => {
      observer.unobserve(heroSection);
    };
  }, []);

  return (
    <>
      <section
        className="flex min-h-screen flex-col items-center justify-center px-6 md:flex-row md:px-12 lg:px-24"
        id="Home"
      >
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={textVariants}
        >
          <h2 className="my-5 text-center text-4xl font-bold md:text-left md:text-5xl lg:text-[4rem] xl:text-[5rem]">
            {HERO.name}
          </h2>
          <p className="text-center text-2xl tracking-tight md:text-left md:text-3xl lg:text-4xl">
            {HERO.greet}
          </p>
          <p className="my-4 text-center text-lg md:my-6 md:text-left md:text-xl lg:text-2xl">
            {HERO.description}
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              className="bg-stone-100 text-stone-900 px-6 py-3 text-lg font-semibold rounded-2xl shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl"
              href={HERO.resumeLink}
              download
              rel="noreferrer"
              target="_blank"
            >
              {HERO.resumeLinkText}
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="w-full mt-10 md:mt-0 md:w-1/2 lg:p-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <div className="flex justify-center">
            <img
              src={Aadicartoon}
              width={500}
              height={500}
              alt="Aaditya 3D Photo"
              className="rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
