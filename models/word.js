import mongoose from "mongoose"

const wordSchema = new mongoose.Schema(
  {
  word: String,
  definition: String,
  partOfSpeech: String,
  sampleSentance: String,
  altPronunciations: String,
  wordOrigin: String,
  gradeLevel: Number, 
});

const Word = mongoose.model("Word", wordSchema);

export { Word };
