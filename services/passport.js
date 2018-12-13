const passport = require('passport')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const {findUserById, verifyUser} = require('../actions/signIn')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcryptjs')

//// CREATE LOCAL STRATEGY \\\\

const localOptions = {usernameField: 'email'}

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  return verifyUser(email)
    .then((validUser) => {
      bcrypt.compare(password, validUser.password)
        .then((validPassword) => {
          if (validPassword) {
            return done(null, validUser)
          }
          return done(null, false)
        })
        .catch(err => done(err, false))
    })
})

//// SETUP OPTIONS FOR JWT STRATEGY \\\\

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret,
}

//// CREATE JWT STRATEGY \\\\

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  return findUserById(payload.sub)
    .then((foundUser) => {
      if (foundUser) {
        return done(null, foundUser)
      }
      return done(null, false)
    })
    .catch(err => done(err, false))
})

//// TELL PASSPORT TO USE THIS STRATEGY \\\\

passport.use(jwtLogin)
passport.use(localLogin)