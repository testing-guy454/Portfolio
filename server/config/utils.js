/**
 * Simple configuration utilities
 */
import config from './index.js';

/**
 * Get platform configuration
 * @param {string} platform - Platform name (leetcode, codeforces, gfg, codechef)
 * @returns {Object} Platform config
 */
export const getPlatformConfig = (platform) => {
  const platformUpper = platform.toUpperCase();
  return {
    username: config.USERNAMES[platformUpper],
    timeout: config.TIMEOUTS[platformUpper],
    endpoint: config.ENDPOINTS[platformUpper]
  };
};

export default config;
