import { PostRepository } from './repository';
import { CreatePostData, UpdatePostData, PostServiceContract } from './types';


export const PostService: PostServiceContract = {
    async getAll(skip: number = 0, take: number) {
        return PostRepository.getAll(skip, take);
    },

    async getById(id: number) {
        return PostRepository.getById(id);
    },

    async create(input: CreatePostData) {
        return PostRepository.create(input);
    },

    async update(id: number, data: UpdatePostData) {
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