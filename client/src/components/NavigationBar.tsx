import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import ThemeToggle from "./ThemeSwitcher";
import * as personalDataModule from "../data/personalData";

interface NavbarEnhancedProps {
  scrolled: boolean;
}

const NavbarEnhanced = ({ scrolled = false }: NavbarEnhancedProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrollStatus, setScrollStatus] = useState(scrolled);
  const [showNavShadow, setShowNavShadow] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Import data from personalData.ts
  const navigationLinks = personalDataModule.navLinks;

  // Main navigation items - Map from personal data to the format needed for the navbar
  const navLinks = navigationLinks.map((link) => ({
    title: link.name,
    href: link.href,
  }));

  // Optional navigation that appears in dropdown on smaller screens
  // If the navigation grows too large, we could move items here
  const secondaryNavLinks: { title: string; href: string }[] = [];

  const handleScrollSpy = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 100; // Adding offset for better active state detection

    // Find the current active section
    let currentActive = "";
    let closestDistance = Number.MAX_SAFE_INTEGER;

    sections.forEach((section) => {
      const sectionId = section.getAttribute("id") || "";
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      // Check if we're currently viewing this section
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const distance = Math.abs(scrollPosition - sectionTop);
        if (distance < closestDistance) {
          closestDistance = distance;
          currentActive = sectionId;
        }
      }
    });

    if (currentActive) {
      setActiveLink(currentActive);
    } else if (window.scrollY < 100) {
      setActiveLink("home"); // Default to home when at the top
    }

    // Update scroll status for navbar background
    setScrollStatus(window.scrollY > 50);

    // Add shadow when scrolling down slightly
    setShowNavShadow(window.scrollY > 10);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle clicking outside of navbar to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrollStatus
          ? "bg-white/90 dark:bg-gray-900/95 backdrop-blur-md py-1 md:py-2"
          : "bg-transparent py-2 md:py-3"
      } ${showNavShadow ? "shadow-lg" : ""}`}
    >
      <div className="container mx-auto px-2 sm:px-4 flex flex-nowrap justify-between items-center min-w-0">
        {/* Brand with profile photo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-shrink"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={closeMenu}
        >
          <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden border-2 border-indigo-500 shadow-md flex-shrink-0">
            <img
              src="/yuvraj2.png"
              alt="Yuvraj Mehta"
              className="h-full w-full object-cover"
              loading="eager"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/40";
              }}
            />
          </div>
          <span className="text-base sm:text-lg md:text-xl font-bold text-gradient font-heading relative truncate block max-w-[80px] sm:max-w-[120px] md:max-w-none">
            Yuvraj
            <span className="text-gray-900 dark:text-white">.</span>
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 ml-auto min-w-0">
          <motion.ul
            className="flex space-x-1 min-w-0 flex-wrap"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
              >
                <a
                  href={link.href}
                  className={`relative text-sm md:text-base font-medium transition-all px-3 py-2 rounded-md flex items-center justify-center
                    ${
                      activeLink === link.href.substring(1)
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                    } hover:bg-indigo-50 dark:hover:bg-indigo-900/30`}
                >
                  {link.title}
                  {activeLink === link.href.substring(1) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          {/* Resume button */}
          <motion.a
            href="/Yuvraj_Resume_v2_1 (1).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-1.5 ml-2 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors hover:border-indigo-500 dark:hover:border-indigo-500"
            download
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ y: -2, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ y: 0 }}
          >
            <FaDownload className="text-xs" />
            <span>Resume</span>
          </motion.a>

          {/* Theme toggle */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <ThemeToggle />
          </motion.div>
        </nav>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <motion.button
            className="text-xl focus:outline-none w-10 h-10 flex items-center justify-center rounded-full"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className={`flex items-center justify-center w-full h-full rounded-full transition-all duration-300 ${
                isOpen
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                  : "bg-gradient-to-r from-indigo-500 to-indigo-600 text-white"
              } shadow-md`}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm lg:hidden z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Mobile menu */}
            <motion.nav
              className="lg:hidden fixed right-0 top-0 h-full w-full max-w-xs bg-white dark:bg-gray-900 shadow-xl z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <motion.div
                className="flex flex-col h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
                  <h2 className="text-lg font-bold">Menu</h2>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    aria-label="Close menu"
                  >
                    <FaTimes />
                  </button>
                </div>

                {/* Profile section for mobile */}
                <div className="flex items-center gap-4 p-4 mb-2 border-b dark:border-gray-800">
                  <div className="h-14 w-14 rounded-full overflow-hidden border-2 border-indigo-500 shadow-md flex-shrink-0">
                    <img
                      src="/yuvraj2.png"
                      alt="Yuvraj Mehta"
                      className="h-full w-full object-cover"
                      loading="eager"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Yuvraj Mehta
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                {/* Main navigation sections */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 px-2">
                      Main Navigation
                    </h4>
                    <ul className="space-y-1">
                      {navLinks.map((link, index) => (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.08 }}
                        >
                          <a
                            href={link.href}
                            className={`text-base font-medium block py-3 px-4 rounded-lg ${
                              activeLink === link.href.substring(1)
                                ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                                : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                            } transition-colors flex items-center`}
                            onClick={closeMenu}
                          >
                            {link.title}
                            {activeLink === link.href.substring(1) && (
                              <motion.span
                                className="ml-2 h-1.5 w-1.5 rounded-full bg-indigo-500"
                                layoutId="activeDot"
                              />
                            )}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Secondary navigation sections if any */}
                  {secondaryNavLinks.length > 0 && (
                    <div className="p-4">
                      <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 px-2">
                        More Sections
                      </h4>
                      <ul className="space-y-1">
                        {secondaryNavLinks.map((link, index) => (
                          <motion.li
                            key={link.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.08 }}
                          >
                            <a
                              href={link.href}
                              className={`text-base font-medium block py-3 px-4 rounded-lg ${
                                activeLink === link.href.substring(1)
                                  ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                                  : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                              } transition-colors`}
                              onClick={closeMenu}
                            >
                              {link.title}
                            </a>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Mobile action buttons */}
                <div className="p-4 mt-auto border-t dark:border-gray-800">
                  <motion.a
                    href="/Yuvraj_Resume_v2_1 (1).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 text-base font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors w-full"
                    download
                    onClick={closeMenu}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaDownload className="text-sm" />
                    <span>Download Resume</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarEnhanced;
