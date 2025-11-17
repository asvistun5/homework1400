import express from 'express';
import postController from './controller';
import { authMiddleware } from '../middleware/authMiddleware';

const postRouter: express.Router = express.Router();

postRouter.get('/timestamp', postController.timestamp);
postRouter.get('/posts', postController.getAll);
postRouter.get('/posts/:id', postController.getById);
postRouter.post('/posts', authMiddleware, postController.create);
postRouter.patch('/posts/:id', postController.update);
postRouter.delete('/posts/:id', postController.delete);


export default postRouter;