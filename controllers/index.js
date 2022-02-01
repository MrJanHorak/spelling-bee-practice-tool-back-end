function index(req, res) {
    res.render("index", {
      title: "Spelling Bee Practice Tool Admin!",
    })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index
}