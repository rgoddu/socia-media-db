const { model, Schema } = require('mongoose')

const thoughtsSchema = new Schema(
    {
        content: String,
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reactions'
            }
        ]
    }
)

const Thoughts = model('thoughts', thoughtsSchema)
module.exports = Thoughts