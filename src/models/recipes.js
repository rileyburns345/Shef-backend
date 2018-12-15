//// MODEL \\\\
const knex = require('../../knex')

const getAll = () => {
  return knex('recipes')
    .then(recipes => {
      return recipes
    })
    .catch(err => Promise.reject(err))
}

const getOnePost = (id) => {
  return knex('recipes')
    .select('*')
    .where('id', id)
    .then(res => res)
    .catch(err => {
      Promise.reject(err)
    })
}

const getPostsByUserId = (user_id) => {
  return knex('recipes')
    .where('user_id', user_id)
    .then(recipe => {
      return recipe
    })
    .catch(err => Promise.reject(err))
}

const create = (id, body) => {
  let myobj = body
  myobj.user_id = id
  return knex('recipes')
    .insert(myobj)
    .returning('id')
    .then(recipe => {
      console.log('model .then post:', recipe[0])
      return post[0]
    })
    .catch(err => {
      console.log(`recipes post ${err}`)
    })
}

const updateOne = (id, body) => {
  let newPost = {}

  if (body.recipe_name) {
    newPost.recipe_name = body.recipe_name
  }
  if (body.image_url) {
    newPost.image_url = body.image_url
  }
  if (body.description) {
    newPost.description = body.description
  }
  if (body.instructions) {
    newPost.instructions = body.instructions
  }
  if (body.ingredients) {
    newPost.ingredients = body.ingredients
  }
  if (body.course) {
    newPost.course = body.course
  }
  if (body.diet) {
    newPost.diet = body.diet
  }
  
  return knex('recipes')
    .where('id', id)
    .then(data => {
      knex('recipes')
        .where('id', id)
        .limit(1)
        .update(newPost)
        .returning('*')
        .then(data => {
          res.json(data[0])
        })
    })
    .catch(err => {
      next(err)
    })
}

const deleteOne = (id) => {
  return knex('recipes')
    .where('id', id)
    .del()
    .returning('*')
    .then(recipe => recipe[0])
    .catch(err => Promise.reject(err))
}

module.exports = {
  getAll,
  getPostsByUserId,
  create,
  updateOne,
  deleteOne,
  getOnePost
}