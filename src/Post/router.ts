import express from 'express';
import postController from './controller';

const router: express.Router = express.Router();

router.get('/timestamp', postController.timestamp);
router.get('/posts', postController.getAll);
router.get('/posts/:id', postController.getById);
router.post('/posts', postController.create);
router.patch('/posts/:id', postController.update);


export default router;