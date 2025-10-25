export interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string;
}

export interface PostWithTags extends Post {
  tags: string[];
}

export interface CreatePost {
  title: string;
  description: string;
  image?: string;
}

export interface CreatePostChecked extends CreatePost {
  title: string;
  description: string;
}

export interface UpdatePost {
  title?: string;
  description?: string;
  image?: string;
}

export interface UpdatePostChecked extends UpdatePost {
  title?: string;
  description?: string;
  image?: string;
}

export type CreatePostData = Omit<Post, 'id' | 'date'>;
export type UpdatePostData = Partial<Omit<Post, 'id' | 'date'>>;