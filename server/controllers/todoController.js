const Todo = require('../models/todoModel')
const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../secrets.config')

const create = (req, res) => {
  let task = new Todo({
    author: req.headers.decoded.userId,
    task: req.body.task
  })
  task.save()
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
}

const findAll = (req, res) => {
  jwt.verify(req.headers.token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    } else {
        Todo.find({
            author: decoded.userId
          })
          .then(success => res.status(200).send(success))
          .catch(error => {
            console.log(error)
            res.status(500).send(error)
          })
      }
  })
}

const update = (req, res) => {
  Todo.findByIdAndUpdate(req.body.id, {
      isComplete: req.body.status
    }, {
      new: true
    })
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
}

const destroy = (req, res) => {
  Todo.remove({
      id: req.body.id
    })
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
}

module.exports = {
  create,
  findAll,
  update,
  destroy
}
