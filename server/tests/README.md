# Portfolio Server Testing Suite

A comprehensive testing framework for the Portfolio Server API endpoints. This suite includes functionality tests, endpoint validation, load testing, and stress testing capabilities.

## 📁 Test Files Overview

### 1. `testRunner.js` - Main Test Orchestrator

The central test runner that executes all test suites and provides a unified interface.

**Features:**

- Runs all test suites in sequence
- Generates comprehensive test reports
- Provides individual test execution options
- Server health checking before tests
- Colored console output for better readability

### 2. `apiTests.js` - API Functionality Tests

Comprehensive functional testing of all API endpoints with validation.

**Tests Include:**

- Health endpoint validation
- Admin routes testing
- All coding platform endpoints
- Response structure validation
- Error handling verification
- CORS headers checking
- Performance benchmarks
- Concurrent request handling

### 3. `endpointTests.js` - Individual Endpoint Testing

Detailed testing of each endpoint with response inspection.

**Features:**

- Individual endpoint testing with detailed output
- Response time measurement
- Pretty-printed JSON responses
- Error response analysis
- Status code validation
- Interactive testing mode

### 4. `loadTests.js` - Load and Stress Testing

Performance testing under various load conditions.

**Test Types:**

- Concurrent load testing
- Stress testing with time-based duration
- Response time percentile analysis
- Requests per second measurement
- Error rate analysis

## 🚀 Quick Start

### Prerequisites

1. Ensure your server is running:

   ```bash
   npm run dev
   # or
   npm start
   ```

2. Server should be accessible at `http://localhost:9000`

### Running Tests

#### Run All Tests

```bash
# Navigate to the server directory
cd /Users/yuvrajmehta/Developer/GitHub\ Desktop/Portfolio/server

# Run complete test suite
node tests/testRunner.js
```

#### Run Specific Test Types

```bash
# API functionality tests only
node tests/testRunner.js api

# Individual endpoint tests
node tests/testRunner.js endpoints

# Quick load tests
node tests/testRunner.js load-quick

# Full load tests
node tests/testRunner.js load

# Stress tests (30 seconds)
node tests/testRunner.js stress
```

#### Direct Test Execution

```bash
# Run individual test files directly
node tests/apiTests.js
node tests/endpointTests.js
node tests/loadTests.js

# Load tests with options
node tests/loadTests.js --quick
node tests/loadTests.js --stress 60  # 60-second stress test
```

## 📊 Test Coverage

### API Endpoints Tested

#### Health Check

- `GET /health` - Server health and status

#### Admin Routes

- `GET /api/v1/admin/check-status` - Server status check
- `GET /api/v1/admin/update-status` - Scheduler status
- `POST /api/v1/admin/trigger-update` - Manual data update

#### Coding Platform Routes

- `GET /api/v1/codingPlatforms/gfg` - GeeksforGeeks data
- `GET /api/v1/codingPlatforms/codeforces` - Codeforces data
- `GET /api/v1/codingPlatforms/codechef` - CodeChef data
- `GET /api/v1/codingPlatforms/leetcode` - LeetCode data
- `GET /api/v1/codingPlatforms/all` - All platforms combined

#### Error Handling

- 404 responses for non-existent routes
- Invalid method handling
- Network error scenarios

## 🔧 Test Configuration

### Default Settings

```javascript
const BASE_URL = "http://localhost:9000";
const API_V1 = `${BASE_URL}/api/v1`;
```

### Load Test Parameters

- **Light Load:** 5 concurrent users, 50 requests
- **Medium Load:** 10 concurrent users, 100 requests
- **Stress Test:** 8-10 concurrent users for 15-30 seconds
- **Request Timeout:** 30 seconds for load tests, 10 seconds for functional tests

## 📈 Test Output

### Functional Tests

```
🚀 Starting API Tests for Portfolio Server
============================================================

📡 Checking server health...
✅ Server is running and healthy!

🔍 Running API endpoint tests...

Testing: Health endpoint returns 200 ... ✓ PASS (45ms)
Testing: Admin - Check status endpoint ... ✓ PASS (32ms)
Testing: GeeksforGeeks endpoint ... ✓ PASS (156ms)
...

============================================================
TEST SUMMARY
============================================================
Total Tests: 12
Passed: 12
Failed: 0
Success Rate: 100.0%
```

### Load Test Output

```
🚀 Health Endpoint - Light Load Test
📍 URL: http://localhost:9000/health
👥 Concurrency: 5
📊 Total Requests: 50
------------------------------------------------------------

📊 LOAD TEST RESULTS
============================================================
Total Requests: 50
Successful: 50
Failed: 0
Success Rate: 100.00%
Total Time: 2.45s
Requests/Second: 20.41

⏱️  Response Time Statistics:
  Average: 85.32ms
  Min: 23.45ms
  Max: 245.67ms
  50th percentile: 78.23ms
  95th percentile: 156.78ms
  99th percentile: 234.56ms
```

## 🛠️ Customization

### Adding New Tests

1. **Functional Tests:** Add new test cases in `apiTests.js`
2. **Endpoint Tests:** Add endpoints in `endpointTests.js`
3. **Load Tests:** Modify parameters in `loadTests.js`

### Custom Test Configuration

```javascript
// Example: Custom endpoint test
await tester.test("Custom endpoint test", async () => {
  const response = await axios.get(`${API_V1}/custom-endpoint`);
  assertStatus(response, 200);
  assertProperty(response.data, "expectedProperty");
});
```

### Environment Configuration

Create a `.env` file in the server directory:

```env
PORT=9000
TEST_TIMEOUT=30000
LOAD_TEST_CONCURRENCY=10
```

## 📝 Test Reports

Tests automatically generate reports in `tests/test-report.json`:

```json
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "duration": 15420,
  "results": [...],
  "summary": {
    "total": 12,
    "successful": 12,
    "failed": 0
  }
}
```

## 🚨 Troubleshooting

### Common Issues

1. **Server Not Running**

   ```
   ❌ Server is not accessible. Please ensure it's running.
   💡 Run: npm run dev or npm start
   ```

   **Solution:** Start the server before running tests

2. **Connection Timeout**

   ```
   ❌ Error: timeout of 30000ms exceeded
   ```

   **Solution:** Check server performance or increase timeout

3. **Port Already in Use**
   ```
   ❌ EADDRINUSE: address already in use :::9000
   ```
   **Solution:** Stop other processes using port 9000 or change the port

### Debugging Tips

1. **Increase Verbosity:** Run individual test files to see detailed output
2. **Check Server Logs:** Monitor server console for errors during testing
3. **Network Issues:** Verify firewall and network connectivity
4. **Performance Issues:** Use load tests to identify bottlenecks

## 🔍 Test Validation

### Response Validation

Tests validate:

- HTTP status codes
- Response structure and required properties
- Data types and formats
- Error handling and messages
- Performance metrics

### Success Criteria

- All functional tests pass (100% success rate)
- Load tests maintain >95% success rate
- Response times under acceptable thresholds
- No server crashes or memory leaks

## 📞 Support

For issues or questions about the testing suite:

1. Check server logs for detailed error information
2. Verify all dependencies are installed: `npm install`
3. Ensure server is properly configured and running
4. Review test output for specific failure details

## 🎯 Best Practices

1. **Run tests regularly** during development
2. **Test before deployment** to catch issues early
3. **Monitor performance** with load tests
4. **Keep tests updated** when adding new endpoints
5. **Review test reports** to identify trends and issues
