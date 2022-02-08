import { Word } from '../models/word.js'

function index(req, res) {
  // Find all words
  Word.find({}).sort({ word: "asc"})
  .then((words) => {
    res.render("words/index", {
      words
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/words")
  })
}

function newWord(req, res) {
  res.render("words/new")
  .catch((err) => {
    console.log(err)
    res.redirect("/recipes")
  })
}


export {
  index,
  newWord as new,
  
}