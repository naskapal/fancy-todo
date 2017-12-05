const Todo = require('../models/todoModel')

const create = (req, res) => {
  let task = new Todo({
    author: req.body.author,
    task: req.body.task
  })
  task.save()
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
}

const findAll = (req, res) => {
  Todo.find()
    .then(success => res.status(200).send(success))
    .catch(error => res.status(500).send(error))
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
