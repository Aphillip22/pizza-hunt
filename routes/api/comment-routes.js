const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

//add comment route to /api/comments/<pizzaId>
router
  .route('/:pizzaId')
  .post(addComment);

//remove comment route to /api/comments/<pizzaId>/<commentId>
router
  .route('/:pizzaId/:commentId')
  .delete(removeComment);

module.exports = router;