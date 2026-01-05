import PostCard from "../PostCard/PostCard";
import { PostListProps } from "../../shared/types/post";


export default function PostList({
    posts,
    searchValue,
    selectedTags,
    likesMinimumValue,
    loading,
    error
}: PostListProps) {
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

  if (loading) {
    return (
      <section className="loader">
        <span>⏳ Підгружаємо...</span>
      </section>
    );
  }

  if (error) {
    return (
      <section className="error">
        <span>❌ {error}</span>
      </section>
    );
  }

  return (
    <section>
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}