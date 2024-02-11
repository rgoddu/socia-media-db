const router = require('express').Router();
const { getAllThoughts, newThought, deleteThought } = require('../../controllers/thoughtController')

router.route('/').get(getAllThoughts)

router.route('/',).post(newThought)
// Route to create new user
// request body:
// {name: username}

router.route('/:id').delete(deleteThought)

module.exports = router