const { model, Schema } = require('mongoose')

const reactionsSchema = new Schema(
    {
        reaction: {
            type: String,
            required: true
        },
    }
)

const Reactions = model('reactions', reactionsSchema)
module.exports = Reactions