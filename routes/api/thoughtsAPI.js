const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    addThought,
    updateThought,
    deleteThought,
} = require('../../controllers/thoughtControllers.js');

router.route('/').get(getThoughts).post(addThought);

// /api/courses/:courseId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

  module.exports = router
