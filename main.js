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
    res.json({ 
        posts: prodJson
    });
});

app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000');
});