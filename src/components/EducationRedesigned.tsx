import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaGraduationCap,
  FaSchool,
  FaMapMarkerAlt,
  FaTrophy,
  FaChevronRight,
  FaCalendarAlt,
  FaCertificate,
  FaLaptopCode,
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

const EducationRedesigned = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

  const isDark = theme === "dark";

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
    hidden: { opacity: 0, scale: 0.95 },
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
      icon: <FaCertificate className="w-5 h-5" />,
      description: "88.8% in CBSE Class 12 with PCM stream",
      category: "Academic",
      color: "blue",
      featured: true,
    },
    {
      title: "CGPA Achievement",
      year: "2023-Present",
      icon: <HiAcademicCap className="w-5 h-5" />,
      description: "Maintaining CGPA of 7.69/10 at NIT Patna",
      category: "Academic",
      color: "green",
      featured: false,
    },
    {
      title: "Technical Coursework",
      year: "2023-Present",
      icon: <FaLaptopCode className="w-5 h-5" />,
      description:
        "Completed advanced courses in DSA, DBMS, OS, and Computer Networks",
      category: "Technical",
      color: "purple",
      featured: false,
    },
  ];

  // Skills and course progress data
  const skills = [
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
        isDark
          ? "bg-gradient-to-b from-gray-900 to-gray-950"
          : "bg-gradient-to-b from-gray-50 to-gray-100"
      }`}
      style={{
        scrollMarginTop: "150px",
        paddingTop: "40px",
        scrollBehavior: "smooth",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className={`absolute left-0 top-0 h-full w-full ${
            isDark ? "opacity-10" : "opacity-5"
          }`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="education-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 40L40 0M20 40L40 20M0 20L20 0"
                stroke={isDark ? "#4f46e5" : "#6366f1"}
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#education-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
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
              isDark
                ? "bg-gradient-to-r from-indigo-900/40 to-blue-900/40 text-indigo-300 border border-indigo-800/40"
                : "bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 border border-indigo-200"
            } shadow-lg backdrop-blur-sm`}
          >
            <HiAcademicCap className="w-5 h-5" />
            Academic Journey
            <HiSparkles className="w-4 h-4" />
          </motion.span>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={`text-5xl md:text-6xl font-bold mb-8 font-heading ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Education &{" "}
            <span
              className={`bg-gradient-to-r ${
                isDark
                  ? "from-indigo-400 to-blue-400"
                  : "from-indigo-600 to-blue-600"
              } bg-clip-text text-transparent`}
            >
              Qualifications
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Building expertise through structured education and continuous
            learning, combining academic excellence with practical skills
            development.
          </motion.p>
        </motion.div>

        {/* Main Content - 3D Card Layout */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Left Section - Education Timeline */}
          <div className="lg:col-span-7 space-y-10">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group relative rounded-2xl overflow-hidden ${
                  isDark
                    ? "bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 hover:border-indigo-500/30"
                    : "bg-white backdrop-blur-xl border border-gray-200 hover:border-indigo-300/50"
                } shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10`}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Education Level Badge */}
                <div
                  className={`absolute top-0 right-0 z-20 ${
                    isDark
                      ? "bg-indigo-900/70 text-indigo-200"
                      : "bg-indigo-100 text-indigo-700"
                  } py-1.5 px-4 rounded-bl-lg rounded-tr-lg font-medium text-xs`}
                >
                  {edu.level}
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                          index === 0
                            ? isDark
                              ? "bg-indigo-900/50 text-indigo-300 ring-1 ring-indigo-500/30"
                              : "bg-indigo-100 text-indigo-700"
                            : index === 1
                            ? isDark
                              ? "bg-blue-900/50 text-blue-300 ring-1 ring-blue-500/30"
                              : "bg-blue-100 text-blue-700"
                            : isDark
                            ? "bg-purple-900/50 text-purple-300 ring-1 ring-purple-500/30"
                            : "bg-purple-100 text-purple-700"
                        } transition-transform duration-500 transform group-hover:scale-110`}
                      >
                        {index === 0 ? (
                          <FaGraduationCap className="w-8 h-8" />
                        ) : index === 1 ? (
                          <FaSchool className="w-8 h-8" />
                        ) : (
                          <FaSchool className="w-8 h-8" />
                        )}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3
                          className={`text-2xl font-bold ${
                            isDark ? "text-white" : "text-gray-900"
                          } group-hover:text-indigo-500 transition-colors duration-300`}
                        >
                          {edu.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-2">
                          <div className="flex items-center gap-1.5">
                            <FaSchool
                              className={
                                isDark ? "text-indigo-400" : "text-indigo-600"
                              }
                            />
                            <span
                              className={
                                isDark ? "text-gray-300" : "text-gray-700"
                              }
                            >
                              {edu.institution}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <FaMapMarkerAlt
                              className={
                                isDark ? "text-gray-400" : "text-gray-500"
                              }
                            />
                            <span
                              className={
                                isDark ? "text-gray-400" : "text-gray-600"
                              }
                            >
                              {edu.location}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <FaCalendarAlt
                              className={
                                isDark ? "text-gray-400" : "text-gray-500"
                              }
                            />
                            <span
                              className={
                                isDark ? "text-gray-400" : "text-gray-600"
                              }
                            >
                              {edu.duration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Education Details */}
                      <div
                        className={`p-4 rounded-xl ${
                          isDark ? "bg-gray-900/50" : "bg-gray-50"
                        } border ${
                          isDark ? "border-gray-800" : "border-gray-100"
                        }`}
                      >
                        <h4
                          className={`text-sm font-medium mb-2 ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          Key Accomplishments
                        </h4>

                        <ul className="space-y-1.5">
                          {edu.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="flex items-start gap-2"
                            >
                              <FaChevronRight
                                className={`w-3 h-3 mt-1 flex-shrink-0 ${
                                  isDark ? "text-indigo-400" : "text-indigo-600"
                                }`}
                              />
                              <span
                                className={`text-sm leading-relaxed ${
                                  isDark ? "text-gray-400" : "text-gray-600"
                                }`}
                              >
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 ${
                    index === 0
                      ? "bg-gradient-to-r from-indigo-500 to-blue-500"
                      : index === 1
                      ? "bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-gradient-to-r from-purple-500 to-pink-500"
                  }`}
                ></div>
              </motion.div>
            ))}
          </div>

          {/* Right Section - Skills & Achievements */}
          <div className="lg:col-span-5 space-y-8">
            {/* Achievements Card */}
            <motion.div
              variants={cardVariants}
              className={`rounded-2xl overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50"
                  : "bg-white border border-gray-200/50"
              } shadow-xl backdrop-blur-lg`}
            >
              <div
                className={`px-6 py-5 border-b ${
                  isDark ? "border-gray-700/50" : "border-gray-200/50"
                }`}
              >
                <h3
                  className={`text-xl font-bold flex items-center gap-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      isDark
                        ? "bg-gradient-to-br from-yellow-600/20 to-orange-600/20"
                        : "bg-gradient-to-br from-yellow-100 to-orange-100"
                    }`}
                  >
                    <FaTrophy
                      className={isDark ? "text-yellow-400" : "text-yellow-600"}
                    />
                  </div>
                  Achievements
                </h3>
              </div>

              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`p-4 rounded-xl border ${
                      isDark
                        ? "bg-gray-800/30 border-gray-700/50 hover:border-gray-600/70 hover:bg-gray-800/50"
                        : "bg-gray-50/50 border-gray-200/50 hover:border-gray-300 hover:bg-white"
                    } transition-all duration-300 h-full flex flex-col`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg flex-shrink-0 ${
                          achievement.color === "yellow"
                            ? isDark
                              ? "bg-yellow-900/30 text-yellow-400"
                              : "bg-yellow-100 text-yellow-600"
                            : achievement.color === "blue"
                            ? isDark
                              ? "bg-blue-900/30 text-blue-400"
                              : "bg-blue-100 text-blue-600"
                            : achievement.color === "green"
                            ? isDark
                              ? "bg-green-900/30 text-green-400"
                              : "bg-green-100 text-green-600"
                            : isDark
                            ? "bg-purple-900/30 text-purple-400"
                            : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {achievement.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4
                            className={`font-semibold text-sm ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {achievement.title}
                          </h4>
                        </div>

                        <p
                          className={`text-xs leading-relaxed ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {achievement.description}
                        </p>

                        <div className="flex items-center justify-between mt-2">
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              isDark
                                ? "bg-gray-700/70 text-gray-300"
                                : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {achievement.year}
                          </span>

                          <span
                            className={`inline-block text-xs px-2 py-1 rounded-full ${
                              achievement.color === "yellow"
                                ? isDark
                                  ? "bg-yellow-900/30 text-yellow-400"
                                  : "bg-yellow-100 text-yellow-600"
                                : achievement.color === "blue"
                                ? isDark
                                  ? "bg-blue-900/30 text-blue-400"
                                  : "bg-blue-100 text-blue-600"
                                : achievement.color === "green"
                                ? isDark
                                  ? "bg-green-900/30 text-green-400"
                                  : "bg-green-100 text-green-600"
                                : isDark
                                ? "bg-purple-900/30 text-purple-400"
                                : "bg-purple-100 text-purple-600"
                            }`}
                          >
                            {achievement.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Progress Card */}
            <motion.div
              variants={cardVariants}
              className={`rounded-2xl overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50"
                  : "bg-white border border-gray-200/50"
              } shadow-xl backdrop-blur-lg`}
            >
              <div
                className={`px-6 py-5 border-b ${
                  isDark ? "border-gray-700/50" : "border-gray-200/50"
                }`}
              >
                <h3
                  className={`text-xl font-bold flex items-center gap-3 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      isDark
                        ? "bg-gradient-to-br from-blue-600/20 to-indigo-600/20"
                        : "bg-gradient-to-br from-blue-100 to-indigo-100"
                    }`}
                  >
                    <FaLaptopCode
                      className={isDark ? "text-blue-400" : "text-blue-600"}
                    />
                  </div>
                  Academic Skills
                </h3>
              </div>

              <div className="p-6 space-y-5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span
                        className={`font-medium text-sm ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          isDark ? "text-indigo-400" : "text-indigo-600"
                        }`}
                      >
                        {skill.progress}%
                      </span>
                    </div>

                    <div
                      className={`h-2 w-full rounded-full ${
                        isDark ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                        className={`h-full rounded-full ${
                          skill.color === "indigo"
                            ? "bg-gradient-to-r from-indigo-500 to-indigo-600"
                            : skill.color === "blue"
                            ? "bg-gradient-to-r from-blue-500 to-blue-600"
                            : skill.color === "green"
                            ? "bg-gradient-to-r from-green-500 to-green-600"
                            : skill.color === "purple"
                            ? "bg-gradient-to-r from-purple-500 to-purple-600"
                            : "bg-gradient-to-r from-pink-500 to-pink-600"
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Learning Philosophy */}
              <div
                className={`px-6 py-5 border-t ${
                  isDark ? "border-gray-700/50" : "border-gray-200/50"
                }`}
              >
                <div className="flex items-start gap-3">
                  <HiLightningBolt
                    className={`w-5 h-5 mt-0.5 ${
                      isDark ? "text-yellow-400" : "text-yellow-600"
                    }`}
                  />

                  <div>
                    <h4
                      className={`font-medium text-sm mb-1 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Learning Philosophy
                    </h4>

                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      I believe in hands-on learning through practical projects,
                      competitive programming, and applying theoretical concepts
                      to real-world problems. My goal is to constantly expand my
                      knowledge while building practical skills.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationRedesigned;
