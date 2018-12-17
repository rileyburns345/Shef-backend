const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/recipes')

router.get('/', ctrl.getAll)
router.get('/:user_id', ctrl.getPostsByUserId)
router.post('/', ctrl.jwtVerify, ctrl.create)
router.patch('/:id', ctrl.updateOne)
router.delete('/:id', ctrl.deletePost)

module.exports = router