// filepath: /Users/yuvrajmehta/Developer/GitHub Desktop/Portfolio/src/components/Contact.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import SectionContainer from "./SectionContainer";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiMail, HiChatAlt2 } from "react-icons/hi";
import { IoMailOutline, IoSendSharp, IoCallOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { RiMailSendLine } from "react-icons/ri";

// Contact information for easier access when changing
const CONTACT_EMAIL = "yuvraj.mehta532@gmail.com";
const CONTACT_PHONE = "+91-9334083113";

const Contact = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Contact information array for rendering
  const contactInfo = [
    {
      icon: (
        <IoMailOutline
          className={`text-2xl icon-pulse ${
            theme === "dark" ? "text-white" : "text-white"
          }`}
        />
      ),
      text: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      gradient: "from-indigo-500 to-purple-500",
      title: "Email",
      value: CONTACT_EMAIL,
    },
    {
      icon: (
        <IoCallOutline
          className={`text-2xl icon-pulse ${
            theme === "dark" ? "text-white" : "text-white"
          }`}
        />
      ),
      text: CONTACT_PHONE,
      href: `tel:${CONTACT_PHONE.replace(/-/g, "")}`,
      gradient: "from-green-500 to-teal-500",
      title: "Phone",
      value: CONTACT_PHONE,
    },
  ];

  // Social media links removed as they aren't currently being used

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <SectionContainer
      id="contact"
      isAlt={true}
      style={{
        scrollMarginTop: "150px",
        paddingTop: "40px",
        scrollBehavior: "smooth",
      }}
    >
      <div
        className={`absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl ${
          theme === "dark" ? "bg-purple-600/10" : "bg-accent/10"
        }`}
      ></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm mb-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-900/40 to-purple-900/40 text-indigo-300 border border-indigo-800/40"
                : "bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 border border-indigo-200"
            } shadow-lg backdrop-blur-sm`}
          >
            <HiChatAlt2 className="w-4 h-4" /> Let's Connect
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-8 font-heading ${
              theme === "dark" ? "text-white" : "text-gray-800"
            }`}
          >
            Get In{" "}
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
              }`}
            >
              Touch
            </span>
          </motion.h2>

          <div
            className={`w-24 h-1.5 mx-auto mt-6 rounded-full shadow-md ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-indigo-500/90"
                : "bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-indigo-500/90"
            }`}
          ></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`max-w-2xl mx-auto mt-6 text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.8, staggerChildren: 0.15 }}
        >
          <div>
            <motion.h3
              variants={itemVariants}
              className={`text-2xl font-bold mb-8 inline-flex items-center gap-3 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              <span
                className={`p-2.5 rounded-xl shadow-md backdrop-blur-md ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 text-indigo-400 border border-indigo-700/40"
                    : "bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-700 border border-indigo-200/70"
                }`}
              >
                <HiMail className="w-5 h-5" />
              </span>
              Contact Information
            </motion.h3>

            <div className="space-y-8 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex items-center gap-5 p-5 rounded-2xl backdrop-blur-md transition-all duration-300 border ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/40 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/5"
                      : "bg-white/80 border-gray-200/70 hover:border-indigo-300/50 hover:shadow-lg hover:shadow-indigo-500/5"
                  }`}
                  whileHover={{ x: 5, scale: 1.01 }}
                >
                  <motion.div
                    className={`flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg backdrop-blur-sm relative overflow-hidden ${
                      theme === "dark"
                        ? `bg-gradient-to-br ${info.gradient} border border-${
                            info.gradient.split("-")[1]
                          }-500/30`
                        : `bg-gradient-to-br ${info.gradient} border border-${
                            info.gradient.split("-")[1]
                          }-200/70`
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="contact-icon-hover">{info.icon}</div>
                    <div className="absolute inset-0 bg-black bg-opacity-10 dark:bg-opacity-20"></div>
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent"
                      style={{
                        backgroundSize: "200% 100%",
                        animation: "shine 2s infinite",
                      }}
                    ></div>
                  </motion.div>
                  <div>
                    <h4
                      className={`text-lg font-semibold ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {info.title}
                    </h4>
                    <p
                      className={
                        theme === "dark" ? "text-gray-300" : "text-gray-600"
                      }
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div className="mt-12" variants={itemVariants}>
              <h3
                className={`text-xl font-bold mb-6 inline-flex items-center gap-3 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                <span
                  className={`p-2 rounded-xl shadow-md backdrop-blur-md ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-purple-900/30 to-purple-800/30 text-purple-400 border border-purple-700/40"
                      : "bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 border border-purple-200/70"
                  }`}
                >
                  <FaLinkedin className="w-4 h-4" />
                </span>
                <span>
                  Connect{" "}
                  <span
                    className={`${
                      theme === "dark"
                        ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                        : "bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
                    }`}
                  >
                    With Me
                  </span>
                </span>
              </h3>

              <div className="flex gap-4 mt-5">
                <motion.a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 flex items-center justify-center rounded-xl text-white shadow-lg backdrop-blur-sm transition-all duration-300 relative overflow-hidden contact-social-icon ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-gray-700/60 hover:from-gray-700/70 hover:to-gray-800/70 hover:border-gray-600/70 hover:shadow-[0_0_15px_rgba(75,85,99,0.6)]"
                      : "bg-gradient-to-br from-gray-700/95 to-gray-800/95 border border-gray-600/30 hover:shadow-[0_0_15px_rgba(31,41,55,0.5)]"
                  }`}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.1,
                  }}
                >
                  <FaGithub className="icon-pulse" size={24} />
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/yuvraj-mehta-a0274528a//"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 flex items-center justify-center rounded-xl text-white shadow-lg backdrop-blur-sm transition-all duration-300 relative overflow-hidden contact-social-icon ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-blue-600/70 to-blue-800/70 border border-blue-700/40 hover:from-blue-500/70 hover:to-blue-700/70 hover:border-blue-600/60 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                      : "bg-gradient-to-br from-blue-500 to-blue-700 border border-blue-400/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  }`}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.2,
                  }}
                >
                  <FaLinkedin className="icon-pulse" size={24} />
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </motion.a>

                <motion.a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 flex items-center justify-center rounded-xl text-white shadow-lg backdrop-blur-sm transition-all duration-300 relative overflow-hidden contact-social-icon ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-blue-500/70 to-blue-600/70 border border-blue-600/40 hover:from-blue-400/70 hover:to-blue-500/70 hover:border-blue-500/60 hover:shadow-[0_0_15px_rgba(96,165,250,0.6)]"
                      : "bg-gradient-to-br from-blue-400 to-blue-600 border border-blue-300/30 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)]"
                  }`}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.3,
                  }}
                >
                  <FaXTwitter className="icon-pulse" size={24} />
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className={`p-8 rounded-2xl backdrop-blur-xl ${
              theme === "dark"
                ? "bg-gradient-to-br from-gray-800/60 to-gray-900/60 shadow-[0_8px_32px_rgba(31,41,55,0.3)] border border-gray-700/50 hover:border-indigo-500/20"
                : "bg-white/90 shadow-xl shadow-gray-200/40 border border-gray-100/80 hover:border-indigo-200/50"
            } transition-all duration-300`}
          >
            <h3
              className={`text-2xl font-bold mb-6 inline-flex items-center gap-3 ${
                theme === "dark" ? "text-white" : "text-gray-800"
              }`}
            >
              <span
                className={`p-2.5 rounded-xl shadow-md backdrop-blur-md ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-indigo-900/30 to-indigo-800/30 text-indigo-400 border border-indigo-700/40"
                    : "bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-700 border border-indigo-200/70"
                }`}
              >
                <RiMailSendLine className="w-5 h-5" />
              </span>
              Send Me a{" "}
              <span
                className={`${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
                    : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
                }`}
              >
                Message
              </span>
            </h3>

            {formStatus.isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-gradient-to-r p-6 rounded-xl shadow-sm ${
                  theme === "dark"
                    ? "from-green-900/30 to-emerald-900/30 text-emerald-300 border border-green-700/30"
                    : "from-green-50 to-emerald-50 text-emerald-700 border border-green-100"
                }`}
              >
                <p className="font-semibold text-lg">
                  Thank you for your message!
                </p>
                <p
                  className={`mt-2 ${
                    theme === "dark" ? "text-emerald-200" : ""
                  }`}
                >
                  I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2.5 ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span
                          className={`inline-block h-1 w-1 rounded-full ${
                            theme === "dark" ? "bg-indigo-400" : "bg-indigo-500"
                          }`}
                        ></span>
                        Name
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl transition-all duration-300 focus:outline-none backdrop-blur-sm border ${
                          theme === "dark"
                            ? "bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-indigo-500/50 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.2)]"
                            : "bg-white/80 border-gray-200/70 focus:border-indigo-300 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.15)]"
                        }`}
                        required
                        placeholder="Your name"
                      />
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-focus-within:w-full ${
                          formData.name ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span
                          className={`inline-block h-1 w-1 rounded-full ${
                            theme === "dark" ? "bg-indigo-400" : "bg-indigo-500"
                          }`}
                        ></span>
                        Email
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl transition-all duration-300 focus:outline-none backdrop-blur-sm border ${
                          theme === "dark"
                            ? "bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-indigo-500/50 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.2)]"
                            : "bg-white/80 border-gray-200/70 focus:border-indigo-300 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.15)]"
                        }`}
                        required
                        placeholder="your.email@example.com"
                      />
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-focus-within:w-full ${
                          formData.email ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span
                          className={`inline-block h-1 w-1 rounded-full ${
                            theme === "dark" ? "bg-indigo-400" : "bg-indigo-500"
                          }`}
                        ></span>
                        Subject
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl transition-all duration-300 focus:outline-none backdrop-blur-sm border ${
                          theme === "dark"
                            ? "bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-indigo-500/50 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.2)]"
                            : "bg-white/80 border-gray-200/70 focus:border-indigo-300 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.15)]"
                        }`}
                        required
                        placeholder="What is this regarding?"
                      />
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-focus-within:w-full ${
                          formData.subject ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span
                          className={`inline-block h-1 w-1 rounded-full ${
                            theme === "dark" ? "bg-indigo-400" : "bg-indigo-500"
                          }`}
                        ></span>
                        Message
                      </span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl transition-all duration-300 focus:outline-none backdrop-blur-sm border resize-none ${
                          theme === "dark"
                            ? "bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-indigo-500/50 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.2)]"
                            : "bg-white/80 border-gray-200/70 focus:border-indigo-300 focus:shadow-[0_0_0_2px_rgba(99,102,241,0.15)]"
                        }`}
                        required
                        placeholder="Your message here..."
                      ></textarea>
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 group-focus-within:w-full ${
                          formData.message ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className={`w-full bg-gradient-to-r text-white px-6 py-4 rounded-xl font-semibold flex justify-center items-center gap-2 shadow-lg transition-all duration-300 mt-4 relative overflow-hidden backdrop-blur-md border ${
                      theme === "dark"
                        ? "from-indigo-700/90 via-purple-700/90 to-indigo-700/90 hover:from-indigo-600/90 hover:via-purple-600/90 hover:to-indigo-600/90 border-indigo-500/40 hover:shadow-[0_8px_16px_-2px_rgba(99,102,241,0.4)] hover:border-indigo-500/60"
                        : "from-indigo-500 via-purple-500 to-indigo-500 hover:from-indigo-600 hover:via-purple-600 hover:to-indigo-600 border-indigo-400/30 hover:shadow-[0_8px_16px_-2px_rgba(99,102,241,0.25)] hover:border-indigo-400/50"
                    }`}
                    disabled={formStatus.isSubmitting}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent"
                      style={{
                        backgroundSize: "200% 100%",
                        animation: "shine 2s infinite",
                      }}
                    ></div>
                    <div className="relative z-10 flex items-center">
                      {formStatus.isSubmitting ? (
                        <>
                          <BiLoaderAlt className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <IoSendSharp className="mr-2 h-5 w-5 contact-icon-hover" />
                          <span>Send Message</span>
                        </>
                      )}
                    </div>
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
