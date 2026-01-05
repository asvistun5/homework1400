import { Tag, Category } from "./tag";

export interface Post {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  likes: number;
  category: Category;
  tags: Tag[];
}

export interface PostCardProps {
  post: Post;
}

export interface PostListProps {
    posts: Post[];
    searchValue: string;
    selectedTags: number[];
    likesMinimumValue: number;
    loading: boolean;
    error: string | null;
}