exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { 
          id: 1, 
          recipe_name: 'Sweet Potato Pie',
          user_id: 4,
          image_url: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Southern-Sweet-Potato-Pie_exps2375_FBB2007951C03_30_4bC_RMS.jpg',
          description: 'The best sweet potato pie ever!', 
          instructions: '1. Boil sweet potato whole in skin for 40 to 50 minutes, or until done. Run cold water over the sweet potato, and remove the skin. 2. Break apart sweet potato in a bowl. Add butter, and mix well with mixer. Stir in sugar, milk, eggs, nutmeg, cinnamon and vanilla. Beat on medium speed until mixture is smooth. Pour filling into an unbaked pie crust. 3. Bake at 350 degrees F (175 degrees C) for 55 to 60 minutes, or until knife inserted in center comes out clean. Pie will puff up like a souffle, and then will sink down as it cools.',
          ingredients: `["1 sweet potato",".5 cup butter","1 cup white suger",".5 cup milk","2 eggs",".5 teaspoon nutmeg",".5 teaspoon ground cinnamon","1 teaspoon vanilla extract","1(9in.) unbaked pie crust"]`,
          course: 'Dessert',
          diet: `['vegetarian']`
        },
        { 
          id: 2,
          recipe_name: 'The Best Granola',
          user_id: 6,
          image_url: 'https://cookieandkate.com/images/2015/10/best-granola-recipe-1.jpg',
          description: 'I love this granola so much, you gotta try.',
          instructions: '1. Preheat oven to 350 degrees Fahrenheit and line a large, rimmed baking sheet with parchment paper. 2. In a large mixing bowl, combine the oats, nuts and/or seeds, salt and cinnamon. Stir to blend. 3. Pour in the oil, maple syrup and/or honey and vanilla. Mix well, until every oat and nut is lightly coated. Pour the granola onto your prepared pan and use a large spoon to spread it in an even layer. 4. Bake until lightly golden, about 21 to 24 minutes, stirring halfway (for extra-clumpy granola, press the stirred granola down with your spatula to create a more even layer). The granola will further crisp up as it cools. 5. Let the granola cool completely, undisturbed (at least 45 minutes). Top with the dried fruit (and optional chocolate chips, if using). Break the granola into pieces with your hands if you want to retain big chunks, or stir it around with a spoon if you don’t want extra-clumpy granola. 6. Store the granola in an airtight container at room temperature for 1 to 2 weeks, or in a sealed freezer bag in the freezer for up to 3 months. The dried fruit can freeze solid, so let it warm to room temperature for 5 to 10 minutes before serving.',
          ingredients: `["4 cups rolled oats","1.5 raw nuts","1 teaspoon sea salt",".5 teaspoon ground cinnamon",".5 cup coconut oil",".5 cup maple syrup","1 teaspoon vanilla extract","2/3 cup dried fruit"]`,
          course: 'Snack',
          diet: `['vegetarian']`
        },
        { 
          id: 3,
          recipe_name: 'Whole Wheat Banana Pancakes',
          user_id: 2,
          image_url: 'https://cookieandkate.com/images/2018/11/whole-wheat-banana-pancakes-recipe-1-1-1100x1648.jpg',
          description: 'Made this for my roommates, they loved it!',
          instructions: '1. If you’re using an electric skillet, preheat it to 350 degrees Fahrenheit now. In a medium bowl, combine the flour, baking powder, cinnamon and salt. Whisk to blend. 2. In a smaller bowl, combine the milk, mashed banana, egg, maple syrup, butter and vanilla. Whisk until blended. Pour the liquid mixture into the flour mixture and mix just until combined. 3. If you are not using an electric skillet, heat a heavy cast iron skillet or nonstick griddle over medium-low heat. You’re ready to start cooking pancakes once a drop of water sizzles on contact with the hot surface. If necessary, lightly oil the cooking surface with additional butter or coconut oil, carefully wiping up excess with a paper towel (nonstick surfaces likely won’t require any oil). 4. Using a ⅓-cup measuring cup, scoop the batter onto the hot skillet, leaving a couple of inches around each pancake for expansion. Cook until small bubbles form on the surface of the pancakes, 2 to 3 minutes (you’ll know it’s ready to flip when about ½-inch of the perimeter is matte instead of glossy). 5. Flip the pancakes, then cook until lightly golden on both sides, 1 to 2 minutes more. Repeat the process with the remaining batter, adding more butter or oil and adjusting the heat as necessary. 6. Serve immediately or keep warm in a 200 degree Fahrenheit oven. If desired, top individual servings with a spread of peanut or almond butter and/or sliced bananas, and serve with more maple syrup or honey on the side. 7. Leftover pancakes can be stored in the refrigerator for up to 3 days, or frozen for up to 3 months. To reheat, stack leftover pancakes and wrap them in a paper towel before gently reheating in the microwave.',
          ingredients: `["1 cup white whole wheat flour","1 tablespoon baking powder",".5 teaspoon ground cinnamon","1/4 teaspoon fine sea salt","2/3 cup milk of choice",".5 cup mashed ripe banana","1 large egg","2 tablespoons maple syrup",".5 teaspoon vanilla extract"]`,
          course: 'Breakfast',
          diet: `['vegetarian']`
        },
        { 
          id: 4,
          recipe_name: 'Caprese Pasta Salad',
          user_id: 1,
          image_url: 'https://cookieandkate.com/images/2013/07/caprese-pasta-recipe-2.jpg',
          description: 'The perfect fast meal!',
          instructions: '1. Bring a large pot of salted water to boil and cook the pasta until al dente, according to package instructions. Drain the pasta and set it aside. 2. While the pasta is cooking, combine the olive oil, tomatoes and salt in a large, non-reactive skillet or Dutch oven over medium heat. Cover the skillet (use a baking sheet if you don’t have a better lid). Cook, stirring occasionally, until most of the tomatoes have started to burst out of their skins and the olive oil has a light red hue (about 6 to 12 minutes). 3. Remove the skillet from the heat and stir in the cooked pasta. Let the mixture cool for a few minutes while you chop the basil. 4. Stir the mozzarella balls and basil into the pasta. Add the vinegar, then taste and add additional vinegar and/or salt, if it doesn’t quite taste spectacular yet. For best flavor, let the mixture rest for about 20 minutes, so the pasta can absorb some of the sauce. Or, refrigerate it for future use. 5. This salad will keep well in the refrigerator for up to 4 days. Leftovers are great chilled or at room temperature. You can also reheat the pasta if you don’t mind the mozzarella melting (yum).',
          ingredients: `["2 cups whole grain fusilli pasta","1/3 cup olive oil","2 pints cherry tomatoes",".5 teaspoon sea salt","8 ounces mozzarella pearls","several sprigs of fresh basil","2 to 3 teaspoons balsamic vinegar"]`,
          course: 'Dinner',
          diet: `['vegetarian']`
        },
        {
          id: 5,
          recipe_name: 'Chicken and Waffles',
          user_id: 5,
          image_url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/10/9/4/WU1110H_Chicken-and-Waffles_s4x3.jpg.rend.hgtvcom.616.462.suffix/1444759015921.jpeg',
          description: 'My momma made these',
          instructions: '1. For the fried chicken: Thoroughly rinse the chicken, then cover all the pieces with 1 3/4 cups of buttermilk. Soak in the fridge overnight or up to 24 hours. 2. When you`re ready to fry the chicken, remove the bowl from the fridge and let it sit on the counter for 30 minutes to take off the chill. 3. In the meantime, preheat the oven to 360 degrees F and mix the breading. Put the flour, seasoned salt, paprika, pepper, thyme and cayenne (extra cayenne if you like heat) in a very large bowl and stir together well. 4. In a small bowl, combine the milk and remaining 1/4 cup buttermilk. Pour into the flour mixture and, with a fork, gradually mix until there are little lumps throughout. This will adhere to the chicken and make for a crispier breading. If necessary, add a little more flour or milk to the bowl in order to make it slightly lumpy. 5. Heat 1 1/2 to 2 inches of vegetable oil in a deep skillet over medium-high heat until a deep-fry thermometer registers 365 degrees F. Lower the heat slightly, if necessary, to keep the oil from getting hotter...',
          ingredients: `["8 boneless chicken thighs","2 cups buttermilk","2.5 cups flour","1 tablespoon salt","1 teaspoon paprika","1 teaspoon ground pepper","1 teaspoon ground thyme",".5 teaspoon cayenne pepper","1/4 cup milk","vegetable oil","2 cups flour","1/4 cup sugar","1 tablespooon baking powder","1/2 teaspoon salt","1.5 cups milk","1 tablespoon vanilla","4 large egg whites","8 tablespoons salted butter","1 to 2 chopped jalapenos","1 cup pancake syrup","1/4 cup bourbon","1/2 stick butter","1/4 teaspoon cayenne"]`,
          course: 'Lunch',
          diet: `['dairy-free']`
        },
        { 
          id: 6,
          recipe_name: 'Quesadillas',
          user_id: 3,
          image_url: 'https://cookieandkate.com/images/2016/05/broccoli-rabe-quesadillas-2.jpg',
          description: 'The best darn quesadillas I ever had. Got in a recipe book!',
          instructions: '1. First, prepare the broccoli rabe so it can marinate while you prepare the rest. Pull the broccoli rabe leaves from the stems and discard the stems. Wash and spin dry the leaves. Tear any large leaves into small, bite-sized pieces, then transfer the leaves to a large serving bowl, along with the chopped cilantro. 2. In a small bowl, combine the olive oil, lime juice, garlic, salt and red pepper flakes. Whisk until blended. Pour the dressing over the leaves and gently massage the dressing into the leaves until they are all lightly coated. Take a little bite, and add more lime juice and salt if you find it too bitter. 3. To cook the refried beans: In a medium saucepan over medium heat, warm the olive oil until shimmering. Add the shallot and salt. Cook, stirring often, until the shallot is tender and turning translucent, about 4 to 5 minutes. Add the garlic, cumin and chili powder and cook, while stirring constantly, until fragrant, about 30 seconds. Add the drained beans and water. Let the mixture come to a simmer and cook for 10 minutes, stirring often, and reducing heat as necessary to maintain a gentle simmer. Remove from heat and mash the beans with a potato masher, pastry cutter or fork until the mixture is thick and spreadable. 4. To cook the quesadillas: Spread the bean mixture evenly over each tortilla. Warm a medium-to-large skillet over medium heat. Transfer one tortilla to the warmed skillet and sprinkle about one-fourth of the cheese over the bean mixture. Spread a handful of marinated broccoli rabe leaves over one-half of the tortilla, leaving any large buds in the bowl. Once the cheese is melting, fold the cheesy side over the broccoli rabe. Brush the top of the quesadilla lightly with oil. Once the cheese is fully melted, flip the quesadilla, and brush the top with oil. Let each side cook until golden and crisp, flipping as necessary. Transfer the cooked quesadilla to a plate, and repeat for remaining quesadillas. 5. Let the cooked quesadillas rest for a few minutes to set the cheese, then use a pizza cutter or sharp chef’s knife to slice each quesadilla into three wedges. Serve with any remaining marinated broccoli rabe or beans on the side, as well as salsa verde and/or guacamole for dipping.',
          ingredients: `["1 large broccoli rabe","fresh cilantro","1 tablespoon olive oil","2 teaspoons lime juice","1 medium clove garlic","pinch of salt","pinch of red pepper flakes","1 tablespoon olive oil","1 medium shallot","1/4 teaspoon salt","1 clove garlic","1/2 teaspoon cumin","1/4 teaspoon chili powder","1 can black beans","1/3 cup water","4 small whole grain tortillas","2 cups grated Monterey Jack","olive oil for brushing"]`,
          course: 'Lunch',
          diet: `['vegetarian']`
        },
        { 
          id: 7,
          recipe_name: 'Minestrone Soup',
          user_id: 2,
          image_url: 'https://cookieandkate.com/images/2018/01/vegetarian-minestrone-soup-recipe.jpg',
          description: 'My awesome soup.',
          instructions: '1. Warm 3 tablespoons of the olive oil in a large Dutch oven or stockpot over medium heat. Once the oil is shimmering, add the chopped onion, carrot, celery, tomato paste and a pinch of salt. Cook, stirring often, until the vegetables have softened and the onions are turning translucent, about 7 to 10 minutes. 2. Add the seasonal vegetables, garlic, oregano and thyme. Cook until fragrant while stirring frequently, about 2 minutes. 3. Pour in the diced tomatoes and their juices, broth and water. Add the salt, bay leaves and red pepper flakes. Season generously with freshly ground black pepper. 4. Raise heat to medium-high and bring the mixture to a boil, then partially cover the pot with the lid, leaving about a 1” gap for steam to escape. Reduce heat as necessary to maintain a gentle simmer. 5. Cook for 15 minutes, then remove the lid and add the pasta, beans and greens. Continue simmering, uncovered, for 20 minutes or until the the pasta is cooked al dente and the greens are tender. 6. Remove the pot from the heat, then remove the bay leaves. Stir in the lemon juice and remaining tablespoon of olive oil. Taste and season with more salt (I usually add about ¼ teaspoon more) and pepper until the flavors really sing. Garnish bowls of soup with grated Parmesan, if you’d like.',
          ingredients: `["4 tablespoon olive oil","1 yellow onion","2 carrots","2 ribs celery","1/4 cup tomato paste","2 cups chopped veggies","4 cloves garlic","1/2 teaspoon oregano","1/2 teaspoon dried thyme","1 large can diced tomatoes","4 cups veggie broth","2 cups water","1 teaspoon sea salt","2 bay leaves","red pepper flakes","ground pepper","1 cup whole grain orecchiette","1 can Great Northern beans","2 cups baby spinach","2 teaspoons lemon juice","freshly grated parmesan cheese"]`,
          course: 'Dinner',
          diet: `['vegetarian']`
        },
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('recipes_id_seq', (SELECT MAX(id) FROM recipes))")
      })
    })
}