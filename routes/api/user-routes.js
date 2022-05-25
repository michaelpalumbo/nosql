const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller.js')

// GET all users and POST a user at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

    // add & delete a friend
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend)
// GET user, PUT, DELETE at /api/users/:id

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;