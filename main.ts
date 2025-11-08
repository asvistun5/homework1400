import express from 'express';
import postRouter from './src/Post/router';
import tagRouter from './src/Tags/router';

const app: express.Express = express()
app.use(express.json());
app.use(postRouter);
app.use(tagRouter);

app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000');
});