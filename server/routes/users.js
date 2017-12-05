const router = require('express').Router()
const User = require('../controllers/userController')

router.post('/', User.create)
router.get('/', User.findAll)
router.put('/', User.update)
router.delete('/', User.delete)

module.exports = router
