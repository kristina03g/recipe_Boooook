const Router = require('express')
const router = new Router()

const routerRecipe = require('./recipeRouter')

router.use('/recipe', routerRecipe)

module.exports = router