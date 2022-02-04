import mongoose from "mongoose"

const pwordSchema = new mongoose.Schema(
  {
  word: String,
  definition: String,
  sampleSentance: String,
  altPronunciations: String,
  wordOrigin: String,
  gradeLevel: Number, 
});

const Word = mongoose.model("Word", wordSchema);

export { Word };
