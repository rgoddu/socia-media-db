const {User, Thoughts} = require('../models')

module.exports = {

    async getAllThoughts(req, res){
        try{
            const thoughts = await Thoughts.find()
            res.status(200).json(thoughts)
        }catch(err){
            res.status(500).json(err)
        }
    },

    async newUser(req,res){
        try{
            const thoughts = await Thoughts.create({
                content: req.body.name,
                content: req.body.name,
            })
            res.status(200).json(users)
        }catch(err){
            res.status(500).json(err)
        }
    },

    async deleteUser(req, res){
        try{
            const users = await User.deleteOne({_id: req.params.id})
            res.status(200).json(users)
        }catch(err){
            res.status(500).json(err)
        }
    }
}