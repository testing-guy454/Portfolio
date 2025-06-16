import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import SectionContainer from "./SectionContainer";
import {
  FaCode,
  FaUserGraduate,
  FaLaptopCode,
  FaBrain,
  FaDownload,
  FaEnvelope,
} from "react-icons/fa";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

  const skills = [
    { name: "Web Development", level: 80, icon: <FaCode /> },
    { name: "Data Structures", level: 85, icon: <FaBrain /> },
    { name: "Algorithms", level: 75, icon: <FaLaptopCode /> },
    // { name: "Robotics", level: 75, icon: <FaRobot /> },
  ];

  return (
    <SectionContainer id="about">
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span
            className={`px-4 py-2 rounded-full font-medium text-sm inline-flex items-center gap-2 ${
              theme === "dark"
                ? "bg-gradient-to-r from-indigo-900/30 to-purple-900/30 text-indigo-400"
                : "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Get to know me
          </span>
          <h2
            className={`text-4xl md:text-5xl font-bold mt-4 font-heading ${
              theme === "dark" ? "text-white" : ""
            }`}
          >
            About{" "}
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                  : "text-gradient"
              }`}
            >
              Me
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

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 about-section-main">
          {/* Left Column - Profile Picture with Decorative Elements */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Profile Image with Animation */}
              <div className="relative mx-auto max-w-sm about-profile-img-container">
                <motion.div
                  className={`absolute -inset-4 rounded-2xl opacity-20 blur-lg z-0 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                      : "bg-gradient-to-r from-primary to-accent"
                  }`}
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div
                  className={`relative h-80 w-80 mx-auto overflow-hidden rounded-2xl shadow-custom border-4 ${
                    theme === "dark" ? "border-gray-800" : "border-white"
                  } about-profile-img`}
                >
                  <img
                    src={"/yuvraj2.png"}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/400x500/6366F1/FFFFFF/png?text=YM";
                    }}
                    alt="Yuvraj Mehta"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Badges */}
                <motion.div
                  className={`absolute -right-4 top-6 glass-effect px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 ${
                    theme === "dark" ? "bg-gray-800/80" : "bg-white/80"
                  }`}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div
                    className={`p-2 rounded-full ${
                      theme === "dark" ? "bg-indigo-900/50" : "bg-indigo-100"
                    }`}
                  >
                    <FaUserGraduate
                      className={
                        theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                      }
                    />
                  </div>
                  <div>
                    <div
                      className={`font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Top 26%
                    </div>
                    <div
                      className={`text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      LeetCode Global
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className={`absolute -left-4 bottom-6 glass-effect px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 ${
                    theme === "dark" ? "bg-gray-800/80" : "bg-white/80"
                  }`}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div
                    className={`p-2 rounded-full ${
                      theme === "dark" ? "bg-purple-900/50" : "bg-purple-100"
                    }`}
                  >
                    <FaCode
                      className={
                        theme === "dark" ? "text-purple-400" : "text-purple-600"
                      }
                    />
                  </div>
                  <div>
                    <div
                      className={`font-bold ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Coding
                    </div>
                    <div
                      className={`text-xs ${
                        theme === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      2+ years of coding
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex flex-col gap-3 max-w-sm mx-auto"
              >
                <a
                  href="#contact"
                  className={`text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      : "btn-gradient"
                  } transition-all shadow-md hover:shadow-lg`}
                >
                  <FaEnvelope />
                  Get In Touch
                </a>

                <a
                  href="/Yuvraj_Resume_v2_1%20(1).pdf"
                  download="Yuvraj_Mehta_Resume.pdf"
                  className={`px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 border-2 ${
                    theme === "dark"
                      ? "border-indigo-600/60 bg-indigo-600/5 text-indigo-400 hover:bg-indigo-600/10"
                      : "border-primary/60 bg-primary/5 text-primary hover:bg-primary/10"
                  } transition-all`}
                >
                  <FaDownload />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-2 space-y-10"
          >
            {/* Bio Section */}
            <div className="space-y-6">
              <div>
                <h3
                  className={`text-3xl font-bold font-heading relative inline-block ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  <span
                    className={`${
                      theme === "dark"
                        ? "bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
                        : "text-gradient"
                    }`}
                  >
                    Full Stack Developer
                  </span>{" "}
                  <span
                    className={`${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    & CS Student
                  </span>
                </h3>

                <motion.div
                  className="mt-6 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <p
                    className={`text-lg leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Computer Science student at{" "}
                    <span
                      className={`font-semibold ${
                        theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    >
                      NIT Patna
                    </span>{" "}
                    passionate about full stack development with a strong
                    foundation in Data Structures & Algorithms. I approach
                    technical challenges analytically and continually expand my
                    skills in GenAI and modern web technologies.
                  </p>
                  <p
                    className={`text-lg leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    As a{" "}
                    <span
                      className={`font-semibold ${
                        theme === "dark" ? "text-purple-400" : "text-purple-600"
                      }`}
                    >
                      Robotics Club member
                    </span>
                    , I've organized workshops and led teams building combat and
                    soccer bots. Outside coding, I enjoy competitive programming
                    and sports, having won Bronze in 50m Hurdles at NIT Patna
                    Intramurals.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`p-6 rounded-2xl ${
                theme === "dark"
                  ? "bg-gray-800/50 border border-gray-700/50"
                  : "bg-white/80 border border-gray-100 shadow-md"
              }`}
            >
              <h4
                className={`text-xl font-bold mb-6 flex items-center gap-2 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <span
                  className={`p-2 rounded-full ${
                    theme === "dark" ? "bg-indigo-900/40" : "bg-indigo-100"
                  }`}
                >
                  <FaCode
                    className={
                      theme === "dark" ? "text-indigo-400" : "text-indigo-600"
                    }
                  />
                </span>
                Technical Expertise
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span
                          className={
                            theme === "dark" ? "text-gray-200" : "text-gray-800"
                          }
                        >
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          theme === "dark"
                            ? "text-indigo-400"
                            : "text-indigo-600"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full overflow-hidden ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                        className={`h-full rounded-full ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                            : "bg-gradient-to-r from-primary to-accent"
                        }`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Competitive Programming section removed as it will be shown in a dedicated component */}

            {/* Note: Achievements & Experience section moved to dedicated Experience component */}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
