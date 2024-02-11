const { User, Thoughts } = require('../models')

module.exports = {

    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thoughts.find()
            res.status(200).json(thoughts)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async newThought(req, res) {
        try {
            const newThought = await Thoughts.create({
                userId: req.body.userId,
                content: req.body.content
            })
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: newThought._id } },
                { new: true }
            )
            if (!user) {
                res.status(404).json({ message: 'no user found with that id' })
            }
            res.status(200).json(
                { message: 'success' }
                // newThought
            )
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async deleteThought(req, res) {
        try {
            const users = await User.findOneAndUpdate(
                { thoughts: req.params.id },
                { $pull: { thoughts: req.params.id } }, { new: true })
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}