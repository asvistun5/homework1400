import { Request, Response } from 'express';
import postService from './service';
import moment from 'moment';

const postController = {
    timestamp(req: Request, res: Response) {
        res.json({ timestamp: moment().format('YYYY-MM-DD HH:mm:ss') });
    },

    getAll(req: Request, res: Response) {
        try {
            const skip = Number(req.query.skip) || 0;
            const take = Number(req.query.take) || 10;
            const posts = postService.getAll(skip, take);
            res.json({ posts });
        } catch {
            res.status(500).json({ error: 'Error reading posts file' });
        }
    },

    getById(req: Request, res: Response){
        try {
            const id = req.params.id;
            if (!id) return res.status(400).json({ error: 'ID is required' });
            
            const post = postService.getById(id);
            if (!post) return res.status(404).json({ error: 'Not found' });
            res.json(post);
        } catch {
            res.status(500).json({ error: 'Error reading posts file' });
        }
    },

    async create(req: Request, res: Response) {
        try {
            const { title, description, image } = req.body;
            if (!title || !description || !image) {
                res.status(422).json({ error: 'Some param is required' });
                return;
            }
            const newPost = await postService.create({ title, description, image });
            res.status(201).json(newPost);
        } catch {
            res.status(500).json({ error: 'Error saving post' });
        }
    }
};


export default postController;