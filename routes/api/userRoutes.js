const router = require('express').Router()
const { getUsers, createUser, getOneUser, updateUser, deleteUser, addFriend, deleteFriend } = require('../../controllers/userController')

//YOUR CODE HERE BUDDY

// GET all users and POST a new user
router.route('/').get(getUsers).post(createUser)
// GET a single user by its _id and populated thought and friend data

//GET one user, PUT to update a user, and DELETE one user
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser)

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

// POST a new user:

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }

// PUT to update a user by its _id

// DELETE to remove user by its _id

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list



module.exports = router