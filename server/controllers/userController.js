const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const saltRounds = 10
const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../secrets.config')

const create = (req, res) => {
  bcrypt.hash(req.body.password, saltRounds)
    .then((encryptedPassword) => {
      let user = new User({
        username: req.body.username,
        password: encryptedPassword
      })
      user.save()
        .then(success => res.status(200).send(success))
        .catch(error => res.status(500).send(error))
    })
}

const login = (req, res) => {
  User.findOne({
    username: req.body.username
  })
    .then(user => {
      if (user) {
        bcrypt.compare(req.body.password, user.password)
         .then(correct => {
           jwt.sign({
             userId: user.id,
             username: req.body.username
           }, JWT_SECRET_KEY, function (err, token) {
             if (err) {
               console.log(err);
               res.status(500).send(err)
             } else {
               console.log(token);
               res.status(200).send(token)
             }
           })
         })
      }
    })
    .catch(error => console.log(error))
}

const findAll = (req, res) => {
  User.find()
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
}

const update = (req, res) => {
  User.findByIdAndUpdate(req.body.id, {
    isComplete: req.body.status
  }, {
    new: true
  })
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
}

const destroy = (req, res) => {
  User.remove({
    id: req.body.id
  })
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
}

module.exports = {
  create,
  findAll,
  login,
  update,
  destroy
}
