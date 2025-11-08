import express from 'express';
import tagController from './controller';

const tagRouter: express.Router = express.Router();

tagRouter.get('/tags', tagController.getAll);
tagRouter.get('/tags/:id', tagController.getById);

export default tagRouter;