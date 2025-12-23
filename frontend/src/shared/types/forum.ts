export interface Tag {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  title: string;
}

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