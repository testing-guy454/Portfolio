import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

interface NavbarRedesignedProps {
  scrolled: boolean;
}

const NavbarRedesigned = ({ scrolled = false }: NavbarRedesignedProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollStatus, setScrollStatus] = useState(scrolled);

  // Reduced main navigation items for cleaner interface
  const mainNavLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Experience", href: "#experience" },
    { title: "Education", href: "#education" },
    { title: "Skills", href: "#tech-stack" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  // Secondary navigation items - less important but still accessible
  const secondaryNavLinks = [
    { title: "Coding", href: "#coding" },
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
        {/* Brand with profile photo */}
        <motion.a
          href="#home"
          className="flex items-center gap-3 group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-indigo-500 shadow-md">
            <img 
              src="/yuvraj2.png" 
              alt="Yuvraj Mehta"
              className="h-full w-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/40"; // Fallback image
              }}
            />
          </div>
          <span className="text-xl md:text-2xl font-bold text-gradient font-heading relative">
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
        <nav className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-1">
            {mainNavLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-base font-medium transition-all relative px-4 py-2 rounded-md ${
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

          {/* Resume button */}
          <a
            href="/Yuvraj_Resume_v2_1 (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            download
          >
            <FaDownload className="text-xs" />
            <span>Resume</span>
          </a>

          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <motion.button
            className="text-xl focus:outline-none w-10 h-10 flex items-center justify-center rounded-full icon-glow theme-toggle-shadow"
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
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-md"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col px-6 py-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {/* Profile section for mobile */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b dark:border-gray-800">
                <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-indigo-500">
                  <img 
                    src="/yuvraj2.png" 
                    alt="Yuvraj Mehta"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/40";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Yuvraj Mehta</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Full Stack Developer</p>
                </div>
              </div>

              {/* Main navigation sections */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 px-4">Main Navigation</h4>
                <ul className="space-y-1">
                  {mainNavLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className={`text-base font-medium block py-2 px-4 rounded-lg ${
                          activeLink === link.href.substring(1)
                            ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                            : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                        } transition-colors`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Secondary navigation sections */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 px-4">More Sections</h4>
                <ul className="space-y-1">
                  {secondaryNavLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <a
                        href={link.href}
                        className={`text-base font-medium block py-2 px-4 rounded-lg ${
                          activeLink === link.href.substring(1)
                            ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                            : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                        } transition-colors`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Mobile action buttons */}
              <div className="space-y-3 pt-2 border-t dark:border-gray-800">
                <a
                  href="/Yuvraj_Resume_v2_1 (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  download
                  onClick={() => setIsOpen(false)}
                >
                  <FaDownload className="text-xs" />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarRedesigned;
