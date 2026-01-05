import { useEffect, useState } from "react";
import { Post } from "../shared/types/post";
import { Tag } from "../shared/types/tag";
import PostList from "../components/PostList/PostList";
import FilterBlock from "../components/FilterBlock";


export default function PostsPage() {
    const [searchValue, setSearchValue] = useState("");
    const [selectedTags, setSelectedTags] = useState<number[]>([]);
    const [likesMinimumValue, setLikesMinimumValue] = useState(0);

    const [posts, setPosts] = useState<Post[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);

        Promise.all([
            fetch("http://localhost:8000/posts"),
            fetch("http://localhost:8000/tags"),
        ])
            .then(async ([postsResponse, tagsResponse]) => {
                if (!postsResponse.ok || !tagsResponse.ok) {
                    throw new Error();
                }

                const postsData = await postsResponse.json();
                const tagsData = await tagsResponse.json();

                setPosts(postsData);
                setTags(tagsData);
            })
            .catch(() => {
                setError("Помилка");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

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
                loading={loading}
                error={error}
            />
        </>
    );
}