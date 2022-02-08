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

  function show(req, res) {
    Word.findById(req.params.id)
    .then((word) => {
      res.render("words/show", {
        word
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/words")
    })
  }

  function edit(req, res) {
    Word.findById(req.params.id)
    .then((word) => {
      res.render("words/edit", {
        word
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/words")
    })
  }

  function update(req, res) {
    Word.findById(req.params.id)
    .then((word) => {
      req.body.visible = !!req.body.visible
      word.updateOne(rec.body, {new: true }).then(() => {
        res.redirect(`/words/${word._id}`)
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/words")
    })
  }



export { index, newWord as new, create, show, edit, update, };
