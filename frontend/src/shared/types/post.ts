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