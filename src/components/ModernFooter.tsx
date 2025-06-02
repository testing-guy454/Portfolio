import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaCode,
  FaLaptopCode,
  FaStar,
  FaMagic,
  FaCodeBranch,
  FaDownload,
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const ModernFooter = () => {
  const { theme } = useTheme();
  const year = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState("");

  // Simulate visitor count (in a real app this would be from a DB or API)
  useEffect(() => {
    // Generate a random visitor count between 10000 and 20000
    const randomVisitorCount = Math.floor(Math.random() * 10000) + 10000;
    setVisitorCount(randomVisitorCount);

    // Current date in a readable format
    const now = new Date();
    setLastUpdated(
      now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Patna, Bihar, India" },
    {
      icon: <FaEnvelope />,
      text: "yuvraj@mehta.com",
      href: "mailto:yuvraj@mehta.com",
    },
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const quickLinks = [
    { name: "Resume", href: "#resume", icon: <FaDownload size={14} /> },
    {
      name: "LeetCode",
      href: "https://leetcode.com/",
      icon: <SiLeetcode size={14} />,
    },
    {
      name: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/",
      icon: <SiGeeksforgeeks size={14} />,
    },
    { name: "Projects", href: "#projects", icon: <FaCodeBranch size={14} /> },
  ];

  return (
    <footer
      className={`relative mt-20 overflow-hidden ${
        theme === "dark"
          ? "bg-[#090014] text-white"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`relative block w-full h-[60px] ${
            theme === "dark" ? "fill-gray-900" : "fill-white"
          }`}
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-20 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-15 ${
            theme === "dark" ? "bg-indigo-800" : "bg-indigo-300"
          }`}
        />
        <div
          className={`absolute bottom-10 right-1/4 w-[350px] h-[350px] rounded-full blur-[120px] opacity-10 ${
            theme === "dark" ? "bg-violet-700" : "bg-violet-300"
          }`}
        />

        {/* Grid pattern overlay */}
        <div
          className={`absolute inset-0 bg-grid-pattern bg-[length:35px_35px] opacity-[0.025] ${
            theme === "dark" ? "invert-0" : "invert"
          }`}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={fadeIn}
          className="flex flex-col md:flex-row justify-between gap-16 mb-16"
        >
          {/* Brand Section */}
          <div className="w-full md:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2
                className={`text-3xl font-bold mb-3 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 text-transparent bg-clip-text"
                    : "bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-500 text-transparent bg-clip-text"
                }`}
              >
                Yuvraj Mehta
              </h2>

              <p
                className={`mb-6 leading-relaxed ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Full Stack Developer specializing in modern web technologies and
                algorithms, currently exploring the exciting world of Generative
                AI.
              </p>

              {/* Social Links */}
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {[
                  {
                    icon: <FaGithub size={18} />,
                    href: "https://github.com/yuvraj-mehta",
                    label: "GitHub",
                  },
                  {
                    icon: <FaLinkedin size={18} />,
                    href: "https://linkedin.com/in/yuvraj-mehta-a0274528a/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <FaTwitter size={18} />,
                    href: "https://twitter.com/",
                    label: "Twitter",
                  },
                  {
                    icon: <SiLeetcode size={18} />,
                    href: "https://leetcode.com/",
                    label: "LeetCode",
                  },
                  {
                    icon: <FaEnvelope size={18} />,
                    href: "mailto:yuvraj@mehta.com",
                    label: "Email",
                  },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    variants={fadeIn}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      theme === "dark"
                        ? "bg-gray-800 hover:bg-indigo-900/70 text-gray-300 hover:text-indigo-300 hover:shadow-glow-sm"
                        : "bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-600 hover:shadow-md"
                    }`}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Links & Contact Section */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3
                className={`text-lg font-semibold mb-5 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-md flex items-center justify-center ${
                        theme === "dark"
                          ? "bg-gray-800/80 text-indigo-400"
                          : "bg-gray-100 text-indigo-600"
                      }`}
                    >
                      {item.icon}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`${
                          theme === "dark"
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-600 hover:text-gray-900"
                        } transition-colors`}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span
                        className={
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }
                      >
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3
                className={`text-lg font-semibold mb-5 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`group flex items-center gap-2 ${
                        theme === "dark"
                          ? "text-gray-400 hover:text-indigo-300"
                          : "text-gray-600 hover:text-indigo-700"
                      } transition-colors`}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <span
                        className={`${
                          theme === "dark"
                            ? "text-indigo-400"
                            : "text-indigo-500"
                        }`}
                      >
                        {link.icon}
                      </span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3
                className={`text-lg font-semibold mb-5 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Navigation
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`group flex items-center ${
                        theme === "dark"
                          ? "text-gray-400 hover:text-indigo-300"
                          : "text-gray-600 hover:text-indigo-700"
                      } transition-colors`}
                    >
                      <span className="transform opacity-0 group-hover:opacity-100 group-hover:translate-x-1 -ml-4 mr-1 transition-all duration-300">
                        →
                      </span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div
          className={`rounded-2xl px-8 py-6 mb-12 ${
            theme === "dark"
              ? "bg-gray-800/20 backdrop-blur-sm shadow-[0_4px_24px_-12px_rgba(0,0,0,0.5)]"
              : "bg-white/70 backdrop-blur-sm shadow-lg"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Visitor Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div
                className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-indigo-900/50 text-indigo-300"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                <FaStar className="text-lg" />
              </div>
              <div>
                <h4
                  className={`text-xs uppercase tracking-wider font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Total Visitors
                </h4>
                <p
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {visitorCount.toLocaleString()}
                </p>
              </div>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center"
            >
              <div
                className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-purple-900/50 text-purple-300"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                <FaMagic className="text-lg" />
              </div>
              <div>
                <h4
                  className={`text-xs uppercase tracking-wider font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Last Updated
                </h4>
                <p
                  className={`text-lg font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {lastUpdated}
                </p>
              </div>
            </motion.div>

            {/* DSA Skills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center"
            >
              <div
                className={`w-12 h-12 rounded-full mr-4 flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-blue-900/50 text-blue-300"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                <FaLaptopCode className="text-lg" />
              </div>
              <div>
                <h4
                  className={`text-xs uppercase tracking-wider font-medium ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  DSA Skills
                </h4>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        theme === "dark" ? "text-yellow-300" : "text-yellow-500"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className={`border-t ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          } pt-8`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={theme === "dark" ? "text-gray-500" : "text-gray-600"}
            >
              © {year} Yuvraj Mehta. All rights reserved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`flex items-center text-sm ${
                theme === "dark" ? "text-gray-500" : "text-gray-500"
              }`}
            >
              <FaCode className="mr-2" size={14} />
              Crafted with <FaHeart
                className="mx-1 text-red-500"
                size={10}
              />{" "}
              using
              <span
                className={`ml-1 font-medium ${
                  theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                React & TypeScript
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
