const express = require('express')
const passport = require('passport')
//// REQUIRES SIGNUP AND SIGNUP FUNCTIONS \\\\
const Authentication = require('../controllers/auth')
//// PASSPORT MIDDLEWARE TO HANDLE LOGIN REQUEST \\\\
const requireSignIn = passport.authenticate('local', {session: false})
const router = express.Router()

//// SIGNUP AUTH \\\\
router.get('/sign-up', (req, res) => {
  res.render('authentication/sign-up')
})
//// SIGNUP AUTH \\\\
router.post('/sign-up', Authentication.signup)

//// SIGNIN AUTH \\\\
router.get('/sign-in', (req, res) => {
  res.render('authentication/sign-in')
})
//// SIGNIN AUTH \\\\
router.post('/sign-in', requireSignIn, Authentication.signin)

router.delete('/sign-in', Authentication.signout)

//// RECIPES AUTH \\\\


module.exports = router