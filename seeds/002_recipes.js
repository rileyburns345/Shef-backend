exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, recipe_name: 'Sweet Potato Pie', image_url: 'https://placekitten.com/200/300', description: 'The best sweet potato pie ever!', instructions: '', ingredients: '', course: 'Dessert' },
        { id: 2, recipe_name: 'The Best Granola', image_url: 'https://placekitten.com/200/300', description: 'I love this granola so much, you gotta try.', instructions: '', ingredients: '', course: 'Snack' },
        { id: 3, recipe_name: 'Whole Wheat Banana Pancakes', image_url: 'https://placekitten.com/200/300', description: 'Made this for my roommates, they loved it!', instructions: '', ingredients: '', course: 'Breakfast' },
        { id: 4, recipe_name: 'Caprese Pasta Salad', image_url: 'https://placekitten.com/200/300', description: 'The perfect fast meal!', instructions: '', ingredients: '', course: 'Dinner' },
        { id: 5, recipe_name: 'Chicken and Waffles', image_url: 'https://placekitten.com/200/300', description: 'My momma made these', instructions: '', ingredients: '', course: 'Lunch' },
        { id: 6, recipe_name: 'Quesadillas', image_url: 'https://placekitten.com/200/300', description: 'The best darn quesadillas I ever had. Got in a recipe book!', instructions: '', ingredients: '', course: 'Lunch' },
        { id: 7, recipe_name: 'Minestrone Soup', image_url: 'https://placekitten.com/200/300', description: 'My awesome soup.', instructions: '', ingredients: '', course: 'Dinner' },
        
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('recipes_id_seq', (SELECT MAX(id) FROM recipes))")
      })
    })
}