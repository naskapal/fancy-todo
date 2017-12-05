const router = require('express').Router()
const Todo = require('../controllers/todoController')

router.post('/', Todo.create)
router.get('/', Todo.findAll)
router.put('/', Todo.update)
router.delete('/', Todo.destroy)

module.exports = router
