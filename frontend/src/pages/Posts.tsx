import { useState } from "react";
import { Post } from "../shared/types/post";
import { Tag } from "../shared/types/tag";
import PostList from "../components/PostList/PostList";
import FilterBlock from "../components/FilterBlock";

const tags: Tag[] = [
  { id: 1, name: "#tag1" },
  { id: 2, name: "#tag2" },
  { id: 3, name: "#tag3" },
  { id: 4, name: "#tag4" },
  { id: 5, name: "#tag5" },
];

const posts: Post[] = [
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
    title: "Кумедник",
    shortDescription: "Ще один милий котик...",
    image: "https://placekitten.com/401/250",
    likes: 3,
    category: { id: 1, title: "Тварини" },
    tags: [tags[1]],
  },
];

export default function PostsPage() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [likesMinimumValue, setLikesMinimumValue] = useState(0);

  return (
    <>
      <FilterBlock
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        likesMinimumValue={likesMinimumValue}
        setLikesMinimumValue={setLikesMinimumValue}
        tags={tags}
      />

      <PostList
        posts={posts}
        searchValue={searchValue}
        selectedTags={selectedTags}
        likesMinimumValue={likesMinimumValue}
      />
    </>
  );
}