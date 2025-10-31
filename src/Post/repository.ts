import prisma from '../../prisma/client';
import { CreatePostData, UpdatePostData, PostRepositoryContract } from './types';


export const PostRepository: PostRepositoryContract = {
    async getAll(skip: number = 0, take: number) {
        return prisma.post.findMany({
            skip,
            take,
            orderBy: { id: 'asc' },
        });
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
                date: new Date().toISOString(),
            },
        });
    },

    async update(id: number, data: UpdatePostData) {
        return prisma.post.update({
            where: { id },
            data,
        });
    },

    async delete(id: number) {
        return prisma.post.delete({ where: { id } });
    }
}