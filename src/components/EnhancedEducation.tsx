import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGraduationCap,
  FaSchool,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaLaptopCode,
  FaBookOpen,
} from "react-icons/fa";
import { educationData } from "../data/education";

const EnhancedEducation = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Define additional information for each education entry
  const additionalInfo = [
    {
      id: 0, // B.Tech
      courses: [
        "Data Structures & Algorithms",
        "Database Management",
        "Operating Systems",
        "Computer Networks",
      ],
      activities: [
        "Class Representative",
        "Member of Technical Club",
        "Competitive Programming",
      ],
      skills: ["C++", "Java", "Data Structures", "Algorithms"],
      achievements: [
        "Maintaining 7.69/10 CGPA",
        "Technical Workshop Participation",
      ],
    },
    {
      id: 1, // 12th
      courses: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      activities: ["Science Club", "Mathematics Olympiad"],
      achievements: ["88.8% in CBSE Class 12", "School Merit List"],
    },
    {
      id: 2, // 10th
      courses: ["Science", "Mathematics", "Social Studies", "English", "Hindi"],
      achievements: ["90% in CBSE Class 10", "Perfect Attendance Award"],
    },
  ];

  return (
    <section
      id="education"
      className={`section py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      style={{
        scrollMarginTop: "100px",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              isDark
                ? "bg-indigo-900/30 text-indigo-400 border border-indigo-800/30"
                : "bg-indigo-100 text-indigo-700"
            }`}
          >
            Academic Background
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Education & Qualifications
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My academic journey, certifications, and core educational
            foundations
          </motion.p>
        </div>

        {/* Education Timeline */}
        <div ref={ref} className="max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`mb-12 last:mb-0 relative ${
                index !== educationData.length - 1 ? "pb-12" : ""
              }`}
            >
              {/* Timeline connector */}
              {index !== educationData.length - 1 && (
                <div
                  className={`absolute left-8 top-16 bottom-0 w-0.5 ${
                    isDark ? "bg-gray-700" : "bg-gray-300"
                  }`}
                ></div>
              )}

              {/* Education Card */}
              <div
                className={`relative rounded-xl overflow-hidden border ${
                  isDark
                    ? "bg-gray-800/80 border-gray-700 hover:border-indigo-700/50"
                    : "bg-white border-gray-200 hover:border-indigo-300"
                } shadow-lg transition-all duration-300 hover:shadow-xl`}
              >
                {/* Card Header */}
                <div
                  className={`p-6 border-b ${
                    isDark ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`p-3.5 rounded-lg ${
                        index === 0
                          ? isDark
                            ? "bg-indigo-900/30 text-indigo-400"
                            : "bg-indigo-100 text-indigo-600"
                          : index === 1
                          ? isDark
                            ? "bg-blue-900/30 text-blue-400"
                            : "bg-blue-100 text-blue-600"
                          : isDark
                          ? "bg-purple-900/30 text-purple-400"
                          : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {index === 0 ? (
                        <FaGraduationCap className="w-6 h-6" />
                      ) : (
                        <FaSchool className="w-6 h-6" />
                      )}
                    </div>

                    {/* Title & Info */}
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {edu.title}
                      </h3>

                      <p
                        className={`text-base font-medium mt-1 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-3">
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

                        {/* Education Level Badge */}
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            index === 0
                              ? isDark
                                ? "bg-indigo-900/30 text-indigo-400"
                                : "bg-indigo-100 text-indigo-600"
                              : index === 1
                              ? isDark
                                ? "bg-blue-900/30 text-blue-400"
                                : "bg-blue-100 text-blue-600"
                              : isDark
                              ? "bg-purple-900/30 text-purple-400"
                              : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          {edu.level}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Key Highlights */}
                  <div className="mb-5">
                    <h4
                      className={`text-sm uppercase font-semibold mb-3 ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Key Highlights
                    </h4>

                    <ul className="space-y-1.5">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span
                            className={`inline-flex mr-2 mt-0.5 ${
                              isDark ? "text-indigo-400" : "text-indigo-600"
                            }`}
                          >
                            •
                          </span>
                          <span
                            className={`text-sm ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Extra Information - Only shown if available */}
                  {additionalInfo[index] && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-dashed mt-4 border-gray-300/30">
                      {/* Courses */}
                      {additionalInfo[index].courses && (
                        <div>
                          <h4
                            className={`flex items-center text-sm font-semibold mb-2 ${
                              isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <FaBookOpen className="w-4 h-4 mr-2 text-indigo-500" />
                            Key Courses
                          </h4>
                          <ul className="space-y-1">
                            {additionalInfo[index].courses.map(
                              (course, idx) => (
                                <li
                                  key={idx}
                                  className={`text-xs pl-2 ${
                                    isDark ? "text-gray-400" : "text-gray-600"
                                  }`}
                                >
                                  • {course}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Skills */}
                      {additionalInfo[index].skills && (
                        <div>
                          <h4
                            className={`flex items-center text-sm font-semibold mb-2 ${
                              isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <FaLaptopCode className="w-4 h-4 mr-2 text-indigo-500" />
                            Skills Gained
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {additionalInfo[index].skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className={`text-xs px-2 py-1 rounded-full ${
                                  isDark
                                    ? "bg-gray-700 text-gray-300"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Activities - Only shown for higher education */}
                      {additionalInfo[index].activities && (
                        <div className={index === 2 ? "col-span-2" : ""}>
                          <h4
                            className={`flex items-center text-sm font-semibold mb-2 ${
                              isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <FaCalendarAlt className="w-4 h-4 mr-2 text-indigo-500" />
                            Activities
                          </h4>
                          <ul className="space-y-1">
                            {additionalInfo[index].activities.map(
                              (activity, idx) => (
                                <li
                                  key={idx}
                                  className={`text-xs pl-2 ${
                                    isDark ? "text-gray-400" : "text-gray-600"
                                  }`}
                                >
                                  • {activity}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}

                      {/* Achievements */}
                      {additionalInfo[index].achievements && (
                        <div className={index === 2 ? "col-span-2" : ""}>
                          <h4
                            className={`flex items-center text-sm font-semibold mb-2 ${
                              isDark ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            <FaAward className="w-4 h-4 mr-2 text-indigo-500" />
                            Achievements
                          </h4>
                          <ul className="space-y-1">
                            {additionalInfo[index].achievements.map(
                              (achievement, idx) => (
                                <li
                                  key={idx}
                                  className={`text-xs pl-2 ${
                                    isDark ? "text-gray-400" : "text-gray-600"
                                  }`}
                                >
                                  • {achievement}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Journey Quote */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className={`text-lg italic ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            "Education is not the learning of facts, but the training of the
            mind to think."
            <footer className="mt-2 font-medium">
              <cite className={isDark ? "text-gray-300" : "text-gray-700"}>
                — Albert Einstein
              </cite>
            </footer>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default EnhancedEducation;
