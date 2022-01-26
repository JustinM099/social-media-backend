const {  Thought, User } = require('../models')

//------------- THOUGHT ROUTES ---------------//


//get all thoughts
const getThoughts = async (req, res) => {
    try {
        const allThoughts = await Thought.find()
        res.json(allThoughts)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

//get one thought
const getOneThought = async (req, res) => {
    try {
        const oneThought = await Thought.findOne({ _id: req.params.id })
        res.json(oneThought)
    } catch (err) {
        res.status(500).json(err)
    }
}

//POST new thought
const newThought = async (req, res) => {
    try {
        const thought = await Thought.create(req.body)
        const user = await User.findOneAndUpdate(
            { username: req.body.username },
            { $push: { thoughts: thought._id } }
        )
        res.json({ thought, user })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

//PUT to update thought by id
const updateThought = async (req, res) => {
    try{const updatedThought = await Thought.findOneAndUpdate(
        { _id: req.params.id },
        req.body
    )
    res.json(updatedThought)
   }catch(err){
       console.log(err)
       res.status(500).json(err)
   }
}

//DELETE to delete thought by id
const deleteThought = async (req, res) => {
    try{
        const thought = await Thought.findOneAndDelete({_id: req.params.id})
        res.json(thought)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

//-------------------REACTION ROUTES----------------//

//POST a new reaction
const postReaction = async (req, res) => {
    try{
        const reaction = await Thought.findOneAndUpdate(
            {_id: req.params.id},
            {$push: {reactions: req.body}},
        )
        console.log(reaction)
        res.json(reaction)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

//DELETE a reaction
const deleteReaction = async (req, res) => {
    try{
        const reaction = await Thought.findOneAndUpdate(
            {_id: req.params.id},
            {$push: {reactions: req.body}},
        )
        console.log(reaction)
        res.json(reaction)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {
    getThoughts,
    getOneThought,
    newThought,
    updateThought,
    deleteThought,
    postReaction,
    deleteReaction
}