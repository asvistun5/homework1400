import express from 'express';
import userController from './controller';

const router: express.Router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/me', userController.me);

export default router;