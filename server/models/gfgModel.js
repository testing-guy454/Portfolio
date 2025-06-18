import mongoose from "mongoose";

const gfgSchema = new mongoose.Schema(
  {
    handle: {
      type: String,
      required: true,
      unique: true,
    },
    profile: {
      name: {
        type: String,
        default: "",
      },
      codingScore: {
        type: Number,
        default: 0,
      },
      contestRating: {
        type: Number,
        default: 0,
      },
      instituteRank: {
        type: String,
        default: "",
      },
      totalProblems: {
        type: Number,
        default: 0,
      },
      currentStreak: {
        type: Number,
        default: 0,
      },
      maxStreak: {
        type: Number,
        default: 0,
      },
      yearlySubmissions: {
        type: Number,
        default: 0,
      }
    },
    problemsSolved: {
      total: {
        type: Number,
        default: 0,
      },
      byDifficulty: {
        basic: {
          type: Number,
          default: 0,
        },
        easy: {
          type: Number,
          default: 0,
        },
        medium: {
          type: Number,
          default: 0,
        },
        hard: {
          type: Number,
          default: 0,
        }
      }
    },
    badges: {
      current: {
        type: String,
        default: "Contributor",
      },
      totalScore: {
        type: Number,
        default: 0,
      }
    },
    // Legacy fields for backward compatibility
    rating: {
      type: Number,
      default: null,
    },
    maxRating: {
      type: Number,
      default: null,
    },
    rank: {
      type: String,
      default: null,
    },
    maxRank: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
)

export const GFG = mongoose.model("GFG", gfgSchema);