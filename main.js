const moment = require('moment');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

const express = require('express');
const app = express();
app.use(express.json());

const prodPath = path.join(__dirname, "posts.json");

function getDate() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

app.get('/timestamp', (req, res) => {
    res.json({ 
        timestamp: getDate() 
    });
});

app.get('/posts', async (req, res) => {
    try {
        const prodJson = JSON.parse(await fsp.readFile(prodPath, 'UTF-8'));
        let skip = 0;
        let take = prodJson.length;

        if (req.query.skip !== undefined) {
            if (isNaN(req.query.skip)) {
                return res.status(400).json({ error: "'skip' isn't a number" });
            }
            skip = parseInt(req.query.skip);
        }

        if (req.query.take !== undefined) {
            if (isNaN(req.query.take)) {
                return res.status(400).json({ error: "'take' isn't a number" });
            }
            take = parseInt(req.query.take);
        }

        const selectedPosts = prodJson.slice(skip, skip + take);
        res.json({ posts: selectedPosts });
    } catch (err) {
        res.status(500).json({ error: 'Error reading posts file' });
    }
});

app.get('/posts/:id', async (req, res) => {
    try {
        const prodJson = JSON.parse(await fsp.readFile(prodPath, 'UTF-8'));
        const postId = req.params.id;
        const found = prodJson.find((post) => String(post.id) === postId);

        if (!found) {
            return res.status(404).json({ error: "404 not found" });
        }

        res.json(found);
    } catch (err) {
        res.status(500).json({ error: 'Error reading posts file' });
    }
});

app.post('/posts', async (req, res) => {
    const { title, description, image } = req.body;

    if (!title || !description || !image) {
        return res.status(422).json({ error: 'Some param is required' });
    }

    try {
        const prodJson = JSON.parse(await fsp.readFile(prodPath, 'UTF-8'));
        const newPost = {
            id: prodJson.length + 1,
            title,
            description,
            image,
            date: getDate()
        };

        prodJson.push(newPost);
        await fsp.writeFile(prodPath, JSON.stringify(prodJson, null, 2), 'UTF-8');

        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: 'Error saving post' });
    }
});

app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000');
});