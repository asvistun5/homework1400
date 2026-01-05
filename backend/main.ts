import express from 'express';
import cors from "cors";

import postRouter from './Post/router';
import tagRouter from './Tags/router';
import userRouter from './User/router';

const app: express.Express = express()

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use('/posts', postRouter);
app.use('/tags', tagRouter);
app.use(userRouter);


const port: number = 8000;
const host: string = 'localhost';


app.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});