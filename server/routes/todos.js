const router = require('express').Router()
const Todo = require('../controllers/todoController')
const {verifyToken} = require('../helpers/tokenManager')

router.post('/', verifyToken,  Todo.create)
router.get('/', verifyToken, Todo.findAll)
router.put('/', verifyToken, Todo.update)
router.delete('/', verifyToken, Todo.destroy)

module.exports = router
