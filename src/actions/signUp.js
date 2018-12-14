const knex = require('../../knex')

//// CREATE NEW USER IN USERS TABLE \\\\
const createUser = (username, email, password) => {
  let newObj = {
    username: username,
    email: email,
    password: password
  }
  
  return knex('users')
    .where('email', email)
    .insert(newObj)
    .returning('*')
    .then(user => user[0])
    .catch(err => Promise.reject(err))

  // return knex('users')
  //   .where('email', email)
  //   .then(result => {
  //     if (result && result.length > 0) {
  //       console.log('User found')
  //     } else {
  //       console.log('User NOT found')
  //     }
  //   })
}

module.exports = {createUser}