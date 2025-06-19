/**
 * Test file for CodeChef scraper - Personal Portfolio Version
 */

import { getCodechefUserInfo } from '../utils/codechefScraper.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the data file to verify results
const dataPath = path.join(__dirname, '..', 'data', 'codechef.json');

// Personal username for portfolio
const MY_USERNAME = 'quick_unity_53';

async function testScraper() {
  try {
    console.log('\n========== CODECHEF SCRAPER TEST (PERSONAL) ==========\n');

    console.log(`Testing scraper with personal username: ${MY_USERNAME}`);
    console.log(`-----------------------------------------------\n`);

    const result = await getCodechefUserInfo(); // Uses default personal username

    if (result) {
      console.log('Successfully retrieved data:');
      console.log(`- Handle: ${result.handle}`);
      console.log(`- Current Rating: ${result.profile.rating}`);
      console.log(`- Max Rating: ${result.profile.maxRating}`);
      console.log(`- Stars: ${result.achievements.stars || 'N/A'}`);
      console.log(`- Global Ranking: ${result.profile.globalRanking || 'N/A'}`);
      console.log(`- Problems solved:`);
      console.log(`  * Total: ${result.problemsSolved.total}`);
      console.log(`  * Basic: ${result.problemsSolved.basic}`);
      console.log(`  * Easy: ${result.problemsSolved.easy}`);
      console.log(`  * Medium: ${result.problemsSolved.medium}`);
      console.log(`  * Hard: ${result.problemsSolved.hard}`);
      console.log(`- Contests attended: ${result.contests.attendedCount}`);
      console.log(`- Achievements: ${result.achievements.badges || 'N/A'}`);
    } else {
      console.error(`Failed to retrieve data for ${MY_USERNAME}`);
    }

    // Verify that the data file exists and has content
    if (fs.existsSync(dataPath)) {
      const fileContent = fs.readFileSync(dataPath, 'utf8');
      const parsedData = JSON.parse(fileContent);

      console.log('\n-----------------------------------------------');
      console.log('Data file verification:');
      console.log(`- File exists at: ${dataPath}`);
      console.log(`- Last updated: ${parsedData.lastUpdated}`);
      console.log(`- User handle: ${parsedData.handle}`);
      console.log('-----------------------------------------------\n');
    } else {
      console.error(`Data file not found at: ${dataPath}`);
    }

  } catch (error) {
    console.error('Error testing scraper:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

// Run the test
testScraper();
