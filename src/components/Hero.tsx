import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center hero-background overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : ""
      }`}
    >
      <div
        className={`absolute top-20 left-20 w-64 h-64 rounded-full ${
          theme === "dark" ? "bg-indigo-600/10" : "bg-primary/10"
        } filter blur-3xl`}
      ></div>
      <div
        className={`absolute bottom-20 right-20 w-80 h-80 rounded-full ${
          theme === "dark" ? "bg-purple-600/10" : "bg-accent/10"
        } filter blur-3xl`}
      ></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 inline-block"
          >
            <span
              className={`px-4 py-2 rounded-full font-medium text-sm ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-900/30 to-purple-900/30 text-indigo-400"
                  : "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
              }`}
            >
              Full Stack Developer
            </span>
          </motion.div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
            <motion.span
              className={`block ${
                theme === "dark" ? "text-gray-100" : "text-dark"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm
            </motion.span>{" "}
            <motion.span
              className={`block mt-2 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                  : "text-gradient"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Yuvraj Mehta
            </motion.span>
          </h1>

          <motion.p
            className={`text-lg md:text-xl my-6 leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            B.Tech CS student at{" "}
            <span
              className={`font-semibold ${
                theme === "dark" ? "text-indigo-400" : "text-primary"
              }`}
            >
              NIT Patna
            </span>{" "}
            passionate about building{" "}
            <span
              className={`font-semibold ${
                theme === "dark" ? "text-purple-400" : "text-secondary"
              }`}
            >
              full stack applications
            </span>{" "}
            with a focus on{" "}
            <span
              className={`font-semibold ${
                theme === "dark" ? "text-pink-400" : "text-accent"
              }`}
            >
              user-friendly interfaces
            </span>
            . Skilled in{" "}
            <span className="relative inline-block">
              <span
                className={`absolute -bottom-1 left-0 w-full h-1 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-400 to-pink-400"
                    : "bg-gradient-to-r from-primary to-accent"
                }`}
              ></span>
              MERN Stack
            </span>
            .
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                  : "btn-gradient"
              } text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Contact Me</span>
              <FaArrowRight className="h-5 w-5 ml-2" />
            </motion.a>
            <motion.a
              href="#projects"
              className={`px-8 py-3 rounded-lg font-semibold flex items-center justify-center ${
                theme === "dark"
                  ? "bg-gray-800/50 text-white border border-indigo-500/30 hover:bg-gray-700/50"
                  : "glass-effect border border-primary/20"
              }`}
              whileHover={{
                scale: 1.05,
                backgroundColor:
                  theme === "dark"
                    ? "rgba(79, 70, 229, 0.1)"
                    : "rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>View Work</span>
              <FaExternalLinkAlt className="h-5 w-5 ml-2" />
            </motion.a>
          </motion.div>

          <motion.div
            className="flex space-x-6 mt-8 text-2xl justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.a
              href="https://github.com/yuvraj-mehta"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-sm hover:shadow-lg icon-glow ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-white"
                  : "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800 hover:from-primary hover:to-secondary hover:text-white"
              } transition-all duration-300`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="icon-pulse">
                <FaGithub />
              </div>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yuvraj-mehta-a0274528a//in/yuvraj-mehta-a0274528a/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-sm hover:shadow-lg icon-glow ${
                theme === "dark"
                  ? "bg-gradient-to-br from-indigo-600 to-violet-700 hover:from-indigo-500 hover:to-violet-600 text-white"
                  : "bg-gradient-to-br from-indigo-400 to-violet-500 text-white hover:from-indigo-500 hover:to-violet-600"
              } transition-all duration-300`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="icon-pulse">
                <FaLinkedin />
              </div>
            </motion.a>
            <motion.a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-sm hover:shadow-lg icon-glow ${
                theme === "dark"
                  ? "bg-gradient-to-br from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white"
                  : "bg-gradient-to-br from-indigo-300 to-violet-400 text-white hover:from-indigo-400 hover:to-violet-500"
              } transition-all duration-300`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="icon-pulse">
                <FaTwitter />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Hero image with animated decoration */}
            <motion.div
              className={`absolute -inset-4 rounded-full blur-2xl opacity-30 ${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-600/40 to-purple-600/40"
                  : "bg-gradient-to-r from-primary/40 to-accent/40"
              }`}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className={`w-[21.6rem] h-[21.6rem] md:w-[28.8rem] md:h-[28.8rem] rounded-full mx-auto overflow-hidden shadow-xl relative z-10 animate-float ${
                theme === "dark"
                  ? "bg-gradient-to-br from-indigo-600 to-purple-600"
                  : "bg-gradient-to-br from-primary to-accent"
              }`}
            >
              <motion.div
                className={`absolute inset-0 mix-blend-overlay ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-indigo-600/40 to-purple-600/40"
                    : "bg-gradient-to-br from-primary/40 to-accent/40"
                }`}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <img
                src="/yuvraj.png"
                alt="Yuvraj Mehta"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className={`absolute -top-6 -right-6 w-24 h-24 rounded-lg ${
                theme === "dark" ? "bg-purple-600/20" : "bg-accent/20"
              }`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className={`absolute -bottom-6 -left-6 w-20 h-20 rounded-full ${
                theme === "dark" ? "bg-indigo-600/20" : "bg-primary/20"
              }`}
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
