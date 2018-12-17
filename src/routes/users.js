const express = require('express')
const router = express.Router()
const verify = require('../controllers/recipes')

const ctrl = require('../controllers/users')
 
router.get('/', verify.jwtVerify, ctrl.getAll)
router.get('/:id', ctrl.getOneUser)
router.post('/', ctrl.create)
router.delete('/:id', verify.jwtVerify, ctrl.deleteOne)

module.exports = router