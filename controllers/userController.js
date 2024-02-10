const { User } = require('../models')

module.exports = {

    async getAllUsers(req, res) {
        try {
            const users = await User.find()
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async deleteUser(req, res) {
        try {
            const users = await User.deleteOne({ _id: req.params.id })
            if (users.deletedCount > 0) {
                res.status(200).json({ message: 'user deleted' })
            } else {
                res.status(404).json({ message: 'no user found with that id' })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },

    async newUser(req, res) {
        try {
            const users = await User.create({
                name: req.body.name,
            })
            res.status(200).json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    }

}