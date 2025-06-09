import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import { FaMapMarkerAlt, FaSchool, FaChevronRight } from "react-icons/fa";
import { HiAcademicCap, HiSparkles } from "react-icons/hi";
import { educationData } from "../data/education";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { theme } = useTheme();

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="education"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-slate-50 text-gray-800"
      }`}
      style={{
        scrollMarginTop: "150px",
        paddingTop: "40px",
        scrollBehavior: "smooth",
      }}
    >
      {/* Glass morphism background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-purple-500 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-56 w-56 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute left-2/3 top-1/3 h-72 w-72 rounded-full bg-teal-500 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Educational{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-teal-400 bg-clip-text text-transparent">
              Background
            </span>
          </h2>
          <p
            className={`mx-auto max-w-2xl text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            The academic foundation that shaped my technical expertise and
            problem-solving approach
          </p>
        </motion.div>

        {/* Modern Education Timeline Using the data from education.ts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mx-auto max-w-5xl"
        >
          <div
            className={`mb-10 rounded-xl ${
              theme === "dark" ? "bg-gray-800/80" : "bg-white/80"
            } p-6 shadow-xl backdrop-blur-lg`}
          >
            <h3
              className={`mb-5 flex items-center text-2xl font-bold ${
                theme === "dark" ? "text-indigo-300" : "text-indigo-600"
              }`}
            >
              <HiAcademicCap className="mr-2 h-6 w-6" />
              <span>
                Academic Timeline
                <span className="ml-2 inline-block">
                  <HiSparkles className="h-4 w-4" />
                </span>
              </span>
            </h3>

            <div className="mt-8 space-y-10">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="relative z-10">
                    <div
                      className={`mb-6 inline-flex rounded-full px-4 py-1 text-sm font-medium ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-indigo-900 to-purple-900 text-indigo-200"
                          : "bg-gradient-to-br from-blue-500 to-indigo-500 text-white"
                      }`}
                    >
                      {edu.level}
                    </div>

                    <motion.div
                      variants={cardVariants}
                      className={`rounded-xl border p-5 shadow-lg ${
                        theme === "dark"
                          ? "border-gray-700 bg-gray-800"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <h4
                          className={`text-xl font-bold ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {edu.title}
                        </h4>
                        <div
                          className={`rounded-lg px-3 py-1 text-sm ${
                            theme === "dark"
                              ? "bg-indigo-900/30 text-indigo-300"
                              : "bg-indigo-100 text-indigo-700"
                          }`}
                        >
                          {edu.duration}
                        </div>
                      </div>

                      <div className="mb-4 flex flex-wrap items-center">
                        <div
                          className={`mr-4 flex items-center ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <FaSchool
                            className={`mr-1 h-4 w-4 ${
                              theme === "dark"
                                ? "text-indigo-400"
                                : "text-indigo-600"
                            }`}
                          />
                          {edu.institution}
                        </div>
                        <div
                          className={`flex items-center ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <FaMapMarkerAlt
                            className={`mr-1 h-4 w-4 ${
                              theme === "dark"
                                ? "text-indigo-400"
                                : "text-indigo-600"
                            }`}
                          />
                          {edu.location}
                        </div>
                      </div>

                      <div
                        className={`mt-4 space-y-2 ${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {edu.details.map((detail, i) => (
                          <div key={i} className="flex items-start">
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <FaChevronRight
                                className={`mr-2 mt-1 h-3 w-3 ${
                                  theme === "dark"
                                    ? "text-indigo-400"
                                    : "text-indigo-600"
                                }`}
                              />
                            </motion.div>
                            {detail}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Continuous learning through hands-on projects, competitive
            programming, and real-world application of theoretical concepts.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
