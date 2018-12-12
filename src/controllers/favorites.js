//// CONTROLLER \\\\
const model = require('../models/favorites')

const getAll = (req, res, next) => {
  return model.getAll()
    .then((favorites) => {
      res.status(200).json(favorites)
    })
}

const create = (req ,res, next) => {
  return model.create(req.body)
    .catch(errors => {
      return next({
        status: 400,
        message: `Could not create new favorite`,
        errors: errors
      })
    })
    .then(data => {
      res.status(201).json(data)
    })
}

const getOneFavorite = (req, res, next) => {
  return model.getOneFavorite(req.params.id)
    .catch(error => {
      return next({
        status: 404,
        message: error
      })
    })
    .then(data => {
      res.status(200).json(data)
    })
}

module.exports = {
  getAll,
  getOneFavorite,
  create
}