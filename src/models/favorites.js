//// MODEL \\\\
const knex = require('../../knex')

const getAll = (req, res, next) => {
  return knex('favorites')
    .then(favorites => {
      console.log('model favorites:', favorites)
      return tags
    })
    .catch(err => Promise.reject(err))
}

const getOneFavorite = (id) => {
  return knex('favorites')
    .where('id', id)
    .then(favorite => {
      return favorite[0]
    })
    .catch(err => Promise.reject(err))
}

const create = (body) => {
  return knex('favorites')
    .insert(body)
    .returning('*')
    .then(favorite => favorite[0])
    .catch(err => Promise.reject(err))
}

module.exports = { getAll, create, getOneFavorite }