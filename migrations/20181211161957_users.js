exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.varchar('username').notNullable().defaultTo('')
    table.varchar('email').notNullable()
    table.varchar('password').notNullable()
    table.timestamps(true, true)
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}