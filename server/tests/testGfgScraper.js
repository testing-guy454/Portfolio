/**
 * Test file for GeeksForGeeks (GFG) scraper - Personal Portfolio Version
 * 
 * Tests the GFG scraper with personal username for portfolio use.
 */

import { getGFGUserInfo } from '../utils/gfgScraper.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the data file to verify results
const dataPath = path.join(__dirname, '..', 'data', 'gfg.json');

// Personal username for portfolio
const MY_USERNAME = 'yuvrajmevbrx';

async function testScraper() {
  try {
    console.log('\n========== GEEKSFORGEEKS SCRAPER TEST (PERSONAL) ==========\n');

    console.log(`Testing scraper with personal username: ${MY_USERNAME}`);
    console.log(`-----------------------------------------------\n`);

    const result = await getGFGUserInfo(); // Uses default personal username

    if (result) {
      console.log('Successfully retrieved data:');
      console.log(`- Handle: ${result.handle}`);
      console.log(`- Name: ${result.profile.name}`);
      console.log(`- Rating: ${result.profile.rating}`);
      console.log(`- Contest Rating: ${result.contests.rating}`);
      console.log(`- Total problems solved: ${result.problemsSolved.total}`);
      console.log(`- Problems by difficulty:`);
      console.log(`  * Basic: ${result.problemsSolved.basic}`);
      console.log(`  * Easy: ${result.problemsSolved.easy}`);
      console.log(`  * Medium: ${result.problemsSolved.medium}`);
      console.log(`  * Hard: ${result.problemsSolved.hard}`);
      console.log(`- Current Badge: ${result.achievements.badges}`);
      console.log(`- Current Streak: ${result.achievements.streaks.current}`);
      console.log(`- Max Streak: ${result.achievements.streaks.max}`);
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
      console.error('\nERROR: Data file was not created!');
    }

  } catch (error) {
    console.error('Error testing scraper:', error);
  }
}

// Run the test
testScraper();
