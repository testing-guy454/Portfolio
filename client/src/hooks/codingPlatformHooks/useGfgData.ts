import { useEffect } from "react";

/**
 * Simple hook for fetching GeeksforGeeks data from API
 */
export const useGfGData = (
  fallbackData: any,
  updateCallback: (data: any) => void
) => {
  useEffect(() => {
    const fetchGfGData = async () => {
      try {
        const response = await fetch(
          "http://localhost:9000/api/v1/codingPlatforms/gfg"
        );

        if (!response.ok) throw new Error("API failed");

        const apiData = await response.json();

        const updatedGfG = {
          ...fallbackData,
          problemsSolved: {
            total: apiData.problemsSolved.total,
            easy: apiData.problemsSolved.easy,
            medium: apiData.problemsSolved.medium,
            hard: apiData.problemsSolved.hard,
          },
          rank: apiData.instituteRank
            ? `Institute Rank: ${apiData.instituteRank}`
            : fallbackData.rank,
          leetcodeAchievement: `Solved ${apiData.problemsSolved.total}+ problems with ${apiData.achievements.streaks.currentStreak} day current streak`,
        };

        updateCallback(updatedGfG);
      } catch (err) {
        console.error("Failed to fetch GfG data:", err);
      }
    };

    fetchGfGData();
  }, [fallbackData, updateCallback]);
};
