import { Request, Response } from 'express';
import { PostService } from './service';
import moment from 'moment';
import { UpdatePost } from './types';

const postController = {
    timestamp(req: Request, res: Response) {
        res.json({ timestamp: moment().format('YYYY-MM-DD HH:mm:ss') });
    },

    async getAll(req: Request, res: Response) {
        try {
            const skip = Number(req.query.skip) || 0;
            const take = Number(req.query.take) || 10;

            const posts = await PostService.getAll(skip, take);
            res.json({ posts });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error reading posts file' });
        }
    },

    async getById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (!id) {
                res.status(400).json({ error: 'ID is required' });
                return;
            }

            const post = await PostService.getById(id);
            if (!post) {
                res.status(404).json({ error: 'Post not found' });
                return;
            }

            res.json(post);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error reading posts file' });
        }
    },

    async create(req: Request, res: Response) {
        try {
            const { title, description, image } = req.body;

            // @ts-ignore
            const userId = req.userId;

            if (!userId) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }

            if (!title || !description || !image) {
                res.status(422).json({ error: 'All fields (title, description, image) are required' });
                return;
            }

            const newPost = await PostService.create({
                title,
                description,
                image,
                createdById: userId
            });

            res.status(201).json(newPost);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error saving post' });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            const { title, description, image } = req.body;

            if (isNaN(id)) {
                res.status(400).json({ error: 'ID must be a number' });
                return;
            }

            if (title && typeof title !== 'string') {
                res.status(400).json({ error: 'Title must be a string' });
                return;
            }

            if (description && typeof description !== 'string') {
                res.status(400).json({ error: 'Description must be a string' });
                return;
            }

            if (image && typeof image !== 'string') {
                res.status(400).json({ error: 'Image must be a string' });
                return;
            }

            const post = await PostService.getById(id);
            if (!post) {
                res.status(404).json({ error: 'Post not found' });
                return;
            }

            const updatedPost: UpdatePost = {
                id: post.id,
                title: title ?? post.title,
                description: description ?? post.description,
                image: image ?? post.image,
                date: post.date,
            };

            const result = await PostService.update(id, updatedPost);
            if (!result) {
                res.status(500).json({ error: 'Error updating post' });
                return;
            }

            res.json(result);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error updating post' });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                res.status(400).json({ error: 'ID must be a number' });
                return;
            }

            const deletedPost = await PostService.delete(id);

            if (!deletedPost) {
                res.status(404).json({ error: 'Post not found' });
                return;
            }

            res.json({ message: 'Post deleted successfully', deletedPost });

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error deleting post' });
        }
    }
};

export default postController;