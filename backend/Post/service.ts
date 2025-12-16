import { PostRepository } from './repository';
import { CreatePost, UpdatePost, PostServiceContract } from './types';


export const PostService: PostServiceContract = {
    async getAll(skip: number = 0, take: number) {
        return PostRepository.getAll(skip, take);
    },

    async getById(id: number) {
        return PostRepository.getById(id);
    },

    async create(data: CreatePost) {
        return PostRepository.create(data);
    },

    async update(id: number, data: UpdatePost) {
        const post = await PostRepository.getById(id);
        if (!post) return null;
        return PostRepository.update(id, data);
    },

    async delete(id: number) {
        const post = await PostRepository.getById(id);
        if (!post) return null;
        return PostRepository.delete(id);
    }
}