import { useEffect, useState } from "react";
import { Post, Tag } from "../../shared/types/forum";
import PostCard from "../PostCard/PostCard";
import styles from "./post-list.module.css";

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
    title: "Дай піть",
    shortDescription: "Ще один милий котик для гарного настрою...",
    image: "https://placekitten.com/401/250",
    likes: 3,
    category: { id: 1, title: "Тварини" },
    tags: [tags[1]],
  },
];

export default function PostList() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [likesMinimumValue, setLikesMinimumValue] = useState(0);
  const [postsList, setPostsList] = useState<Post[]>(posts);
  const [tagsList, setTagsList] = useState<Tag[]>(tags);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

  useEffect(() => {
    const result = postsList.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tagId) =>
          post.tags.some((tag) => tag.id === tagId)
        );

      const matchesLikes = post.likes > likesMinimumValue;

      return matchesSearch && matchesTags && matchesLikes;
    });

    setFilteredPosts(result);
  }, [searchValue, selectedTags, likesMinimumValue, postsList]);

  return (
    <>
      <aside className="post-list__filters">
        <input
          className="post-list__search"
          placeholder="Пошук"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <div className="post-list__tags">
          {tagsList.map((tag) => (
            <button
              key={tag.id}
              className={`tag ${
                selectedTags.includes(tag.id) ? "active" : ""
              }`}
              onClick={() =>
                setSelectedTags((prev) =>
                  prev.includes(tag.id)
                    ? prev.filter((id) => id !== tag.id)
                    : [...prev, tag.id]
                )
              }
            >
              {tag.name}
            </button>
          ))}
        </div>

        <div className="post-list__likes">
          <span>Лайки:</span>
          <p>&gt;</p>
          <select
            value={likesMinimumValue}
            onChange={(e) =>
              setLikesMinimumValue(Number(e.target.value))
            }
          >
            <option value={0}>0</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </aside>

      <section className="post-list__grid">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </>
  );
}