import { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isBlurVisible, setIsBlurVisible] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolling logic for hiding and showing navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsNavbarVisible(false);  // Scrolling down, hide navbar
      } else if (currentScrollY < lastScrollY) {
        setIsNavbarVisible(true);  // Scrolling up, show navbar
      }

      // Hide blur effect when mobile menu is open and user scrolls down
      if (isMobileMenuOpen) {
        if (currentScrollY > lastScrollY) {
          setIsBlurVisible(false);  // Scroll down
        } else {
          setIsBlurVisible(true);  // Scroll up
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  useEffect(() => {
    // Scroll to the Home section when the page is loaded or refreshed
    const homeSection = document.getElementById("home");
    if (homeSection) {
      window.scrollTo({
        top: homeSection.offsetTop,
        behavior: "smooth", // Optional: add smooth scroll to the top
      });
    }
  }, []);

  // Navbar variants for animation
  const navbarVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  // Mobile menu variants for animation
  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div>
      {/* Background blur effect when menu is open and scroll up */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity ${isBlurVisible && isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      ></div>

      <motion.nav
        className={`mx-auto fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"} ${isMobileMenuOpen ? "top-0" : ""}`}
        initial="hidden"
        animate={isNavbarVisible ? "visible" : "hidden"}
        variants={navbarVariants}
      >
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex mt-5">
          <div className="flex items-center justify-between gap-6">
            <ul className="flex items-center gap-7">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <motion.a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="relative text-lg font-semibold text-white hover:text-yellow-400"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                    {/* Hover underline animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="rounded-lg lg:hidden">
          <div className="flex items-center justify-end">
            <button
              className="mr-2 mb-2 relative w-8 h-8 flex flex-col justify-center items-center group"
              onClick={toggleMobileMenu}
            >
              <span
                className={`h-1 w-full bg-white rounded transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
              ></span>
              <span
                className={`h-1 w-full bg-white rounded my-1 transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                className={`h-1 w-full bg-white rounded transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              ></span>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.ul
            className="mt-4 flex flex-col items-start gap-4 p-4 rounded-lg bg-black/70 backdrop-blur-md"
            initial="hidden"
            animate={isMobileMenuOpen ? "visible" : "hidden"}
            variants={mobileMenuVariants}
          >
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <motion.a
                  href={item.href}
                  className="block text-lg font-semibold text-white hover:text-yellow-400"
                  onClick={(e) => handleLinkClick(e, item.href)}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  {/* Hover underline animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </motion.a>
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
