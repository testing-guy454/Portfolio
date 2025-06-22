/**
 * Environment configuration for the portfolio application
 * All environment variables should be prefixed with VITE_ to be accessible in the browser
 */

interface EnvironmentConfig {
  // API Configuration
  apiBaseUrl: string;

  // Application Configuration
  appTitle: string;
  appDescription: string;
  appUrl: string;

  // Contact Information
  contactEmail: string;
  githubUrl: string;
  linkedinUrl: string;

  // Resume
  resumeUrl: string;

  // Analytics (Optional)
  gaTrackingId?: string;
  hotjarId?: string;

  // Environment
  nodeEnv: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key] || defaultValue;
  if (!value) {
    console.warn(`Environment variable ${key} is not set`);
  }
  return value || "";
};

export const config: EnvironmentConfig = {
  // API Configuration
  apiBaseUrl: getEnvVar("VITE_API_BASE_URL", "http://localhost:9000/api/v1"),

  // Application Configuration
  appTitle: getEnvVar("VITE_APP_TITLE", "Portfolio"),
  appDescription: getEnvVar(
    "VITE_APP_DESCRIPTION",
    "Full Stack Developer Portfolio"
  ),
  appUrl: getEnvVar("VITE_APP_URL", "http://localhost:5173"),

  // Contact Information
  contactEmail: getEnvVar("VITE_CONTACT_EMAIL", ""),
  githubUrl: getEnvVar("VITE_GITHUB_URL", ""),
  linkedinUrl: getEnvVar("VITE_LINKEDIN_URL", ""),

  // Resume
  resumeUrl: getEnvVar("VITE_RESUME_URL", ""),

  // Analytics (Optional)
  gaTrackingId: getEnvVar("VITE_GA_TRACKING_ID"),
  hotjarId: getEnvVar("VITE_HOTJAR_ID"),

  // Environment
  nodeEnv: getEnvVar("VITE_NODE_ENV", "development"),
  isDevelopment: getEnvVar("VITE_NODE_ENV", "development") === "development",
  isProduction: getEnvVar("VITE_NODE_ENV", "development") === "production",
};

// API endpoints builder
export const apiEndpoints = {
  codingPlatforms: {
    leetcode: `${config.apiBaseUrl}/codingPlatforms/leetcode`,
    codechef: `${config.apiBaseUrl}/codingPlatforms/codechef`,
    codeforces: `${config.apiBaseUrl}/codingPlatforms/codeforces`,
    geeksforgeeks: `${config.apiBaseUrl}/codingPlatforms/geeksforgeeks`,
    all: `${config.apiBaseUrl}/codingPlatforms/all`,
  },
};

// Log configuration in development
if (config.isDevelopment) {
  console.log("🔧 Environment Configuration:", {
    nodeEnv: config.nodeEnv,
    apiBaseUrl: config.apiBaseUrl,
    appUrl: config.appUrl,
  });
}

export default config;
