import mongoose from 'mongoose';

const codeforcesSchema = new mongoose.Schema(
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
  {
    timestamps: true,
  }
);

const Codeforces = mongoose.model('Codeforces', codeforcesSchema);