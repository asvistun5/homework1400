import express from 'express';
import postRouter from './src/Post/router';

const app: express.Express = express()
app.use(express.json());
app.use(postRouter);

app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000');
});