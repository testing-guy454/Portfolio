import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

const FooterNew = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  // Show footer animation when scrolled to bottom
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight - 200;

      if (scrollPosition >= documentHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Contact info
  const contactInfo = [
    {
      icon: <FaEnvelope size={16} />,
      value: "hello@portfolio.com",
      href: "mailto:hello@portfolio.com",
    },
    {
      icon: <FaMobileAlt size={16} />,
      value: "(555) 123-4567",
      href: "tel:+15551234567",
    },
    { icon: <FaMapMarkerAlt size={16} />, value: "San Francisco, CA" },
  ];

  // Tech stack
  const techStack = [
    { icon: <SiReact />, name: "React" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
  ];

  // Social links
  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      label: "GitHub",
      href: "https://github.com/",
    },
    {
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yuvraj-mehta-a0274528a//",
    },
    {
      icon: <FaTwitter size={18} />,
      label: "Twitter",
      href: "https://twitter.com/",
    },
    {
      icon: <FaEnvelope size={18} />,
      label: "Email",
      href: "mailto:hello@portfolio.com",
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
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Minimal gradient accent */}
        <div
          className={`absolute top-1/4 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-10 
          ${theme === "dark" ? "bg-indigo-600" : "bg-indigo-300"}`}
        />
        <div
          className={`absolute -bottom-40 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-10
          ${theme === "dark" ? "bg-violet-600" : "bg-violet-300"}`}
        />
      </div>

      {/* Main content */}
      <motion.div
        className="container mx-auto relative z-10 px-6 lg:px-8 py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glowing top border */}
        <div
          className={`h-[1px] w-full mb-10 ${
            theme === "dark"
              ? "bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"
              : "bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent"
          }`}
        />

        {/* Footer content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* About column */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Yuvraj Mehta
            </h3>
            <p
              className={`text-sm mb-4 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full-stack developer with strong DSA skills and passion for GenAI
              technologies.
            </p>
            <div
              className={`flex space-x-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {socialLinks.slice(0, 3).map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-500"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Contact
            </h3>
            <ul className="space-y-2">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span
                    className={
                      theme === "dark" ? "text-indigo-400" : "text-indigo-500"
                    }
                  >
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`text-sm hover:underline ${
                        theme === "dark"
                          ? "text-gray-300 hover:text-indigo-400"
                          : "text-gray-600 hover:text-indigo-600"
                      }`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {item.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-sm hover:underline ${
                        theme === "dark"
                          ? "text-gray-300 hover:text-indigo-400"
                          : "text-gray-600 hover:text-indigo-600"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3
              className={`text-lg font-semibold mb-4 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              Tech Stack
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {techStack.map((tech, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span
                    className={
                      theme === "dark" ? "text-indigo-400" : "text-indigo-500"
                    }
                  >
                    {tech.icon}
                  </span>
                  <span
                    className={`text-sm ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className={`pt-6 mt-2 border-t ${
            theme === "dark" ? "border-gray-800/70" : "border-gray-200/70"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className={`text-sm mb-4 md:mb-0 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              © {year} Yuvraj Mehta. All rights reserved.
            </p>

            <p
              className={`text-sm flex items-center ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <FaHeart className="inline-block mr-2 text-xs text-indigo-500" />
              Crafting digital experiences with code
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterNew;
