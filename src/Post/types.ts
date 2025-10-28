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

export type CreatePostData = Omit<Post, 'id' | 'date'>
export type UpdatePostData = Partial<Omit<Post, 'id' | 'date'>>