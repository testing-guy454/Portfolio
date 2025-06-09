import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaGraduationCap,
  FaSchool,
  FaMapMarkerAlt,
  FaTrophy,
  FaAward,
  FaMedal,
  FaCode,
  FaBookOpen,
  FaChevronRight,
} from "react-icons/fa";
import { HiAcademicCap, HiSparkles, HiLightningBolt } from "react-icons/hi";
import { educationData } from "../data/education";

interface Achievement {
  title: string;
  year: string;
  icon: JSX.Element;
  description: string;
  category: string;
  color: string;
  featured?: boolean;
}

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

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

  // Enhanced achievements data
  const achievements: Achievement[] = [
    {
      title: "Class Representative",
      year: "2023-2024",
      icon: <FaTrophy className="w-5 h-5" />,
      description:
        "Elected as Class Representative for CSE Department at NIT Patna",
      category: "Leadership",
      color: "yellow",
      featured: true,
    },
    {
      title: "Academic Excellence",
      year: "2022",
      icon: <FaAward className="w-5 h-5" />,
      description: "88.8% in CBSE Class 12 with PCM stream",
      category: "Academic",
      color: "blue",
      featured: true,
    },
    {
      title: "CGPA Achievement",
      year: "2023-Present",
      icon: <FaMedal className="w-5 h-5" />,
      description: "Maintaining CGPA of 7.69/10 at NIT Patna",
      category: "Academic",
      color: "green",
      featured: false,
    },
    {
      title: "Technical Coursework",
      year: "2023-Present",
      icon: <FaCode className="w-5 h-5" />,
      description:
        "Completed advanced courses in DSA, DBMS, OS, and Computer Networks",
      category: "Technical",
      color: "purple",
      featured: false,
    },
  ];

  // Course progress data
  const coursework = [
    { name: "Data Structures & Algorithms", progress: 90, color: "indigo" },
    { name: "Database Management Systems", progress: 85, color: "blue" },
    { name: "Operating Systems", progress: 80, color: "green" },
    { name: "Computer Networks", progress: 75, color: "purple" },
    { name: "Software Engineering", progress: 70, color: "pink" },
  ];

  return (
    <section
      id="education"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
      style={{
        scrollMarginTop: "150px",
        paddingTop: "40px",
        scrollBehavior: "smooth",
      }}
    >
      {/* Background Elements */}
      <div
        className={`absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl ${
          theme === "dark" ? "bg-blue-600/5" : "bg-blue-500/5"
        }`}
      ></div>
      <div
        className={`absolute bottom-20 left-0 w-80 h-80 rounded-full blur-3xl ${
          theme === "dark" ? "bg-purple-600/5" : "bg-purple-500/5"
        }`}
      ></div>

      <div className="container relative z-10">
        {/* Modern Header with Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Category Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm mb-6 ${
              theme === "dark"
                ? "bg-gradient-to-r from-blue-900/40 to-indigo-900/40 text-blue-300 border border-blue-700/40"
                : "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200"
            } shadow-lg backdrop-blur-sm`}
          >
            <HiAcademicCap className="w-4 h-4" />
            Academic Journey
            <HiSparkles className="w-4 h-4" />
          </motion.span>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`text-5xl md:text-6xl font-bold mb-6 font-heading ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Education &{" "}
            <span
              className={`bg-gradient-to-r ${
                theme === "dark"
                  ? "from-blue-400 to-indigo-400"
                  : "from-blue-600 to-indigo-600"
              } bg-clip-text text-transparent`}
            >
              Learning
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My academic foundation and continuous learning journey in computer
            science, building expertise through formal education and practical
            experience.
          </motion.p>
        </motion.div>

        {/* Main Content - Modern Grid Layout */}
        <div className="grid xl:grid-cols-12 lg:grid-cols-1 gap-12">
          {/* Education Timeline - Enhanced Design */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="xl:col-span-8 space-y-8"
          >
            <div
              className={`rounded-2xl overflow-hidden shadow-2xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50"
                  : "bg-white border border-gray-200/50"
              } backdrop-blur-lg`}
            >
              <div
                className={`px-8 py-6 border-b ${
                  theme === "dark" ? "border-gray-700/50" : "border-gray-200/50"
                }`}
              >
                <h3
                  className={`text-2xl font-bold flex items-center gap-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-blue-600/20 to-indigo-600/20"
                        : "bg-gradient-to-br from-blue-100 to-indigo-100"
                    }`}
                  >
                    <FaGraduationCap
                      className={`w-6 h-6 ${
                        theme === "dark" ? "text-blue-400" : "text-blue-600"
                      }`}
                    />
                  </div>
                  Academic Timeline
                </h3>
              </div>

              <div className="p-8">
                <div className="relative">
                  {/* Timeline Line */}
                  <div
                    className={`absolute left-6 top-0 bottom-0 w-0.5 ${
                      theme === "dark"
                        ? "bg-gradient-to-b from-blue-500/50 to-purple-500/50"
                        : "bg-gradient-to-b from-blue-400 to-purple-400"
                    }`}
                  ></div>

                  {educationData.map((edu: any, index: number) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative flex gap-6 pb-12 last:pb-0"
                    >
                      {/* Timeline Node */}
                      <div className="relative z-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={inView ? { scale: 1 } : { scale: 0 }}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.5,
                          }}
                          className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shadow-lg ${
                            theme === "dark"
                              ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                              : "bg-gradient-to-br from-blue-500 to-indigo-500 text-white"
                          }`}
                        >
                          {edu.icon}
                        </motion.div>
                      </div>

                      {/* Education Card */}
                      <motion.div
                        variants={cardVariants}
                        className={`flex-1 p-6 rounded-xl border ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/30 hover:border-gray-600/50"
                            : "bg-gradient-to-br from-white to-gray-50/50 border-gray-200/50 hover:border-gray-300"
                        } transition-all duration-300 hover:shadow-xl group`}
                      >
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                          <div className="flex-1">
                            <h4
                              className={`text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-900"
                              }`}
                            >
                              {edu.title}
                            </h4>
                            <div className="flex items-center gap-2 mb-2">
                              <FaSchool
                                className={`w-4 h-4 ${
                                  theme === "dark"
                                    ? "text-blue-400"
                                    : "text-blue-600"
                                }`}
                              />
                              <span
                                className={`font-semibold ${
                                  theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-700"
                                }`}
                              >
                                {edu.institution}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <FaMapMarkerAlt
                                  className={`w-3 h-3 ${
                                    theme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-500"
                                  }`}
                                />
                                <span
                                  className={
                                    theme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-600"
                                  }
                                >
                                  {edu.location}
                                </span>
                              </div>
                            </div>
                          </div>
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                              theme === "dark"
                                ? "bg-gradient-to-r from-blue-900/40 to-indigo-900/40 text-blue-300 border border-blue-700/40"
                                : "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border border-blue-200"
                            }`}
                          >
                            {edu.duration}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="space-y-2">
                          {edu.details.map(
                            (detail: string, detailIndex: number) => (
                              <motion.div
                                key={detailIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                  delay: 0.6 + index * 0.1 + detailIndex * 0.05,
                                }}
                                className="flex items-start gap-2"
                              >
                                <FaChevronRight
                                  className={`w-3 h-3 mt-1 flex-shrink-0 ${
                                    theme === "dark"
                                      ? "text-blue-400"
                                      : "text-blue-600"
                                  }`}
                                />
                                <span
                                  className={`text-sm leading-relaxed ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {detail}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar - Achievements & Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="xl:col-span-4 space-y-8"
          >
            {/* Achievements Section */}
            <motion.div
              variants={cardVariants}
              className={`rounded-2xl overflow-hidden shadow-2xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50"
                  : "bg-white border border-gray-200/50"
              } backdrop-blur-lg`}
            >
              <div
                className={`px-6 py-5 border-b ${
                  theme === "dark" ? "border-gray-700/50" : "border-gray-200/50"
                }`}
              >
                <h3
                  className={`text-xl font-bold flex items-center gap-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-yellow-600/20 to-orange-600/20"
                        : "bg-gradient-to-br from-yellow-100 to-orange-100"
                    }`}
                  >
                    <FaTrophy
                      className={`w-5 h-5 ${
                        theme === "dark" ? "text-yellow-400" : "text-yellow-600"
                      }`}
                    />
                  </div>
                  Achievements
                </h3>
              </div>

              <div className="p-6 space-y-4">
                {achievements.map((achievement: Achievement, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`p-4 rounded-xl border group cursor-pointer ${
                      theme === "dark"
                        ? "bg-gray-800/30 border-gray-700/50 hover:border-gray-600/70 hover:bg-gray-800/50"
                        : "bg-gray-50/50 border-gray-200/50 hover:border-gray-300 hover:bg-white"
                    } transition-all duration-300`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg flex-shrink-0 ${
                          achievement.color === "yellow"
                            ? theme === "dark"
                              ? "bg-yellow-900/30 text-yellow-400"
                              : "bg-yellow-100 text-yellow-600"
                            : achievement.color === "blue"
                            ? theme === "dark"
                              ? "bg-blue-900/30 text-blue-400"
                              : "bg-blue-100 text-blue-600"
                            : achievement.color === "green"
                            ? theme === "dark"
                              ? "bg-green-900/30 text-green-400"
                              : "bg-green-100 text-green-600"
                            : theme === "dark"
                            ? "bg-purple-900/30 text-purple-400"
                            : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {achievement.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4
                            className={`font-semibold text-sm group-hover:text-blue-500 transition-colors ${
                              theme === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {achievement.title}
                          </h4>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              theme === "dark"
                                ? "bg-gray-700 text-gray-300"
                                : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {achievement.year}
                          </span>
                        </div>
                        <p
                          className={`text-xs leading-relaxed ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {achievement.description}
                        </p>
                        <span
                          className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
                            theme === "dark"
                              ? "bg-gray-700/50 text-gray-300"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {achievement.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Coursework Progress */}
            <motion.div
              variants={cardVariants}
              className={`rounded-2xl overflow-hidden shadow-2xl ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50"
                  : "bg-white border border-gray-200/50"
              } backdrop-blur-lg`}
            >
              <div
                className={`px-6 py-5 border-b ${
                  theme === "dark" ? "border-gray-700/50" : "border-gray-200/50"
                }`}
              >
                <h3
                  className={`text-xl font-bold flex items-center gap-3 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      theme === "dark"
                        ? "bg-gradient-to-br from-purple-600/20 to-pink-600/20"
                        : "bg-gradient-to-br from-purple-100 to-pink-100"
                    }`}
                  >
                    <FaBookOpen
                      className={`w-5 h-5 ${
                        theme === "dark" ? "text-purple-400" : "text-purple-600"
                      }`}
                    />
                  </div>
                  Key Coursework
                </h3>
              </div>

              <div className="p-6 space-y-5">
                {coursework.map((course, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <h4
                        className={`font-medium text-sm ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {course.name}
                      </h4>
                      <span
                        className={`text-xs font-medium ${
                          course.color === "indigo"
                            ? theme === "dark"
                              ? "text-indigo-400"
                              : "text-indigo-600"
                            : course.color === "blue"
                            ? theme === "dark"
                              ? "text-blue-400"
                              : "text-blue-600"
                            : course.color === "green"
                            ? theme === "dark"
                              ? "text-green-400"
                              : "text-green-600"
                            : course.color === "purple"
                            ? theme === "dark"
                              ? "text-purple-400"
                              : "text-purple-600"
                            : theme === "dark"
                            ? "text-pink-400"
                            : "text-pink-600"
                        }`}
                      >
                        {course.progress}%
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full overflow-hidden ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          inView
                            ? { width: `${course.progress}%` }
                            : { width: 0 }
                        }
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                        className={`h-full rounded-full ${
                          course.color === "indigo"
                            ? "bg-gradient-to-r from-indigo-500 to-indigo-600"
                            : course.color === "blue"
                            ? "bg-gradient-to-r from-blue-500 to-blue-600"
                            : course.color === "green"
                            ? "bg-gradient-to-r from-green-500 to-green-600"
                            : course.color === "purple"
                            ? "bg-gradient-to-r from-purple-500 to-purple-600"
                            : "bg-gradient-to-r from-pink-500 to-pink-600"
                        }`}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Learning Philosophy */}
              <div
                className={`px-6 py-5 border-t ${
                  theme === "dark" ? "border-gray-700/50" : "border-gray-200/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <HiLightningBolt
                    className={`w-5 h-5 mt-0.5 ${
                      theme === "dark" ? "text-yellow-400" : "text-yellow-600"
                    }`}
                  />
                  <div>
                    <h4
                      className={`font-medium text-sm mb-1 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Learning Philosophy
                    </h4>
                    <p
                      className={`text-xs leading-relaxed ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Continuous learning through hands-on projects, competitive
                      programming, and real-world application of theoretical
                      concepts.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
