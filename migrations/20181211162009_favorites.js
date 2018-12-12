exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', function(table) {
    table.increments()
    table.integer('user_id')
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.integer('recipe_id')
    table.foreign('recipe_id').references('recipes.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('favorites')
}