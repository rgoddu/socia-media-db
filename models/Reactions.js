const { model, Schema } = require('mongoose')

const reactionsSchema = new Schema(
    {
        reaction: String,
    }
)

const Reactions = model('reactions', reactionsSchema)
module.exports = Reactions