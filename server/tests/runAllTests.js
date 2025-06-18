#!/usr/bin/env node

/**
 * Test Runner for Portfolio Server
 * Runs all test files in the tests directory
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all test files
const testFiles = fs.readdirSync(__dirname)
  .filter(file => file.startsWith('test') && file.endsWith('.js') && file !== 'runAllTests.js')
  .sort();

console.log('🧪 Portfolio Server Test Suite');
console.log('==============================');
console.log(`Found ${testFiles.length} test files:\n`);

let passedTests = 0;
let failedTests = 0;

// Function to run a single test
const runTest = (testFile) => {
  return new Promise((resolve) => {
    console.log(`📋 Running: ${testFile}`);
    console.log('─'.repeat(50));

    const child = spawn('node', [testFile], {
      cwd: __dirname,
      stdio: 'inherit'
    });

    child.on('close', (code) => {
      if (code === 0) {
        console.log(`✅ ${testFile} - PASSED\n`);
        passedTests++;
      } else {
        console.log(`❌ ${testFile} - FAILED (exit code: ${code})\n`);
        failedTests++;
      }
      resolve();
    });

    child.on('error', (error) => {
      console.log(`❌ ${testFile} - ERROR: ${error.message}\n`);
      failedTests++;
      resolve();
    });
  });
};

// Run all tests sequentially
const runAllTests = async () => {
  const startTime = Date.now();

  for (const testFile of testFiles) {
    await runTest(testFile);
  }

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  console.log('🏁 Test Summary');
  console.log('===============');
  console.log(`✅ Passed: ${passedTests}`);
  console.log(`❌ Failed: ${failedTests}`);
  console.log(`⏱️  Duration: ${duration}s`);

  if (failedTests === 0) {
    console.log('\n🎉 All tests passed!');
    process.exit(0);
  } else {
    console.log('\n💥 Some tests failed!');
    process.exit(1);
  }
};

// Run the test suite
runAllTests().catch(error => {
  console.error('❌ Test runner error:', error);
  process.exit(1);
});
