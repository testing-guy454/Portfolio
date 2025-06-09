import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import {
  FaGraduationCap,
  FaSchool,
  FaBook,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaCertificate,
  FaStar,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaUsers,
} from "react-icons/fa";
// No need to import educationData as we're using the enriched data defined in this component

const EducationExperience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -10% 0px",
  });

  const { theme } = useTheme();

  // Additional education information to enrich the existing data
  const enrichedEducationData = [
    {
      level: "Bachelor's Degree",
      title: "Bachelor of Technology in Computer Science and Engineering",
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
      icon: <FaGraduationCap className="w-5 h-5" />,
      status: "current",
      category: "higher_education",
      color: "indigo",
    },
    {
      level: "Senior Secondary Education",
      title: "Senior Secondary Education (CBSE)",
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
      icon: <FaSchool className="w-5 h-5" />,
      status: "completed",
      category: "school_education",
      color: "blue",
    },
    {
      level: "Secondary Education",
      title: "Secondary Education (CBSE)",
      institution: "Pragya Bharti Public School, Gaya",
      location: "Gaya, Bihar",
      duration: "2019 - 2020",
      activities: ["Science Exhibitions", "Sports Competitions"],
      courses: ["Science", "Mathematics", "Social Studies", "English", "Hindi"],
      achievements: [
        "Scored 90% in CBSE Class 10",
        "Academic Excellence Award",
      ],
      icon: <FaSchool className="w-5 h-5" />,
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
      icon: <FaCertificate className="w-5 h-5" />,
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
      icon: <FaLaptopCode className="w-5 h-5" />,
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
      icon: <FaChalkboardTeacher className="w-5 h-5" />,
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
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardHoverAnimation = {
    rest: {
      scale: 1,
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.03,
      y: -8,
      boxShadow:
        theme === "dark"
          ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
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

  // Helper function for color classes, following the Experience component pattern
  const getColorClasses = (color: string) => {
    const colorMap: any = {
      indigo: {
        icon: theme === "dark" ? "text-indigo-400" : "text-indigo-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-indigo-900/40 to-blue-900/30"
            : "bg-gradient-to-br from-indigo-50 to-blue-50",
        border: theme === "dark" ? "border-indigo-500/40" : "border-indigo-200",
        glow:
          theme === "dark" ? "shadow-indigo-500/20" : "shadow-indigo-200/50",
      },
      blue: {
        icon: theme === "dark" ? "text-blue-400" : "text-blue-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-blue-900/40 to-indigo-900/30"
            : "bg-gradient-to-br from-blue-50 to-indigo-50",
        border: theme === "dark" ? "border-blue-500/40" : "border-blue-200",
        glow: theme === "dark" ? "shadow-blue-500/20" : "shadow-blue-200/50",
      },
      green: {
        icon: theme === "dark" ? "text-green-400" : "text-green-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-green-900/40 to-teal-900/30"
            : "bg-gradient-to-br from-green-50 to-teal-50",
        border: theme === "dark" ? "border-green-500/40" : "border-green-200",
        glow: theme === "dark" ? "shadow-green-500/20" : "shadow-green-200/50",
      },
      purple: {
        icon: theme === "dark" ? "text-purple-400" : "text-purple-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-purple-900/40 to-pink-900/30"
            : "bg-gradient-to-br from-purple-50 to-pink-50",
        border: theme === "dark" ? "border-purple-500/40" : "border-purple-200",
        glow:
          theme === "dark" ? "shadow-purple-500/20" : "shadow-purple-200/50",
      },
      cyan: {
        icon: theme === "dark" ? "text-cyan-400" : "text-cyan-600",
        bg:
          theme === "dark"
            ? "bg-gradient-to-br from-cyan-900/40 to-blue-900/30"
            : "bg-gradient-to-br from-cyan-50 to-blue-50",
        border: theme === "dark" ? "border-cyan-500/40" : "border-cyan-200",
        glow: theme === "dark" ? "shadow-cyan-500/20" : "shadow-cyan-200/50",
      },
    };

    return colorMap[color] || colorMap.indigo;
  };

  return (
    <section
      id="education"
      className={`section relative py-24 overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
      style={{
        scrollMarginTop: "100px",
      }}
    >
      {/* Background Decoration, matching the Experience component style */}
      <div
        className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[150px] ${
          theme === "dark" ? "bg-indigo-800/20" : "bg-indigo-500/10"
        }`}
      ></div>
      <div
        className={`absolute bottom-0 left-20 w-60 h-60 rounded-full blur-[120px] ${
          theme === "dark" ? "bg-purple-800/20" : "bg-purple-500/10"
        }`}
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
            className={`text-5xl font-bold ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Educational{" "}
            <span
              className={`bg-gradient-to-r ${
                theme === "dark"
                  ? "from-indigo-400 via-purple-400 to-pink-400"
                  : "from-indigo-600 via-purple-600 to-pink-600"
              } bg-clip-text text-transparent`}
            >
              Qualifications
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className={`h-1.5 mx-auto mt-8 rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            } shadow-lg`}
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className={`max-w-3xl mx-auto mt-6 text-lg leading-relaxed ${
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
                transition={{ delay: 0.2, duration: 0.6 }}
                className={`text-3xl font-bold flex items-center gap-4 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                <motion.span
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className={`p-4 rounded-2xl ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-indigo-900/50 to-purple-900/40 border border-indigo-500/20"
                      : "bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200"
                  } shadow-lg backdrop-blur-sm`}
                >
                  <FaGraduationCap
                    className={
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }
                  />
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
                } shadow-md`}
              ></motion.div>
            </motion.div>

            <div className="space-y-8">
              {enrichedEducationData.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="rest"
                  whileHover="hover"
                  className={`group rounded-3xl overflow-hidden shadow-xl border backdrop-blur-sm ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-gray-700/50 hover:border-gray-600/60"
                      : "bg-gradient-to-br from-white/95 to-gray-50/95 border-gray-200/60 hover:border-gray-300/80"
                  } transition-all duration-300`}
                >
                  <motion.div
                    variants={cardHoverAnimation}
                    className="p-8 relative"
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
                          className={`px-4 py-2 rounded-full text-sm font-medium border ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-green-900/40 to-emerald-900/30 text-green-400 border-green-500/40 shadow-green-500/20"
                              : "bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200 shadow-green-200/50"
                          } flex items-center gap-2 shadow-lg backdrop-blur-sm`}
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
                        className={`px-4 py-2 rounded-full text-sm font-medium border ${
                          getColorClasses(edu.color).bg
                        } ${getColorClasses(edu.color).border} ${
                          getColorClasses(edu.color).icon
                        } shadow-lg ${
                          getColorClasses(edu.color).glow
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
                          } border ${
                            getColorClasses(edu.color).border
                          } shadow-lg ${getColorClasses(edu.color).glow}`}
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
                          className={`text-2xl font-bold group-hover:text-indigo-500 transition-colors ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {edu.institution}
                        </h4>
                        <h5
                          className={`text-lg font-medium mb-3 ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {edu.title}
                        </h5>

                        {/* Meta Information Row */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div
                            className={`flex items-center gap-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            <FaCalendarAlt className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div
                            className={`flex items-center gap-2 ${
                              theme === "dark"
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            <FaMapMarkerAlt className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        {/* Content Grid - Courses, Activities, Achievements */}
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          {/* Courses */}
                          <div
                            className={`p-4 rounded-xl ${
                              theme === "dark"
                                ? "bg-gray-800/60"
                                : "bg-gray-50/80"
                            } border ${
                              theme === "dark"
                                ? "border-gray-700/50"
                                : "border-gray-200"
                            }`}
                          >
                            <h6
                              className={`flex items-center gap-2 text-sm font-semibold mb-3 ${
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
                            <ul className="space-y-1.5">
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
                            className={`p-4 rounded-xl ${
                              theme === "dark"
                                ? "bg-gray-800/60"
                                : "bg-gray-50/80"
                            } border ${
                              theme === "dark"
                                ? "border-gray-700/50"
                                : "border-gray-200"
                            }`}
                          >
                            <h6
                              className={`flex items-center gap-2 text-sm font-semibold mb-3 ${
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
                            <ul className="space-y-1.5">
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
                        <div className="mt-4">
                          <h6
                            className={`flex items-center gap-2 text-sm font-semibold mb-2 ${
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
                              <span
                                key={idx}
                                className={`px-3 py-1 text-xs font-medium rounded-full ${
                                  theme === "dark"
                                    ? "bg-gray-800 text-gray-300 border border-gray-700"
                                    : "bg-gray-100 text-gray-700 border border-gray-200"
                                }`}
                              >
                                {activity}
                              </span>
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
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6"
            >
              <h3
                className={`text-2xl font-bold flex items-center gap-3 mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                <div
                  className={`p-2.5 rounded-lg ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-blue-900/40 to-indigo-900/30 border border-blue-500/20"
                      : "bg-gradient-to-br from-blue-100 to-indigo-100 border border-blue-200"
                  } shadow-md`}
                >
                  <FaCertificate
                    className={
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }
                  />
                </div>
                Certifications
              </h3>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: 40 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className={`h-1 mb-6 rounded-full ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500"
                    : "bg-gradient-to-r from-blue-500 to-indigo-500"
                } shadow-md`}
              ></motion.div>
            </motion.div>

            {/* Certifications Cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-5 rounded-2xl border ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-gray-600"
                      : "bg-white border-gray-200/70 hover:border-gray-300"
                  } transition-all duration-300 shadow-lg hover:shadow-xl group`}
                >
                  <div className="flex items-start gap-4">
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

                      <div className="mt-3 flex justify-end">
                        <button
                          className={`text-xs font-medium flex items-center gap-1 px-3 py-1 rounded-md ${
                            theme === "dark"
                              ? "bg-indigo-900/30 text-indigo-400 hover:bg-indigo-900/50"
                              : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                          } transition-colors`}
                        >
                          <FaStar className="w-3 h-3" /> View Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Learning Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className={`p-6 rounded-2xl border ${
                theme === "dark"
                  ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50"
                  : "bg-white border-gray-200/70"
              } shadow-lg mt-8`}
            >
              <h4
                className={`text-lg font-semibold mb-4 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Continuous Learning
              </h4>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    Online Courses Completed
                  </span>
                  <span
                    className={`font-bold ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    12+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    Coding Challenges Solved
                  </span>
                  <span
                    className={`font-bold ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    150+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    Technical Books Read
                  </span>
                  <span
                    className={`font-bold ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    8+
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    Tech Communities Joined
                  </span>
                  <span
                    className={`font-bold ${
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }`}
                  >
                    5+
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
