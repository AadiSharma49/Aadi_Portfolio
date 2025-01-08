import { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -70; // Adjust offset for fixed navbar
      const position = targetElement.getBoundingClientRect().top + window.scrollY + offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavbarVisible(false); // Scrolling down
      } else {
        setIsNavbarVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    const debounceScroll = () => {
      clearTimeout(window.debounceTimeout);
      window.debounceTimeout = setTimeout(handleScroll, 100);
    };

    window.addEventListener("scroll", debounceScroll);

    return () => {
      window.removeEventListener("scroll", debounceScroll);
    };
  }, [lastScrollY]);

  const navbarVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md px-6 py-3 transition-transform duration-300 ${
          isNavbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
        initial="hidden"
        animate={isNavbarVisible ? "visible" : "hidden"}
        variants={navbarVariants}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-white">
            MyWebsite
          </a>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((item) => (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="relative text-lg font-medium text-white hover:text-yellow-400"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col space-y-1"
            onClick={toggleMobileMenu}
          >
            <span
              className={`block h-1 w-6 bg-white transform transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-white transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-white transform transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.ul
            className="mt-4 flex flex-col items-start bg-black/80 text-white p-4 rounded-lg lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {NAVIGATION_LINKS.map((item) => (
              <li key={item.href} className="mb-2 w-full">
                <motion.a
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="block w-full text-lg font-medium hover:text-yellow-400"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </motion.ul>
        )}
      </motion.nav>
    </div>
  );
};

export default Navbar;
