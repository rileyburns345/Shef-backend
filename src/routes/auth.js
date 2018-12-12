require('dotenv').config()
const router = require('express').Router()
const passport = require('passport')
const jwt = require('jsonwebtoken')

// auth login
router.get('/login/facebook', (req, res) => {
  // res.render('login', { user: req.user })
  res.sendfile('./public/index.html')
})

// auth logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// auth with facebook
// Use Passport with the facebook strategy that we attached to it in config
// This is where it redirects to facebook oauth
router.get('/facebook', passport.authenticate('facebook', {
  scope: ['profile']
}))

// callback route for facebook to redirect to
// hand control to passport to use code to grab profile info
router.get('/facebook/redirect', passport.authenticate('facebook'), (req, res) => {
  // Probably a good place for JWT stuff
  let payLoad = {
    id: req.user.id,
    oauthid: req.user.oauthId,
    loggedIn: true,
  }
  let token = jwt.sign(payLoad, process.env.TOKEN_SECRET, {
    expiresIn: '8h'
  })
  res.cookie("token", token, {
    maxAge: 1728000 // 8 hours
  })
  res.redirect('https://localhost:3000')
  // res.redirect('/')
})

module.exports = router