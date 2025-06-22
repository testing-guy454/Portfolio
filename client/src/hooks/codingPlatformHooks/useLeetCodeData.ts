import { useEffect } from "react";
import { apiEndpoints } from "../../config/environment";

/**
 * Simple hook for fetching LeetCode data from API
 */
export const useLeetCodeData = (
  fallbackData: any,
  updateCallback: (data: any) => void
) => {
  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        const response = await fetch(apiEndpoints.codingPlatforms.leetcode);

        if (!response.ok) throw new Error("API failed");

        const apiData = await response.json();

        const updatedLeetCode = {
          ...fallbackData,
          rating: apiData.contests.rating,
          topPercentage: parseFloat(apiData.contests.topPercentage),
          problemsSolved: apiData.problemsSolved,
          rank: `Top ${apiData.contests.topPercentage}%`,
          leetcodeAchievement: `Solved ${apiData.problemsSolved.total}+ problems across all difficulty levels`,
        };

        updateCallback(updatedLeetCode);
      } catch (err) {
        console.error("Failed to fetch LeetCode data:", err);
      }
    };

    fetchLeetCodeData();
  }, [fallbackData, updateCallback]);
};
