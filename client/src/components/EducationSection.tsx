import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import * as personalDataModule from "../data/personalData";
import {
  FaGraduationCap,
  FaSchool,
  FaBook,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaCertificate,
  FaStar,
  FaUsers,
  FaUniversity,
} from "react-icons/fa";
import { SiUdemy, SiCoursera, SiFreecodecamp } from "react-icons/si";
// No need to import educationData as we're using the enriched data defined in this component

const EducationExperience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -10% 0px",
  });

  const { theme } = useTheme();

  // Import data from personalData.ts
  const codeStats = personalDataModule.codeStats;

  // Additional education information to enrich the existing data
  const enrichedEducationData = [
    {
      level: "Bachelor of Technology",
      title: "B.Tech in Computer Science and Engineering",
      institution: "National Institute of Technology, Patna",
      location: "Patna, Bihar",
      duration: "2023 - 2027",
      activities: [
        "Class Representative for CSE Department",
        "Member of Technical Club",
        "Competitive Programming Participant",
      ],
      courses: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks",
      ],
      achievements: [
        "Maintaining CGPA of 7.69/10",
        "Merit List Recognition",
        "Technical Workshop Facilitation",
      ],
      icon: <FaUniversity className="w-5 h-5 text-indigo-600" />,
      status: "current",
      category: "higher_education",
      color: "indigo",
    },
    {
      level: "Higher Secondary",
      title: "Class XII (CBSE)",
      institution: "Pragya Bharti Public School, Gaya",
      location: "Gaya, Bihar",
      duration: "2021 - 2022",
      activities: ["Science Club Member", "Mathematics Olympiad Participant"],
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      achievements: [
        "Scored 88.8% in CBSE Class 12",
        "School Merit List",
        "Perfect Attendance",
      ],
      icon: <FaSchool className="w-5 h-5 text-blue-600" />,
      status: "completed",
      category: "school_education",
      color: "blue",
    },
    {
      level: "Secondary",
      title: "Class X (CBSE)",
      institution: "Pragya Bharti Public School, Gaya",
      location: "Gaya, Bihar",
      duration: "2019 - 2020",
      activities: ["Science Exhibitions", "Sports Competitions"],
      courses: ["Science", "Mathematics", "Social Studies", "English", "Hindi"],
      achievements: [
        "Scored 90% in CBSE Class 10",
        "Academic Excellence Award",
      ],
      icon: <FaGraduationCap className="w-5 h-5 text-green-600" />,
      status: "completed",
      category: "school_education",
      color: "cyan",
    },
  ];

  // Relevant certifications data
  const certifications = [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      year: "2023",
      description:
        "Comprehensive full-stack web development course covering HTML, CSS, JavaScript, React, and Node.js",
      icon: <SiUdemy className="w-5 h-5 text-purple-600" />,
      featured: true,
      color: "blue",
      category: "technical",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Coursera",
      year: "2023",
      description:
        "Advanced course on efficient algorithms and complex data structures implementation",
      icon: <SiCoursera className="w-5 h-5 text-blue-600" />,
      featured: true,
      color: "green",
      category: "technical",
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "freeCodeCamp",
      year: "2024",
      description:
        "Introduction to machine learning concepts and practical implementation",
      icon: <SiFreecodecamp className="w-5 h-5 text-green-600" />,
      featured: false,
      color: "purple",
      category: "technical",
    },
  ];

  // Animation variants that match the Experience component pattern
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1], // Custom cubic-bezier for smoother motion
      },
    },
  };

  const cardHoverAnimation = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow: "none",
      rotate: 0,
    },
    hover: {
      scale: 1.03,
      y: -8,
      boxShadow: "none",
      rotate: 0.5, // Very subtle rotation for a more dynamic effect
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 25,
        mass: 1.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const pulseVariants = {
    rest: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  // Text highlight animation for section titles
  const textHighlightVariants = {
    initial: {
      backgroundSize: "0% 100%",
      backgroundPosition: "0% 100%",
    },
    animate: {
      backgroundSize: "100% 100%",
      backgroundPosition: "100% 100%",
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

  // Badge animation is now applied directly on the elements

  // Helper function for color classes, following the Experience component pattern
  const getColorClasses = (color: string) => {
    const colorMap: any = {
      indigo: {
        icon: "text-indigo-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-indigo-900/40 to-blue-900/30"
            : "bg-gradient-to-br from-indigo-50 to-blue-50",
        border: theme === "dark" ? "border-indigo-500/40" : "border-indigo-200",
        glow: "",
      },
      blue: {
        icon: "text-blue-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-blue-900/40 to-indigo-900/30"
            : "bg-gradient-to-br from-blue-50 to-indigo-50",
        border: theme === "dark" ? "border-blue-500/40" : "border-blue-200",
        glow: "",
      },
      green: {
        icon: "text-green-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-green-900/40 to-teal-900/30"
            : "bg-gradient-to-br from-green-50 to-teal-50",
        border: theme === "dark" ? "border-green-500/40" : "border-green-200",
        glow: "",
      },
      purple: {
        icon: "text-purple-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-purple-900/40 to-pink-900/30"
            : "bg-gradient-to-br from-purple-50 to-pink-50",
        border: theme === "dark" ? "border-purple-500/40" : "border-purple-200",
        glow: "",
      },
      cyan: {
        icon: "text-cyan-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-cyan-900/40 to-blue-900/30"
            : "bg-gradient-to-br from-cyan-50 to-blue-50",
        border: theme === "dark" ? "border-cyan-500/40" : "border-cyan-200",
        glow: "",
      },
    };

    return colorMap[color] || colorMap.indigo;
  };

  return (
    <section
      id="education"
      className={`section relative py-28 md:py-32 overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
      style={{
        scrollMarginTop: "100px",
      }}
    >
      {/* Enhanced Background Decorations */}
      <div
        className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] ${
          theme === "dark" ? "bg-indigo-800/20" : "bg-indigo-500/10"
        } animate-slow-pulse`}
      ></div>
      <div
        className={`absolute bottom-0 left-20 w-60 h-60 rounded-full blur-[120px] ${
          theme === "dark" ? "bg-purple-800/20" : "bg-purple-500/10"
        } animate-slow-pulse-delay`}
      ></div>
      <div
        className={`absolute top-1/3 left-1/4 w-72 h-72 rounded-full blur-[180px] ${
          theme === "dark" ? "bg-blue-800/10" : "bg-blue-500/5"
        } animate-slow-pulse-delay-2`}
      ></div>

      <div className="container relative z-10">
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className={`inline-block text-sm font-semibold tracking-wider uppercase ${
              theme === "dark" ? "text-indigo-400" : "text-indigo-600"
            } mb-2`}
          >
            Academic Journey
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`text-5xl font-extrabold tracking-tight leading-tight ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            <motion.span
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 1.2 }}
            >
              Educational{" "}
            </motion.span>
            <motion.span
              initial="initial"
              animate="animate"
              variants={textHighlightVariants}
              className={`bg-gradient-to-r ${
                theme === "dark"
                  ? "from-indigo-400 via-purple-400 to-pink-400"
                  : "from-indigo-600 via-purple-600 to-pink-600"
              } bg-clip-text text-transparent inline-block relative`}
              style={{
                backgroundImage: `linear-gradient(90deg, ${
                  theme === "dark" ? "#818cf8" : "#4f46e5"
                } 0%, ${theme === "dark" ? "#c084fc" : "#7e22ce"} 50%, ${
                  theme === "dark" ? "#f472b6" : "#db2777"
                } 100%)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "0% 3px",
                backgroundPosition: "0 95%",
                paddingBottom: "3px",
              }}
            >
              Qualifications
            </motion.span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`h-1.5 mx-auto mt-8 rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            }`}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className={`max-w-3xl mx-auto mt-7 text-lg leading-relaxed tracking-wide ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My academic foundation and continuous learning journey in computer
            science, building expertise through formal education and specialized
            courses.
          </motion.p>
        </motion.div>

        {/* Main Content Grid - 2/3 for Education, 1/3 for Certifications */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline (Left - 2/3) */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div className="mb-10">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                className={`text-3xl font-extrabold tracking-tight flex items-center gap-4 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                <motion.span
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`p-4 rounded-2xl ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-indigo-900/50 to-purple-900/40 border border-indigo-500/20"
                      : "bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200"
                  } backdrop-blur-sm`}
                >
                  <FaGraduationCap className="text-indigo-600" />
                </motion.span>
                Academic Timeline
              </motion.h3>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: 64 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className={`h-1.5 mt-4 rounded-full ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                }`}
              ></motion.div>
            </motion.div>

            <div className="space-y-8">
              {enrichedEducationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className={`group rounded-3xl overflow-hidden border backdrop-blur-sm ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-gray-600/60 hover:border-opacity-80"
                      : "bg-gradient-to-br from-white/95 to-gray-50/95 border-gray-200/60 hover:border-gray-300/80"
                  } transition-all duration-300 hover:transform hover:translate-y-[-4px]`}
                  style={{
                    backgroundImage:
                      theme === "dark"
                        ? `radial-gradient(circle at top right, rgba(99, 102, 241, 0.05), transparent 80%),
                         radial-gradient(circle at bottom left, rgba(168, 85, 247, 0.05), transparent 80%)`
                        : `radial-gradient(circle at top right, rgba(99, 102, 241, 0.03), transparent 80%),
                         radial-gradient(circle at bottom left, rgba(168, 85, 247, 0.03), transparent 80%)`,
                  }}
                >
                  <motion.div
                    whileHover="hover"
                    initial="rest"
                    variants={cardHoverAnimation}
                    className="p-8 lg:p-10 relative"
                  >
                    {/* Decorative corner accent */}
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 ${
                        theme === "dark"
                          ? "bg-gradient-to-bl from-indigo-600/20 via-purple-600/10 to-transparent"
                          : "bg-gradient-to-bl from-indigo-600/15 via-purple-600/10 to-transparent"
                      } rounded-tr-3xl`}
                    ></div>

                    {/* Status and Category Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {edu.status === "current" && (
                        <motion.div
                          animate="pulse"
                          variants={pulseVariants}
                          className={`px-5 py-2.5 rounded-full text-sm font-medium border ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-green-900/40 to-emerald-900/30 text-green-400 border-green-500/40"
                              : "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200"
                          } flex items-center gap-2 backdrop-blur-sm`}
                        >
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2.5 h-2.5 rounded-full bg-green-500"
                          ></motion.span>
                          Currently Pursuing
                        </motion.div>
                      )}
                      <motion.div
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold border ${
                          getColorClasses(edu.color).bg
                        } ${getColorClasses(edu.color).border} ${
                          getColorClasses(edu.color).icon
                        } backdrop-blur-sm`}
                      >
                        {edu.level}
                      </motion.div>
                    </div>

                    {/* Education Main Content */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:gap-6">
                      {/* Icon Column */}
                      <div className="flex-shrink-0 mb-4 lg:mb-0">
                        <div
                          className={`p-4 rounded-2xl ${
                            getColorClasses(edu.color).bg
                          } border ${getColorClasses(edu.color).border}`}
                        >
                          <div
                            className={`w-10 h-10 flex items-center justify-center ${
                              getColorClasses(edu.color).icon
                            }`}
                          >
                            {edu.icon}
                          </div>
                        </div>
                      </div>

                      {/* Main Content Column */}
                      <div className="flex-1">
                        <h4
                          className={`text-2xl font-bold tracking-tight group-hover:text-indigo-500 transition-colors ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {edu.institution}
                        </h4>
                        <h5
                          className={`text-lg font-medium mb-3.5 leading-snug ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {edu.title}
                        </h5>

                        {/* Meta Information Row */}
                        <div className="flex flex-wrap items-center gap-5 mb-5">
                          <div
                            className={`flex items-center gap-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            } text-sm font-medium`}
                          >
                            <FaCalendarAlt className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div
                            className={`flex items-center gap-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            } text-sm font-medium`}
                          >
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        {/* Content Grid - Courses, Activities, Achievements */}
                        <div className="grid md:grid-cols-2 gap-5 mt-5">
                          {/* Courses */}
                          <div
                            className={`p-5 rounded-xl ${
                              theme === "dark"
                                ? "bg-gray-800/60"
                                : "bg-gray-50/80"
                            } border ${
                              theme === "dark"
                                ? "border-gray-700/50"
                                : "border-gray-200"
                            } transition-all duration-300`}
                          >
                            <h6
                              className={`flex items-center gap-2 text-sm font-bold mb-3 ${
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-700"
                              }`}
                            >
                              <FaBook
                                className={getColorClasses(edu.color).icon}
                              />
                              Key Courses
                            </h6>
                            <ul className="space-y-2">
                              {edu.courses.slice(0, 4).map((course, idx) => (
                                <li
                                  key={idx}
                                  className={`text-sm flex items-start gap-2 ${
                                    theme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-600"
                                  }`}
                                >
                                  <span
                                    className={`text-xs inline-block mt-1 ${
                                      getColorClasses(edu.color).icon
                                    }`}
                                  >
                                    ●
                                  </span>
                                  {course}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div
                            className={`p-5 rounded-xl ${
                              theme === "dark"
                                ? "bg-gray-800/60"
                                : "bg-gray-50/80"
                            } border ${
                              theme === "dark"
                                ? "border-gray-700/50"
                                : "border-gray-200"
                            } transition-all duration-300`}
                          >
                            <h6
                              className={`flex items-center gap-2 text-sm font-bold mb-3 ${
                                theme === "dark"
                                  ? "text-gray-300"
                                  : "text-gray-700"
                              }`}
                            >
                              <FaAward
                                className={getColorClasses(edu.color).icon}
                              />
                              Achievements
                            </h6>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, idx) => (
                                <li
                                  key={idx}
                                  className={`text-sm flex items-start gap-2 ${
                                    theme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-600"
                                  }`}
                                >
                                  <span
                                    className={`text-xs inline-block mt-1 ${
                                      getColorClasses(edu.color).icon
                                    }`}
                                  >
                                    ●
                                  </span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Activities/Extracurriculars */}
                        <div className="mt-5">
                          <h6
                            className={`flex items-center gap-2 text-sm font-semibold mb-3 ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-700"
                            }`}
                          >
                            <FaUsers
                              className={getColorClasses(edu.color).icon}
                            />
                            Activities & Involvement
                          </h6>
                          <div className="flex flex-wrap gap-2">
                            {edu.activities.map((activity, idx) => (
                              <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  delay: idx * 0.1,
                                  duration: 0.4,
                                  type: "spring",
                                }}
                                whileHover={{ y: -4 }}
                                className={`px-3.5 py-1.5 text-xs font-medium rounded-full backdrop-blur-sm ${
                                  theme === "dark"
                                    ? "bg-gray-800/90 text-gray-300 border border-gray-700/80 hover:border-gray-600 hover:text-white"
                                    : "bg-gray-100/90 text-gray-700 border border-gray-200/80 hover:border-gray-300 hover:text-gray-900"
                                } transition-all duration-300`}
                              >
                                {activity}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications and Additional Training (Right - 1/3) */}
          <div className="space-y-8 lg:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <h3
                className={`text-2xl font-bold tracking-tight flex items-center gap-3 mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                <div
                  className={`p-2.5 rounded-lg ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-blue-900/40 to-indigo-900/30 border border-blue-500/20"
                      : "bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200"
                  }`}
                >
                  <FaCertificate className="text-blue-600" />
                </div>
                Certifications
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: 40 } : {}}
                transition={{ delay: 0.3, duration: 0.4 }}
                className={`h-1 mb-6 rounded-full ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                    : "bg-gradient-to-r from-blue-500 to-indigo-500"
                }`}
              ></motion.div>
            </motion.div>

            {/* Certifications Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-5"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  className={`p-6 rounded-2xl border ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-gray-600 hover:border-opacity-90"
                      : "bg-white border-gray-200/70 hover:border-gray-300"
                  } transition-all duration-300 group`}
                  style={{
                    backgroundImage:
                      theme === "dark"
                        ? `radial-gradient(circle at top right, rgba(37, 99, 235, 0.07), transparent 80%)`
                        : `radial-gradient(circle at top right, rgba(37, 99, 235, 0.03), transparent 80%)`,
                  }}
                >
                  <motion.div
                    variants={cardHoverAnimation}
                    className="flex items-start gap-4"
                  >
                    <div
                      className={`p-3 rounded-xl ${
                        getColorClasses(cert.color).bg
                      } border ${getColorClasses(cert.color).border}`}
                    >
                      <div
                        className={`w-5 h-5 flex items-center justify-center ${
                          getColorClasses(cert.color).icon
                        }`}
                      >
                        {cert.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4
                          className={`font-semibold group-hover:text-indigo-500 transition-colors ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {cert.title}
                        </h4>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            theme === "dark"
                              ? "bg-gray-800 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {cert.year}
                        </span>
                      </div>

                      <p
                        className={`text-xs mt-1 mb-2 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Issued by{" "}
                        <span className="font-medium">{cert.issuer}</span>
                      </p>

                      <p
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {cert.description}
                      </p>

                      <div className="mt-4 flex justify-end">
                        <button
                          className={`text-xs font-medium flex items-center gap-1.5 px-3.5 py-1.5 rounded-md ${
                            theme === "dark"
                              ? "bg-indigo-900/30 text-indigo-400 hover:bg-indigo-900/50"
                              : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                          } transition-colors hover:transform hover:scale-105`}
                        >
                          <FaStar className="w-3 h-3 text-yellow-600" /> View
                          Certificate
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Learning Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className={`p-7 rounded-2xl border ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50"
                  : "bg-white border-gray-200/70"
              } mt-10 transition-all duration-300`}
            >
              <h4
                className={`text-xl font-semibold tracking-tight mb-5 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Continuous Learning
              </h4>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    } font-medium`}
                  >
                    Online Courses Completed
                  </span>
                  <span
                    className={`font-bold text-lg ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    12+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    } font-medium`}
                  >
                    Coding Challenges Solved
                  </span>
                  <span
                    className={`font-bold text-lg ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    150+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    } font-medium`}
                  >
                    Technical Books Read
                  </span>
                  <span
                    className={`font-bold text-lg ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    {codeStats.techBooksRead}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    } font-medium`}
                  >
                    Tech Communities Joined
                  </span>
                  <span
                    className={`font-bold text-lg ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    {codeStats.techCommunitiesJoined}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
