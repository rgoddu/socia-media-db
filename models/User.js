const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thoughts'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    }
)

const User = model('user', userSchema)
module.exports = User;