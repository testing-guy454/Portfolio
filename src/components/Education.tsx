import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

  return (
    <section
      id="education"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      {/* Background decoration */}
      <div
        className={`absolute -top-40 -right-40 w-96 h-96 rounded-full ${
          theme === "dark" ? "bg-indigo-600/5" : "bg-primary/5"
        }`}
      ></div>
      <div
        className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full ${
          theme === "dark" ? "bg-purple-600/5" : "bg-accent/5"
        }`}
      ></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span
            className={`px-4 py-2 rounded-full font-medium text-sm ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-900/30 to-purple-900/30 text-indigo-400"
                : "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
            }`}
          >
            Academic Journey
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 font-heading ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                  : "text-gradient"
              }`}
            >
              Education
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto mt-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                : "bg-gradient-to-r from-primary to-accent"
            }`}
          ></div>
        </motion.div>

        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-10">
            {/* Education Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div
                className={`absolute left-8 top-0 w-1 h-full ${
                  theme === "dark" ? "bg-indigo-800/30" : "bg-indigo-200"
                } rounded-full z-0`}
              />

              {/* Education Items */}
              <div className="space-y-12 relative z-10">
                {/* Bachelor's Degree */}
                <div className="flex">
                  <div
                    className={`relative flex items-center justify-center w-16 h-16 rounded-full ${
                      theme === "dark" ? "bg-gray-900" : "bg-white"
                    } shadow-lg mr-6`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        theme === "dark" ? "bg-indigo-800" : "bg-indigo-100"
                      }`}
                    >
                      <span
                        className={
                          theme === "dark"
                            ? "text-indigo-300"
                            : "text-indigo-600"
                        }
                      >
                        B.Tech
                      </span>
                    </div>
                  </div>

                  <div
                    className={`card-gradient p-6 rounded-xl flex-grow ${
                      theme === "dark" ? "bg-gray-900" : "bg-white"
                    } shadow-lg`}
                  >
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3
                        className={`text-xl font-bold ${
                          theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                      >
                        Bachelor of Technology in Computer Science
                      </h3>
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          theme === "dark"
                            ? "bg-indigo-900/50 text-indigo-300"
                            : "bg-indigo-100 text-indigo-700"
                        }`}
                      >
                        2023 - 2027
                      </span>
                    </div>
                    <h4
                      className={`text-lg font-semibold mb-3 ${
                        theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      National Institute of Technology, Patna
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span
                          className={`mt-1.5 w-2 h-2 rounded-full ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                              : "bg-gradient-to-r from-primary to-secondary"
                          }`}
                        ></span>
                        <span
                          className={
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          Cumulative CGPA: <strong>7.69</strong>/10
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span
                          className={`mt-1.5 w-2 h-2 rounded-full ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                              : "bg-gradient-to-r from-primary to-secondary"
                          }`}
                        ></span>
                        <span
                          className={
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          Relevant Coursework: Data Structures, Algorithms,
                          Database Systems, Web Development
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span
                          className={`mt-1.5 w-2 h-2 rounded-full ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                              : "bg-gradient-to-r from-primary to-secondary"
                          }`}
                        ></span>
                        <span
                          className={
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          Class Representative, Department of CSE (2023-2024)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Senior Secondary Education */}
                <div className="flex">
                  <div
                    className={`relative flex items-center justify-center w-16 h-16 rounded-full ${
                      theme === "dark" ? "bg-gray-900" : "bg-white"
                    } shadow-lg mr-6`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        theme === "dark" ? "bg-purple-800" : "bg-purple-100"
                      }`}
                    >
                      <span
                        className={
                          theme === "dark"
                            ? "text-purple-300"
                            : "text-purple-600"
                        }
                      >
                        12th
                      </span>
                    </div>
                  </div>

                  <div
                    className={`card-gradient p-6 rounded-xl flex-grow ${
                      theme === "dark" ? "bg-gray-900" : "bg-white"
                    } shadow-lg`}
                  >
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3
                        className={`text-xl font-bold ${
                          theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                      >
                        Senior Secondary Education (CBSE)
                      </h3>
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          theme === "dark"
                            ? "bg-purple-900/50 text-purple-300"
                            : "bg-purple-100 text-purple-700"
                        }`}
                      >
                        2022 - 2023
                      </span>
                    </div>
                    <h4
                      className={`text-lg font-semibold mb-3 ${
                        theme === "dark" ? "text-purple-400" : "text-purple-600"
                      }`}
                    >
                      School Name Here
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span
                          className={`mt-1.5 w-2 h-2 rounded-full ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-purple-500 to-pink-500"
                              : "bg-gradient-to-r from-purple-400 to-pink-400"
                          }`}
                        ></span>
                        <span
                          className={
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          Percentage: <strong>95%</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span
                          className={`mt-1.5 w-2 h-2 rounded-full ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-purple-500 to-pink-500"
                              : "bg-gradient-to-r from-purple-400 to-pink-400"
                          }`}
                        ></span>
                        <span
                          className={
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          Stream: PCM with Computer Science
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Secondary Education */}
                <div className="flex">
                  <div
                    className={`relative flex items-center justify-center w-16 h-16 rounded-full ${
                      theme === "dark" ? "bg-gray-900" : "bg-white"
                    } shadow-lg mr-6`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        theme === "dark" ? "bg-pink-800" : "bg-pink-100"
                      }`}
                    >
                      <span
                        className={
                          theme === "dark" ? "text-pink-300" : "text-pink-600"
                        }
                      >
                        10th
                      </span>
                    </div>
                  </div>

                  <div
                    className={`card-gradient p-6 rounded-xl flex-grow ${
                      theme === "dark" ? "bg-gray-900" : "bg-white"
                    } shadow-lg`}
                  >
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h3
                        className={`text-xl font-bold ${
                          theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                      >
                        Secondary Education (CBSE)
                      </h3>
                      <span
                        className={`px-3 py-1 text-sm rounded-full ${
                          theme === "dark"
                            ? "bg-pink-900/50 text-pink-300"
                            : "bg-pink-100 text-pink-700"
                        }`}
                      >
                        2020 - 2021
                      </span>
                    </div>
                    <h4
                      className={`text-lg font-semibold mb-3 ${
                        theme === "dark" ? "text-pink-400" : "text-pink-600"
                      }`}
                    >
                      School Name Here
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span
                          className={`mt-1.5 w-2 h-2 rounded-full ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-pink-500 to-red-500"
                              : "bg-gradient-to-r from-pink-400 to-red-400"
                          }`}
                        ></span>
                        <span
                          className={
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          Percentage: <strong>93%</strong>
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span
                          className={`mt-1.5 w-2 h-2 rounded-full ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-pink-500 to-red-500"
                              : "bg-gradient-to-r from-pink-400 to-red-400"
                          }`}
                        ></span>
                        <span
                          className={
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }
                        >
                          Achievements: School topper in Mathematics
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
