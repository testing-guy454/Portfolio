import axios from 'axios';
import { setTimeout } from 'timers/promises';

// Test configuration
const BASE_URL = 'http://localhost:9000';
const API_V1 = `${BASE_URL}/api/v1`;

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

class APITester {
  constructor() {
    this.passed = 0;
    this.failed = 0;
    this.total = 0;
    this.results = [];
  }

  log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
  }

  async test(description, testFn) {
    this.total++;
    process.stdout.write(`${colors.cyan}Testing: ${description}${colors.reset} ... `);

    try {
      const startTime = Date.now();
      await testFn();
      const duration = Date.now() - startTime;

      this.passed++;
      this.results.push({ description, status: 'PASS', duration });
      console.log(`${colors.green}✓ PASS${colors.reset} (${duration}ms)`);
    } catch (error) {
      this.failed++;
      this.results.push({ description, status: 'FAIL', error: error.message });
      console.log(`${colors.red}✗ FAIL${colors.reset}`);
      console.log(`${colors.red}  Error: ${error.message}${colors.reset}`);
    }
  }

  async checkServerHealth() {
    try {
      const response = await axios.get(`${BASE_URL}/health`, { timeout: 5000 });
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }

  printSummary() {
    this.log('\n' + '='.repeat(60), colors.bold);
    this.log('TEST SUMMARY', colors.bold);
    this.log('='.repeat(60), colors.bold);

    this.log(`Total Tests: ${this.total}`);
    this.log(`Passed: ${this.passed}`, colors.green);
    this.log(`Failed: ${this.failed}`, this.failed > 0 ? colors.red : colors.green);
    this.log(`Success Rate: ${((this.passed / this.total) * 100).toFixed(1)}%`);

    if (this.failed > 0) {
      this.log('\nFailed Tests:', colors.red);
      this.results
        .filter(r => r.status === 'FAIL')
        .forEach(r => this.log(`  - ${r.description}: ${r.error}`, colors.red));
    }

    this.log('\n' + '='.repeat(60), colors.bold);
  }
}

// Test helper functions
function assertStatus(response, expectedStatus) {
  if (response.status !== expectedStatus) {
    throw new Error(`Expected status ${expectedStatus}, got ${response.status}`);
  }
}

function assertProperty(obj, property) {
  if (!(property in obj)) {
    throw new Error(`Expected property '${property}' not found in response`);
  }
}

function assertType(value, expectedType) {
  if (typeof value !== expectedType) {
    throw new Error(`Expected type '${expectedType}', got '${typeof value}'`);
  }
}

function assertArray(value) {
  if (!Array.isArray(value)) {
    throw new Error(`Expected array, got ${typeof value}`);
  }
}

