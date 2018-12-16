const express = require('express')
// const passport = require('passport')
// const authentication = require('../controllers/auth')
// const requireSignIn = passport.authenticate('jwt', {session: false})
const router = express.Router()

const ctrl = require('../controllers/recipes')

router.get('/', ctrl.getAll)
router.get('/:user_id', ctrl.getPostsByUserId)
router.post('/', ctrl.create)
router.patch('/:id', ctrl.updateOne)
router.delete('/:id', ctrl.deletePost)

module.exports = router