import { useEffect } from "react";
import { apiEndpoints } from "../../config/environment";

/**
 * Simple hook for fetching CodeChef data from API
 */
export const useCodeChefData = (
  fallbackData: any,
  updateCallback: (data: any) => void
) => {
  useEffect(() => {
    const fetchCodeChefData = async () => {
      try {
        const response = await fetch(apiEndpoints.codingPlatforms.codechef);

        if (!response.ok) throw new Error("API failed");

        const apiData = await response.json();

        const updatedCodeChef = {
          ...fallbackData,
          rating: apiData.contests.rating,
          problemsSolved: {
            total: apiData.problemsSolved.total,
            easy: apiData.problemsSolved.easy,
            medium: apiData.problemsSolved.medium,
            hard: apiData.problemsSolved.hard,
          },
          rank: `${apiData.achievements.stars} Coder (Rank: ${apiData.globalRanking})`,
          leetcodeAchievement: `${apiData.achievements.stars} rated coder with ${apiData.contests.attendedCount} contests attended`,
        };

        updateCallback(updatedCodeChef);
      } catch (err) {
        console.error("Failed to fetch CodeChef data:", err);
      }
    };

    fetchCodeChefData();
  }, [fallbackData, updateCallback]);
};
