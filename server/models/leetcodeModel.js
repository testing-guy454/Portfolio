import mongoose from "mongoose";

// Schema for contest history entries
const contestHistorySchema = new mongoose.Schema({
  title: String,
  date: Date,
  rating: Number,
  ranking: Number,
  problemsSolved: Number,
  totalProblems: Number
});

// Schema for problems solved statistics
const problemsSolvedSchema = new mongoose.Schema({
  total: { type: Number, default: 0 },
  easy: { type: Number, default: 0 },
  medium: { type: Number, default: 0 },
  hard: { type: Number, default: 0 }
});

// Schema for contest statistics
const contestSchema = new mongoose.Schema({
  rating: { type: Number, default: null },
  globalRanking: { type: Number, default: null },
  attendedContestsCount: { type: Number, default: 0 },
  topPercentage: { type: String, default: null },
  badge: { type: String, default: null }
});

// Main LeetCode schema
const leetcodeSchema = new mongoose.Schema(
  {
    handle: {
      type: String,
      required: true,
      unique: true,
    },
    profile: {
      ranking: { type: Number, default: null },
      reputation: { type: Number, default: null },
      starRating: { type: Number, default: null }
    },
    problemsSolved: problemsSolvedSchema,
    contest: contestSchema,
    contestHistory: [contestHistorySchema],
    lastUpdated: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

export const Leetcode = mongoose.model("Leetcode", leetcodeSchema);