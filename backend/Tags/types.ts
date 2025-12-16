import { Prisma } from "../generated/prisma"

export type Tag = Prisma.TagGetPayload<{}>
export type CreateTag = Prisma.TagUncheckedCreateInput
export type UpdateTag = Prisma.TagUncheckedUpdateInput

export interface TagRepositoryContract {
    getAll(skip?: number, take?: number): Promise<Tag[]>;
    getById(id: number): Promise<Tag | null>;
    create(data: CreateTagData): Promise<Tag>;
    update(id: number, data: UpdateTagData): Promise<Tag>;
    delete(id: number): Promise<Tag>;
}

export interface TagServiceContract {
    getAll(skip?: number, take?: number): Promise<Tag[]>;
    getById(id: number): Promise<Tag | null>;
    create(data: CreateTagData): Promise<Tag>;
    update(id: number, data: UpdateTagData): Promise<Tag | null>;
    delete(id: number): Promise<Tag | null>;
}

export type CreateTagData = Omit<Tag, 'id' | 'posts'>
export type UpdateTagData = Partial<Omit<Tag, 'id' | 'posts'>>