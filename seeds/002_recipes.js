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
          instructions: `["Boil sweet potato whole in skin for 40 to 50 minutes, or until done. Run cold water over the sweet potato, and remove the skin.","Break apart sweet potato in a bowl. Add butter, and mix well with mixer. Stir in sugar, milk, eggs, nutmeg, cinnamon and vanilla. Beat on medium speed until mixture is smooth. Pour filling into an unbaked pie crust.","Bake at 350 degrees F (175 degrees C) for 55 to 60 minutes, or until knife inserted in center comes out clean. Pie will puff up like a souffle, and then will sink down as it cools."]`,
          ingredients: `["1 sweet potato",".5 cup butter","1 cup white sugar",".5 cup milk","2 eggs",".5 teaspoon nutmeg",".5 teaspoon ground cinnamon","1 teaspoon vanilla extract","1(9in.) unbaked pie crust"]`,
          course: 'Dessert',
          diet: `["vegetarian"]`
        },
        {
          id: 2,
          recipe_name: 'The Best Granola',
          user_id: 6,
          image_url: 'https://cookieandkate.com/images/2015/10/best-granola-recipe-1.jpg',
          description: 'I love this granola so much, you gotta try.',
          instructions: `["Preheat oven to 350 degrees Fahrenheit and line a large, rimmed baking sheet with parchment paper.","In a large mixing bowl, combine the oats, nuts and/or seeds, salt and cinnamon. Stir to blend.","Pour in the oil, maple syrup and/or honey and vanilla. Mix well, until every oat and nut is lightly coated. Pour the granola onto your prepared pan and use a large spoon to spread it in an even layer.","Bake until lightly golden, about 21 to 24 minutes, stirring halfway (for extra-clumpy granola, press the stirred granola down with your spatula to create a more even layer). The granola will further crisp up as it cools.","Let the granola cool completely, undisturbed (at least 45 minutes). Top with the dried fruit (and optional chocolate chips, if using). Break the granola into pieces with your hands if you want to retain big chunks, or stir it around with a spoon if you don’t want extra-clumpy granola.","Store the granola in an airtight container at room temperature for 1 to 2 weeks, or in a sealed freezer bag in the freezer for up to 3 months. The dried fruit can freeze solid, so let it warm to room temperature for 5 to 10 minutes before serving."]`,
          ingredients: `["4 cups rolled oats","1.5 raw nuts","1 teaspoon sea salt",".5 teaspoon ground cinnamon",".5 cup coconut oil",".5 cup maple syrup","1 teaspoon vanilla extract","2/3 cup dried fruit"]`,
          course: 'Snack',
          diet: `["vegetarian"]`
        },
        {
          id: 3,
          recipe_name: 'Whole Wheat Banana Pancakes',
          user_id: 2,
          image_url: 'https://cookieandkate.com/images/2018/11/whole-wheat-banana-pancakes-recipe-1-1-1100x1648.jpg',
          description: 'Made this for my roommates, they loved it!',
          instructions: `["If you’re using an electric skillet, preheat it to 350 degrees Fahrenheit now. In a medium bowl, combine the flour, baking powder, cinnamon and salt. Whisk to blend.","In a smaller bowl, combine the milk, mashed banana, egg, maple syrup, butter and vanilla. Whisk until blended. Pour the liquid mixture into the flour mixture and mix just until combined.","If you are not using an electric skillet, heat a heavy cast iron skillet or nonstick griddle over medium-low heat. You’re ready to start cooking pancakes once a drop of water sizzles on contact with the hot surface. If necessary, lightly oil the cooking surface with additional butter or coconut oil, carefully wiping up excess with a paper towel (nonstick surfaces likely won’t require any oil).","Using a ⅓-cup measuring cup, scoop the batter onto the hot skillet, leaving a couple of inches around each pancake for expansion. Cook until small bubbles form on the surface of the pancakes, 2 to 3 minutes (you’ll know it’s ready to flip when about ½-inch of the perimeter is matte instead of glossy).","Flip the pancakes, then cook until lightly golden on both sides, 1 to 2 minutes more. Repeat the process with the remaining batter, adding more butter or oil and adjusting the heat as necessary.","Serve immediately or keep warm in a 200 degree Fahrenheit oven. If desired, top individual servings with a spread of peanut or almond butter and/or sliced bananas, and serve with more maple syrup or honey on the side.","Leftover pancakes can be stored in the refrigerator for up to 3 days, or frozen for up to 3 months. To reheat, stack leftover pancakes and wrap them in a paper towel before gently reheating in the microwave."]`,
          ingredients: `["1 cup white whole wheat flour","1 tablespoon baking powder",".5 teaspoon ground cinnamon","1/4 teaspoon fine sea salt","2/3 cup milk of choice",".5 cup mashed ripe banana","1 large egg","2 tablespoons maple syrup",".5 teaspoon vanilla extract"]`,
          course: 'Breakfast',
          diet: `["vegetarian"]`
        },
        {
          id: 4,
          recipe_name: 'Caprese Pasta Salad',
          user_id: 1,
          image_url: 'https://cookieandkate.com/images/2013/07/caprese-pasta-recipe-2.jpg',
          description: 'The perfect fast meal!',
          instructions: `["Bring a large pot of salted water to boil and cook the pasta until al dente, according to package instructions. Drain the pasta and set it aside.","While the pasta is cooking, combine the olive oil, tomatoes and salt in a large, non-reactive skillet or Dutch oven over medium heat. Cover the skillet (use a baking sheet if you don’t have a better lid). Cook, stirring occasionally, until most of the tomatoes have started to burst out of their skins and the olive oil has a light red hue (about 6 to 12 minutes).","Remove the skillet from the heat and stir in the cooked pasta. Let the mixture cool for a few minutes while you chop the basil.","Stir the mozzarella balls and basil into the pasta. Add the vinegar, then taste and add additional vinegar and/or salt, if it doesn’t quite taste spectacular yet. For best flavor, let the mixture rest for about 20 minutes, so the pasta can absorb some of the sauce. Or, refrigerate it for future use.","This salad will keep well in the refrigerator for up to 4 days. Leftovers are great chilled or at room temperature. You can also reheat the pasta if you don’t mind the mozzarella melting (yum)."]`,
          ingredients: `["2 cups whole grain fusilli pasta","1/3 cup olive oil","2 pints cherry tomatoes",".5 teaspoon sea salt","8 ounces mozzarella pearls","several sprigs of fresh basil","2 to 3 teaspoons balsamic vinegar"]`,
          course: 'Dinner',
          diet: `["vegetarian"]`
        },
        {
          id: 5,
          recipe_name: 'Chicken and Waffles',
          user_id: 5,
          image_url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/10/9/4/WU1110H_Chicken-and-Waffles_s4x3.jpg.rend.hgtvcom.616.462.suffix/1444759015921.jpeg',
          description: 'My momma made these',
          instructions: `["For the fried chicken: Thoroughly rinse the chicken, then cover all the pieces with 1 3/4 cups of buttermilk. Soak in the fridge overnight or up to 24 hours.","When you're ready to fry the chicken, remove the bowl from the fridge and let it sit on the counter for 30 minutes to take off the chill.","In the meantime, preheat the oven to 360 degrees F and mix the breading. Put the flour, seasoned salt, paprika, pepper, thyme and cayenne (extra cayenne if you like heat) in a very large bowl and stir together well.","In a small bowl, combine the milk and remaining 1/4 cup buttermilk. Pour into the flour mixture and, with a fork, gradually mix until there are little lumps throughout. This will adhere to the chicken and make for a crispier breading. If necessary, add a little more flour or milk to the bowl in order to make it slightly lumpy.","Heat 1 1/2 to 2 inches of vegetable oil in a deep skillet over medium-high heat until a deep-fry thermometer registers 365 degrees F. Lower the heat slightly, if necessary, to keep the oil from getting hotter..."]`,
          ingredients: `["8 boneless chicken thighs","2 cups buttermilk","2.5 cups flour","1 tablespoon salt","1 teaspoon paprika","1 teaspoon ground pepper","1 teaspoon ground thyme",".5 teaspoon cayenne pepper","1/4 cup milk","vegetable oil","2 cups flour","1/4 cup sugar","1 tablespooon baking powder","1/2 teaspoon salt","1.5 cups milk","1 tablespoon vanilla","4 large egg whites","8 tablespoons salted butter","1 to 2 chopped jalapenos","1 cup pancake syrup","1/4 cup bourbon","1/2 stick butter","1/4 teaspoon cayenne"]`,
          course: 'Lunch',
          diet: `["dairy-free"]`
        },
        {
          id: 6,
          recipe_name: 'Quesadillas',
          user_id: 3,
          image_url: 'https://cookieandkate.com/images/2016/05/broccoli-rabe-quesadillas-2.jpg',
          description: 'The best darn quesadillas I ever had. Got in a recipe book!',
          instructions: `["First, prepare the broccoli rabe so it can marinate while you prepare the rest. Pull the broccoli rabe leaves from the stems and discard the stems. Wash and spin dry the leaves. Tear any large leaves into small, bite-sized pieces, then transfer the leaves to a large serving bowl, along with the chopped cilantro.","In a small bowl, combine the olive oil, lime juice, garlic, salt and red pepper flakes. Whisk until blended. Pour the dressing over the leaves and gently massage the dressing into the leaves until they are all lightly coated. Take a little bite, and add more lime juice and salt if you find it too bitter.","To cook the refried beans: In a medium saucepan over medium heat, warm the olive oil until shimmering. Add the shallot and salt. Cook, stirring often, until the shallot is tender and turning translucent, about 4 to 5 minutes. Add the garlic, cumin and chili powder and cook, while stirring constantly, until fragrant, about 30 seconds. Add the drained beans and water. Let the mixture come to a simmer and cook for 10 minutes, stirring often, and reducing heat as necessary to maintain a gentle simmer. Remove from heat and mash the beans with a potato masher, pastry cutter or fork until the mixture is thick and spreadable.","To cook the quesadillas: Spread the bean mixture evenly over each tortilla. Warm a medium-to-large skillet over medium heat. Transfer one tortilla to the warmed skillet and sprinkle about one-fourth of the cheese over the bean mixture. Spread a handful of marinated broccoli rabe leaves over one-half of the tortilla, leaving any large buds in the bowl. Once the cheese is melting, fold the cheesy side over the broccoli rabe. Brush the top of the quesadilla lightly with oil. Once the cheese is fully melted, flip the quesadilla, and brush the top with oil. Let each side cook until golden and crisp, flipping as necessary. Transfer the cooked quesadilla to a plate, and repeat for remaining quesadillas.","Let the cooked quesadillas rest for a few minutes to set the cheese, then use a pizza cutter or sharp chef’s knife to slice each quesadilla into three wedges. Serve with any remaining marinated broccoli rabe or beans on the side, as well as salsa verde and/or guacamole for dipping."]`,
          ingredients: `["1 large broccoli rabe","fresh cilantro","1 tablespoon olive oil","2 teaspoons lime juice","1 medium clove garlic","pinch of salt","pinch of red pepper flakes","1 tablespoon olive oil","1 medium shallot","1/4 teaspoon salt","1 clove garlic","1/2 teaspoon cumin","1/4 teaspoon chili powder","1 can black beans","1/3 cup water","4 small whole grain tortillas","2 cups grated Monterey Jack","olive oil for brushing"]`,
          course: 'Lunch',
          diet: `["vegetarian"]`
        },
        {
          id: 7,
          recipe_name: 'Minestrone Soup',
          user_id: 6,
          image_url: 'https://lifemadesweeter.com/wp-content/uploads/Minestrone-Soup-Recipe-Photo-Picture2.jpg',
          description: 'My grandmas soup.',
          instructions: `["Start off by chopping all of your vegetables. Soup is a great way to get rid of any leftover veggies you have in your fridge as well. Or, if you’re in a pinch, your local grocery store may also sell pre-chopped veggies just for soup.","Next, press the SAUTE button on your instant pot and drizzle in some olive oil. Add the onions and garlic and cook for about 2 minutes, until fragrant. Add the carrots, celery, basil, oregano, thyme, diced tomatoes, tomato paste and bay leaf.","Stir in dry uncooked pasta, vegetable broth, water (use less if you like it less watery) and season with salt and pepper to taste. Press Cancel then close the lid. Press the MANUAL (older models) or PRESSURE COOK (newer models) button and set for 2 minutes.","When the instant pot beeps, do a quick release by turning the valve to venting to release the pressure. Once the pressure is released, press cancel and push SAUTE. Stir in the kidney beans, cannelini beans and zucchini and cook for 5-6 minutes, or until pasta and beans are tender and cooked through.
          Stir in spinach and allow to sit until wilted (about 1 minute).","Add more water as needed if you like a thinner soup.
          Season with more salt and pepper as needed and stir in balsamic vinegar (if using) and serve warm with bread and top with Parmesan cheese and garnish with parsley if desired."]`,
          ingredients: `["1 small diced onion","2 cloves minced garlic","1 med carrot","1 large celery stalk","2 teaspoons dried basil","1 teaspoon dried oregano","3/4 teaspoon dried thyme","32-oz can diced tomatoes","3 tablespoons tomato paste","1 bay leaf","4 cups low sodium veggie broth","1/4 cup dry uncooked small shell pasta","1 med zucchini","1/4 cup canned red kidney beans","1/4 cup canned cannellini beans","1 cup baby spinach","1/2-1 teaspoon balsamic vinegar","shredded parmesan cheese"]`,
          course: 'Dinner',
          diet: `["vegetarian"]`
        },
        {
          id: 8,
          recipe_name: 'Quesadillas',
          user_id: 2,
          image_url: 'https://cookieandkate.com/images/2016/02/sweet-potato-black-bean-quesadillas-recipe.jpg',
          description: 'The best black bean and sweet potato quesadillas in the world!',
          instructions: `["Make the avocado salsa verde: In a food processor or blender, combine the salsa verde, avocado, cilantro and about 1 tablespoon lime juice. Blend until the salsa until it is super creamy, stopping to scrape down the sides as necessary. Scoop it into a bowl for dipping.","If you have a spiralizer: Slice off the pointy ends of the sweet potatoes, then spiralize the sweet potatoes using blade A (the skinniest noodle option). Warm 1 tablespoon olive oil over medium heat until shimmering, then add the spiralized sweet potato, chili powder, cumin and a pinch of salt. Cook, stirring often, until the noodles are tender and cooked through, about 8 to 10 minutes (I added another tablespoon oil to my cast iron skillet to prevent the noodles from sticking; non-stick skillets may not need any extra).","If you don’t have a spiralizer: Slice your sweet potatoes into ¼″ cubes. In a large skillet, warm the olive oil over medium heat. Add the chopped sweet potatoes and toss to coat, then add the chili powder, cumin and a pinch salt. Stir to combine. Once the pan is sizzling, add a scant ¼ cup water, then cover the pan and reduce heat to low to avoid burning the contents. Cook, stirring occasionally, until the sweet potato is tender and cooked through, about 10 minutes.","Make the quesadillas, one or two at a time: Heat a 10-inch skillet over medium heat. Warm one tortilla for about 30 seconds, flipping halfway. Flip once more, and sprinkle one-half of the tortilla with about ⅓ cup shredded cheese. Cover the cheese with ¼th of the cooked sweet potatoes and ¼ cup beans. Sprinkle about ⅓ cup cheese over the fillings and fold over the empty side of the tortilla to enclose the fillings. Quickly brush the topside of the quesadilla with a light coating of oil, then flip it with a spatula. Let the underside of the quesadilla cook until golden and crispy, about 1 to 2 minutes. Brush the topside with a light coating of olive oil, then carefully flip it and cook until the underside is golden and crispy. Transfer it to a cutting board. Repeat with remaining quesadillas. Slice each quesadilla into three even wedges using a sharp pizza cutter or chef’s knife. Serve immediately, with avocado salsa verde on the side."`,
          ingredients: `["1 cup mild salsa verde","1 large avocado","big handful of fresh cilantro","1 tablespoon lime juice","12 ounces peeled sweet potato","olive oil","1 teaspoon chili powder","1/2 teaspoon cumin","salt","4 whole grain tortillas","3 cups monterey jack cheese","1 cup cooked black beans","2 teaspoons oil"`,
          course: 'Dinner',
          diet: `["vegetarian"]`
        },
        {
          id: 9,
          recipe_name: 'Sweet Potato Pie',
          user_id: 1,
          image_url: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Sweet-Potato-Pie_EXPS_GHBZ18_1203_B08_15_3b-696x696.jpg',
          description: 'My pie is better than the first one on here...trust me.',
          instructions: `["Place sweet potatoes in a medium saucepan; add water to cover. Bring to a boil. Reduce heat; cook, uncovered, until tender, 13-15 minutes. Drain potatoes; return to pan. Mash until very smooth; cool to room temperature.","In a bowl, cream butter and sugar. Add eggs; mix well. Add milk, two cups mashed sweet potatoes, vanilla, cinnamon, nutmeg and salt; mix well. Pour into pie shell. Bake at 425° for 15 minutes.","Reduce heat to 350°; bake until set or a knife inserted in the center comes out clean, about 35-40 minutes longer. Cool. Store in refrigerator."]`,
          ingredients: `["2 med cubed sweet potatoes", "1/3 cup butter", "1/2 cup sugar", "2 large eggs"]`,
          course: 'Dinner',
          diet: `["vegetarian"]`
        },
        {
          id: 10,
          recipe_name: 'Healthy Blueberry Muffins',
          user_id: 3,
          image_url: 'https://cookieandkate.com/images/2018/04/healthy-blueberry-muffins-with-honey-1-1.jpg',
          description: 'BLUEBERRY MUFFINS!!!',
          instructions: `["Preheat the oven to 350 degrees Fahrenheit. If necessary, grease all 12 cups on your muffin tin with butter, coconut oil or cooking spray (my pan is non-stick and doesn’t require any grease).","In a large mixing bowl, combine 1 ¾ cups of the flour with the baking powder, baking soda, salt and cinnamon. Mix them together with a whisk. In a medium mixing bowl, combine the oil and honey or maple syrup and beat together with a whisk. Add the eggs and beat well, then add the yogurt and vanilla. Mix well. (If the coconut oil solidifies in contact with cold ingredients, gently warm the mixture in the microwave in 30 second bursts.)","Pour the wet ingredients into the dry and mix with a big spoon, just until combined (a few lumps are ok). In a small bowl, toss the blueberries with the remaining 1 teaspoon flour (this helps prevent the blueberries from sinking to the bottom). Gently fold the blueberries into the batter. The mixture will be thick, but don’t worry.","Divide the batter evenly between the 12 muffin cups (I used an ice cream scoop with a wire level, which worked perfectly). Sprinkle the tops of the muffins with turbinado sugar. Bake the muffins for 22 to 24 minutes, or until the muffins are golden on top and a toothpick inserted into a muffin comes out clean.","Place the muffin tin on a cooling rack to cool. You might need to run a butter knife along the outer edge of the muffins to loosen them from the pan.","If you have leftover muffins, store them, covered, at room temperature for 2 days, or in the refrigerator for up to 5 days. Freeze leftover muffins for up to 3 months."]`,
          ingredients: `["1 3/4 cups white whole flour","1 teaspoon baking powder","1/2 teaspoon baking soda","1/2 teaspoon sea salt","1/4 teaspoon ground cinnamon","1/3 cup melted coconut oil","1/2 cup honey","2 eggs","1 cup plain Greek yogurt","2 teaspoons vanilla extract","1 cup blueberries","1 tablespoon turbinado sugar"]`,
          course: 'Breakfast',
          diet: `["Vegetarian"]`
        },
        {
          id: 11,
          recipe_name: 'Easy Gluten Free Waffles',
          user_id: 1,
          image_url: 'https://cookieandkate.com/images/2014/09/gluten-free-oat-waffles-recipe-2-1.jpg',
          description: 'Gluten free waffles.',
          instructions: `["In a mixing bowl, whisk together the dry ingredients: oat flour, baking powder, salt and cinnamon. In another bowl, whisk together the wet ingredients: milk, melted coconut oil or butter, eggs, maple syrup and vanilla extract. (If your coconut oil solidifies on contact with cold ingredients, gently heat the wet mixture in the microwave in ten seconds intervals, until it melts again.)","Pour the wet ingredients into the dry ingredients. Stir with a big spoon until just combined (the batter will still be a little lumpy). Let the batter rest for 10 minutes so the oat flour has time to soak up some of the moisture. Plug in your waffle iron to preheat now (if your waffle iron has a temperature/browning dial, set it to medium-high).","Once 10 minutes is up, give the batter one more swirl with your spoon. Pour batter onto the heated waffle iron, enough to cover the center and most of the central surface area, and close the lid. Once the waffle is deeply golden and crisp, transfer it to a cooling rack or baking sheet. Don’t stack your waffles on top of each other, or they’ll lose crispness. If desired, keep your waffles warm by placing them in a 200 degree oven until you’re ready to serve.","Repeat with remaining batter. Serve waffles with maple syrup and nut butter, or any other toppings that sound good!"]`,
          ingredients: `["4 tablespoon olive oil","1 yellow onion","2 carrots","2 ribs celery","1/4 cup tomato paste","2 cups chopped veggies","4 cloves garlic","1/2 teaspoon oregano","1/2 teaspoon dried thyme","1 large can diced tomatoes","4 cups veggie broth","2 cups water","1 teaspoon sea salt","2 bay leaves","red pepper flakes","ground pepper","1 cup whole grain orecchiette","1 can Great Northern beans","2 cups baby spinach","2 teaspoons lemon juice","freshly grated parmesan cheese"]`,
          course: 'Breakfast',
          diet: `["vegetarian,Gluten-free"]`
        },
        {
          id: 12,
          recipe_name: 'Huevos Rancheros',
          user_id: 7,
          image_url: 'https://cookieandkate.com/images/2017/05/best-huevos-rancheros-recipe-2.jpg',
          description: 'Huevos Rancheros from my Ma!',
          instructions: `["To prepare the pico de gallo: In a medium bowl, combine the tomatoes, onion, cilantro, lime juice, and salt. Stir to combine, then set the bowl aside for later.", "To cook the black beans: In a small saucepan over medium heat, warm the olive oil until shimmering. Add the onions and salt. Cook, stirring occasionally, until the onions have softened and are turning translucent, about 3 to 6 minutes.","Add the cumin and cook, stirring constantly, until fragrant, about 30 seconds. Pour in the drained beans and water. Stir, cover and cook for 5 minutes. Reduce the heat to low, then remove the lid and use a potato masher or the back of a fork to mash up about at least half of the beans. Continue to cook the beans, uncovered, stirring often, for 2 to 3 more minutes, until thickened.","Remove the pot from the heat and stir in the pepper and lime juice. Taste and add more salt, pepper or lime juice if necessary. If the beans seem dry, add a very small splash of water and stir to combine. Cover until you’re ready to serve.","Meanwhile, warm the salsa. Pour the salsa into a medium saucepan over medium heat. Bring the salsa to a simmer, stirring occasionally, and then reduce the heat to low until you’re ready to serve. (Or, warm the salsa in a bowl in the microwave—it won’t condense as much but it’ll work!)","In a small skillet over medium heat, warm each tortilla individually, flipping as necessary. Spread the black bean mixture over each tortilla and place each tortilla on an individual plate. Set aside.","To fry the eggs: In the same skillet over medium heat, pour in 1 teaspoon olive oil and wait until it’s shimmering. Carefully crack an egg and pour it into the skillet without breaking the yolk. Fry the egg, lifting and tilting the pan occasionally to redistribute the oil, until the whites are set and the yolk is cooked to your preferred level of doneness. Place the fried egg on top of a prepared tortilla and repeat with the remaining eggs.","Spoon about one-fourth of the warmed salsa across each dish, avoiding the egg yolk. Use a slotted spoon or fork to do the same with the pico de gallo, leaving the messy tomato juices behind. Sprinkle with freshly ground black pepper and add any additional garnishes you might like.","Serve immediately. If you don’t use up all of your beans, leftovers are a great dip for tortilla chips."]`,
          ingredients: `["2 ripe tomatoes","1/4 cup finely chopped white onion","1/4 cup chopped cilantro","2 tablespoons lime juice","1/4 teaspoon sea salt","2 teaspoons olive oil","1/4 cup chopped white onion","1/4 teaspoon sea salt","1 teaspoon cumin","1 can black beans","1/4 cup water","black pepper","1/2 teaspoon lime juice","1.5 cups red salsa","4 teaspoons olive oil","4 eggs","4 corn tortillas","1/2 cup shredded monterey jack","black pepper"]`,
          course: 'Dinner',
          diet: `["vegetarian"]`
        },
        {
          id: 13,
          recipe_name: 'Huevos Rancheros',
          user_id: 5,
          image_url: 'https://www.mexicanplease.com/wp-content/uploads/2018/08/huevos-rancheros-with-egg-yolk.jpg',
          description: 'My version of Huevos!',
          instructions: `["To make the Tomato Jalapeno Salsa, start by rinsing and de-stemming the tomatoes.  Roast them in a 400F oven for 20-25 minutes.  Add the roasted tomatoes to a blender along with 1/2 onion, 1 peeled garlic clove, and 1/2 jalapeno.  Combine well and taste for seasoning and heat, adding salt and more jalapeno if necessary.","For this batch I sauteed each tortilla in a dollop of oil over medium heat, adding the beans and cheese to the tortilla in the pan.   This will crisp up the tortilla and also heat up the beans at the same time.","For sunny side up eggs, heat up 1-2 tablespoons of oil in a saute pan.  Crack the eggs into the pan and cook until the top of the eggs are set.  You can cover with a lid or some foil to ensure the tops are cooking.","Each tortilla gets a layer of refried beans, cheese (optional), 1-2 eggs, and plenty of the Tomato Jalapeno Salsa.  Optional garnishes include cilantro, Cotija cheese, hot sauce, and lime juice."]`,
          ingredients: `["4 tablespoon olive oil","1 yellow onion","2 carrots","2 ribs celery","1/4 cup tomato paste","2 cups chopped veggies","4 cloves garlic","1/2 teaspoon oregano","1/2 teaspoon dried thyme","1 large can diced tomatoes","4 cups veggie broth","2 cups water","1 teaspoon sea salt","2 bay leaves","red pepper flakes","ground pepper","1 cup whole grain orecchiette","1 can Great Northern beans","2 cups baby spinach","2 teaspoons lemon juice","freshly grated parmesan cheese"]`,
          course: 'Dinner',
          diet: `["vegetarian"]`
        },
        {
          id: 14,
          recipe_name: 'Pumpkin Bread',
          user_id: 4,
          image_url: 'https://cookieandkate.com/images/2018/10/healthy-pumpkin-bread-recipe-3.jpg',
          description: 'Nothing better than pumpkin bread on a winter night!',
          instructions: `["Preheat oven to 325 degrees Fahrenheit (165 degrees Celsius) and grease a 9×5-inch loaf pan.","In a large bowl, beat the oil and honey together together with a whisk. Add the eggs and whisk until blended. (If your coconut oil solidifies on contact with cold ingredients, simply let the bowl rest in a warm place for a few minutes, like on top of your stove, or warm it for about 10 seconds in the microwave.)","Add the pumpkin purée, milk, pumpkin spice, baking soda, vanilla and salt, and whisk to blend. Lastly, switch to a big spoon and stir in the flour, just until combined. Some lumps are ok! If you’re adding any additional mix-ins, gently fold them in now.","Pour the batter into your greased loaf pan and sprinkle lightly with cinnamon. If you’d like a pretty swirled effect, run the tip of a knife across the batter in a zig-zag pattern.","Bake for 55 to 60 minutes, or until a toothpick inserted into the center comes out clean (typically, if I haven’t added any mix-ins, my bread is done at 55 minutes; if I have added mix-ins, it needs closer to 60 minutes). Let the bread cool in the loaf pan for 10 minutes, then carefully transfer the bread to a cooling rack to cool for 20 minutes before slicing."]`,
          ingredients: `["1/3 cup coconut oil","1/2 cup honey","2 eggs","1 cup pumpkin puree","1/4 cup milk","1.5 teaspoons pumpkin spice blend","1 teaspoon baking soda","1/2 teaspoon salt","1 3/4 cups white whole wheat flour","pinch of ground cinnamon"]`,
          course: 'Dessert',
          diet: `["vegetarian","sugar-free"]`
        }
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('recipes_id_seq', (SELECT MAX(id) FROM recipes))")
      })
    })
}
