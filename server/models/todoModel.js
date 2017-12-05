const {DB_PATH} = require('../secrets.config')
const mongoose = require('mongoose').connect(DB_PATH);
const Schema = mongoose.Schema

const todoSchema = mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  task: String,
  isComplete: {
    type: Boolean,
    default: false
  }
})

const todoModel = mongoose.model('Todo', todoSchema)

module.exports = todoModel;
