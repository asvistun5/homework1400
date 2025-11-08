import { Request, Response } from 'express';
import { tagService } from './service';


const tagController = {

    async getAll(req: Request, res: Response) {
        try {
            const skip = Number(req.query.skip) || 0;
            const take = Number(req.query.take) || 10;

            const tags = await tagService.getAll(skip, take);
            res.json({ tags });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error reading file' });
        }
    },

    async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (!id) return res.status(400).json({ error: 'ID is required' });

            const tag = await tagService.getById(id);
            if (!tag) return res.status(404).json({ error: 'not found' });

            res.json(tag);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error reading posts file' });
        }
    }
};

export default tagController;