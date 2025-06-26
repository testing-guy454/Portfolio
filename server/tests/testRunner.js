import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m',
  magenta: '\x1b[35m'
};

class TestSuite {
  constructor() {
    this.results = [];
    this.startTime = Date.now();
  }

  log(message, color = colors.reset) {
    console.log(`${color}${message}${colors.reset}`);
  }

  async runCommand(command, args = [], description = '') {
    return new Promise((resolve) => {
      this.log(`\n🚀 ${description}`, colors.bold + colors.blue);
      this.log(`📝 Command: ${command} ${args.join(' ')}`, colors.cyan);
      this.log('-'.repeat(60), colors.blue);

      const startTime = Date.now();
      const child = spawn(command, args, {
        stdio: 'inherit',
        cwd: dirname(__dirname)
      });

      child.on('close', (code) => {
        const duration = Date.now() - startTime;
        const result = {
          description,
          command: `${command} ${args.join(' ')}`,
          exitCode: code,
          duration,
          success: code === 0
        };

        this.results.push(result);

        if (code === 0) {
          this.log(`\n✅ ${description} completed successfully (${duration}ms)`, colors.green);
        } else {
          this.log(`\n❌ ${description} failed with exit code ${code} (${duration}ms)`, colors.red);
        }

        resolve(result);
      });

      child.on('error', (error) => {
        this.log(`\n❌ Failed to run ${description}: ${error.message}`, colors.red);
        resolve({
          description,
          command: `${command} ${args.join(' ')}`,
          exitCode: -1,
          error: error.message,
          success: false
        });
      });
    });
  }

  async checkServerStatus() {
    this.log('🔍 Checking server status...', colors.yellow);

    try {
      const response = await fetch('http://localhost:9000/health', {
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      });

      if (response.ok) {
        this.log('✅ Server is running and healthy!', colors.green);
        return true;
      } else {
        this.log(`❌ Server responded with status: ${response.status}`, colors.red);
        return false;
      }
    } catch (error) {
      this.log('❌ Server is not accessible. Please ensure it\'s running.', colors.red);
      this.log('💡 Run: npm run dev or npm start', colors.yellow);
      return false;
    }
  }

  async generateTestReport() {
    const reportData = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      results: this.results,
      summary: {
        total: this.results.length,
        successful: this.results.filter(r => r.success).length,
        failed: this.results.filter(r => !r.success).length
      }
    };

    const reportPath = join(__dirname, 'test-report.json');

    try {
      await fs.promises.writeFile(reportPath, JSON.stringify(reportData, null, 2));
      this.log(`📄 Test report saved to: ${reportPath}`, colors.blue);
    } catch (error) {
      this.log(`❌ Failed to save test report: ${error.message}`, colors.red);
    }

