import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ModernFooter from "./components/ModernFooter";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`font-sans antialiased ${theme === "dark" ? "dark" : ""}`}>
      {/* SEO handled by HelmetProvider */}

      {/* Page loading animation */}
      <motion.div
        className={`fixed inset-0 z-[9999] ${
          theme === "dark" ? "bg-gray-900" : "bg-white"
        } flex items-center justify-center`}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, pointerEvents: "none" }}
        transition={{ duration: 2.5, delay: 1.2 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className={`text-5xl font-bold ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-500 text-transparent bg-clip-text"
          }`}
        >
          Portfolio.
        </motion.div>
      </motion.div>

      {/* Animated cursor highlight */}
      <div
        className={`glow-dot w-56 h-56 fixed ${
          theme === "dark"
            ? "opacity-10 bg-indigo-500"
            : "opacity-10 bg-indigo-300"
        }`}
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      <Navbar scrolled={scrolled} />
      <main
        className={`${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-900 to-gray-800"
            : "bg-gradient-to-b from-gray-50 to-white"
        }`}
      >
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        {scrolled && (
          <motion.a
            href="#home"
            className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                : "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
            } z-40`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="h-5 w-5" />
          </motion.a>
        )}
      </main>
      <ModernFooter />
    </div>
  );
}

export default App;
