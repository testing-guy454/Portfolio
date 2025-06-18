# Portfolio Server

A Node.js/Express server that aggregates coding platform data for portfolio websites.

## 📚 Documentation

- **[API Documentation](./docs/API.md)** - Complete API reference
- **[Configuration Guide](./config/README.md)** - Environment and configuration setup
- **[Error Handling](./ERROR_HANDLING_IMPLEMENTATION.md)** - Error handling implementation
- **[Assessment Report](./COMPREHENSIVE_ASSESSMENT_REPORT.md)** - Codebase analysis

## 🚀 Quick Start

### 1. Installation

```bash
git clone <repository-url>
cd server
npm install
```

### 2. Configuration

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your configuration
nano .env
```

### 3. Running the Server

```bash
# Development
npm run dev

# Production
npm start

# Testing
npm test
```

## 🏗️ Project Structure

```
server/
├── 📁 config/              # Configuration management
│   ├── index.js            # Main configuration
│   └── README.md           # Configuration documentation
├── 📁 controllers/         # Request handlers
│   ├── allPlatformsHandler.js
│   ├── leetcodeHandler.js
│   ├── codeforcesHandler.js
│   ├── codechefHandler.js
│   └── gfgHandler.js
├── 📁 data/               # JSON data storage
├── 📁 database/           # Database configuration
├── 📁 docs/               # API documentation
│   ├── API.md            # Complete API reference
│   └── README.md         # Documentation overview
├── 📁 middleware/         # Custom middleware
│   ├── errorHandler.js   # Error handling
│   └── asyncHandler.js   # Async wrapper
├── 📁 models/             # Data models
├── 📁 routes/             # Route definitions
├── 📁 services/           # Business logic
├── 📁 tests/              # Test suite
├── 📁 utils/              # Scraper utilities
├── app.js                 # Express app configuration
├── server.js              # Server startup
└── package.json           # Dependencies and scripts
```

## 🛠️ Available Scripts

```bash
npm start                    # Start production server
npm run dev                  # Start development server with auto-reload
npm test                     # Run full test suite
npm run test:scheduler       # Test scheduler functionality
npm run test:scrapers        # Test all scrapers
npm run config:validate      # Validate configuration
npm run docs:serve           # Serve documentation locally
```

## 🌐 Supported Platforms

- **LeetCode** - Problems, contest rating, achievements
- **Codeforces** - Rating, problems solved, contest history
- **CodeChef** - Rating, stars, global ranking
- **GeeksforGeeks** - Problems, badges, streaks

## 📋 API Endpoints

### Public Endpoints

- `GET /api/v1/codingPlatforms/all` - All platforms data
- `GET /api/v1/codingPlatforms/leetcode` - LeetCode data
- `GET /api/v1/codingPlatforms/codeforces` - Codeforces data
- `GET /api/v1/codingPlatforms/codechef` - CodeChef data
- `GET /api/v1/codingPlatforms/gfg` - GeeksforGeeks data
- `GET /health` - Health check

### Admin Endpoints

- `GET /api/v1/admin/update-status` - Update status
- `POST /api/v1/admin/trigger-update` - Manual update trigger

## ⚙️ Configuration

The server uses environment-based configuration. Key settings:

```bash
# Application
PORT=5000
NODE_ENV=development

# Platform usernames
LEETCODE_USERNAME=your-username
CODEFORCES_USERNAME=your-username
CODECHEF_USERNAME=your-username
GFG_USERNAME=your-username

# Features
SCHEDULER_ENABLED=true
CACHE_ENABLED=false
```

See [.env.example](./.env.example) for complete configuration options.

## 🔒 Security Features

- ✅ CORS configuration
- ✅ Request size limits
- ✅ Error sanitization
- ✅ Environment variable protection
- ✅ Input validation
- 🔄 Rate limiting (recommended for production)
- 🔄 Security headers (recommended for production)

## 🧪 Testing

Comprehensive test suite covering:

- All scraper functionality
- Data validation
- Error handling
- Scheduler operations
- API endpoints

```bash
npm test  # Run all tests
```

## 📊 Performance

- **Response Time**: 50-200ms (cached data)
- **Memory Usage**: ~45MB baseline
- **Scraping Time**: 2-8 seconds per platform
- **Update Frequency**: Every 6 hours (configurable)

## 🚀 Deployment

### Environment Setup

1. Set `NODE_ENV=production`
2. Configure database connection
3. Set appropriate CORS origins
4. Enable security features

### Recommended Production Enhancements

```bash
# Install additional security packages
npm install helmet express-rate-limit compression

# Add to app.js
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import compression from 'compression';

app.use(helmet());
app.use(compression());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
```

## 🔧 Development

### Adding New Platforms

1. Create scraper in `utils/`
2. Add data model in `models/`
3. Create controller in `controllers/`
4. Update routes in `routes/`
5. Add tests in `tests/`

### Configuration Changes

1. Update `config/index.js`
2. Add environment variables to `.env.example`
3. Update documentation

## 📈 Monitoring

### Health Check

Monitor server health at `/health`:

```json
{
  "status": "healthy",
  "uptime": 3600.123,
  "memory": { "rss": "45MB", "heapUsed": "32MB" }
}
```

### Logging

Structured logging with configurable levels:

- Development: debug level
- Production: warn level
- Testing: error level only

## 🤝 Contributing

1. Follow existing code structure
2. Add tests for new features
3. Update documentation
4. Ensure all tests pass
5. Follow error handling patterns

## 📄 License

ISC License - see package.json for details.

## 👤 Author

**Yuvraj Mehta**

---

_For detailed API documentation, see [docs/API.md](./docs/API.md)_
