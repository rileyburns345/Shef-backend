const express = require('express')
const router = express.Router()

const ctrl = require('../controllers/users')
router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOneUser)
router.post('/', ctrl.create)
router.delete('/:id', ctrl.deleteOne)
// ctrl.isVerified,
module.exports = router