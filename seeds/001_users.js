exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'Riley'},
        { id: 2, username: 'Erik'},
        { id: 3, username: 'Russ'},
        { id: 4, username: 'Pete'},
        { id: 5, username: 'Craig'},
        { id: 6, username: 'Alicia'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
      })
    })
}