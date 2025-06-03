import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollStatus, setScrollStatus] = useState(scrolled);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Tech Stack", href: "#tech-stack" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  const handleScrollSpy = () => {
    const sections = document.querySelectorAll("section");

    let currentActiveSection = "home";
    let minVal = Number.MAX_SAFE_INTEGER;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute("id") || "";

      if (Math.abs(window.scrollY - sectionTop) < minVal) {
        minVal = Math.abs(window.scrollY - sectionTop);
        currentActiveSection = sectionId;
      }
    });

    setActiveLink(currentActiveSection);

    // Update scroll status for navbar background
    if (window.scrollY > 50) {
      setScrollStatus(true);
    } else {
      setScrollStatus(false);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add scroll event listener with useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScrollSpy);

    // Initial check
    handleScrollSpy();

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScrollSpy);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollStatus
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.a
          href="#home"
          className="text-2xl font-bold group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient font-heading relative">
            Yuvraj
            <span className="text-gray-900 dark:text-white">.</span>
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-base font-medium transition-colors relative px-3 py-2 rounded-md ${
                    activeLink === link.href.substring(1)
                      ? "text-indigo-600 dark:text-indigo-400"
                      : scrollStatus
                      ? "text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                      : "text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400"
                  } hover:bg-indigo-50 dark:hover:bg-indigo-900/30`}
                >
                  {link.title}
                  {activeLink === link.href.substring(1) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500"
                      layoutId="activeSection"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-xl focus:outline-none w-10 h-10 flex items-center justify-center rounded-full icon-glow theme-toggle-shadow"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={`icon-pulse flex items-center justify-center w-full h-full rounded-full ${
              isOpen
                ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                : "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white"
            }`}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul
              className="flex flex-col px-6 py-6 space-y-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={`text-lg font-medium block py-2 px-4 rounded-lg ${
                      activeLink === link.href.substring(1)
                        ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                    } transition-colors`}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {link.title}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                className="flex justify-center mt-4"
              >
                <ThemeToggle />
              </motion.li>
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
