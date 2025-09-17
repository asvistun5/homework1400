const moment = require('moment');
const express = require('express');
const app = express();

function getDate() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

app.get('/timestamp', (req, res) => {
    res.json({ timestamp: getDate() });
});

app.listen(8000, 'localhost', () => {
    console.log('https://localhost:8000');
});