import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import yuvrajImage from "../../public/yuvraj2.png";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`section relative overflow-hidden py-24 ${
        theme === "dark" ? "bg-gray-900" : ""
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
            Discover
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

        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="md:w-1/3">
            <div className="relative">
              {/* Animated background for profile image */}
              <motion.div
                className={`absolute -inset-4 rounded-2xl opacity-20 blur-lg ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600"
                    : "bg-gradient-to-r from-primary to-accent"
                }`}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0],
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
                }`}
              >
                <img
                  src={yuvrajImage}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400x500/6366F1/FFFFFF/png?text=YM";
                  }}
                  alt="Yuvraj Mehta"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -right-5 top-10 glass-effect px-4 py-2 rounded-lg shadow-lg">
                <span
                  className={`font-semibold ${
                    theme === "dark" ? "text-indigo-400" : "text-primary"
                  }`}
                >
                  CGPA 7.69
                </span>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  B.Tech
                </p>
              </div>

              {/* Skills badge */}
              <div className="absolute -left-5 bottom-10 glass-effect px-4 py-2 rounded-lg shadow-lg">
                <span
                  className={`font-semibold ${
                    theme === "dark" ? "text-purple-400" : "text-accent"
                  }`}
                >
                  Robotics Club
                </span>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Technical Member
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h3
              className={`text-3xl font-bold mb-6 font-heading ${
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
                Full Stack Developer
              </span>{" "}
              & CS Student
            </h3>

            <p
              className={`text-lg mb-5 leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a Computer Science student at NIT Patna with a passion for
              full stack development. With a strong foundation in Data
              Structures and Algorithms (solved 180+ problems across platforms),
              I approach technical challenges with an analytical mindset.
            </p>

            <p
              className={`text-lg mb-5 leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              As a technical member of the Robotics Club at NIT Patna, I've
              contributed to organizing workshops and led teams to build
              combat-ready bots and soccer bots for tech competitions.
            </p>

            <p
              className={`text-lg mb-8 leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              When I'm not coding, you'll find me participating in competitive
              programming contests (rated 1550+ on LeetCode and 1270+ on
              CodeChef) or engaging in sports, where I won a Bronze Medal in 50m
              Hurdles at NIT Patna Intramurals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div
                className={`card-gradient p-6 rounded-xl transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "shadow-card hover:shadow-lg"
                }`}
              >
                <h4
                  className={`text-xl font-semibold mb-3 ${
                    theme === "dark" ? "text-indigo-400" : "text-primary"
                  }`}
                >
                  Education
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                          : "bg-gradient-to-r from-primary to-secondary"
                      }`}
                    ></span>
                    <span className={theme === "dark" ? "text-gray-200" : ""}>
                      B.Tech Computer Science (2023-27)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                          : "bg-gradient-to-r from-primary to-secondary"
                      }`}
                    ></span>
                    <span className={theme === "dark" ? "text-gray-200" : ""}>
                      National Institute of Technology, Patna
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className={`card-gradient p-6 rounded-xl transition-all duration-300 ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "shadow-card hover:shadow-lg"
                }`}
              >
                <h4
                  className={`text-xl font-semibold mb-3 ${
                    theme === "dark" ? "text-indigo-400" : "text-primary"
                  }`}
                >
                  Experience
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                          : "bg-gradient-to-r from-primary to-secondary"
                      }`}
                    ></span>
                    <span className={theme === "dark" ? "text-gray-200" : ""}>
                      Technical Member, Robotics Club (2023-Present)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                          : "bg-gradient-to-r from-primary to-secondary"
                      }`}
                    ></span>
                    <span className={theme === "dark" ? "text-gray-200" : ""}>
                      Class Representative, Dept. of CSE (2023-2024)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className={`text-white px-8 py-3 rounded-lg font-semibold inline-block ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                    : "btn-gradient"
                }`}
              >
                Get In Touch
              </a>
              <a
                href="/Yuvraj_Resume_v2_1%20(1).pdf"
                download="Yuvraj_Mehta_Resume.pdf"
                className={`px-8 py-3 rounded-lg font-semibold inline-block border-2 ${
                  theme === "dark"
                    ? "border-indigo-600 text-indigo-400 hover:bg-indigo-600/10"
                    : "border-primary text-primary hover:bg-primary/10"
                } transition-all`}
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