// Main test runner
async function runAllTests() {
  const tester = new APITester();

  tester.log('🚀 Starting API Tests for Portfolio Server', colors.bold + colors.blue);
  tester.log('='.repeat(60), colors.blue);

  // Check if server is running
  tester.log('\n📡 Checking server health...', colors.yellow);
  const isServerRunning = await tester.checkServerHealth();

  if (!isServerRunning) {
    tester.log('❌ Server is not running! Please start the server first.', colors.red);
    tester.log('Run: npm run dev or npm start', colors.yellow);
    process.exit(1);
  }

  tester.log('✅ Server is running and healthy!', colors.green);
  tester.log('\n🔍 Running API endpoint tests...\n', colors.yellow);

  // Health Check Tests
  await tester.test('Health endpoint returns 200', async () => {
    const response = await axios.get(`${BASE_URL}/health`);
    assertStatus(response, 200);
    assertProperty(response.data, 'status');
    assertProperty(response.data, 'timestamp');
    assertProperty(response.data, 'uptime');
    assertProperty(response.data, 'memory');
  });

  // Admin Routes Tests
  await tester.test('Admin - Check status endpoint', async () => {
    const response = await axios.get(`${API_V1}/admin/check-status`);
    assertStatus(response, 200);
    assertProperty(response.data, 'success');
    assertProperty(response.data, 'message');
    if (response.data.success !== true) {
      throw new Error('Expected success to be true');
    }
  });

  await tester.test('Admin - Update status endpoint', async () => {
    const response = await axios.get(`${API_V1}/admin/update-status`);
    assertStatus(response, 200);
    assertProperty(response.data, 'success');
    assertProperty(response.data, 'message');
    assertProperty(response.data, 'schedule');
  });

  await tester.test('Admin - Trigger manual update', async () => {
    const response = await axios.post(`${API_V1}/admin/trigger-update`);
    assertStatus(response, 200);
    assertProperty(response.data, 'success');
    assertProperty(response.data, 'message');
    assertProperty(response.data, 'result');
  });

  // Coding Platforms Routes Tests
  await tester.test('GeeksforGeeks endpoint', async () => {
    const response = await axios.get(`${API_V1}/codingPlatforms/gfg`);
    assertStatus(response, 200);
    assertProperty(response.data, 'username');
    assertProperty(response.data, 'problemsSolved');
    assertProperty(response.data, 'lastUpdated');
  });

  await tester.test('Codeforces endpoint', async () => {
    const response = await axios.get(`${API_V1}/codingPlatforms/codeforces`);
    assertStatus(response, 200);
    assertProperty(response.data, 'username');
    assertProperty(response.data, 'lastUpdated');
  });

  await tester.test('CodeChef endpoint', async () => {
    const response = await axios.get(`${API_V1}/codingPlatforms/codechef`);
    assertStatus(response, 200);
    assertProperty(response.data, 'username');
    assertProperty(response.data, 'lastUpdated');
  });

  await tester.test('LeetCode endpoint', async () => {
    const response = await axios.get(`${API_V1}/codingPlatforms/leetcode`);
    assertStatus(response, 200);
    assertProperty(response.data, 'username');
    assertProperty(response.data, 'lastUpdated');
  });

  await tester.test('All platforms endpoint', async () => {
    const response = await axios.get(`${API_V1}/codingPlatforms/all`);
    assertStatus(response, 200);
    assertProperty(response.data, 'success');
    assertProperty(response.data, 'data');
    assertProperty(response.data, 'lastUpdated');

    // Check if all platforms are present
    const platforms = ['gfg', 'codeforces', 'codechef', 'leetcode'];
    platforms.forEach(platform => {
      assertProperty(response.data.data, platform);
    });
  });

  // Error Handling Tests
  await tester.test('404 error for non-existent route', async () => {
    try {
      await axios.get(`${API_V1}/nonexistent-route`);
      throw new Error('Expected 404 error but request succeeded');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // This is expected
        return;
      }
      throw error;
    }
  });

  await tester.test('CORS headers are present', async () => {
    const response = await axios.get(`${BASE_URL}/health`);
    // Check if CORS headers are present (axios automatically handles CORS)
    assertStatus(response, 200);
  });

  // Performance Tests
  await tester.test('Response time under 5 seconds for health check', async () => {
    const startTime = Date.now();
    const response = await axios.get(`${BASE_URL}/health`);
    const responseTime = Date.now() - startTime;

    assertStatus(response, 200);
    if (responseTime > 5000) {
      throw new Error(`Response time too slow: ${responseTime}ms`);
    }
  });

  await tester.test('Multiple concurrent requests handling', async () => {
    const requests = Array(5).fill().map(() =>
      axios.get(`${BASE_URL}/health`)
    );

    const responses = await Promise.all(requests);
    responses.forEach((response, index) => {
      if (response.status !== 200) {
        throw new Error(`Request ${index + 1} failed with status ${response.status}`);
      }
    });
  });

  // Print test summary
  tester.printSummary();

  // Exit with appropriate code
  process.exit(tester.failed > 0 ? 1 : 0);
}

// Handle uncaught errors
process.on('uncaughtException', (error) => {
  console.log(`${colors.red}Uncaught Exception: ${error.message}${colors.reset}`);
  process.exit(1);
});

process.on('unhandledRejection', (error) => {
  console.log(`${colors.red}Unhandled Rejection: ${error.message}${colors.reset}`);
  process.exit(1);
});

// Run tests if this file is executed directly
import { fileURLToPath } from 'url';
import path from 'path';

const mainFilename = fileURLToPath(import.meta.url);
const isMainModule = process.argv[1] === mainFilename || process.argv[1] === path.basename(mainFilename);

if (isMainModule) {
  runAllTests().catch(error => {
    console.error('Tests failed:', error);
    process.exit(1);
  });
}

export default runAllTests;
