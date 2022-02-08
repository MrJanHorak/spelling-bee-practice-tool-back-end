import { Word } from "../models/word.js";

function index(req, res) {
  // Find all words
  Word.find({})
    .sort({ word: "asc" })
    .then((words) => {
      res.render("words/index", {
        words,
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/words");
    });
}

function newWord(req, res) {
  res.render("words/new").catch((err) => {
    console.log(err);
    res.redirect("/words");
  });
}

function create(req, res) {
  req.body.visible = !!req.body.visible
  Word.create(req.body)
  .then((word) => {
    res.redirect("/words")
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/words)")
  })
  }



export { index, newWord as new, create, };
