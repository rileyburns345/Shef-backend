exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { id: 1,
          username: 'Riley',
          email: 'blank1@gmail.com',
          password: ''
        },
        { id: 2,
          username: 'Erik',
          email: 'blank2@gmail.com',
          password: ''
        },
        { id: 3,
          username: 'Russ',
          email: 'rstorms90@gmail.com',
          password: ''
        },
        { id: 4,
          username: 'Pete',
          email: 'blank3@gmail.com',
          password: ''
        },
        { id: 5,
          username: 'Craig',
          email: 'blank4@gmail.com',
          password: ''
        },
        { id: 6,
          username: 'Alicia',
          email: 'blank5@gmail.com',
          password: ''
        }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
      })
    })
}