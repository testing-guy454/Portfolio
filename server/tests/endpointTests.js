import axios from 'axios';

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

class EndpointTester {
  constructor() {
    this.testResults = [];
  }

  log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
  }

  async testEndpoint(name, url, method = 'GET', data = null, expectedStatus = 200) {
    this.log(`\n🔍 Testing ${name}`, colors.cyan);
    this.log(`📍 ${method} ${url}`, colors.blue);

    try {
      const startTime = Date.now();
      let response;

      switch (method.toUpperCase()) {
        case 'GET':
          response = await axios.get(url, { timeout: 10000 });
          break;
        case 'POST':
          response = await axios.post(url, data, { timeout: 10000 });
          break;
        case 'PUT':
          response = await axios.put(url, data, { timeout: 10000 });
          break;
        case 'DELETE':
          response = await axios.delete(url, { timeout: 10000 });
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      const duration = Date.now() - startTime;

      this.log(`✅ Status: ${response.status}`, colors.green);
      this.log(`⏱️  Response time: ${duration}ms`, colors.yellow);

      // Pretty print response data
      if (response.data) {
        this.log('📄 Response data:', colors.blue);
        console.log(JSON.stringify(response.data, null, 2));
      }

      this.testResults.push({
        name,
        url,
        method,
        status: response.status,
        success: response.status === expectedStatus,
        duration,
        data: response.data
      });

      if (response.status === expectedStatus) {
        this.log(`✅ Test passed!`, colors.green);
      } else {
        this.log(`❌ Expected status ${expectedStatus}, got ${response.status}`, colors.red);
      }

    } catch (error) {
      const errorMessage = error.response
        ? `${error.response.status}: ${error.response.statusText}`
        : error.message;

      this.log(`❌ Error: ${errorMessage}`, colors.red);

      if (error.response && error.response.data) {
        this.log('📄 Error response:', colors.red);
        console.log(JSON.stringify(error.response.data, null, 2));
      }

      this.testResults.push({
        name,
        url,
        method,
        success: false,
        error: errorMessage,
        status: error.response ? error.response.status : 'NETWORK_ERROR'
      });
    }

    this.log('-'.repeat(60), colors.blue);
  }

  async testAllEndpoints() {
    this.log('🚀 Individual Endpoint Testing', colors.bold + colors.blue);
    this.log('='.repeat(60), colors.blue);

    // Health Check
    await this.testEndpoint(
      'Health Check',
      `${BASE_URL}/health`
    );

    // Admin Routes
    await this.testEndpoint(
      'Admin - Check Status',
      `${API_V1}/admin/check-status`
    );

    await this.testEndpoint(
      'Admin - Update Status',
      `${API_V1}/admin/update-status`
    );

    await this.testEndpoint(
      'Admin - Trigger Update',
      `${API_V1}/admin/trigger-update`,
      'POST'
    );

    // Coding Platform Routes
    await this.testEndpoint(
      'GeeksforGeeks Data',
      `${API_V1}/codingPlatforms/gfg`
    );

    await this.testEndpoint(
      'Codeforces Data',
      `${API_V1}/codingPlatforms/codeforces`
    );

    await this.testEndpoint(
      'CodeChef Data',
      `${API_V1}/codingPlatforms/codechef`
    );

    await this.testEndpoint(
      'LeetCode Data',
      `${API_V1}/codingPlatforms/leetcode`
    );

    await this.testEndpoint(
      'All Platforms Data',
      `${API_V1}/codingPlatforms/all`
    );

    // Error Cases
    await this.testEndpoint(
      'Non-existent Route (Should 404)',
      `${API_V1}/nonexistent`,
      'GET',
      null,
      404
    );

    await this.testEndpoint(
      'Invalid Method (Should 404)',
      `${API_V1}/codingPlatforms/gfg`,
      'POST',
      {},
      404
    );

    this.printSummary();
  }

  printSummary() {
    this.log('\n📊 ENDPOINT TEST SUMMARY', colors.bold + colors.blue);
    this.log('='.repeat(60), colors.blue);

    const successful = this.testResults.filter(r => r.success).length;
    const total = this.testResults.length;

    this.log(`Total Endpoints Tested: ${total}`);
    this.log(`Successful: ${successful}`, colors.green);
    this.log(`Failed: ${total - successful}`, total - successful > 0 ? colors.red : colors.green);
    this.log(`Success Rate: ${((successful / total) * 100).toFixed(1)}%`);

    if (total - successful > 0) {
      this.log('\n❌ Failed Tests:', colors.red);
      this.testResults
        .filter(r => !r.success)
        .forEach(r => {
          this.log(`  - ${r.name}: ${r.error || `Status ${r.status}`}`, colors.red);
        });
    }

    // Performance summary
    const durations = this.testResults
      .filter(r => r.duration)
      .map(r => r.duration);

    if (durations.length > 0) {
      const avgDuration = durations.reduce((a, b) => a + b, 0) / durations.length;
      const maxDuration = Math.max(...durations);
      const minDuration = Math.min(...durations);

      this.log('\n⏱️  Performance Summary:', colors.yellow);
      this.log(`  Average Response Time: ${avgDuration.toFixed(0)}ms`);
      this.log(`  Fastest Response: ${minDuration}ms`);
      this.log(`  Slowest Response: ${maxDuration}ms`);
    }

    this.log('\n' + '='.repeat(60), colors.blue);
  }
}

// Interactive mode function
async function interactiveTest() {
  const tester = new EndpointTester();

  console.log('🎯 Interactive Endpoint Tester');
  console.log('Available commands:');
  console.log('  all - Test all endpoints');
  console.log('  health - Test health endpoint');
  console.log('  admin - Test admin endpoints');
  console.log('  platforms - Test coding platform endpoints');
  console.log('  custom <url> - Test custom URL');
  console.log('  exit - Exit the tester');

  // For demo purposes, we'll run all tests
  await tester.testAllEndpoints();
}

// Run tests if this file is executed directly
import { fileURLToPath } from 'url';
import path from 'path';

const mainFilename = fileURLToPath(import.meta.url);
const isMainModule = process.argv[1] === mainFilename || process.argv[1] === path.basename(mainFilename);

if (isMainModule) {
  const args = process.argv.slice(2);

  if (args.includes('--interactive') || args.includes('-i')) {
    interactiveTest().catch(error => {
      console.error('Interactive test failed:', error);
      process.exit(1);
    });
  } else {
    const tester = new EndpointTester();
    tester.testAllEndpoints().catch(error => {
      console.error('Endpoint tests failed:', error);
      process.exit(1);
    });
  }
}

export default EndpointTester;
