const connection = require('../config/connection')
const { User, Thought } = require('../models')

// Creates a connection to mongodb
connection.once('open', async () => {
    // Delete the entries in the collection
    await User.deleteMany({})
    await Thought.deleteMany({})

    // user array to populate User collection
    const users = [
        {
            username: 'karri',
            email: 'karri@test.com'
        },
        {
            username: 'avery',
            email: 'avery@test.com'
        }
    ]

    const thoughts = [
        {
            thoughtText: 'A long time ago, in a Galaxy far, far away..',
            username: 'Steve'
        },
        {
            thoughtText: 'The fact of the matter is that Han shot first.',
            username: 'Sally'
        }
    ]

    // waiting for users to be inserted into the database
    await User.collection.insertMany(users)

    await Thought.collection.insertMany(thoughts)

    console.table(users)
    console.table(thoughts)
    process.exit()
})