    return reportData;
  }

  printSummary() {
    const totalDuration = Date.now() - this.startTime;
    const successful = this.results.filter(r => r.success).length;
    const total = this.results.length;

    this.log('\n🏁 TEST SUITE SUMMARY', colors.bold + colors.magenta);
    this.log('='.repeat(60), colors.magenta);

    this.log(`Total Test Suites: ${total}`);
    this.log(`Successful: ${successful}`, colors.green);
    this.log(`Failed: ${total - successful}`, total - successful > 0 ? colors.red : colors.green);
    this.log(`Success Rate: ${((successful / total) * 100).toFixed(1)}%`);
    this.log(`Total Duration: ${(totalDuration / 1000).toFixed(1)}s`);

    if (total - successful > 0) {
      this.log('\n❌ Failed Test Suites:', colors.red);
      this.results
        .filter(r => !r.success)
        .forEach(r => {
          this.log(`  - ${r.description} (Exit Code: ${r.exitCode})`, colors.red);
        });
    }

    this.log('\n📊 Individual Test Duration:', colors.yellow);
    this.results.forEach(r => {
      const duration = r.duration ? `${(r.duration / 1000).toFixed(1)}s` : 'N/A';
      const status = r.success ? '✅' : '❌';
      this.log(`  ${status} ${r.description}: ${duration}`);
    });

    this.log('\n' + '='.repeat(60), colors.magenta);
  }

  async runAllTests() {
    this.log('🎯 PORTFOLIO SERVER TEST SUITE', colors.bold + colors.magenta);
    this.log('='.repeat(60), colors.magenta);
    this.log(`📅 Started at: ${new Date().toLocaleString()}`);

    // Check if server is running
    const serverRunning = await this.checkServerStatus();
    if (!serverRunning) {
      this.log('\n⚠️  Server is not running. Some tests may fail.', colors.yellow);
      this.log('💡 To start the server: npm run dev or npm start', colors.cyan);

      // Ask user if they want to continue
      this.log('\n🤔 Do you want to continue anyway? (Some tests will fail)', colors.yellow);
      // For automation, we'll continue but note the server status
    }

    // 1. API Functionality Tests
    await this.runCommand(
      'node',
      [join(__dirname, 'apiTests.js')],
      'API Functionality Tests'
    );

    // 2. Individual Endpoint Tests
    await this.runCommand(
      'node',
      [join(__dirname, 'endpointTests.js')],
      'Individual Endpoint Tests'
    );

    // 3. Load Tests (Quick mode to avoid overwhelming the server)
    await this.runCommand(
      'node',
      [join(__dirname, 'loadTests.js'), '--quick'],
      'Quick Load Tests'
    );

    // Generate and save report
    await this.generateTestReport();

    // Print summary
    this.printSummary();

    // Exit with appropriate code
    const hasFailures = this.results.some(r => !r.success);

    if (hasFailures) {
      this.log('\n❌ Some tests failed. Check the results above.', colors.red);
      process.exit(1);
    } else {
      this.log('\n🎉 All tests passed successfully!', colors.green);
      process.exit(0);
    }
  }

  async runSpecificTest(testType) {
    let testFile, description;

    switch (testType.toLowerCase()) {
      case 'api':
        testFile = 'apiTests.js';
        description = 'API Functionality Tests';
        break;
      case 'endpoints':
        testFile = 'endpointTests.js';
        description = 'Individual Endpoint Tests';
        break;
      case 'load':
        testFile = 'loadTests.js';
        description = 'Load Tests';
        break;
      case 'load-quick':
        testFile = 'loadTests.js';
        description = 'Quick Load Tests';
        await this.runCommand('node', [join(__dirname, testFile), '--quick'], description);
        return;
      case 'stress':
        testFile = 'loadTests.js';
        description = 'Stress Tests';
        await this.runCommand('node', [join(__dirname, testFile), '--stress', '30'], description);
        return;
      default:
        this.log(`❌ Unknown test type: ${testType}`, colors.red);
        this.log('Available test types: api, endpoints, load, load-quick, stress', colors.yellow);
        return;
    }

    await this.runCommand('node', [join(__dirname, testFile)], description);
  }
}

// Usage information
function printUsage() {
  console.log(`
🎯 Portfolio Server Test Runner

Usage:
  node testRunner.js [command] [options]

Commands:
  (no command)    Run all test suites
  api            Run API functionality tests only
  endpoints      Run individual endpoint tests only
  load           Run full load tests
  load-quick     Run quick load tests
  stress         Run stress tests
  help           Show this help message

Examples:
  node testRunner.js              # Run all tests
  node testRunner.js api          # Run API tests only
  node testRunner.js load-quick   # Run quick load tests
  node testRunner.js stress       # Run stress tests

Make sure your server is running before executing tests:
  npm run dev
  npm start
`);
}

// Main execution
import path from 'path';

const mainFilename = fileURLToPath(import.meta.url);
const isMainModule = process.argv[1] === mainFilename || process.argv[1] === path.basename(mainFilename);

if (isMainModule) {
  const args = process.argv.slice(2);
  const testSuite = new TestSuite();

  if (args.includes('help') || args.includes('--help') || args.includes('-h')) {
    printUsage();
    process.exit(0);
  }

  if (args.length === 0) {
    // Run all tests
    testSuite.runAllTests().catch(error => {
      console.error('Test suite failed:', error);
      process.exit(1);
    });
  } else {
    // Run specific test
    testSuite.runSpecificTest(args[0]).catch(error => {
      console.error('Test failed:', error);
      process.exit(1);
    });
  }
}

export default TestSuite;
