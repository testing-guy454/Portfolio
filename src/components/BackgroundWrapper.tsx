import React from "react";
import { useTheme } from "../contexts/ThemeContext";

interface BackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  isAlt?: boolean;
  style?: React.CSSProperties;
}

/**
 * Consistent background wrapper component for all sections
 */
const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({
  children,
  className = "",
  id,
  isAlt = false,
  style = {},
}) => {
  const { theme } = useTheme();

  return (
    <section
      id={id}
      style={style}
      className={`portfolio-section py-24 ${
        theme === "dark"
          ? isAlt
            ? "dark-theme-section-alt"
            : "dark-theme-section"
          : isAlt
          ? "light-theme-section-alt"
          : "light-theme-section"
      } ${className}`}
    >
      {/* Background decorative elements */}
      <div
        className={`decoration-blob blob-top-right ${
          isAlt ? "blob-secondary" : "blob-primary"
        }`}
      ></div>
      <div
        className={`decoration-blob blob-bottom-left ${
          isAlt ? "blob-primary" : "blob-secondary"
        }`}
      ></div>
      {!isAlt && (
        <div className={`decoration-blob blob-center blob-accent`}></div>
      )}

      {children}
    </section>
  );
};

export default BackgroundWrapper;
