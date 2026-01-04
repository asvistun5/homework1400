import express from 'express';
import cors from "cors";

import postRouter from './backend/Post/router';
import tagRouter from './backend/Tags/router';
import userRouter from './backend/User/router';

const app: express.Express = express()

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"]
}))

app.use(express.json());
app.use('/posts', postRouter);
app.use('/tags', tagRouter);
app.use(userRouter);


app.listen(8000, 'localhost', () => {
    console.log('http://localhost:8000');
});