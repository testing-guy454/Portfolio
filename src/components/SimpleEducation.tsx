import { useTheme } from "../contexts/ThemeContext";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { educationData } from "../data/education";

const SimpleEducation = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="education"
      className={`section py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
      style={{
        scrollMarginTop: "100px",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Simple Header */}
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Education
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            My academic background and qualifications
          </p>
        </div>

        {/* Simple Education Cards */}
        <div className="max-w-3xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                isDark
                  ? "bg-gray-800 border border-gray-700"
                  : "bg-white shadow-md"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-full ${
                    isDark
                      ? "bg-indigo-900/50 text-indigo-400"
                      : "bg-indigo-100 text-indigo-600"
                  }`}
                >
                  <FaGraduationCap className="w-6 h-6" />
                </div>

                <div>
                  <h3
                    className={`text-xl font-semibold ${
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

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
                    <div className="flex items-center text-sm">
                      <FaCalendarAlt
                        className={
                          isDark
                            ? "text-gray-400 mr-1.5"
                            : "text-gray-500 mr-1.5"
                        }
                      />
                      <span
                        className={isDark ? "text-gray-400" : "text-gray-600"}
                      >
                        {edu.duration}
                      </span>
                    </div>

                    <div className="flex items-center text-sm">
                      <FaMapMarkerAlt
                        className={
                          isDark
                            ? "text-gray-400 mr-1.5"
                            : "text-gray-500 mr-1.5"
                        }
                      />
                      <span
                        className={isDark ? "text-gray-400" : "text-gray-600"}
                      >
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  {/* Simple achievement bullets */}
                  {edu.details.length > 0 && (
                    <div className="mt-3 space-y-1">
                      {edu.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className={`text-sm ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          • {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimpleEducation;
