const { Reaction, Thought, User } = require('../models')

//get all thoughts
const getThoughts = async (req, res) => {
    try {
       const allThoughts = await Thought.find().exec()
        res.json(allThoughts)
    }catch(err){
        res.status(500).json(err)
    }
}

const getOneThought = async (req, res) => {
    try{
        const oneThought = await Thought.findOne({ _id: req.params.thoughtId })
        res.json(oneThought)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {


// GET to get all thoughts
getThoughts,
// GET to get a single thought by its _id
getOneThought
// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value

}