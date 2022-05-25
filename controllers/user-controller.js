const { User } = require('../models');

const userController = {
    // methods
    // get all users
    //  GET /api/users
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },
    // find a user by id
    // GET /api/users/:id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id})
            .then(dbUserData => {
                // if no user found, send 404
                if(!dbUserData){
                    res.status(404).json({message: 'No thought found with this id!' });
                    return;
                } 
                res.json(dbUserData)
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err)
            })
    },

    // create a user
    // POST /api/users
    createUser({ body }, res){
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err))
    },

    // update a user by id
    // PUT /api/users/:id
    updateUser({ params, body}, res) {
        User.findOneAndUpdate({ _id: params.id}, body, { new: true})
            .then(dbUserData => {
                if (!dbUserData){
                    res.status(404).json({ message: 'no user found with this id'})
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err))
    },
    // delete a user by id
    // DELETE /api/users/:id
    deleteUser({ params}, res) {
        User.findOneAndDelete({ _id: params.id}, { new: true})
            .then(dbUserData => {
                if(!dbUserData){
                    res.status(404).json({ message: 'no user found with this id'})
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(404).json(err))
    },
    // TODO
    // /api/users/:userId/friends/:friendId
    // POST to add a new friend to a user's friend list
    addFriend({ params, body}, res) {
        User.findOneAndUpdate({ _id: params.userId}, { $push: { friends: params.friendId  } }, { new: true})
            .then(dbUserData => {
                if (!dbUserData){
                    res.status(404).json({ message: 'no user found with this id'})
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err))
    },
    // DELETE to remove a friend from a user's friend list
    // /api/users/:userId/friends/:friendId

    deleteFriend({ params}, res) {
        User.findOneAndUpdate({ _id: params.userId}, { $pull: { friends: params.friendId  } }, { new: true})
            .then(dbUserData => {
                if(!dbUserData){
                    res.status(404).json({ message: 'no user found with this id'})
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(404).json(err))
    },
}

module.exports = userController;