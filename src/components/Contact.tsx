import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";

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

  // Contact information array for rendering
  const contactInfo = [
    {
      icon: (
        <FaEnvelope
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
        <FaPhone
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
    <section
      id="contact"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
      style={{
        scrollMarginTop: "100px",
      }}
    >
      {/* Background decoration */}
      <div
        className={`absolute -top-40 -right-40 w-80 h-80 rounded-full ${
          theme === "dark" ? "bg-indigo-600/5" : "bg-indigo-500/5"
        }`}
      ></div>
      <div
        className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full ${
          theme === "dark" ? "bg-purple-600/5" : "bg-purple-500/5"
        }`}
      ></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              theme === "dark"
                ? "bg-indigo-900/30 text-indigo-400 border border-indigo-800/30"
                : "bg-indigo-100 text-indigo-700"
            }`}
          >
            Connect
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold mt-4 font-heading ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Get In{" "}
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 text-transparent bg-clip-text"
              }`}
            >
              Touch
            </span>
          </motion.h2>
          <div
            className={`w-24 h-1 mx-auto mt-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600"
                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
            }`}
          ></div>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`max-w-2xl mx-auto mt-6 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have a project in mind or want to discuss potential opportunities?
            I'd love to hear from you.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3
              className={`text-2xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Contact Information
            </h3>

            <div className="space-y-8 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    theme === "dark"
                      ? "hover:bg-gray-800/50 border border-gray-800"
                      : "hover:bg-white/80 border border-gray-100 hover:shadow-md"
                  }`}
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400,
                    delay: 0.1 + index * 0.1 
                  }}
                >
                  <motion.div
                    className={`flex items-center justify-center w-14 h-14 text-white rounded-lg shadow-lg relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-500`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {info.icon}
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
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }
                    >
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <h3
                className={`text-xl font-bold mb-5 font-heading ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <span
                  className={`${
                    theme === "dark"
                      ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
                      : "bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 text-transparent bg-clip-text"
                  }`}
                >
                  Connect
                </span>{" "}
                With Me
              </h3>
              <div className="flex space-x-5">
                <motion.a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-indigo-700 to-purple-800 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                      : "bg-gradient-to-br from-indigo-600 to-purple-700 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
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
                  <FaGithub className="icon-pulse" size={22} />
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yuvraj-mehta-a0274528a//"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-indigo-600 to-purple-700 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                      : "bg-gradient-to-br from-indigo-500 to-purple-600 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]"
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
                  <FaLinkedin className="icon-pulse" size={22} />
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </motion.a>
                <motion.a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center rounded-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-purple-600 to-indigo-700 hover:shadow-[0_0_15px_rgba(124,58,237,0.4)]"
                      : "bg-gradient-to-br from-purple-500 to-indigo-600 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
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
                  <FaTwitter className="icon-pulse" size={22} />
                  <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </motion.a>
              </div>
            </div>
          </div>

          <div
            className={`glass-effect p-8 rounded-2xl ${
              theme === "dark"
                ? "bg-gray-800/70 shadow-[0_8px_32px_rgba(31,41,55,0.3)] backdrop-blur-md border border-gray-700/50"
                : "bg-white shadow-lg border border-gray-100"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 font-heading">
              Send Me a{" "}
              <span className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
                  : "bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 text-transparent bg-clip-text"
              }`}>Message</span>
            </h3>

            {formStatus.isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-gradient-to-r p-6 rounded-xl shadow-sm ${
                  theme === "dark"
                    ? "from-indigo-900/30 to-purple-900/30 text-indigo-300 border border-indigo-700/30"
                    : "from-indigo-50 to-purple-50 text-indigo-700 border border-indigo-100"
                }`}
              >
                <p className="font-semibold text-lg">
                  Thank you for your message!
                </p>
                <p
                  className={`mt-2 ${
                    theme === "dark" ? "text-indigo-200" : "text-purple-700"
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
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-gray-200" : "text-gray-700"
                      }`}
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_0_2px_rgba(99,102,241,0.4)] ${
                          theme === "dark"
                            ? "bg-gray-800/90 border border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                            : "bg-white border border-gray-200 focus:border-indigo-500"
                        }`}
                        required
                        placeholder="Your name"
                      />
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 transition-all duration-300 group-focus-within:w-full ${
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
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_0_2px_rgba(99,102,241,0.4)] ${
                          theme === "dark"
                            ? "bg-gray-800/90 border border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                            : "bg-white border border-gray-200 focus:border-indigo-500"
                        }`}
                        required
                        placeholder="your.email@example.com"
                      />
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 transition-all duration-300 group-focus-within:w-full ${
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
                      Subject
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_0_2px_rgba(99,102,241,0.4)] ${
                          theme === "dark"
                            ? "bg-gray-800/90 border border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                            : "bg-white border border-gray-200 focus:border-indigo-500"
                        }`}
                        required
                        placeholder="What is this regarding?"
                      />
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 transition-all duration-300 group-focus-within:w-full ${
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
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:shadow-[0_0_0_2px_rgba(99,102,241,0.4)] resize-none ${
                          theme === "dark"
                            ? "bg-gray-800/90 border border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500"
                            : "bg-white border border-gray-200 focus:border-indigo-500"
                        }`}
                        required
                        placeholder="Your message here..."
                      ></textarea>
                      <div
                        className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-500 transition-all duration-300 group-focus-within:w-full ${
                          formData.message ? "w-full" : "w-0"
                        }`}
                      ></div>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className={`w-full bg-gradient-to-r text-white px-6 py-4 rounded-lg font-semibold flex justify-center items-center gap-2 shadow-lg transition-all duration-300 mt-3 relative overflow-hidden ${
                      theme === "dark"
                        ? "from-indigo-600 via-purple-600 to-indigo-600 hover:shadow-[0_8px_16px_-2px_rgba(99,102,241,0.4)]"
                        : "from-indigo-600 via-purple-500 to-indigo-600 hover:shadow-[0_8px_16px_-2px_rgba(99,102,241,0.25)]"
                    }`}
                    disabled={formStatus.isSubmitting}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white to-transparent"
                      style={{
                        backgroundSize: "200% 100%",
                        animation: "shine 2s infinite",
                      }}
                    ></div>
                    <div className="relative z-10">
                      {formStatus.isSubmitting ? (
                        <>
                          <BiLoaderAlt className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </div>
                  </motion.button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
