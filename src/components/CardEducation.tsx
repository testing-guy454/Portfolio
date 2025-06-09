import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaSchool,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaBook,
} from "react-icons/fa";
import { educationData } from "../data/education";

const CardEducation = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // State to track which card is expanded
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Toggle card expansion
  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="education"
      className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      style={{ scrollMarginTop: "100px" }}
    >
      {/* Background with subtle pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-block text-sm font-semibold tracking-wider uppercase mb-2 ${
              isDark ? "text-indigo-400" : "text-indigo-600"
            }`}
          >
            My Academic Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl font-bold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Education
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`mx-auto mt-4 mb-6 h-1 rounded ${
              isDark ? "bg-indigo-500" : "bg-indigo-600"
            }`}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`max-w-2xl mx-auto text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My formal education and learning pathway
          </motion.p>
        </div>

        {/* Unique Card Grid layout */}
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mb-8 rounded-xl overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-gray-800 to-gray-800/80 border border-gray-700"
                  : "bg-white border border-gray-200"
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              {/* Card Header */}
              <div
                className={`p-5 flex justify-between items-center cursor-pointer
                  ${
                    expandedIndex === index &&
                    (isDark ? "bg-indigo-900/20" : "bg-indigo-50/50")
                  }
                `}
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-center space-x-4">
                  {/* Education Icon */}
                  <div
                    className={`p-3 rounded-full ${
                      index === 0
                        ? isDark
                          ? "bg-indigo-900/40 text-indigo-400"
                          : "bg-indigo-100 text-indigo-600"
                        : index === 1
                        ? isDark
                          ? "bg-blue-900/40 text-blue-400"
                          : "bg-blue-100 text-blue-600"
                        : isDark
                        ? "bg-purple-900/40 text-purple-400"
                        : "bg-purple-100 text-purple-600"
                    }`}
                  >
                    {index === 0 ? (
                      <FaGraduationCap className="w-6 h-6" />
                    ) : (
                      <FaSchool className="w-6 h-6" />
                    )}
                  </div>

                  <div>
                    <h3
                      className={`font-bold text-lg ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {edu.institution}
                    </h3>
                    <p
                      className={`text-sm ${
                        isDark ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      {edu.level}
                    </p>
                  </div>
                </div>

                {/* Expand/Collapse Button */}
                <div
                  className={`rounded-full p-2 transition-colors ${
                    expandedIndex === index
                      ? isDark
                        ? "bg-indigo-900/40 text-indigo-400"
                        : "bg-indigo-100 text-indigo-600"
                      : isDark
                      ? "bg-gray-700 text-gray-400"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {expandedIndex === index ? (
                    <FaChevronUp className="w-4 h-4" />
                  ) : (
                    <FaChevronDown className="w-4 h-4" />
                  )}
                </div>
              </div>

              {/* Card Content - Animated */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 border-t border-dashed border-gray-200">
                      {/* Degree/Title */}
                      <div className="mb-5">
                        <h4
                          className={`font-bold text-base ${
                            isDark ? "text-gray-200" : "text-gray-800"
                          }`}
                        >
                          {edu.title}
                        </h4>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-2">
                          <div className="flex items-center text-sm">
                            <FaCalendarAlt
                              className={`mr-2 ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            />
                            <span
                              className={
                                isDark ? "text-gray-400" : "text-gray-600"
                              }
                            >
                              {edu.duration}
                            </span>
                          </div>

                          <div className="flex items-center text-sm">
                            <FaMapMarkerAlt
                              className={`mr-2 ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}
                            />
                            <span
                              className={
                                isDark ? "text-gray-400" : "text-gray-600"
                              }
                            >
                              {edu.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Details with icon */}
                      {edu.details.length > 0 && (
                        <div
                          className={`p-4 rounded-lg ${
                            isDark ? "bg-gray-800/60" : "bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center mb-2">
                            <FaBook
                              className={`mr-2 ${
                                isDark ? "text-indigo-400" : "text-indigo-600"
                              }`}
                            />
                            <h5
                              className={`font-medium text-sm ${
                                isDark ? "text-gray-300" : "text-gray-700"
                              }`}
                            >
                              Key Highlights
                            </h5>
                          </div>

                          <div className="space-y-2">
                            {edu.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start">
                                <span
                                  className={`inline-block mr-2 mt-1 ${
                                    isDark
                                      ? "text-indigo-400"
                                      : "text-indigo-600"
                                  }`}
                                >
                                  •
                                </span>
                                <p
                                  className={`text-sm ${
                                    isDark ? "text-gray-400" : "text-gray-600"
                                  }`}
                                >
                                  {detail}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons for larger screens */}
                      <div className="mt-4 hidden sm:flex justify-end">
                        <button
                          className={`text-sm font-medium px-4 py-2 rounded-md ${
                            isDark
                              ? "bg-indigo-600/20 text-indigo-400 hover:bg-indigo-600/30"
                              : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                          } transition-colors`}
                        >
                          View Certification
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Extra Education Information */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className={`mt-16 max-w-3xl mx-auto p-6 rounded-xl ${
            isDark
              ? "bg-gray-800/50 border border-gray-700"
              : "bg-white border border-gray-200"
          } shadow-md`}
        >
          <h3
            className={`text-lg font-bold mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Additional Learning
          </h3>

          <p
            className={`text-sm mb-4 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Beyond formal education, I continuously enhance my skills through:
          </p>

          <ul className="space-y-2">
            <li className="flex items-start">
              <span
                className={`inline-block mr-2 mt-1 ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                •
              </span>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <strong>Online Courses:</strong> Completed courses on platforms
                like Coursera, Udemy, and freeCodeCamp covering topics in web
                development, data structures, and algorithms.
              </p>
            </li>
            <li className="flex items-start">
              <span
                className={`inline-block mr-2 mt-1 ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                •
              </span>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <strong>Coding Platforms:</strong> Active participation in
                competitive programming on platforms like LeetCode, CodeChef,
                and HackerRank to strengthen problem-solving skills.
              </p>
            </li>
            <li className="flex items-start">
              <span
                className={`inline-block mr-2 mt-1 ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                •
              </span>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <strong>Self-Study:</strong> Continually learning through
                technical documentation, books, and open-source contributions to
                stay current with the latest technologies and best practices.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default CardEducation;
