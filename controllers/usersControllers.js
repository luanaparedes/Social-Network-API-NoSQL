const { ObjectId } = require('mongoose').Types;
const { Users, Thought } = require('../models');

module.exports = {
    // get all users

    getUsers(req, res) {
        Users.find()
        .then(async (users) => {
            const userObj ={
                users
            }
            return res.json(userObj)
        })
        .catch((err) => {
            console.log(err)
            return res.status(500).json(err)
          })
    },

    getSingleUser (req, res) {
        Users.findOne({ _id: req.params.usersId })
          .select('-__v')
          .then(async (student) =>
            !student
              ? res.status(404).json({ message: 'No Users with that ID' })
              : res.json({
                  student
                })
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          })
    },

    addUser(req, res) {
        Users.create(req, res)
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
      },

      deleteUser(req, res) {
        Users.findOneAndRemove({ _id: req.params.UsersId })
          .then((users) =>
            !users
              ? res.status(404).json({ message: 'No such user exists' })
              : Course.findOneAndUpdate(
                  { users: req.params.studentId },
                  { $pull: { users: req.params.usersId } },
                  { new: true }
                )
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
    
      updateUser(req, res) {
        Users.findOneAndUpdate(
          { _id: req.params.usersId },
          { runValidators: true, new: true }
        )
          .then((users) =>
            !users
              ? res.status(404).json({ message: 'No users with this id!' })
              : res.json(users)
          )
          .catch((err) => res.status(500).json(err));
      },

      addFriend(req, res) {
        Users.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.params.friendId } },
          { runValidators: true, new: true }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No User found with this ID!" })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },

      deleteFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { new: true }
        )
          .then(
            (user) =>
              !user
                ? res.status(404).json({ message: "No User found with this ID!" })
                : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
}