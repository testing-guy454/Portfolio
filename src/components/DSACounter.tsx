import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../contexts/ThemeContext";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import {
  SiLeetcode,
  SiCodechef,
  SiGeeksforgeeks,
} from "react-icons/si";

interface PlatformStats {
  name: string;
  count: number;
  icon: JSX.Element;
  color: string;
}

const DSACounter = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Define the platforms and the number of questions solved on each
  const platforms: PlatformStats[] = [
    {
      name: "LeetCode",
      count: 183,
      icon: <SiLeetcode />,
      color: "text-orange-500",
    },
    {
      name: "CodeChef",
      count: 12,
      icon: <SiCodechef />,
      color: "text-brown-500",
    },
    {
      name: "GeeksForGeeks",
      count: 70,
      icon: <SiGeeksforgeeks />,
      color: "text-green-600",
    },
    {
      name: "Codeforces",
      count: 10,
      icon: <FaCode className="text-blue-500" />,
      color: "text-blue-500",
    }
  ];

  // Total number of problems solved
  const totalCount = platforms.reduce(
    (acc, platform) => acc + platform.count,
    0
  );

  // For each platform, create a counter that will count up from 0 to the target number
  const [counters, setCounters] = useState<number[]>(platforms.map(() => 0));
  const [totalCounter, setTotalCounter] = useState(0);
  const counterInitiated = useRef(false);

  useEffect(() => {
    // Only start counting when the element is in view and hasn't been counted yet
    if (inView && !counterInitiated.current) {
      counterInitiated.current = true;

      // Duration for the count animation in milliseconds
      const duration = 2000;
      const frameRate = 60;
      const framesCount = (duration / 1000) * frameRate;

      // For each platform, create a counter animation
      platforms.forEach((platform, index) => {
        const increment = platform.count / framesCount;
        let currentCount = 0;

        const timer = setInterval(() => {
          currentCount += increment;

          if (currentCount >= platform.count) {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = platform.count;
              return newCounters;
            });
            clearInterval(timer);
          } else {
            setCounters((prev) => {
              const newCounters = [...prev];
              newCounters[index] = Math.floor(currentCount);
              return newCounters;
            });
          }
        }, 1000 / frameRate);
      });

      // Create a counter animation for the total
      let currentTotalCount = 0;
      const totalIncrement = totalCount / framesCount;

      const totalTimer = setInterval(() => {
        currentTotalCount += totalIncrement;

        if (currentTotalCount >= totalCount) {
          setTotalCounter(totalCount);
          clearInterval(totalTimer);
        } else {
          setTotalCounter(Math.floor(currentTotalCount));
        }
      }, 1000 / frameRate);
    }
  }, [inView, platforms, totalCount]);

  // Full-size component
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`w-full rounded-xl p-6 ${
        theme === "dark"
          ? "bg-gray-800/80 border border-gray-700 backdrop-blur-sm"
          : "bg-white/90 border border-gray-200 shadow-xl backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center mb-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
            theme === "dark"
              ? "bg-gradient-to-br from-blue-800 to-purple-800"
              : "bg-gradient-to-br from-blue-600 to-purple-600"
          }`}
        >
          <FaLaptopCode className="text-white text-xl" />
        </div>
        <h3
          className={`text-xl font-bold ${
            theme === "dark" ? "text-indigo-300" : "text-indigo-700"
          }`}
        >
          DSA Problem Solving
        </h3>
      </div>

      {/* Total count badge */}
      <div className="flex justify-center mb-6">
        <div
          className={`inline-flex items-center px-6 py-2 rounded-full ${
            theme === "dark"
              ? "bg-gradient-to-r from-indigo-900/40 to-purple-900/40 text-indigo-300 border border-indigo-900/50"
              : "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border border-indigo-200"
          } shadow-lg`}
        >
          <FaCode className="mr-3" />
          <span className="font-bold text-lg">{totalCounter}</span>
          <span className="ml-2">Total Problems Solved</span>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {platforms.map((platform, index) => (
          <div
            key={platform.name}
            className={`p-4 rounded-xl ${
              theme === "dark"
                ? "bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600/50"
                : "bg-white hover:bg-gray-50 border border-gray-200"
            } transition-all duration-300 shadow-md`}
          >
            <div className="flex flex-col items-center text-center">
              <div
                className={`text-2xl mb-2 ${platform.color}`}
                aria-hidden="true"
              >
                {platform.icon}
              </div>
              <div
                className={`text-3xl font-bold mb-1 ${
                  theme === "dark" 
                    ? "bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text" 
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
                }`}
              >
                {counters[index]}
              </div>
              <div
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {platform.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DSACounter;
