import { HERO } from "../constants";
import Aadicartoon from "../assets/Person.webp";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    const heroSection = document.getElementById("Home");
    observer.observe(heroSection);

    return () => {
      observer.unobserve(heroSection);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12"
      id="Home"
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-8 py-12 md:min-h-screen md:flex-row md:gap-12 md:py-0">
        {/* Left Section */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={textVariants}
        >
          <h2 className="mb-4 text-center text-3xl font-bold md:mb-6 md:text-left md:text-5xl lg:text-[4rem] xl:text-[5rem]">
            {HERO.name}
          </h2>
          <p className="text-center text-xl tracking-tight md:text-left md:text-3xl lg:text-4xl">
            {HERO.greet}
          </p>
          <p className="my-4 text-center text-base md:my-6 md:text-left md:text-xl lg:text-2xl">
            {HERO.description}
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              className="rounded-2xl bg-stone-100 px-5 py-2.5 text-base font-semibold text-stone-900 shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl md:px-6 md:py-3 md:text-lg"
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
          className="w-full md:w-1/2"
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
              className="w-full max-w-[280px] rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:max-w-[340px] md:max-w-[400px] lg:max-w-[500px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
