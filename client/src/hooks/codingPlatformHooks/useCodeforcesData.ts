import { useEffect } from "react";
import { apiEndpoints } from "../../config/environment";

/**
 * Simple hook for fetching Codeforces data from API
 */
export const useCodeforcesData = (
  fallbackData: any,
  updateCallback: (data: any) => void
) => {
  useEffect(() => {
    const fetchCodeforcesData = async () => {
      try {
        const response = await fetch(apiEndpoints.codingPlatforms.codeforces);

        if (!response.ok) throw new Error("API failed");

        const apiData = await response.json();

        // Determine rank based on rating
        const getRank = (rating: number) => {
          if (rating >= 1900) return "Candidate Master";
          if (rating >= 1600) return "Expert";
          if (rating >= 1400) return "Specialist";
          if (rating >= 1200) return "Pupil";
          return "Newbie";
        };

        const updatedCodeforces = {
          ...fallbackData,
          rating: apiData.contests.rating,
          problemsSolved: {
            total: apiData.problemsSolved.total,
            easy: apiData.problemsSolved.easy,
            medium: apiData.problemsSolved.medium,
            hard: apiData.problemsSolved.hard,
          },
          rank: getRank(apiData.contests.rating),
          leetcodeAchievement: `${getRank(apiData.contests.rating)} with ${
            apiData.contests.attendedCount
          } contests and best rank ${apiData.contests.bestRank}`,
        };

        updateCallback(updatedCodeforces);
      } catch (err) {
        console.error("Failed to fetch Codeforces data:", err);
      }
    };

    fetchCodeforcesData();
  }, [fallbackData, updateCallback]);
};
