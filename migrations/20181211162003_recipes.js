exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(table) {
    table.increments()
    table.string('recipe_name', 255).defaultTo('')
    table.integer('user_id')
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.string('image_url').defaultTo('https://placekitten.com/200/300')
    table.string('description').defaultTo('')
    table.string('instructions').defaultTo('')
    table.string('ingredients').defaultTo('')
    table.string('course').defaultTo('')
    table.timestamps(true, true)
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes')
}