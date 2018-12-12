exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function() {
      // Inserts seed entries
      return knex('favorites').insert([
        { id: 1,
          user_id: 3,
          recipe_id: 2
        },
        { id: 2,
          user_id: 4,
          recipe_id: 6
        },
        { id: 3,
          user_id: 6,
          recipe_id: 4
        },
        { id: 4,
          user_id: 2,
          recipe_id: 1
        },
        { id: 5,
          user_id: 1,
          recipe_id: 4
        }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites))")
      })
    })
}