const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    addThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtControllers.js');

router.route('/').get(getThoughts).post(addThought);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);
  router.route('/:thoughtId/reactions')
  .post(createReaction);
  router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

  module.exports = router
