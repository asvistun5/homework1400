import moment from 'moment';
import { promises as fs } from 'fs';
import path from 'path';

const prodPath = path.join(__dirname, '../../posts.json');

function getDate(): string {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

const postService = {
    async getAll(skip: number | string = 0, take?: number | string) {
        const data = JSON.parse(await fs.readFile(prodPath, 'utf-8'));
        //console.log(data);
        return data.slice(skip, skip + (take ?? data.length));
    },

    async getById(id: number | string) {
        const data = JSON.parse(await fs.readFile(prodPath, 'utf-8'));
        return data.find((p: any) => String(p.id) === String(id));
    },

    async create(input: { title: string; description: string; image: string }) {
        const data = JSON.parse(await fs.readFile(prodPath, 'utf-8'));
        const newPost = {
            id: data.length + 1,
            title: input.title,
            description: input.description,
            image: input.image,
            date: getDate()
        };
        data.push(newPost);
        await fs.writeFile(prodPath, JSON.stringify(data, null, 2), 'utf-8');
        return newPost;
    }
};


export default postService;