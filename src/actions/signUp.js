const knex = require('../../knex')

const createUser = (name, email, password) => {
  return knex('users')
    .insert(username, email, password)
    .returning('*')

    .then(user => user[0])
    .catch(err => Promise.reject(err))
}

module.exports = {createUser}