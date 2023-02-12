const { Thought, reactions } = require('../models')

module.exports = {

    getThoughts(req, res) {
        Thought.find()
        .then(async (thought) => {
            const thoughtsObj ={
                thought
            }
            return res.json(thoughtsObj)
        })
        .catch((err) => {
            console.log(err)
            return res.status(500).json(err)
          })
    },

    getSingleThought (req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .then(async (thought) =>
            !thought
              ? res.status(404).json({ message: 'No thoughts with that ID' })
              : res.json({
                  thought
                })
          )
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          })
    },

    addThought(req, res) {
        Thought.create({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No such thought exists' })
              : Users.findOneAndUpdate(
                  { thought: req.params.thoughtId },
                  { $pull: { userId: req.params.userId } },
                  { new: true }
                )
          )
          .then((user) =>
            !user
              ? res.status(404).json({
                  message: 'No such user exists',
                })
              : res.json({ message: 'Thought successfully addded' })
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },

      deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No such thought exists' })
              : Course.findOneAndUpdate(
                  { thought: req.params.thoughtId },
                  { $pull: { thought: req.params.thoughtId } },
                  { new: true }
                )
          )
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },
    
      updateThought(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: 'No thought with this id!' })
              : res.json(course)
          )
          .catch((err) => res.status(500).json(err));
      },

      createReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: "No thought found with ID!" })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
      deleteReaction(req, res) {
        Thought.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $pull: { reactions: { reactionId: req.params.reactionId } } },
          { runValidators: true, new: true }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: "No thought found with this ID!" })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
}