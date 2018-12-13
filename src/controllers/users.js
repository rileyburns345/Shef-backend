//// CONTROLLER \\\\
const model = require('../models/users')

const isVerified = (req, res, next) => {
  const authHeader = req.cookies.token

  if (!authHeader) {
    return res.json(403).json({
      status: 403,
      message: 'FORBIDDEN'
    })
  } else {
    next()
  }
}

const getAll = (req, res, next) => {
  return model.getAll()
    .then((users) => {
      res.status(200).json(users)
    })
}

const getOneUser = (req, res, next) => {
  return model.getOneUser(req.params.id)
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

const create = (req, res, next) => {
  return model.create(req.body)
    .catch(errors => {
      return next({
        status: 400,
        message: `Could not create new users`,
        errors: errors
      })
    })
    .then(data => {
      res.status(201).json(data)
    })
}

const deleteOne = (req, res, next) => {
  console.log(req.params)
  return model.deleteOne(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => {
      const error = new Error(`Failed to delete user`)
      error.status = 503
      error.caught = err
      return next(error)
    })
}

module.exports = {
  getAll,
  getOneUser,
  create,
  deleteOne,
  isVerified
}