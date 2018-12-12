exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1, username: 'Riley', oauthId: 20},
        { id: 2, username: 'Erik', oauthId: 25},
        { id: 3, username: 'Russ', oauthId: 30},
        { id: 4, username: 'Pete', oauthId: 35},
        { id: 5, username: 'Craig', oauthId: 40},
        { id: 6, username: 'Alicia', oauthId: 45}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
      })
    })
}