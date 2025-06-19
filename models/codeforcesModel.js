import mongoose from 'mongoose';

const codeforcesSchema = new mongoose.Schema(
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
      maxRating: {
        type: Number,
        default: 0,
      },
      rank: {
        type: String,
        default: 'unrated',
      },
      maxRank: {
        type: String,
        default: 'unrated',
      },
      avatar: {
        type: String,
        default: '',
      },
      firstName: {
        type: String,
        default: '',
      },
      lastName: {
        type: String,
        default: '',
      },
      country: {
        type: String,
        default: '',
      },
      organization: {
        type: String,
        default: '',
      },
      contribution: {
        type: Number,
        default: 0,
      }
    },
    problemsSolved: {
      total: {
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
    },
    contests: {
      contestsParticipated: {
        type: Number,
        default: 0,
      },
      bestRank: {
        type: Number,
        default: null,
      },
      worstRank: {
        type: Number,
        default: null,
      },
      avgRank: {
        type: Number,
        default: null,
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
  {
    timestamps: true,
  }
);

const Codeforces = mongoose.model('Codeforces', codeforcesSchema);

export default Codeforces;