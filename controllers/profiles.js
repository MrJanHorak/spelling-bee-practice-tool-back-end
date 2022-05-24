import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.find({})
    .populate({
      path: "students",
      model: "Profile",
      select: ["name", "avatar"],
    })
    .then((profiles) => res.json(profiles))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function show(req, res) {
  Profile.findById(req.params.id)
    .populate({ path: "students", select: ["name", "avatar", "practicedWords"] })
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

function updatePracticedWord(req, res) {
  Profile.findById(req.params.id)
    .then((profile) => {
      const wordToUpdate = profile.practicedWords.findIndex((practicedWord) =>
        practicedWord._id.equals(req.params.practicedWordId)
      );
      profile.practicedWords[wordToUpdate] = req.body;
      profile.save().then(() => {
        res.status(200).json(profile.practicedWords[wordToUpdate]);
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });
}

export { index, show, update, addPracticedWord, updatePracticedWord };
