const express = require('express');
const postRouter = require('./src/Post/router');

const app = express();
app.use(express.json());
app.use(postRouter);

app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000');
});