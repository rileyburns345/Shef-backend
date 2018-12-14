//// MODEL \\\\
const knex = require('../../knex')

const getAll = (limit) => {
  return knex('users')
    .then(users => {
      console.log('model users:', users)
      return users
    })
    .catch(err => Promise.reject(err))
}

const create = (body) => {
  return knex('users')
    .insert(body)
    .returning('*')

    .then(user => user[0])
    .catch(err => Promise.reject(err))
}

const getOneUser = (id) => {
  return knex('users')
    .where('id', id)
    .then(user => {
      return user[0]
    })
    .catch(err => {
      console.log(`Model route error: ${err}`)
      Promise.reject(err)
    })
}

const checkUser = (id) => {
  return knex('users')
    .where('id', id)
    .then(user => {
      return user[0]
    })
}

const getRecipesByUser = () => {
  console.log('getRecipesByUser')
}

const deleteOne = (id) => {
  return knex('users')
    .where('id', id)
    .del()
    .returning('*')
    .then(user => {
      return user[0]
    })
    .catch(err => Promise.reject(err))
}

module.exports = { 
  getAll,
  create,
  deleteOne,
  getOneUser,
  checkUser
}