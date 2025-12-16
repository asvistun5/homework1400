import express from 'express';
import userController from './controller';
import { authMiddleware } from '../middleware/authMiddleware';

const userRouter: express.Router = express.Router();

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.register);
userRouter.get('/me', authMiddleware, userController.me);

export default userRouter;