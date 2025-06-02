import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaCheck,
  FaChevronRight,
  FaMobileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const Footer = () => {
  const [activeTab, setActiveTab] = useState("contact");
  const [emailStatus, setEmailStatus] = useState("idle"); // idle, sending, success, error
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
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

  // Tabs for footer navigation
  const tabs = [
    { id: "contact", label: "Contact" },
    { id: "connect", label: "Connect" },
    { id: "tech", label: "Tech Stack" },
  ];

  // Tech stack items with hover effects
  const techStack = [
    {
      icon: (
        <FaReact
          className={theme === "dark" ? "text-cyan-400" : "text-cyan-500"}
          size={28}
        />
      ),
      name: "React.js",
      description: "Frontend",
    },
    {
      icon: (
        <SiTypescript
          className={theme === "dark" ? "text-blue-400" : "text-blue-600"}
          size={28}
        />
      ),
      name: "TypeScript/JavaScript",
      description: "Programming",
    },
    {
      icon: (
        <FaNodeJs
          className={theme === "dark" ? "text-green-400" : "text-green-600"}
          size={28}
        />
      ),
      name: "Node.js",
      description: "Backend",
    },
    {
      icon: (
        <SiNextdotjs
          className={theme === "dark" ? "text-white" : "text-black"}
          size={28}
        />
      ),
      name: "Next.js",
      description: "Framework",
    },
    {
      icon: (
        <SiTailwindcss
          className={theme === "dark" ? "text-cyan-400" : "text-cyan-500"}
          size={28}
        />
      ),
      name: "Tailwind CSS",
      description: "Styling",
    },
    {
      icon: (
        <SiFramer
          className={theme === "dark" ? "text-purple-400" : "text-purple-600"}
          size={28}
        />
      ),
      name: "Framer",
      description: "Animation",
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
        <div className="stars-container">
          {theme === "dark" &&
            Array.from({ length: 20 }).map((_, i) => (
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
        className={`container mx-auto relative z-10 px-6 lg:px-8 py-16`}
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

        {/* Footer logo */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-heading mb-2">
              <span
                className={
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-400 to-violet-400 text-transparent bg-clip-text"
                    : "bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text"
                }
              >
                Let's Connect
              </span>
            </h2>
            <p
              className={`max-w-lg ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Ready to collaborate or have questions about my work? Use any of
              the methods below to reach out.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="hidden md:flex justify-end mt-8 md:mt-0">
            <div
              className={`p-1 rounded-xl ${
                theme === "dark" ? "bg-gray-800/50" : "bg-gray-100"
              } flex space-x-1`}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? theme === "dark"
                        ? "text-white"
                        : "text-indigo-700"
                      : theme === "dark"
                      ? "text-gray-400 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="active-tab"
                      className={`absolute inset-0 rounded-lg ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-indigo-900/50 to-violet-900/50"
                          : "bg-gradient-to-r from-indigo-100 to-violet-100"
                      } -z-10`}
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {/* Contact Form Tab */}
            {activeTab === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12"
              >
                {/* Left: Contact Form */}
                <div
                  className={`p-6 rounded-2xl ${
                    theme === "dark"
                      ? "bg-gray-900/50 backdrop-blur-sm"
                      : "bg-white shadow-lg shadow-indigo-100/20"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Send a Message
                  </h3>

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
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
                          placeholder="you@example.com"
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
                        {emailStatus === "idle" && <span>Send Message</span>}
                        {emailStatus === "sending" && (
                          <>
                            <div className="h-5 w-5 rounded-full border-t-2 border-r-2 border-white animate-spin" />
                            <span>Sending...</span>
                          </>
                        )}
                        {emailStatus === "success" && (
                          <>
                            <FaCheck />
                            <span>Message Sent!</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </div>

                {/* Right: Contact Information */}
                <div>
                  <h3
                    className={`text-xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Get in Touch
                  </h3>

                  <ul className="space-y-8">
                    {[
                      {
                        icon: (
                          <FaEnvelope
                            className={
                              theme === "dark"
                                ? "text-indigo-400"
                                : "text-indigo-600"
                            }
                          />
                        ),
                        title: "Email",
                        value: "yuvrajmmr.ug23.cs@nitp.ac.in",
                        link: "mailto:yuvrajmmr.ug23.cs@nitp.ac.in",
                      },
                      {
                        icon: (
                          <FaMobileAlt
                            className={
                              theme === "dark"
                                ? "text-indigo-400"
                                : "text-indigo-600"
                            }
                          />
                        ),
                        title: "Phone",
                        value: "+91-9334083113",
                        link: "tel:+919334083113",
                      },
                      {
                        icon: (
                          <FaMapMarkerAlt
                            className={
                              theme === "dark"
                                ? "text-indigo-400"
                                : "text-indigo-600"
                            }
                          />
                        ),
                        title: "Location",
                        value: "Patna, India",
                        link: null,
                      },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div
                          className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center ${
                            theme === "dark" ? "bg-gray-800" : "bg-indigo-100"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h4
                            className={
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                            }
                          >
                            {item.title}
                          </h4>
                          {item.link ? (
                            <a
                              href={item.link}
                              className={`text-lg font-medium ${
                                theme === "dark"
                                  ? "text-white hover:text-indigo-400"
                                  : "text-gray-900 hover:text-indigo-600"
                              } transition-colors`}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p
                              className={`text-lg font-medium ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {item.value}
                            </p>
                          )}
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Social Links for mobile - show on contact tab */}
                  <div className="md:hidden mt-10">
                    <h4
                      className={`text-lg font-medium mb-4 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Follow Me
                    </h4>

                    <div className="flex space-x-4">
                      {[
                        {
                          icon: <FaGithub size={18} />,
                          href: "https://github.com/yuvraj-mehta",
                        },
                        {
                          icon: <FaLinkedin size={18} />,
                          href: "https://linkedin.com/in/yuvraj-mehta-a0274528a//in/yuvraj-mehta-a0274528a/",
                        },
                        {
                          icon: <FaTwitter size={18} />,
                          href: "https://twitter.com/",
                        },
                        {
                          icon: <FaEnvelope size={18} />,
                          href: "mailto:yuvrajmmr.ug23.cs@nitp.ac.in",
                        },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            theme === "dark"
                              ? "bg-gray-800 hover:bg-gray-700 text-white"
                              : "bg-indigo-100 hover:bg-indigo-200 text-indigo-600"
                          } transition-all duration-300`}
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Connect Tab */}
            {activeTab === "connect" && (
              <motion.div
                key="connect"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`rounded-2xl overflow-hidden ${
                    theme === "dark"
                      ? "bg-gray-900/50 backdrop-blur-sm"
                      : "bg-white shadow-lg shadow-indigo-100/20"
                  }`}
                >
                  <div className="p-8">
                    <h3
                      className={`text-2xl font-bold mb-6 ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      Connect with Me
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      {[
                        {
                          name: "GitHub",
                          icon: <FaGithub size={24} />,
                          username: "@yuvrajmmr",
                          url: "https://github.com/yuvraj-mehta",
                          color: "from-gray-700 to-gray-900",
                          lightColor: "from-gray-100 to-gray-300",
                        },
                        {
                          name: "LinkedIn",
                          icon: <FaLinkedin size={24} />,
                          username: "Yuvraj Mehta",
                          url: "https://linkedin.com/in/yuvraj-mehta-a0274528a//in/yuvraj-mehta-a0274528a/",
                          color: "from-blue-600 to-blue-800",
                          lightColor: "from-blue-400 to-blue-600",
                        },
                        {
                          name: "Twitter",
                          icon: <FaTwitter size={24} />,
                          username: "@yuvrajmmr",
                          url: "https://twitter.com/yuvrajmmr",
                          color: "from-indigo-500 to-violet-600",
                          lightColor: "from-indigo-400 to-violet-500",
                        },
                        {
                          name: "Email",
                          icon: <FaEnvelope size={24} />,
                          username: "yuvrajmmr.ug23.cs@nitp.ac.in",
                          url: "mailto:yuvrajmmr.ug23.cs@nitp.ac.in",
                          color: "from-indigo-600 to-violet-700",
                          lightColor: "from-indigo-500 to-violet-600",
                        },
                      ].map((platform, index) => (
                        <motion.a
                          key={platform.name}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-6 rounded-xl flex items-center space-x-4 ${
                            theme === "dark"
                              ? "bg-gray-800/50 hover:bg-gray-800"
                              : "bg-gray-50 hover:bg-gray-100"
                          } transition-all duration-300`}
                          whileHover={{ y: -5 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * index, duration: 0.4 }}
                        >
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br text-white ${
                              theme === "dark"
                                ? platform.color
                                : platform.lightColor
                            }`}
                          >
                            {platform.icon}
                          </div>
                          <div>
                            <h4
                              className={`font-semibold ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {platform.name}
                            </h4>
                            <p
                              className={`text-sm ${
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-500"
                              }`}
                            >
                              {platform.username}
                            </p>
                          </div>
                        </motion.a>
                      ))}
                    </div>

                    <div
                      className={`p-6 rounded-xl text-center ${
                        theme === "dark" ? "bg-gray-800/80" : "bg-indigo-50"
                      }`}
                    >
                      <h4
                        className={`text-xl font-semibold mb-4 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Let's Work Together
                      </h4>
                      <p
                        className={`mb-6 max-w-lg mx-auto ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        I'm always open to discussing new projects, creative
                        ideas or opportunities to be part of your vision.
                      </p>
                      <motion.a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab("contact");
                        }}
                        className={`inline-flex items-center px-6 py-3 rounded-lg ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500"
                            : "bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:from-indigo-600 hover:to-violet-700"
                        } transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>Contact Me</span>
                        <FaChevronRight className="ml-2 text-sm" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tech Stack Tab */}
            {activeTab === "tech" && (
              <motion.div
                key="tech"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className={`rounded-2xl ${
                    theme === "dark"
                      ? "bg-gray-900/50 backdrop-blur-sm"
                      : "bg-white shadow-lg shadow-indigo-100/20"
                  } p-8`}
                >
                  <h3
                    className={`text-2xl font-bold mb-8 ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    My Tech Stack
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        className={`rounded-xl p-6 flex flex-col items-center text-center ${
                          theme === "dark"
                            ? "bg-gray-800 hover:bg-gray-800/80"
                            : "bg-gray-50 hover:bg-gray-100"
                        } transition-all duration-300 h-full`}
                        whileHover={{
                          y: -5,
                          boxShadow:
                            theme === "dark"
                              ? "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)"
                              : "0 20px 25px -5px rgba(79, 70, 229, 0.1), 0 10px 10px -5px rgba(79, 70, 229, 0.04)",
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.4 }}
                      >
                        <div className="mb-4">{tech.icon}</div>
                        <h4
                          className={`font-bold mb-1 ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {tech.name}
                        </h4>
                        <p
                          className={`text-xs ${
                            theme === "dark" ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {tech.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div
                    className={`mt-12 p-6 rounded-xl ${
                      theme === "dark" ? "bg-gray-800/80" : "bg-indigo-50"
                    }`}
                  >
                    <h4
                      className={`text-xl font-semibold mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Always Learning
                    </h4>
                    <p
                      className={
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      I'm constantly expanding my skills, currently exploring AI
                      integration with web applications and advanced state
                      management techniques.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile tab navigation */}
        <div className="md:hidden mt-8">
          <div
            className={`grid grid-cols-3 gap-2 p-1 rounded-xl ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-100"
            }`}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? theme === "dark"
                      ? "text-white"
                      : "text-indigo-700"
                    : theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab-mobile"
                    className={`absolute inset-0 rounded-lg ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-indigo-900/50 to-violet-900/50"
                        : "bg-gradient-to-r from-indigo-100 to-violet-100"
                    } -z-10`}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Footer bottom */}
        <div
          className={`mt-16 pt-8 ${
            theme === "dark"
              ? "border-t border-gray-800"
              : "border-t border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p
              className={`text-sm ${
                theme === "dark" ? "text-gray-500" : "text-gray-600"
              }`}
            >
              © {year} Yuvraj Mehta. All rights reserved.
            </p>

            {/* Social links - desktop only */}
            <div className="hidden md:flex items-center space-x-6 mt-4 md:mt-0">
              {[
                {
                  icon: <FaGithub size={16} />,
                  href: "https://github.com/yuvraj-mehta",
                },
                {
                  icon: <FaLinkedin size={16} />,
                  href: "https://linkedin.com/in/yuvraj-mehta-a0274528a//in/yuvraj-mehta-a0274528a/",
                },
                {
                  icon: <FaTwitter size={16} />,
                  href: "https://twitter.com/yuvrajmmr",
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
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

      {/* CSS for star animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
