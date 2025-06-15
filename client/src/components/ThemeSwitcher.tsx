import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon, FaRegMoon, FaRegSun } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render the toggle on client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-14 h-7 rounded-full flex items-center transition-all duration-300 focus:outline-none ${
        theme === "light"
          ? "bg-gradient-to-r from-indigo-100 to-violet-200 shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]"
          : "bg-gradient-to-r from-indigo-900 to-violet-800 shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]"
      } p-0.5`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Track */}
      <div
        className={`absolute inset-0 rounded-full overflow-hidden ${
          theme === "light"
            ? "border border-indigo-200"
            : "border border-indigo-700"
        }`}
      >
        {/* Background effects - consistent for both modes */}
        <div className="absolute inset-0 z-0">
          {theme === "dark" ? (
            <div className="absolute inset-0">
              {/* Stars for dark mode */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-0.5 h-0.5 bg-indigo-200 rounded-full animate-twinkle"
                  style={{
                    top: `${15 + Math.random() * 70}%`,
                    left: `${15 + Math.random() * 70}%`,
                    animationDelay: `${i * 0.8}s`,
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="absolute inset-0 opacity-30">
              {/* Rays for light mode */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-8 h-0.5 bg-indigo-300 rounded-full animate-ray-pulse"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg)`,
                    opacity: 0.7,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Toggle button that moves */}
      <motion.div
        className={`z-10 w-6 h-6 rounded-full flex items-center justify-center shadow-md ${
          theme === "dark"
            ? "bg-gradient-to-br from-indigo-500 to-violet-600"
            : "bg-gradient-to-br from-indigo-300 to-violet-400"
        }`}
        initial={false}
        animate={{
          x: theme === "light" ? 0 : 26,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        <div className="flex items-center justify-center w-full h-full">
          <motion.div
            key={theme} // Force animation to restart when theme changes
            initial={{ scale: 0.5, rotate: theme === "light" ? -30 : 30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="flex items-center justify-center w-full h-full"
          >
            {theme === "light" ? (
              <FaSun
                size={14}
                className="text-white filter drop-shadow(0 0 1px rgba(0,0,0,0.3))"
              />
            ) : (
              <FaMoon
                size={14}
                className="text-white filter drop-shadow(0 0 1px rgba(0,0,0,0.3))"
              />
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Small opposite icon indicator */}
      <div
        className={`absolute ${
          theme === "dark" ? "left-2" : "right-2"
        } opacity-50 flex items-center justify-center`}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <motion.div
          key={`indicator-${theme}`} // Force animation to restart when theme changes
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          {theme === "dark" ? (
            <FaRegSun size={10} className="text-indigo-200" />
          ) : (
            <FaRegMoon size={10} className="text-indigo-700" />
          )}
        </motion.div>
      </div>

      {/* Glow effect - consistent for both modes */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-500 ${
          theme === "light"
            ? "shadow-[0_0_8px_rgba(99,102,241,0.3)]"
            : "shadow-[0_0_8px_rgba(139,92,246,0.3)]"
        }`}
      ></div>
    </motion.button>
  );
};

export default ThemeToggle;
