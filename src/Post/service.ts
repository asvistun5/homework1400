import moment from 'moment';
import { promises as fs } from 'fs';
import path from 'path';
import { Post, CreatePostData, UpdatePostData } from './types';


const prodPath = path.join(__dirname, '../../posts.json');

function getDate(): string {
    return moment().format('YYYY-MM-DD HH:mm:ss');
}

const postService = {
    async getAll(skip: number = 0, take?: number) {
        const data: Post[] = JSON.parse(await fs.readFile(prodPath, 'utf-8'));
        //console.log(data);
        return data.slice(skip, skip + (take ?? data.length));
    },

    async getById(id: number | string) {
        const data: Post[] = JSON.parse(await fs.readFile(prodPath, 'utf-8'));
        return data.find((p: any) => String(p.id) === String(id));
    },

    async create(input: CreatePostData) {
        const data: Post[] = JSON.parse(await fs.readFile(prodPath, 'utf-8'));
        const newPost: Post = {
            id: data.length + 1,
            title: input.title,
            description: input.description,
            image: input.image,
            date: getDate()
        };
        data.push(newPost);
        await fs.writeFile(prodPath, JSON.stringify(data, null, 2), 'utf-8');
        return newPost;
    },

    async update(id: number, data: UpdatePostData) {
        const post = await this.getById(id);
        if (!post) return null;
        
        try {
            const updatedPost: Post = { ...post, ...data };
            const fileData: Post[] = JSON.parse(await fs.readFile(prodPath, 'utf-8'));
            const index = fileData.findIndex((p) => p.id === id);
            if (index === -1) return null;
        
            fileData[index] = updatedPost;
            await fs.writeFile(prodPath, JSON.stringify(fileData, null, 2), 'utf-8');
        
            return updatedPost;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
};


export default postService;