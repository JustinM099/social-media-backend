const connection = require('../config/connection')
const { User } = require('../models')

// Creates a connection to mongodb
connection.once('open', async () => {
    // Delete the entries in the collection
    await User.deleteMany({})

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

    // waiting for users to be inserted into the database
    await User.collection.insertMany(users)

    console.table(users)
})