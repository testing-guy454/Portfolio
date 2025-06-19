# Test Suite for Portfolio Server

This directory contains all test files for the portfolio server application.

## Available Tests

### Individual Scraper Tests

- `testLeetcodeScraper.js` - Tests LeetCode data scraping functionality
- `testCodeforcesScraper.js` - Tests Codeforces data scraping functionality
- `testCodechefScraper.js` - Tests CodeChef data scraping functionality
- `testGfgScraper.js` - Tests GeeksForGeeks data scraping functionality

### Service Tests

- `testScheduler.js` - Tests the scheduler service for automated data updates

### Test Runner

- `runAllTests.js` - Runs all tests sequentially and provides a summary

## Running Tests

### Run All Tests

```bash
npm test
# or
node tests/runAllTests.js
```

### Run Individual Tests

```bash
# Test scheduler functionality
npm run test:scheduler

# Test a specific scraper
node tests/testLeetcodeScraper.js
node tests/testCodeforcesScraper.js
node tests/testCodechefScraper.js
node tests/testGfgScraper.js
```

## Test Features

- ✅ Comprehensive coverage of all scrapers
- ✅ Scheduler service testing
- ✅ Data file verification
- ✅ Error handling validation
- ✅ Automated test runner with summary
- ✅ Exit codes for CI/CD integration

## Expected Output

All tests should pass and create/update corresponding JSON files in the `data/` directory:

- `leetcode.json`
- `codeforces.json`
- `codechef.json`
- `gfg.json`

## Test Configuration

Tests are configured for personal portfolio use with hardcoded usernames:

- LeetCode: `mythical-UV`
- Codeforces: `yuvraj.mehta532`
- CodeChef: `quick_unity_53`
- GeeksForGeeks: `yuvrajmevbrx`

## CI/CD Integration

The test runner returns appropriate exit codes:

- `0` - All tests passed
- `1` - One or more tests failed

This makes it suitable for integration with CI/CD pipelines.
