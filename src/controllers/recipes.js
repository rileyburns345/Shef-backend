//// CONTROLLER \\\\
const jwt = require('jsonwebtoken')
require('dotenv').config();
const model = require('../models/recipes')

const jwtVerify = (req, res, next) => {
	jwt.verify(req.headers.token, process.env.SECRET, (err, _payload) => {
		if (err) {
			err.status = 401
			err.message = `Unauthorized - Bad JWT Token cookie`
			return next(err);
		} else {
			req.payload = _payload
			next()
		}
	})
}

const getAll = (req, res, next) => {
  return model.getAll()
    .then((recipes) => {
      res.status(200).json(recipes)
    })
}

const getPostsByUserId = (req, res, next) => {
  console.log('in getpostsbyuserid controller')
  return model.getPostsByUserId(req.params.user_id)
    .catch(error => {
      return next({
        status: 404,
        message: error
      })
    })
    .then(data => {
      console.log(data)
      res.json(data)
    })
}

const create = (req, res, next) => {
  return model.create(req.params.user_id, req.body)
    .then(data => {
      res.status(201).json(data)
    })
    .catch(errors => {
      return next({
        status: 400,
        message: `Could not create new post`,
        errors: errors
      })
    })
}

const updateOne = (req, res, next) => {
  return model.updateOne(req.params.id, req.body)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      const error = new Error(`Failed to update post`)
      error.status = 503
      error.caught = err
      return next(error)
    })
}

const deletePost = (req, res, next) => {
  return model.deleteOne(req.params.id)
    .then(post => res.status(200).json(post))
    .catch(err => {
      const error = new Error(`Failed to update post`)
      error.status = 503
      error.caught = err
      return next(error)
    })
}

module.exports = {
  getAll,
  getPostsByUserId,
  create,
  updateOne,
  deletePost,
  jwtVerify
}