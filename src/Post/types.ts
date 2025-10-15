export interface Post {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
}


export type CreatePostData = Omit<Post, 'id' | 'date'>;
export type UpdatePostData = Partial<Omit<Post, 'id' | 'date'>>;