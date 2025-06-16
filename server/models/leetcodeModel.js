import mongoose from "mongoose";

const leetcodeSchema = new mongoose.Schema(
  {
    handle: {
      type: String,
      required: true,
      unique: true,
    },
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
);

export const Leetcode = mongoose.model("Leetcode", leetcodeSchema);