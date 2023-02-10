const router = require('express').Router();
const { Users, Friends } = require('../models')

const {
    getUsers,
    getSingleUser,
    addUser,
    deleteUser,
    updateUser
} = require('../../controllers/usersControllers.js')


router.route('/').get(getUsers).post(addUser);

// /api/students/:studentId
router.route('/:usersId').get(getSingleUser).delete(deleteUser);

// /api/students/:studentId/assignments
router.route('/:usersId').put(updateUser);

// friend route remove and add
// router.route('/:usersId/users/:userId').delete(removeAssignment);

module.exports = router;
