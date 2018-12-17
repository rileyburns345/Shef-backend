const jwt = require('jwt-simple')
const config = require('../../config')
const {createUser} = require('../actions/signUp')
const bcrypt = require('bcryptjs')

//// TAKES IN USER OBJECT, RETURNS ENCODED TOKEN \\\\
const tokenForUser = (user) => {
  return jwt.encode({id: user.id}, config.secret)
}

//// TAKES IN LOGGED USER AND CALLS tokenForUser() TO SEND TOKEN ALONG TO FRONT END \\\\
const signin = (req, res, next) => {
  let token = tokenForUser(req.user)
  // res.send({ token: token })
  res.set('Auth', `Bearer: ${token}`).status(200).json( req.user )
}

//// GRAB USER DATA FROM SIGN UP FORM \\\\
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

module.exports = {signup, signin}