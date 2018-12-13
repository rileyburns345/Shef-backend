const jwt = require('jwt-simple')
const config = require('../../config')
const {createUser} = require('../actions/signUp')
const bcrypt = require('bcryptjs')

const tokenForUser = (user) => {
  const timestamp = new Date().getTime()
  return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}

const signin = (req, res, next) => {
  res.send({ token: tokenForUser(req.user) })
}