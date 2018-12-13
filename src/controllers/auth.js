const jwt = require('jwt-simple')
const config = require('../../config')
const {createUser} = require('../actions/signUp')
const bcrypt = require('bcryptjs')

const tokenForUser = (user) => {
  const timestamp = new Date().getTime()
  return jwt.encode({sub: user.id, iat: timestamp}, config.secret)
}

const signin = (req, res, next) => {
  let token = tokenForUser(req.user)
  res.cookie('token', token, {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
  })
  res.send({ token: token })
}

const signup = (req, res, next) => {

  const {username, email, password} = req.body
  const saltRounds = 12

  if (!email || !password) {
    res.status(422).send({error: `You must provide an email and a password.`})
  }
  //// SEE IF A USER WITH THE GIVEN EMAIL EXISTS \\\\
  bcrypt.hash(password, saltRounds)
    .then((hash) => {
      return createUser(username, email, hash)
        .then((newUser) => {
          res.json({token: tokenForUser(newUser)})
        })
        .catch((err) => {
          res.json({error: `Error saving user to database.`})
        })
    })
    .catch((err) => {
      return next(err)
    })
}

const signout = (req, res, next) => {
  res.clearCookie()
  res.end()
}

module.exports = {signup, signin, signout}