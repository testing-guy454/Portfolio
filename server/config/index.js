/**
 * Application Configuration
 * Centralized configuration management for different environments
 */

import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

/**
 * Environment configuration object
 */
const config = {
  // Application settings
  app: {
    name: process.env.APP_NAME || 'Portfolio Server',
    version: process.env.APP_VERSION || '1.0.0',
    port: parseInt(process.env.PORT) || 5000,
    host: process.env.HOST || 'localhost',
    nodeEnv: process.env.NODE_ENV || 'development'
  },

  // Server configuration
  server: {
    timeout: parseInt(process.env.SERVER_TIMEOUT) || 30000,
    keepAliveTimeout: parseInt(process.env.KEEP_ALIVE_TIMEOUT) || 5000,
    headersTimeout: parseInt(process.env.HEADERS_TIMEOUT) || 6000
  },

  // CORS configuration
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-requested-with']
  },

  // Database configuration
  database: {
    uri: process.env.DATABASE_URI || process.env.MONGODB_URI,
    options: {
      maxPoolSize: parseInt(process.env.DB_MAX_POOL_SIZE) || 10,
      serverSelectionTimeoutMS: parseInt(process.env.DB_TIMEOUT) || 5000,
      socketTimeoutMS: parseInt(process.env.DB_SOCKET_TIMEOUT) || 45000,
    }
  },

  // API configuration
  api: {
    prefix: process.env.API_PREFIX || '/api/v1',
    rateLimit: {
      windowMs: parseInt(process.env.RATE_LIMIT_WINDOW) || 15 * 60 * 1000, // 15 minutes
      max: parseInt(process.env.RATE_LIMIT_MAX) || 100, // requests per window
      message: 'Too many requests from this IP, please try again later.'
    },
    requestTimeout: parseInt(process.env.API_TIMEOUT) || 30000,
    maxRequestSize: process.env.MAX_REQUEST_SIZE || '10mb'
  },

  // Scraper configuration
  scrapers: {
    timeout: parseInt(process.env.SCRAPER_TIMEOUT) || 10000,
    maxContentLength: parseInt(process.env.SCRAPER_MAX_CONTENT) || 10 * 1024 * 1024, // 10MB
    retryAttempts: parseInt(process.env.SCRAPER_RETRY_ATTEMPTS) || 3,
    retryDelay: parseInt(process.env.SCRAPER_RETRY_DELAY) || 1000,
    userAgent: process.env.SCRAPER_USER_AGENT || 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',

    // Platform-specific settings
    platforms: {
      leetcode: {
        apiEndpoint: process.env.LEETCODE_API || 'https://leetcode.com/graphql',
        username: process.env.LEETCODE_USERNAME || 'mythical-UV'
      },
      codeforces: {
        apiEndpoint: process.env.CODEFORCES_API || 'https://codeforces.com/api',
        username: process.env.CODEFORCES_USERNAME || 'yuvraj.mehta532',
        submissionLimit: parseInt(process.env.CODEFORCES_SUBMISSION_LIMIT) || 5000
      },
      codechef: {
        baseUrl: process.env.CODECHEF_BASE_URL || 'https://www.codechef.com',
        username: process.env.CODECHEF_USERNAME || 'quick_unity_53'
      },
      gfg: {
        baseUrl: process.env.GFG_BASE_URL || 'https://www.geeksforgeeks.org',
        username: process.env.GFG_USERNAME || 'yuvrajmevbrx'
      }
    }
  },

  // Scheduler configuration
  scheduler: {
    enabled: process.env.SCHEDULER_ENABLED?.toLowerCase() === 'true' || true,
    cronExpression: process.env.SCHEDULER_CRON || '0 */6 * * *', // Every 6 hours
    timezone: process.env.SCHEDULER_TIMEZONE || 'UTC',
    onStartup: process.env.SCHEDULER_ON_STARTUP?.toLowerCase() === 'true' || false
  },

  // Logging configuration
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: process.env.LOG_FORMAT || 'combined',
    file: process.env.LOG_FILE || './logs/app.log',
    maxSize: process.env.LOG_MAX_SIZE || '10m',
    maxFiles: process.env.LOG_MAX_FILES || '5'
  },

  // Security configuration
  security: {
    helmet: {
      contentSecurityPolicy: process.env.NODE_ENV === 'production',
      crossOriginEmbedderPolicy: false
    },
    jwt: {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN || '24h'
    }
  },

  // Cache configuration
  cache: {
    enabled: process.env.CACHE_ENABLED?.toLowerCase() === 'true' || false,
    ttl: parseInt(process.env.CACHE_TTL) || 300, // 5 minutes
    maxKeys: parseInt(process.env.CACHE_MAX_KEYS) || 1000,
    checkPeriod: parseInt(process.env.CACHE_CHECK_PERIOD) || 120 // 2 minutes
  },

  // Health check configuration
  health: {
    endpoint: process.env.HEALTH_ENDPOINT || '/health',
    detailed: process.env.HEALTH_DETAILED?.toLowerCase() === 'true' || true
  }
};

/**
 * Environment-specific configurations
 */
const environments = {
  development: {
    logging: {
      level: 'debug'
    },
    security: {
      helmet: {
        contentSecurityPolicy: false
      }
    }
  },

  test: {
    app: {
      port: 0 // Use random port for testing
    },
    logging: {
      level: 'error'
    },
    scheduler: {
      enabled: false
    }
  },

  production: {
    logging: {
      level: 'warn'
    },
    security: {
      helmet: {
        contentSecurityPolicy: true,
        crossOriginEmbedderPolicy: true
      }
    },
    cache: {
      enabled: true
    }
  }
};

/**
 * Merge environment-specific configuration
 */
const environmentConfig = environments[config.app.nodeEnv] || {};

/**
 * Deep merge function for configuration objects
 */
function deepMerge(target, source) {
  const result = { ...target };

  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }

  return result;
}

// Merge configurations
const finalConfig = deepMerge(config, environmentConfig);

/**
 * Validate required configuration
 */
function validateConfig() {
  const required = [
    'app.port',
    'app.nodeEnv'
  ];

  const missing = [];

  for (const path of required) {
    const keys = path.split('.');
    let current = finalConfig;

    for (const key of keys) {
      if (current[key] === undefined || current[key] === null) {
        missing.push(path);
        break;
      }
      current = current[key];
    }
  }

  if (missing.length > 0) {
    throw new Error(`Missing required configuration: ${missing.join(', ')}`);
  }
}

// Validate configuration on import
validateConfig();

export default finalConfig;
export { validateConfig };
