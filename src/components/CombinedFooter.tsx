import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCheck,
  FaPaperPlane,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaCode,
  FaHeart,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const CombinedFooter = () => {
  const { theme } = useTheme();
  const [emailStatus, setEmailStatus] = useState("idle"); // idle, sending, success, error
  const [isVisible, setIsVisible] = useState(false);
  const year = new Date().getFullYear();

  // Show footer animation when scrolled to bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight - 100;

      if (scrollPosition >= documentHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mock form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus("sending");

    // Simulate API call
    setTimeout(() => {
      setEmailStatus("success");
      // Reset after 3 seconds
      setTimeout(() => setEmailStatus("idle"), 3000);
    }, 1500);
  };

  // Tech stack items with consistent colors
  const techStack = [
    {
      icon: (
        <FaReact
          className={theme === "dark" ? "text-indigo-400" : "text-indigo-500"}
          size={24}
        />
      ),
      name: "React",
      description: "Frontend",
    },
    {
      icon: (
        <SiTypescript
          className={theme === "dark" ? "text-indigo-400" : "text-indigo-500"}
          size={24}
        />
      ),
      name: "TypeScript",
      description: "Type Safety",
    },
    {
      icon: (
        <FaNodeJs
          className={theme === "dark" ? "text-indigo-400" : "text-indigo-500"}
          size={24}
        />
      ),
      name: "Node.js",
      description: "Backend",
    },
    {
      icon: (
        <SiTailwindcss
          className={theme === "dark" ? "text-indigo-400" : "text-indigo-500"}
          size={24}
        />
      ),
      name: "Tailwind",
      description: "Styling",
    },
  ];

  // Social links
  const socialLinks = [
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/" },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yuvraj-mehta-a0274528a//in/yuvraj-mehta-a0274528a/",
    },
    { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com/" },
    {
      icon: <FaEnvelope />,
      label: "Email",
      href: "mailto:contact@example.com",
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden ${
        theme === "dark"
          ? "bg-[#030014] text-white"
          : "bg-gradient-to-b from-indigo-50 to-white text-gray-800"
      }`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars or light rays */}
        <div className="stars-container">
          {theme === "dark"
            ? Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-indigo-500 animate-pulse-slow"
                  style={{
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.5 + 0.2,
                    animationDuration: `${Math.random() * 8 + 4}s`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))
            : Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-indigo-300 rounded-full blur-xl animate-pulse-slow"
                  style={{
                    width: `${Math.random() * 60 + 20}px`,
                    height: `${Math.random() * 60 + 20}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.1 + 0.05,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                  }}
                />
              ))}
        </div>

        {/* Gradient blobs */}
        <div
          className={`absolute top-1/4 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-20 
          ${theme === "dark" ? "bg-indigo-600" : "bg-indigo-300"}`}
        />
        <div
          className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-20
          ${theme === "dark" ? "bg-violet-600" : "bg-violet-300"}`}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="container mx-auto relative z-10 px-6 lg:px-8 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        {/* Glowing top border */}
        <div
          className={`absolute top-0 left-0 right-0 h-[2px] ${
            theme === "dark"
              ? "bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
              : "bg-gradient-to-r from-transparent via-indigo-400 to-transparent"
          }`}
        />

        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span
              className={
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 to-violet-400 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text"
              }
            >
              Let's Connect
            </span>
          </motion.h2>
          <motion.p
            className={`max-w-xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Have a question or want to work together? Let's make something
            awesome together.
          </motion.p>
        </div>

        {/* Contact + Connect Combined Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Left: Contact Form */}
          <motion.div
            className={`p-6 rounded-2xl ${
              theme === "dark"
                ? "bg-gray-900/50 backdrop-blur-sm border border-gray-800"
                : "bg-white shadow-lg shadow-indigo-100/20"
            }`}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3
              className={`text-2xl font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-lg outline-none transition-all ${
                    theme === "dark"
                      ? "bg-gray-800 border border-gray-700 focus:border-indigo-500 text-white"
                      : "bg-gray-50 border border-gray-200 focus:border-indigo-400 text-gray-900"
                  }`}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className={`w-full px-4 py-2 rounded-lg outline-none transition-all ${
                    theme === "dark"
                      ? "bg-gray-800 border border-gray-700 focus:border-indigo-500 text-white"
                      : "bg-gray-50 border border-gray-200 focus:border-indigo-400 text-gray-900"
                  }`}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-1 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg outline-none transition-all ${
                    theme === "dark"
                      ? "bg-gray-800 border border-gray-700 focus:border-indigo-500 text-white"
                      : "bg-gray-50 border border-gray-200 focus:border-indigo-400 text-gray-900"
                  }`}
                  placeholder="Your message here..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-medium text-white flex items-center justify-center space-x-2 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500"
                    : "bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={
                  emailStatus === "sending" || emailStatus === "success"
                }
              >
                {emailStatus === "idle" && (
                  <>
                    <FaPaperPlane className="mr-2" />
                    <span>Send Message</span>
                  </>
                )}
                {emailStatus === "sending" && (
                  <>
                    <div className="h-5 w-5 rounded-full border-t-2 border-r-2 border-white animate-spin" />
                    <span>Sending...</span>
                  </>
                )}
                {emailStatus === "success" && (
                  <>
                    <FaCheck className="mr-2" />
                    <span>Message Sent!</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Connect & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div
              className={`p-6 rounded-2xl h-auto ${
                theme === "dark"
                  ? "bg-gray-900/50 backdrop-blur-sm border border-gray-800"
                  : "bg-white shadow-lg shadow-indigo-100/20"
              }`}
            >
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Get in Touch
              </h3>

              <ul className="space-y-4">
                {[
                  {
                    icon: (
                      <FaEnvelope
                        className={
                          theme === "dark"
                            ? "text-indigo-400"
                            : "text-indigo-500"
                        }
                      />
                    ),
                    label: "Email",
                    value: "hello@portfolio.com",
                    href: "mailto:hello@portfolio.com",
                  },
                  {
                    icon: (
                      <FaMobileAlt
                        className={
                          theme === "dark"
                            ? "text-indigo-400"
                            : "text-indigo-500"
                        }
                      />
                    ),
                    label: "Phone",
                    value: "(555) 123-4567",
                    href: "tel:+15551234567",
                  },
                  {
                    icon: (
                      <FaMapMarkerAlt
                        className={
                          theme === "dark"
                            ? "text-indigo-400"
                            : "text-indigo-500"
                        }
                      />
                    ),
                    label: "Location",
                    value: "San Francisco, CA",
                  },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        theme === "dark" ? "bg-gray-800" : "bg-indigo-100"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`font-medium hover:underline ${
                            theme === "dark"
                              ? "text-white hover:text-indigo-400"
                              : "text-gray-800 hover:text-indigo-600"
                          }`}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          className={`font-medium ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div
              className={`p-6 rounded-2xl ${
                theme === "dark"
                  ? "bg-gray-900/50 backdrop-blur-sm border border-gray-800"
                  : "bg-white shadow-lg shadow-indigo-100/20"
              }`}
            >
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                Connect
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                      theme === "dark"
                        ? "hover:bg-gray-800 text-gray-300 hover:text-white"
                        : "hover:bg-indigo-50 text-gray-600 hover:text-indigo-600"
                    }`}
                    whileHover={{
                      scale: 1.03,
                      backgroundColor:
                        theme === "dark"
                          ? "rgb(31, 41, 55)"
                          : "rgb(238, 242, 255)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-indigo-600 to-violet-600 text-white"
                          : "bg-gradient-to-br from-indigo-500 to-violet-500 text-white"
                      }`}
                    >
                      {social.icon}
                    </div>
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          className={`p-6 rounded-2xl mb-16 ${
            theme === "dark"
              ? "bg-gray-900/50 backdrop-blur-sm border border-gray-800"
              : "bg-white shadow-lg shadow-indigo-100/20"
          }`}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h3
              className={`text-2xl font-semibold ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Tech Stack
            </h3>
            <div
              className={`text-sm mt-2 md:mt-0 ${
                theme === "dark" ? "text-indigo-400" : "text-indigo-600"
              }`}
            >
              <FaCode className="inline-block mr-1" /> Crafted with modern
              technologies
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className={`flex flex-col items-center p-4 rounded-lg text-center ${
                  theme === "dark" ? "bg-gray-800/70" : "bg-gray-50"
                }`}
                whileHover={{ scale: 1.03, y: -5 }}
                initial={{ opacity: 0, y: 15 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }
                }
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
              >
                <div className="mb-2">{tech.icon}</div>
                <span
                  className={`font-medium ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {tech.name}
                </span>
                <span
                  className={`text-xs mt-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {tech.description}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Currently learning:{" "}
              <span
                className={
                  theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                }
              >
                GenAI
              </span>{" "}
              and expanding DSA skills
            </p>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div
          className={`pt-8 ${
            theme === "dark"
              ? "border-t border-gray-800"
              : "border-t border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <div
                className={`mr-2 ${
                  theme === "dark" ? "text-indigo-400" : "text-indigo-500"
                }`}
              >
                <FaHeart className="inline-block" size={14} />
              </div>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                © {year} Yuvraj Mehta. All rights reserved.
              </p>
            </div>

            {/* Social links - minimal */}
            <div className="flex items-center space-x-4">
              {[
                { icon: <FaGithub size={16} />, href: "https://github.com/" },
                {
                  icon: <FaLinkedin size={16} />,
                  href: "https://linkedin.com/in/yuvraj-mehta-a0274528a//",
                },
                { icon: <FaTwitter size={16} />, href: "https://twitter.com/" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-500 hover:text-indigo-600"
                  }
                  whileHover={{ y: -2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CSS for animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default CombinedFooter;
