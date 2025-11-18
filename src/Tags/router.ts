import express from 'express';
import tagController from './controller';

const tagRouter: express.Router = express.Router();

tagRouter.get('', tagController.getAll);
tagRouter.get('/:id', tagController.getById);

export default tagRouter;