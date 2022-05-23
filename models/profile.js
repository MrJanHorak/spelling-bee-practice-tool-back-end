import mongoose from "mongoose";

const practicedWords = new mongoose.Schema(
  {
  word: String,
  timesPracticed: {
    type: Number,
    default: 0,
  },
  timesCorrect: {
    type: Number,
    default: 0,
  },
  timesIncorrect: {
    type: Number,
    default: 0,
  },
  recordOfWrongs: [String],
}
);

const profileSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Profile" }],
  confidentWords: {
    type: Array,
  },
  pitch: {
    type: Number,
    default: 1,
  },
  rate: {
    type: Number,
    default: 1,
  },
  voice: {
    type: Number,
    default: 0,
  },
  practicedWords: [practicedWords],
  isAdmin: { type: Boolean, default: false },
});

const Profile = mongoose.model("Profile", profileSchema);

export { Profile };
