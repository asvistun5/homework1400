const express = require('express');
const router = express.Router();

const postController = require('./controller');

router.get('/timestamp', postController.timestamp);
router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.getById);
router.post('/posts', postController.create);


module.exports = router