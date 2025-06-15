import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";
import resume from "../../public/Yuvraj_Resume_v2_1 (1).pdf";
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
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";

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
    { icon: <FaMapMarkerAlt />, text: "Gaya, Bihar, India" },
    {
      icon: <FaEnvelope />,
      text: "yuvraj.mehta532@gmail.com",
      href: "mailto:yuvraj.mehta532@gmail.com",
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
    {
      name: "Resume",
      href: resume,
      icon: <FaDownload size={16} />,
      color: "blue",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/mythical-UV/",
      icon: <SiLeetcode size={16} />,
      color: "indigo",
    },
    {
      name: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/yuvrajmevbrx/",
      icon: <SiGeeksforgeeks size={16} />,
      color: "green",
    },
    {
      name: "CodeChef",
      href: "https://www.codechef.com/users/quick_unity_53",
      icon: <SiCodechef size={16} />,
      color: "purple",
    },
    {
      name: "Projects",
      href: "#projects",
      icon: <FaCodeBranch size={16} />,
      color: "teal",
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/yuvraj-mehta",
      label: "GitHub",
      color: "indigo",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://linkedin.com/in/yuvraj-mehta-a0274528a/",
      label: "LinkedIn",
      color: "blue",
    },
    {
      icon: <FaTwitter size={20} />,
      href: "https://twitter.com/",
      label: "Twitter",
      color: "teal",
    },
    {
      icon: <SiLeetcode size={20} />,
      href: "https://leetcode.com/u/mythical-UV/",
      label: "LeetCode",
      color: "purple",
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:yuvraj.mehta532@gmail.com",
      label: "Email",
      color: "green",
    },
  ];

  return (
    <footer
      className={`relative mt-16 pt-16 overflow-hidden ${
        theme === "dark"
          ? "bg-[#090014] text-white"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Footer Border */}
      <div className="absolute top-0 left-0 w-full h-[6px] overflow-hidden">
        <div
          className={`w-full h-full ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-600"
              : "bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400"
          }`}
        ></div>
      </div>

      {/* Top Shadow */}
      <div className="absolute top-[6px] left-0 w-full h-[15px] shadow-[0_5px_15px_rgba(0,0,0,0.1)]"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-40 left-1/4 w-[400px] h-[400px] rounded-full blur-[150px] opacity-15 ${
            theme === "dark" ? "bg-indigo-800" : "bg-indigo-300"
          }`}
        />
        <div
          className={`absolute bottom-20 right-1/4 w-[350px] h-[350px] rounded-full blur-[120px] opacity-10 ${
            theme === "dark" ? "bg-violet-700" : "bg-violet-300"
          }`}
        />

        {/* Grid pattern overlay */}
        <div
          className={`absolute inset-0 bg-[url('/src/assets/grid-pattern.svg')] bg-[length:35px_35px] opacity-[0.025] ${
            theme === "dark" ? "invert-0" : "invert"
          }`}
        ></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-24 md:pb-20 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={fadeIn}
          className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-16 mb-12"
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
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                {socialLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    variants={fadeIn}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`p-3 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      theme === "dark"
                        ? `bg-${item.color}-900/30 text-${item.color}-400`
                        : `bg-${item.color}-100 text-${item.color}-600`
                    }`}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Links & Contact Section */}
          <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 md:pl-4">
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="min-w-0"
            >
              <h3
                className={`text-lg font-semibold mb-4 md:mb-5 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Contact
              </h3>
              <div className="space-y-3 md:space-y-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 overflow-hidden"
                  >
                    <div
                      className={`p-2 rounded-md flex-shrink-0 flex items-center justify-center ${
                        theme === "dark"
                          ? "bg-blue-900/30 text-blue-400"
                          : "bg-blue-100 text-blue-600"
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
                        } transition-colors truncate max-w-[180px] sm:max-w-[200px] md:max-w-[160px] lg:max-w-full`}
                        title={item.text}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span
                        className={`${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        } truncate max-w-[180px] sm:max-w-[200px] md:max-w-[160px] lg:max-w-full`}
                        title={item.text}
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
              className="min-w-0"
            >
              <h3
                className={`text-lg font-semibold mb-4 md:mb-5 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Quick Links
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-3"
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <div
                        className={`p-2 rounded-md flex items-center justify-center ${
                          theme === "dark"
                            ? `bg-${link.color}-900/30 text-${link.color}-400`
                            : `bg-${link.color}-100 text-${link.color}-600`
                        }`}
                      >
                        {link.icon}
                      </div>
                      <span
                        className={`group-hover:translate-x-1 transition-transform duration-300 truncate ${
                          theme === "dark"
                            ? "text-gray-300 hover:text-white"
                            : "text-gray-700 hover:text-gray-900"
                        }`}
                        title={link.name}
                      >
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
              className="min-w-0"
            >
              <h3
                className={`text-lg font-semibold mb-4 md:mb-5 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Navigation
              </h3>
              <ul className="space-y-2 md:space-y-3">
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
          className={`rounded-2xl px-6 md:px-8 py-4 md:py-6 mb-8 md:mb-10 ${
            theme === "dark"
              ? "bg-gray-800/20 backdrop-blur-sm shadow-[0_4px_24px_-12px_rgba(0,0,0,0.5)]"
              : "bg-white/70 backdrop-blur-sm shadow-lg"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            {/* Visitor Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4 flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-indigo-900/50 text-indigo-300"
                    : "bg-indigo-100 text-indigo-600"
                }`}
              >
                <FaStar className="text-base md:text-lg" />
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
                  className={`text-xl md:text-2xl font-bold ${
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
          } pt-2 pb-3`}
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
