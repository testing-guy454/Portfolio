import dotenv from 'dotenv';
dotenv.config();

// Simple configuration object
const config = {
  // Server settings
  PORT: process.env.PORT || 9000,
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:9000'],

  // Database
  MONGODB_URI: process.env.MONGODB_URI,

  // Platform usernames
  USERNAMES: {
    LEETCODE: 'mythical-UV',
    CODEFORCES: 'yuvraj.mehta532',
    GFG: 'yuvrajmevbrx',
    CODECHEF: 'quick_unity_53'
  },

  // API endpoints
  ENDPOINTS: {
    LEETCODE: 'https://leetcode.com/graphql',
    CODEFORCES: 'https://codeforces.com/api',
    GFG: 'https://auth.geeksforgeeks.org',
    CODECHEF: 'https://www.codechef.com'
  },

  // Timeouts (in milliseconds)
  TIMEOUTS: {
    LEETCODE: 10000,
    CODEFORCES: 10000,
    GFG: 15000,
    CODECHEF: 15000
  },

  // Scheduler
  UPDATE_INTERVAL_HOURS: 6,
  INITIAL_DELAY_MS: 10000
};

// CORS configuration
export const corsConfig = {
  origin: config.ALLOWED_ORIGINS,
  credentials: true,
  optionsSuccessStatus: 200
};

export default config;
