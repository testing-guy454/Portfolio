#!/usr/bin/env node

import { execSync } from 'child_process';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

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

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function printHeader() {
  log('🎯 Portfolio Server Testing Suite Demo', colors.bold + colors.magenta);
  log('='.repeat(60), colors.magenta);
  log('This demo will show you how to use the testing suite', colors.cyan);
  log('for your Portfolio Server API endpoints.\n', colors.cyan);
}

function printAvailableCommands() {
  log('📋 Available Test Commands:', colors.bold + colors.blue);
  log('-'.repeat(40), colors.blue);

  const commands = [
    { cmd: 'npm test', desc: 'Run all test suites' },
    { cmd: 'npm run test:api', desc: 'Run API functionality tests' },
    { cmd: 'npm run test:endpoints', desc: 'Run individual endpoint tests' },
    { cmd: 'npm run test:load', desc: 'Run quick load tests' },
    { cmd: 'npm run test:load-full', desc: 'Run full load tests' },
    { cmd: 'npm run test:stress', desc: 'Run stress tests' }
  ];

  commands.forEach(({ cmd, desc }) => {
    log(`  ${colors.green}${cmd.padEnd(20)}${colors.reset} - ${desc}`);
  });

  log('\n📝 Direct Test Execution:', colors.bold + colors.blue);
  log('-'.repeat(40), colors.blue);

  const directCommands = [
    { cmd: 'node tests/testRunner.js', desc: 'Run all tests' },
    { cmd: 'node tests/apiTests.js', desc: 'API tests only' },
    { cmd: 'node tests/endpointTests.js', desc: 'Endpoint tests only' },
    { cmd: 'node tests/loadTests.js --quick', desc: 'Quick load tests' }
  ];

  directCommands.forEach(({ cmd, desc }) => {
    log(`  ${colors.green}${cmd.padEnd(35)}${colors.reset} - ${desc}`);
  });
}

function printServerStartInstructions() {
  log('\n🚀 Before Running Tests:', colors.bold + colors.yellow);
  log('-'.repeat(30), colors.yellow);
  log('1. Make sure your server is running:', colors.cyan);
  log(`   ${colors.green}npm run dev${colors.reset}    # Development mode`);
  log(`   ${colors.green}npm start${colors.reset}      # Production mode`);
  log('\n2. Server should be accessible at: http://localhost:9000', colors.cyan);
  log('3. Health check: http://localhost:9000/health', colors.cyan);
}

function checkServerStatus() {
  log('\n🔍 Checking Server Status...', colors.bold + colors.blue);

  try {
    const response = execSync('curl -s -o /dev/null -w "%{http_code}" http://localhost:9000/health',
      { encoding: 'utf8', timeout: 5000 });

    if (response.trim() === '200') {
      log('✅ Server is running and healthy!', colors.green);
      return true;
    } else {
      log(`❌ Server responded with status: ${response.trim()}`, colors.red);
      return false;
    }
  } catch (error) {
    log('❌ Server is not accessible', colors.red);
    return false;
  }
}

function runDemoTest() {
  log('\n🎬 Running Demo Test...', colors.bold + colors.magenta);
  log('This will run a quick API test to demonstrate the testing suite.\n', colors.cyan);

  try {
    const result = execSync('node tests/testRunner.js api',
      { cwd: dirname(__dirname), encoding: 'utf8', stdio: 'inherit' });
    log('\n✅ Demo test completed!', colors.green);
  } catch (error) {
    log('\n❌ Demo test failed. Make sure the server is running.', colors.red);
    log('💡 Start the server with: npm run dev', colors.yellow);
  }
}

function printTestStructure() {
  log('\n📁 Test File Structure:', colors.bold + colors.blue);
  log('-'.repeat(30), colors.blue);

  const structure = [
    { file: 'tests/testRunner.js', desc: 'Main test orchestrator' },
    { file: 'tests/apiTests.js', desc: 'API functionality tests' },
    { file: 'tests/endpointTests.js', desc: 'Individual endpoint tests' },
    { file: 'tests/loadTests.js', desc: 'Load and stress tests' },
    { file: 'tests/README.md', desc: 'Detailed documentation' }
  ];

  structure.forEach(({ file, desc }) => {
    log(`  ${colors.cyan}${file.padEnd(25)}${colors.reset} - ${desc}`);
  });
}

function printAPIEndpoints() {
  log('\n🌐 API Endpoints Being Tested:', colors.bold + colors.blue);
  log('-'.repeat(35), colors.blue);

  const endpoints = [
    { method: 'GET', path: '/health', desc: 'Server health check' },
    { method: 'GET', path: '/api/v1/admin/check-status', desc: 'Admin status' },
    { method: 'POST', path: '/api/v1/admin/trigger-update', desc: 'Manual update' },
    { method: 'GET', path: '/api/v1/codingPlatforms/gfg', desc: 'GeeksforGeeks data' },
    { method: 'GET', path: '/api/v1/codingPlatforms/codeforces', desc: 'Codeforces data' },
    { method: 'GET', path: '/api/v1/codingPlatforms/codechef', desc: 'CodeChef data' },
    { method: 'GET', path: '/api/v1/codingPlatforms/leetcode', desc: 'LeetCode data' },
    { method: 'GET', path: '/api/v1/codingPlatforms/all', desc: 'All platforms' }
  ];

  endpoints.forEach(({ method, path, desc }) => {
    const methodColor = method === 'GET' ? colors.green : colors.yellow;
    log(`  ${methodColor}${method.padEnd(6)}${colors.reset} ${colors.cyan}${path.padEnd(35)}${colors.reset} - ${desc}`);
  });
}

function main() {
  const args = process.argv.slice(2);

  printHeader();

  if (args.includes('--demo') || args.includes('-d')) {
    const serverRunning = checkServerStatus();
    if (serverRunning) {
      runDemoTest();
    } else {
      printServerStartInstructions();
    }
    return;
  }

  if (args.includes('--run') || args.includes('-r')) {
    log('🚀 Running all tests...', colors.bold + colors.green);
    try {
      execSync('npm test', { cwd: dirname(__dirname), stdio: 'inherit' });
    } catch (error) {
      log('❌ Tests failed. Check the output above.', colors.red);
    }
    return;
  }

  // Default: Show information
  printServerStartInstructions();
  printAvailableCommands();
  printTestStructure();
  printAPIEndpoints();

  log('\n🎯 Quick Start:', colors.bold + colors.green);
  log('-'.repeat(15), colors.green);
  log('1. Start the server: npm run dev', colors.cyan);
  log('2. Run demo test: node tests/demo.js --demo', colors.cyan);
  log('3. Run all tests: npm test', colors.cyan);
  log('4. Check detailed docs: cat tests/README.md', colors.cyan);

  log('\n📚 For detailed information, see: tests/README.md', colors.blue);
  log('🐛 For issues, check server logs and test output', colors.yellow);
}

// Show usage if help is requested
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  console.log(`
🎯 Portfolio Server Testing Suite Demo

Usage:
  node tests/demo.js [options]

Options:
  (no options)   Show testing suite information
  --demo, -d     Run a quick demo test
  --run, -r      Run all tests
  --help, -h     Show this help message

Examples:
  node tests/demo.js         # Show information
  node tests/demo.js --demo  # Run demo test
  node tests/demo.js --run   # Run all tests
`);
  process.exit(0);
}

main();
