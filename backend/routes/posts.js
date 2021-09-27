const express = require('express');
const postsController = require('../controllers/posts');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/get', postsController.fetchAll);
router.get('/userId', postsController.findByUserId);
router.get('/getById', postsController.findById);
router.post('/changeStatus', postsController.changeStatus);

router.post(
  '/',
  postsController.postPost
);

router.delete('/:id', auth, postsController.deletePost);

module.exports = router;
