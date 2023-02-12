const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    addUser,
    deleteUser,
    updateUser,
    addFriend,
    deleteFriend
} = require('../../controllers/usersControllers.js')


router.route('/').get(getUsers).post(addUser);

router.route('/:usersId').get(getSingleUser).delete(deleteUser);

router.route('/:usersId').put(updateUser);

// friend route remove and add

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;
