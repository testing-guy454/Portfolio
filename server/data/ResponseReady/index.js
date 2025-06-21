import { codechefData, saveCodechefData } from './codechefResponse.js'
import { codeforcesData, saveCodeforcesData } from './codeforcesResponse.js';
import { gfgData, saveGfgData } from './gfgResponse.js';
import { leetcodeData, saveLeetcodeData } from './leetCodeResponse.js';

const updateResponseData = async () => {
  await saveCodechefData();
  console.log('Codechef data updated successfully.');  
  await saveCodeforcesData();
  console.log('Codeforces data updated successfully.');
  await saveGfgData();
  console.log('GFG data updated successfully.');
  await saveLeetcodeData();
  console.log('LeetCode data updated successfully.');
}

export {
  codechefData,
  codeforcesData,
  gfgData,
  leetcodeData,
  updateResponseData
}