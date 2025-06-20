import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { FaTimes } from "react-icons/fa";

interface PlatformData {
  name: string;
  rating?: string;
  problemsSolved: string;
  progress: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  iconColor: string;
  categories?: Array<{
    name: string;
    count: number;
    color: string;
  }>;
  rank?: string;
  contests?: string;
  achievement?: string;
  institutionRank?: string;
}

interface PlatformDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  platforms: PlatformData[];
}

const PlatformDetailsModal: React.FC<PlatformDetailsModalProps> = ({
  isOpen,
  onClose,
  platforms,
}) => {
  const { theme } = useTheme();

  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { y: "100vh", opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className={`w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl ${
              theme === "dark"
                ? "bg-gray-900 border border-gray-700"
                : "bg-white border border-gray-200"
            } shadow-2xl`}
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`p-6 border-b ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between">
                <h2
                  className={`text-2xl font-bold ${
                    theme === "dark" ? "text-white" : "text-gray-800"
                  }`}
                >
                  Coding Platform Details
                </h2>
                <button
                  onClick={onClose}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === "dark"
                      ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                      : "hover:bg-gray-100 text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <FaTimes size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {platforms.map((platform, index) => {
                  const IconComponent = platform.icon;
                  const colorName = platform.iconColor;
                  return (
                    <motion.div
                      key={index}
                      className={`p-6 rounded-xl ${
                        theme === "dark"
                          ? "border border-gray-700 bg-gray-800/80"
                          : "border border-gray-200 bg-white/90"
                      } relative overflow-hidden backdrop-blur-sm shadow-lg`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div
                        className={`absolute top-0 right-0 w-24 h-24 ${
                          theme === "dark"
                            ? `bg-${colorName}-900/30`
                            : `bg-${colorName}-100/80`
                        } rounded-bl-full z-0`}
                      ></div>
                      <div className="relative z-10">
                        <div className="flex items-center mb-4">
                          <div
                            className={`p-3 rounded-lg ${
                              theme === "dark"
                                ? `bg-${colorName}-900/30`
                                : `bg-${colorName}-100`
                            }`}
                          >
                            <IconComponent
                              className={
                                theme === "dark"
                                  ? `text-${colorName}-400`
                                  : `text-${colorName}-600`
                              }
                              size={24}
                            />
                          </div>
                          <div className="ml-4">
                            <h3
                              className={`text-xl font-bold ${
                                theme === "dark"
                                  ? "text-white"
                                  : "text-gray-800"
                              }`}
                            >
                              {platform.name}
                            </h3>
                            <p
                              className={`${
                                theme === "dark"
                                  ? `text-${colorName}-400`
                                  : `text-${colorName}-600`
                              }`}
                            >
                              {platform.institutionRank
                                ? `Institution Rank: ${platform.institutionRank}`
                                : `Rating: ${platform.rating}`}
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span
                              className={
                                theme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }
                            >
                              Problems Solved
                            </span>
                            <span
                              className={`font-semibold ${
                                theme === "dark"
                                  ? `text-${colorName}-300`
                                  : `text-${colorName}-600`
                              }`}
                            >
                              {platform.problemsSolved}
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                theme === "dark"
                                  ? `bg-${colorName}-500`
                                  : `bg-${colorName}-600`
                              }`}
                              style={{ width: platform.progress }}
                            ></div>
                          </div>
                        </div>
                        {platform.categories ? (
                          <div className="mt-4 grid grid-cols-3 gap-2">
                            {platform.categories.map((category, idx) => (
                              <div
                                key={idx}
                                className={`p-2 rounded text-center ${
                                  category.color === "red"
                                    ? theme === "dark"
                                      ? "bg-red-900/30"
                                      : "bg-red-100"
                                    : theme === "dark"
                                    ? `bg-${category.color}-900/30`
                                    : `bg-${category.color}-100`
                                }`}
                              >
                                <p
                                  className={`text-xs ${
                                    theme === "dark"
                                      ? "text-gray-400"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {category.name}
                                </p>
                                <p
                                  className={`font-medium ${
                                    category.color === "red"
                                      ? theme === "dark"
                                        ? "text-red-400"
                                        : "text-red-600"
                                      : theme === "dark"
                                      ? `text-${category.color}-400`
                                      : `text-${category.color}-600`
                                  }`}
                                >
                                  {category.count}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="mt-4">
                            {platform.rank && (
                              <div
                                className={`p-2 rounded ${
                                  theme === "dark"
                                    ? `bg-${colorName}-900/20`
                                    : `bg-${colorName}-100`
                                }`}
                              >
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {platform.rank}
                                </p>
                              </div>
                            )}
                            {platform.contests && (
                              <p
                                className={`mt-2 text-sm ${
                                  theme === "dark"
                                    ? "text-gray-400"
                                    : "text-gray-600"
                                }`}
                              >
                                Participated in {platform.contests} contests
                              </p>
                            )}
                            {platform.achievement && (
                              <div
                                className={`p-2 rounded mt-2 ${
                                  theme === "dark"
                                    ? `bg-${colorName}-900/20`
                                    : `bg-${colorName}-100`
                                }`}
                              >
                                <p
                                  className={`text-sm ${
                                    theme === "dark"
                                      ? "text-gray-300"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {platform.achievement}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlatformDetailsModal;
