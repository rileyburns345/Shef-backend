const knex = require('../../knex')

const createUser = (username, email, password) => {
  let newObj = {
    username: username,
    email: email,
    password: password
  }
  return knex('users')
    .insert(newObj)
    .returning('*')

    .then(user => user[0])
    .catch(err => Promise.reject(err))
}

module.exports = {createUser}