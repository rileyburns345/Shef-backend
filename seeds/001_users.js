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
          username: 'rstorms90',
          email: 'rstorms90@gmail.com',
          password: '$2a$12$uCNW1pffaq81eJediCw3reAI13P5kfcXyjavDnoKtVcsRpS/hP3je'
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
        },
        { id: 7,
          username: 'escheetz',
          email: 'e.dietrich.scheetz@gmail.com',
          password: '$2a$12$5yQRmJD689q1ltK7pbA.7u9l1qzi8JzSURXNll8q/I/xBtyBtQ.Ti'
        }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
      })
    })
}