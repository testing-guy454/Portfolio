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
  FaCalendarAlt,
  FaStar,
  FaUserGraduate,
} from "react-icons/fa";
import { educationData } from "../data/education";

interface Achievement {
  title: string;
  year: string;
  icon: JSX.Element;
  description: string;
  featured: boolean;
  color: string;
  category: string;
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Simple achievements data
  const achievements: Achievement[] = [
    {
      title: "Class Representative",
      year: "2023-2024",
      icon: <FaTrophy className="w-5 h-5" />,
      description:
        "Elected as Class Representative for CSE Department at NIT Patna",
    },
    {
      title: "Academic Excellence",
      year: "2022",
      icon: <FaAward className="w-5 h-5" />,
      description: "88.8% in CBSE Class 12 with PCM stream",
    },
    {
      title: "CGPA Achievement",
      year: "2023-Present",
      icon: <FaMedal className="w-5 h-5" />,
      description: "Maintaining CGPA of 7.69/10 at NIT Patna",
    },
  ];

  return (
    <section
      id="education"
      className={`section py-20 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
              theme === "dark"
                ? "bg-blue-900/30 text-blue-300 border border-blue-700/30"
                : "bg-blue-50 text-blue-700 border border-blue-200"
            }`}
          >
            Academic Journey
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Education
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            My academic background and continuous learning journey
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Timeline - 2/3 width */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            {educationData.map((edu: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-2xl border ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
                    : "bg-white border-gray-200 hover:shadow-lg"
                } transition-all duration-300`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl ${
                      theme === "dark"
                        ? "bg-blue-900/30 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <FaGraduationCap className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <h3
                        className={`text-xl font-bold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {edu.title}
                      </h3>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {edu.duration}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <FaSchool
                        className={`w-4 h-4 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`font-medium ${
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {edu.institution}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <FaMapMarkerAlt
                        className={`w-4 h-4 ${
                          theme === "dark" ? "text-gray-400" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {edu.location}
                      </span>
                    </div>

                    {/* Details */}
                    <ul className="space-y-1">
                      {edu.details.map(
                        (detail: string, detailIndex: number) => (
                          <li
                            key={detailIndex}
                            className={`text-sm ${
                              theme === "dark"
                                ? "text-gray-300"
                                : "text-gray-600"
                            }`}
                          >
                            • {detail}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Sidebar - 1/3 width */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div>
              <h3
                className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    theme === "dark"
                      ? "bg-yellow-900/30 text-yellow-400"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  <FaTrophy />
                </div>
                Achievements
              </h3>

              <div className="space-y-4">
                {achievements.map((achievement: Achievement, index: number) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`p-4 rounded-xl border ${
                      theme === "dark"
                        ? "bg-gray-800/50 border-gray-700"
                        : "bg-white border-gray-200"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          theme === "dark"
                            ? "bg-blue-900/30 text-blue-400"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4
                            className={`font-semibold ${
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
                          className={`text-sm ${
                            theme === "dark" ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
