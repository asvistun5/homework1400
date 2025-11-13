import { Prisma } from "../generated/prisma"

export type Post = Prisma.PostGetPayload<{}>
export type CreatePost = Prisma.PostUncheckedCreateInput
export type UpdatePost = Prisma.PostUncheckedUpdateInput

export interface PostWithTags extends Post {
  tags: string[];
}

export interface CreatePostChecked extends Omit<CreatePost, 'id'> {
  title: string;
  description: string;
}

export interface UpdatePostChecked extends Partial<Pick<Post, 'title' | 'description' | 'image'>> {}

export interface PostRepositoryContract {
    getAll(skip?: number, take?: number): Promise<Post[]>;
    getById(id: number): Promise<Post | null>;
    create(data: CreatePostData): Promise<Post>;
    update(id: number, data: UpdatePostData): Promise<Post>;
    delete(id: number): Promise<Post>;
}

export interface PostServiceContract {
    getAll(skip?: number, take?: number): Promise<Post[]>;
    getById(id: number): Promise<Post | null>;
    create(data: CreatePostData): Promise<Post>;
    update(id: number, data: UpdatePostData): Promise<Post | null>;
    delete(id: number): Promise<Post | null>;
}

export type CreatePostData = Omit<Post, 'id' | 'date'>
export type UpdatePostData = Partial<Omit<Post, 'id' | 'date'>>