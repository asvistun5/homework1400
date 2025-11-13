import { Request, Response } from 'express';
import { PostService } from './service';
import moment from 'moment';
import { Post, CreatePostData, UpdatePostData } from './types';


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
            if (!id) return res.status(400).json({ error: 'ID is required' });

            const post = await PostService.getById(id);
            if (!post) return res.status(404).json({ error: 'Post not found' });

            res.json(post);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error reading posts file' });
        }
    },

    async create(req: Request, res: Response) {
        try {
            const { title, description, image } = req.body;

            if (!title || !description || !image) {
                return res.status(422).json({ error: 'All fields (title, description, image) are required' });
            }

            const newPost = await PostService.create({ title, description, image });
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
        
            if (isNaN(id)) return res.status(400).json({ error: 'ID must be a number' });
        
            if (title && typeof title !== 'string') return res.status(400).json({ error: 'Title must be a string' });
            if (description && typeof description !== 'string') return res.status(400).json({ error: 'Description must be a string' });
            if (image && typeof image !== 'string') return res.status(400).json({ error: 'Image must be a string' });
        
            const post = await PostService.getById(id);
            if (!post) {
                return res.status(404).json({ error: 'Post not found' });
            }
        
            const updatedPost: Post = {
                id: post.id,
                title: title ?? post.title,
                description: description ?? post.description,
                image: image ?? post.image,
                date: post.date,
            };
        
            const result = await PostService.update(id, updatedPost);
        
            if (result) {
                res.json(result);
            } else {
                res.status(500).json({ error: 'Error updating post' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error updating post' });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) return res.status(400).json({ error: 'ID must be a number' });

            const deletedPost = await PostService.delete(id);
            if (!deletedPost) return res.status(404).json({ error: 'Post not found' });

            res.json({ message: 'Post deleted successfully', deletedPost });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error deleting post' });
        }
    }
};

export default postController;