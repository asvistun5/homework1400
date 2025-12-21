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
  createdAt: string;
  category: Category;
  tags: Tag[];
}