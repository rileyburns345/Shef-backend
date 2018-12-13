const express = require('express')
const router = express.Router()

const ctrl = require('../controllers/users')

router.get('/', ctrl.isVerified, ctrl.getAll)
router.get('/:id', ctrl.getOneUser)
router.post('/', ctrl.create)
router.delete('/:id', ctrl.isVerified, ctrl.deleteOne)

module.exports = router