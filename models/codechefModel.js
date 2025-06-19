import mongoose from 'mongoose';

const contestSchema = new mongoose.Schema({
  name: String,
  rank: String,
  score: String
});

const problemsSolvedSchema = new mongoose.Schema({
  total: { type: Number, default: 0 },
  school: { type: Number, default: 0 },
  easy: { type: Number, default: 0 },
  medium: { type: Number, default: 0 },
  hard: { type: Number, default: 0 },
  challenge: { type: Number, default: 0 },
  extcontest: { type: Number, default: 0 }
});

const codechefSchema = new mongoose.Schema(
  {
    handle: {
      type: String,
      required: true,
      unique: true,
    },
    profile: {
      rating: {
        type: Number,
        default: 0,
      },
      stars: {
        type: String,
        default: null,
      },
      highestRating: {
        type: Number,
        default: 0,
      },
      globalRank: {
        type: String,
        default: null,
      },
      countryRank: {
        type: String,
        default: null,
      },
    },
    problemsSolved: problemsSolvedSchema,
    contestsCount: {
      type: Number,
      default: 0
    },
    contests: [contestSchema], // Keeping for backward compatibility but not required
    lastUpdated: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
  }
);

export const Codechef = mongoose.model('Codechef', codechefSchema);