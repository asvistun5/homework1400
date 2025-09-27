const moment = require('moment');
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const prodPath = path.join(__dirname, "posts.json");
const prodJson = JSON.parse(fs.readFileSync(prodPath, 'UTF-8'));

function getDate() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

app.get('/timestamp', (req, res) => {
    res.json({ 
        timestamp: getDate() 
    });
});

app.get('/posts', (req, res) => {
    let skip = 0;
    let take = prodJson.length;

    if (req.query.skip !== undefined) {
        if (isNaN(req.query.skip)) {
            res.status(400).json({ error: "'skip' isnt a number" });
            return;
        }
        skip = parseInt(req.query.skip);
    }

    if (req.query.take !== undefined) {
        if (isNaN(req.query.take)) {
            res.status(400).json({ error: "'take' isnt a number" });
            return;
        }
        take = parseInt(req.query.take);
    }

    const selectedPosts = prodJson.slice(skip, skip + take);
    res.json({ posts: selectedPosts });
});

app.get('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const found = prodJson.find((post) => {
        return String(post.id) === postId;
    });

    if (!found) {
        res.status(404).json({ error: "404 not found" });
        return;
    }

    res.json(found);
});

app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000');
});