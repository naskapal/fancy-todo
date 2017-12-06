const jwt = require('jsonwebtoken')
const {JWT_SECRET_KEY} = require('../secrets.config')

exports.verifyToken = (req, res, next) => {
  console.log(req.body)
  jwt.verify(req.body.token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    } else {
      req.headers.decoded = decoded
      next()
    }
  })
}
