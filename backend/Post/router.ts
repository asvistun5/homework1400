import express from 'express';
import postController from './controller';
import { authMiddleware } from '../middleware/authMiddleware';

const postRouter: express.Router = express.Router();

postRouter.get('/timestamp', postController.timestamp);
postRouter.get('', postController.getAll);
postRouter.get('/:id', postController.getById);
postRouter.post('', authMiddleware, postController.create);
postRouter.patch('/:id', authMiddleware, postController.update);
postRouter.delete('/:id', authMiddleware, postController.delete);


export default postRouter;