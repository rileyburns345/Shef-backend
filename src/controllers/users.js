//// CONTROLLER \\\\
const model = require('../models/users')

const getAll = (req, res, next) => {
  return model.getAll()
    .then((users) => {
      res.status(200).json(users)
    })
}

module.exports = {
  getAll
}