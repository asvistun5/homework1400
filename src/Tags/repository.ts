import prisma from '../../prisma/client';
import { CreateTagData, UpdateTagData, TagRepositoryContract } from './types';


export const tagRepository: TagRepositoryContract = {
    async getAll(skip: number = 0, take: number) {
        return prisma.tag.findMany({
            skip,
            take,
            orderBy: { id: 'asc' },
        });
    },

    async getById(id: number) {
        return prisma.tag.findUnique({ where: { id } });
    },

    async create(data: CreateTagData) {
        return prisma.tag.create({data});
    },

    async update(id: number, data: UpdateTagData) {
        return prisma.tag.update({
            where: { id },
            data,
        });
    },

    async delete(id: number) {
        return prisma.tag.delete({ where: { id } });
    }
}