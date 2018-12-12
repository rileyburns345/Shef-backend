require('dotenv').config()
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const userModel = require('../src/models/users.js')

passport.serializeUser((user, done) => {
  console.log("in serializeUser ", user)
  done(null, user.id) // go to deserializeUser
})

// Get user to store in req.user
passport.deserializeUser((id, done) => {
  console.log('inside deser user : ', id)
  userModel.getOneUser(id)
    .then((user) => {
      done(null, user)
    })
})

passport.use(
  new FacebookStrategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      // callbackURL: '/auth/facebook/callback'
      callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    // passport call back function
    (accessToken, refreshToken, profile, done) => {
      console.log('passport callback function fired')
      // Check if user is in our psql db, if not, make them
      userModel.checkUser(profile._json.id)
        .then((currentUser) => {
          if (currentUser) {
            // already have the user
            console.log('user is: ', currentUser)
            // null if error, or pass user
            done(null, currentUser) // when done is called, we go to passport.serializeUser
          } else {
            // Create user
            let newUser = {
              name: profile.username,
              oauthId: profile.id
            }
            userModel.create(newUser)
            console.log(`created new user ${newUser.username}`)
            done(null, newUser) // when done is called, we go to passport.serializeUser
          }
        })
    }
  )
)