import axios from 'axios';
import { performance } from 'perf_hooks';

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

class LoadTester {
  constructor() {
    this.results = {
      total: 0,
      successful: 0,
      failed: 0,
      responseTimes: [],
      errors: {}
    };
  }

  log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
  }

  async makeRequest(url, method = 'GET') {
    const startTime = performance.now();

    try {
      let response;
      switch (method.toUpperCase()) {
        case 'GET':
          response = await axios.get(url, { timeout: 30000 });
          break;
        case 'POST':
          response = await axios.post(url, {}, { timeout: 30000 });
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      const endTime = performance.now();
      const responseTime = endTime - startTime;

      this.results.total++;
      this.results.successful++;
      this.results.responseTimes.push(responseTime);

      return { success: true, responseTime, status: response.status };

    } catch (error) {
      const endTime = performance.now();
      const responseTime = endTime - startTime;

      this.results.total++;
      this.results.failed++;
      this.results.responseTimes.push(responseTime);

      const errorKey = error.response
        ? `${error.response.status}`
        : error.code || 'UNKNOWN';

      this.results.errors[errorKey] = (this.results.errors[errorKey] || 0) + 1;

      return {
        success: false,
        responseTime,
        error: errorKey,
        status: error.response ? error.response.status : 'NETWORK_ERROR'
      };
    }
  }

  async concurrentTest(url, concurrency, totalRequests, description) {
    this.log(`\n🚀 ${description}`, colors.bold + colors.blue);
    this.log(`📍 URL: ${url}`, colors.blue);
    this.log(`👥 Concurrency: ${concurrency}`, colors.cyan);
    this.log(`📊 Total Requests: ${totalRequests}`, colors.cyan);
    this.log('-'.repeat(60), colors.blue);

    // Reset results
    this.results = {
      total: 0,
      successful: 0,
      failed: 0,
      responseTimes: [],
      errors: {}
    };

    const startTime = performance.now();
    let completed = 0;

    // Progress reporting
    const progressInterval = setInterval(() => {
      const progress = ((completed / totalRequests) * 100).toFixed(1);
      process.stdout.write(`\r⏳ Progress: ${progress}% (${completed}/${totalRequests})`);
    }, 500);

    // Create batches of concurrent requests
    const batchSize = concurrency;
    const batches = Math.ceil(totalRequests / batchSize);

    for (let batch = 0; batch < batches; batch++) {
      const requestsInBatch = Math.min(batchSize, totalRequests - (batch * batchSize));
      const requests = Array(requestsInBatch).fill().map(() => this.makeRequest(url));

      await Promise.all(requests);
      completed += requestsInBatch;
    }

    clearInterval(progressInterval);
    process.stdout.write('\r' + ' '.repeat(50) + '\r'); // Clear progress line

    const endTime = performance.now();
    const totalTime = (endTime - startTime) / 1000; // Convert to seconds

    this.printResults(totalTime);
  }

  async stressTest(url, duration = 30, concurrency = 10, description) {
    this.log(`\n🔥 ${description}`, colors.bold + colors.red);
    this.log(`📍 URL: ${url}`, colors.blue);
    this.log(`👥 Concurrency: ${concurrency}`, colors.cyan);
    this.log(`⏰ Duration: ${duration} seconds`, colors.cyan);
    this.log('-'.repeat(60), colors.blue);

    // Reset results
    this.results = {
      total: 0,
      successful: 0,
      failed: 0,
      responseTimes: [],
      errors: {}
    };

    const startTime = performance.now();
    const endTime = startTime + (duration * 1000);

    let running = true;

    // Progress reporting
    const progressInterval = setInterval(() => {
      const elapsed = (performance.now() - startTime) / 1000;
      const remaining = Math.max(0, duration - elapsed);
      const rps = this.results.total / elapsed;
      process.stdout.write(`\r⏳ Time remaining: ${remaining.toFixed(1)}s | RPS: ${rps.toFixed(1)} | Requests: ${this.results.total}`);
    }, 1000);

    // Create concurrent request loops
    const workers = Array(concurrency).fill().map(async () => {
      while (running && performance.now() < endTime) {
        await this.makeRequest(url);
      }
    });

    // Wait for duration to complete
    setTimeout(() => {
      running = false;
    }, duration * 1000);

    await Promise.all(workers);

    clearInterval(progressInterval);
    process.stdout.write('\r' + ' '.repeat(80) + '\r'); // Clear progress line

    const totalTime = (performance.now() - startTime) / 1000;
    this.printResults(totalTime);
  }

  printResults(totalTime) {
    this.log('📊 LOAD TEST RESULTS', colors.bold + colors.green);
    this.log('='.repeat(60), colors.green);

    // Basic stats
    this.log(`Total Requests: ${this.results.total}`);
    this.log(`Successful: ${this.results.successful}`, colors.green);
    this.log(`Failed: ${this.results.failed}`, this.results.failed > 0 ? colors.red : colors.green);
    this.log(`Success Rate: ${((this.results.successful / this.results.total) * 100).toFixed(2)}%`);
    this.log(`Total Time: ${totalTime.toFixed(2)}s`);
    this.log(`Requests/Second: ${(this.results.total / totalTime).toFixed(2)}`);

    // Response time stats
    if (this.results.responseTimes.length > 0) {
      const sorted = this.results.responseTimes.sort((a, b) => a - b);
      const avg = sorted.reduce((a, b) => a + b, 0) / sorted.length;
      const min = sorted[0];
      const max = sorted[sorted.length - 1];
      const p50 = sorted[Math.floor(sorted.length * 0.5)];
      const p95 = sorted[Math.floor(sorted.length * 0.95)];
      const p99 = sorted[Math.floor(sorted.length * 0.99)];

      this.log('\n⏱️  Response Time Statistics:', colors.yellow);
      this.log(`  Average: ${avg.toFixed(2)}ms`);
      this.log(`  Min: ${min.toFixed(2)}ms`);
      this.log(`  Max: ${max.toFixed(2)}ms`);
      this.log(`  50th percentile: ${p50.toFixed(2)}ms`);
      this.log(`  95th percentile: ${p95.toFixed(2)}ms`);
      this.log(`  99th percentile: ${p99.toFixed(2)}ms`);
    }

    // Error breakdown
    if (Object.keys(this.results.errors).length > 0) {
      this.log('\n❌ Error Breakdown:', colors.red);
      Object.entries(this.results.errors).forEach(([error, count]) => {
        this.log(`  ${error}: ${count} occurrences`);
      });
    }

    this.log('\n' + '='.repeat(60), colors.green);
  }

  async runAllLoadTests() {
    this.log('🔥 LOAD TESTING SUITE', colors.bold + colors.red);
    this.log('='.repeat(60), colors.red);

    // Test 1: Health endpoint - Light load
    await this.concurrentTest(
      `${BASE_URL}/health`,
      5,
      50,
      'Health Endpoint - Light Load Test'
    );

    // Test 2: Health endpoint - Medium load
    await this.concurrentTest(
      `${BASE_URL}/health`,
      10,
      100,
      'Health Endpoint - Medium Load Test'
    );

    // Test 3: Coding platforms endpoint - Light load
    await this.concurrentTest(
      `${API_V1}/codingPlatforms/all`,
      3,
      30,
      'All Platforms Endpoint - Light Load Test'
    );

    // Test 4: Admin trigger update - Single request (to avoid overwhelming)
    await this.concurrentTest(
      `${API_V1}/admin/check-status`,
      2,
      10,
      'Admin Check Status - Light Load Test'
    );

    // Test 5: Stress test on health endpoint
    await this.stressTest(
      `${BASE_URL}/health`,
      15,
      8,
      'Health Endpoint - 15 Second Stress Test'
    );

    this.log('\n🎉 All load tests completed!', colors.bold + colors.green);
  }
}

// Run load tests if this file is executed directly
import { fileURLToPath } from 'url';
import path from 'path';

const mainFilename = fileURLToPath(import.meta.url);
const isMainModule = process.argv[1] === mainFilename || process.argv[1] === path.basename(mainFilename);

if (isMainModule) {
  const args = process.argv.slice(2);
  const tester = new LoadTester();

  if (args.includes('--quick') || args.includes('-q')) {
    // Quick test mode
    tester.log('⚡ Quick Load Test Mode', colors.bold + colors.yellow);
    tester.concurrentTest(`${BASE_URL}/health`, 5, 25, 'Quick Health Check Test').catch(error => {
      console.error('Quick test failed:', error);
      process.exit(1);
    });
  } else if (args.includes('--stress')) {
    // Stress test mode
    const duration = parseInt(args[args.indexOf('--stress') + 1]) || 30;
    tester.stressTest(`${BASE_URL}/health`, duration, 10, `${duration}s Stress Test`).catch(error => {
      console.error('Stress test failed:', error);
      process.exit(1);
    });
  } else {
    // Full test suite
    tester.runAllLoadTests().catch(error => {
      console.error('Load tests failed:', error);
      process.exit(1);
    });
  }
}

export default LoadTester;
