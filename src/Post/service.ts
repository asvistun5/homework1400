import { PrismaClient } from '../generated/prisma';
import path from 'path';
import { Post, CreatePostData, UpdatePostData } from './types';


const prisma = new PrismaClient();
const prodPath = path.join(__dirname, '../../posts.json');


function getDate(): string {
    return new Date().toISOString();
}

const postService = {
    async getAll(skip: number = 0, take: number) {
        return prisma.post.findMany({
            skip,
            take,
            orderBy: { id: 'asc' },
        })
    },

    async getById(id: number) {
        return prisma.post.findUnique({ where: { id } });
    },

    async create(input: CreatePostData) {
        return prisma.post.create({
          data: {
            title: input.title,
            description: input.description,
            image: input.image,
            date: getDate(),
          },
        });
    },

    async update(id: number, data: UpdatePostData) {
        const post = await prisma.post.findUnique({ where: { id } });
        if (!post) return null;

        return prisma.post.update({
            where: { id },
            data,
        });
    },

    async delete(id: number) {
        try {
            const deletedPost = await prisma.post.delete({ where: { id } });
            return deletedPost;
        } catch (error: any) {
            if (error.code === 'P2025') {
                return null;
            }
            throw error;
        }
    }
};


export default postService;