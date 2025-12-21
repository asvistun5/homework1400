import { Post, Tag } from "../../shared/types/forum";
import styles from './post-list.module.css';

export const tagsMock: Tag[] = [
  { id: 1, name: "React" },
  { id: 2, name: "TypeScript" },
  { id: 3, name: "Backend" },
];

export const postsMock: Post[] = [
  {
    id: 1,
    title: "Как начать с React",
    shortDescription:
      "React — это библиотека для создания пользовательских интерфейсов...",
    createdAt: "10.10.2024",
    category: { id: 1, title: "Frontend" },
    tags: [{ id: 1, name: "React" }],
  },
  {
    id: 2,
    title: "Express + Prisma",
    shortDescription:
      "Разберём, как связать Express с Prisma и настроить базу данных...",
    createdAt: "12.10.2024",
    category: { id: 2, title: "Backend" },
    tags: [{ id: 3, name: "Backend" }],
  },
];


export default function PostList() {
    
}