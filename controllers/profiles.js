import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
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
  console.log('update profile: ', req.body, " params: ". req.params.id)
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

export { index, show, update }