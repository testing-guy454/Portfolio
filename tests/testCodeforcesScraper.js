/**
 * Test file for Codeforces scraper - Personal Portfolio Version
 */

import { getCodeforcesUserInfo } from '../utils/codeforcesScraper.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the data file to verify results
const dataPath = path.join(__dirname, '..', 'data', 'codeforces.json');

// Personal username for portfolio
const MY_USERNAME = 'yuvraj.mehta532';

async function testScraper() {
  try {
    console.log('\n========== CODEFORCES SCRAPER TEST (PERSONAL) ==========\n');

    console.log(`Testing scraper with personal handle: ${MY_USERNAME}`);
    console.log(`-----------------------------------------------\n`);

    const result = await getCodeforcesUserInfo(); // Uses default personal username

    if (result) {
      console.log('Successfully retrieved data:');
      console.log(`- Handle: ${result.handle}`);
      console.log(`- Name: ${result.profile.name || 'N/A'}`);
      console.log(`- Current Rating: ${result.profile.rating}`);
      console.log(`- Max Rating: ${result.profile.maxRating}`);
      console.log(`- Current Rank: ${result.profile.rank}`);
      console.log(`- Country: ${result.profile.country || 'N/A'}`);
      console.log(`- Organization: ${result.profile.organization || 'N/A'}`);
      console.log(`- Contribution: ${result.profile.contribution}`);
      console.log(`- Problems solved:`);
      console.log(`  * Total: ${result.problemsSolved.total}`);
      console.log(`  * Easy (≤1200): ${result.problemsSolved.easy}`);
      console.log(`  * Medium (1201-1800): ${result.problemsSolved.medium}`);
      console.log(`  * Hard (>1800): ${result.problemsSolved.hard}`);
      console.log(`  * Unrated: ${result.problemsSolved.unrated || 0}`);
      console.log(`- Contest Statistics:`);
      console.log(`  * Contests attended: ${result.contests.attendedCount}`);
      console.log(`  * Contest rating: ${result.contests.rating}`);
      console.log(`  * Best rank: ${result.contests.bestRank || 'N/A'}`);
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
