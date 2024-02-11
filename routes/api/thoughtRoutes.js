const router = require('express').Router();
const { getAllUsers, deleteUser, newUser } = require('../../controllers/userController')

router.route('/').get(getAllUsers)

router.route('/',).post(newUser)
// Route to create new user
// request body:
// {name: username}

router.route('/:id',).delete(deleteUser)

module.exports = router