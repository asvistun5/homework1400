import express from 'express';
import tagController from './controller';

const router: express.Router = express.Router();

router.get('/tags', tagController.getAll);
router.get('/tags/:id', tagController.getById);

export default router;