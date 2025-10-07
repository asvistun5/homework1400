const postService = require('./service');
const moment = require('moment');


const postController = {
    timestamp(req, res) {
        res.json({ timestamp: moment().format('YYYY-MM-DD HH:mm:ss') });
    },

    getAll(req, res) {
        const posts = postService.getAll(req.query.skip, req.query.take);
        res.json({ posts });
        res.status(500).json({ error: 'Error reading posts file' });
    },

    getById(req, res) {
        const post = postService.getById(req.params.id);
        if (!post) return res.status(404).json({ error: 'Not found' });
        res.json(post);
        res.status(500).json({ error: 'Error reading posts file' });
    },

    async create(req, res) {
        try {
            const { title, description, image } = req.body;
            if (!title || !description || !image)
                return res.status(422).json({ error: 'Some param is required' });
            const newPost = await postService.create({ title, description, image });
            res.status(201).json(newPost);
        } catch {
            res.status(500).json({ error: 'Error saving post' });
        }
    }
}


module.exports = postController