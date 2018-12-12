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

module.exports = { 
  getAll 
}