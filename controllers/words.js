import { Word } from "../models/word.js";

function index(req, res) {
  Word.find({})
    .sort({ word: "asc" })
    .then((words) => {
      res.status(201).json(words);
    })
    .catch((err) => {
      return res.status(500).json(err);
    });
}

function create(req, res) {
  console.log("i am creating!");
  Word.create(req.body)
    .then(res.status(201).json(req.body))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function show(req, res) {
  Word.findById(req.params.id)
    .then((word) => {
      res.status(200).json(word);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(error);
    });
}

function update(req, res) {
  Word.findById(req.params.id)
    .then((word) => {
      word.updateOne(rec.body, { new: true }).then(() => {
        res.status(200).json(word);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

function deleteWord(req, res) {
  Word.findById(req.params.id)
    .then((word) => {
      word.delete().then(() => {
        res.status(204).end();
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

export { index, create, show, update, deleteWord as delete };
