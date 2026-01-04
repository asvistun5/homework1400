import { Post } from "../../shared/types/post";
import PostCard from "../PostCard/PostCard";

interface Props {
  posts: Post[];
  searchValue: string;
  selectedTags: number[];
  likesMinimumValue: number;
}

export default function PostList({
  posts,
  searchValue,
  selectedTags,
  likesMinimumValue,
}: Props) {
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchValue.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((id) =>
        post.tags.some((tag) => tag.id === id)
      );

    const matchesLikes = post.likes > likesMinimumValue;

    return matchesSearch && matchesTags && matchesLikes;
  });

  return (
    <section>
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}