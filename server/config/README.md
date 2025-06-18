# Environment Configuration

This directory contains configuration files for different environments and application settings.

## Files

### `index.js`

Main configuration file that exports a centralized configuration object with environment-specific overrides.

## Configuration Structure

```javascript
{
  app: {
    name: 'Portfolio Server',
    version: '1.0.0',
    port: 5000,
    host: 'localhost',
    nodeEnv: 'development'
  },
  server: { /* server settings */ },
  cors: { /* CORS configuration */ },
  database: { /* database settings */ },
  api: { /* API configuration */ },
  scrapers: { /* scraper settings */ },
  scheduler: { /* scheduler configuration */ },
  logging: { /* logging settings */ },
  security: { /* security configuration */ },
  cache: { /* cache settings */ },
  health: { /* health check settings */ }
}
```

## Environment Variables

The configuration supports the following environment variables:

### Application

- `APP_NAME` - Application name
- `APP_VERSION` - Application version
- `PORT` - Server port (default: 5000)
- `HOST` - Server host (default: localhost)
- `NODE_ENV` - Environment (development/test/production)

### Database

- `DATABASE_URI` or `MONGODB_URI` - Database connection string
- `DB_MAX_POOL_SIZE` - Connection pool size (default: 10)
- `DB_TIMEOUT` - Connection timeout (default: 5000)
- `DB_SOCKET_TIMEOUT` - Socket timeout (default: 45000)

### API

- `API_PREFIX` - API route prefix (default: /api/v1)
- `RATE_LIMIT_WINDOW` - Rate limit window in ms (default: 900000)
- `RATE_LIMIT_MAX` - Max requests per window (default: 100)
- `API_TIMEOUT` - API request timeout (default: 30000)
- `MAX_REQUEST_SIZE` - Maximum request size (default: 10mb)

### CORS

- `ALLOWED_ORIGINS` - Comma-separated list of allowed origins

### Scrapers

- `SCRAPER_TIMEOUT` - Scraper timeout (default: 10000)
- `SCRAPER_MAX_CONTENT` - Max content length (default: 10MB)
- `SCRAPER_RETRY_ATTEMPTS` - Retry attempts (default: 3)
- `SCRAPER_RETRY_DELAY` - Retry delay (default: 1000)
- `SCRAPER_USER_AGENT` - User agent string

### Platform Usernames

- `LEETCODE_USERNAME` - LeetCode username
- `CODEFORCES_USERNAME` - Codeforces username
- `CODECHEF_USERNAME` - CodeChef username
- `GFG_USERNAME` - GeeksforGeeks username

### Scheduler

- `SCHEDULER_ENABLED` - Enable scheduler (default: true)
- `SCHEDULER_CRON` - Cron expression (default: "0 _/6 _ \* \*")
- `SCHEDULER_TIMEZONE` - Timezone (default: UTC)
- `SCHEDULER_ON_STARTUP` - Run on startup (default: false)

### Logging

- `LOG_LEVEL` - Log level (default: info)
- `LOG_FORMAT` - Log format (default: combined)
- `LOG_FILE` - Log file path
- `LOG_MAX_SIZE` - Max log file size
- `LOG_MAX_FILES` - Max log files to keep

### Security

- `JWT_SECRET` - JWT secret key
- `JWT_EXPIRES_IN` - JWT expiration (default: 24h)

### Cache

- `CACHE_ENABLED` - Enable caching (default: false)
- `CACHE_TTL` - Cache TTL in seconds (default: 300)
- `CACHE_MAX_KEYS` - Max cache keys (default: 1000)
- `CACHE_CHECK_PERIOD` - Cache check period (default: 120)

## Environment-Specific Overrides

### Development

- Debug logging enabled
- Content Security Policy disabled
- All features enabled for development

### Test

- Random port assignment
- Error-level logging only
- Scheduler disabled
- Minimal features for testing

### Production

- Warning-level logging
- Enhanced security headers
- Caching enabled
- Production optimizations

## Usage

```javascript
import config from "./config/index.js";

// Access configuration
const port = config.app.port;
const dbUri = config.database.uri;
const corsOptions = config.cors;

// Use in Express app
app.listen(config.app.port, config.app.host);
```

## Validation

The configuration includes validation for required settings and will throw an error if essential configuration is missing.
