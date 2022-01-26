const router = require('express').Router()
const { getThoughts, getOneThought, newThought, updateThought, deleteThought, postReaction, deleteReaction } = require('../../controllers/thoughtController.js')
//YOUR CODE HERE BUDDY

// GET to get all thoughts, POST to post a new thought
router.route('/').get(getThoughts).post(newThought)
// GET to get a single thought by its _id & PUT to update a thought & DELETE to delete a thought
router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought)

// POST to create a reaction stored in a single thought's reactions array field
router.route('/:id/reactions').post(postReaction)
// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/:id/reactions/:reactionId').delete(deleteReaction)
module.exports = router