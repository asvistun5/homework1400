import { tagRepository } from './repository';
import { CreateTagData, UpdateTagData, TagServiceContract } from './types';


export const tagService: TagServiceContract = {
    async getAll(skip: number = 0, take: number) {
        return tagRepository.getAll(skip, take);
    },

    async getById(id: number) {
        return tagRepository.getById(id);
    },

    async create(data: CreateTagData) {
        return tagRepository.create(data);
    },

    async update(id: number, data: UpdateTagData) {
        const tag = await tagRepository.getById(id);
        if (!tag) return null;
        return tagRepository.update(id, data);
    },

    async delete(id: number) {
        const tag = await tagRepository.getById(id);
        if (!tag) return null;
        return tagRepository.delete(id);
    }
}