import { Post, Tag } from "../../shared/types/forum";
import PostCard from "../PostCard/PostCard";
import styles from './post-list.module.css';


export const tags: Tag[] = [
  { id: 1, name: "#tag1" },
  { id: 2, name: "#tag2" },
  { id: 3, name: "#tag3" },
  { id: 4, name: "#tag4" },
  { id: 5, name: "#tag5" },
];

export const posts: Post[] = [
  {
    id: 1,
    title: "Дай пʼять",
    shortDescription: "Кумедний кіт дає пʼять на камеру...",
    image: "https://placekitten.com/400/250",
    likes: 12,
    category: { id: 1, title: "Тварини" },
    tags: [tags[0], tags[2]],
  },
  {
    id: 2,
    title: "Дай пʼять",
    shortDescription: "Ще один милий котик для гарного настрою...",
    image: "https://placekitten.com/401/250",
    likes: 3,
    category: { id: 1, title: "Тварини" },
    tags: [tags[1]],
  },
];

export default function PostList() {
    return (
      <>
      <aside className="post-list__filters">
        <input
          className="post-list__search"
          placeholder="Пошук"
        />

        <div className="post-list__tags">
          {tags.map((tag) => (
            <button key={tag.id} className="tag">
              {tag.name}
            </button>
          ))}
        </div>

        <div className="post-list__likes">
          <span>Лайки:</span>
          <p>&gt;</p>
          <select name="likes" id="">
            <option value="gt0">0</option>
            <option value="gt50">50</option>
            <option value="gt100">100</option>
          </select>
        </div>
      </aside>

      <section className="post-list__grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))}
      </section>
      </>
    )
}