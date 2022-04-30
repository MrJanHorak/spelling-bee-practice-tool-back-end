import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.find({})
    .then((profiles) => res.json(profiles))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function show(req, res) {
  Profile.findById(req.params.id)
    .then((profile) => {
      res.status(200).json(profile);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(error);
    });
}

function update(req, res) {
  Profile.findById(req.params.id)
    .then((profile) => {
      profile.updateOne(req.body, { new: true }).then(() => {
        res.status(200).json(profile);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function addPracticedWord(req, res) {
  console.log(req.body);
  Profile.findById(req.params.id)
    .then((profile) => {
      profile.practicedWords.push(req.body);
      profile.save().then(() => {
        res.status(200).json(profile.practicedWords);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

const updatePracticedWord = async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    const updatedPracticedWord = await profile.pracitedWords.find(
      (practicedWord) => practicedWord._id.equals(req.params.practicedWordId)
    );
    updatedPracticedWord.word = req.body.word;
    updatedPracticedWord.timesPracticed = rec.body.timesPracticed;
    updatedPracticedWord.timesCorrect = rec.body.timesCorrect;
    updatedPracticedWord.timesInorrect = rec.body.timesIncorrect;
    updatedPracticedWord.recordOfWrongs = rec.body.recordOfWrongs;
    await profile.save();
    return res.status(200).json(updatedComment);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export { index, show, update, addPracticedWord, updatePracticedWord };
