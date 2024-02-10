const connection = require('../config/connection');
const { User, Thoughts, Reactions } = require('../models')
const {getRandomName} = require('./data')


connection.on('error', (err) => console.log(err))

connection.once('open', async () => {
    console.log('server connected')

    let userCheck = await connection.db.listCollections({ name: 'user' }).toArray()
    if (userCheck.length) {
        await connection.dropCollection('user')
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray()
    if (thoughtsCheck.length) {
        await connection.dropCollection('thoughts')
    }

    let reactionsCheck = await connection.db.listCollections({ name: 'reactions' }).toArray()
    if (reactionsCheck.length) {
        await connection.dropCollection('reactions')
    }

const users = []
for (let index = 0; index < 5; index++) {
    const userObject = {name: getRandomName()}
    users.push(userObject);
}
await User.collection.insertMany(users)
console.log(users)
process.exit(0)
})
