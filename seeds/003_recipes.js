exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, recipe_name: 'Sweet Potato Pie', user_created_id: 5, image_url: '', description: 'The best sweet potato pie ever!', instructions: '', ingredients: '', course: 'Dessert' },
        { id: 2, recipe_name: 'The Best Granola', user_created_id: 2, image_url: '', description: 'I love this granola so much, you gotta try.', instructions: '', ingredients: '', course: 'Snack' },
        { id: 3, recipe_name: 'Whole Wheat Banana Pancakes', user_created_id: 5, image_url: '', description: 'Made this for my roommates, they loved it!', instructions: '', ingredients: '', course: 'Breakfast' },
        { id: 4, recipe_name: 'Caprese Pasta Salad', user_created_id: 6, image_url: '', description: 'The perfect fast meal!', instructions: '', ingredients: '', course: 'Dinner' },
        { id: 5, recipe_name: 'Chicken and Waffles', user_created_id: 1, image_url: '', description: 'My momma made these', instructions: '', ingredients: '', course: 'Lunch' },
        { id: 6, recipe_name: 'Quesadillas', user_created_id: 3, image_url: '', description: 'The best darn quesadillas I ever had. Got in a recipe book!', instructions: '', ingredients: '', course: 'Lunch' },
        { id: 7, recipe_name: 'Minestrone Soup', user_created_id: 4, image_url: '', description: 'My awesome soup.', instructions: '', ingredients: '', course: 'Dinner' },
        
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('recipes_id_seq', (SELECT MAX(id) FROM recipes))")
      })
    })
}