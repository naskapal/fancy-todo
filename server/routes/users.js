const router = require('express').Router()
const User = require('../controllers/userController')

router.post('/register', User.create)
router.post('/login', User.login)
router.put('/', User.update)
router.delete('/', User.destroy)

module.exports = router
