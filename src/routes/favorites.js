const express = require('express')
const router = express.Router()

const ctrl = require('../controllers/favorites')

router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getOneFavorite)
router.post('/', ctrl.create)

module.exports = router