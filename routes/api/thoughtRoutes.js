const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route('/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/responses
router.route('/:ThoughtId/responses').post(addThoughtResponse);

// /api/thoughts/:thoughtId/responses/:responseId
router.route('/:ThoughtId/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;
