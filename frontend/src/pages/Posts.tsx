import { useEffect, useState } from "react";
import { Post } from "../shared/types/post";
import { Tag } from "../shared/types/tag";
import PostList from "../components/PostList/PostList";
import FilterBlock from "../components/FilterBlock";

import { usePosts } from "../hooks/usePosts";
import { useTags } from "../hooks/useTags";


export default function PostsPage() {
    const [searchValue, setSearchValue] = useState("");
    const [selectedTags, setSelectedTags] = useState<number[]>([]);
    const [likesMinimumValue, setLikesMinimumValue] = useState(0);

    const { posts, loading, error } = usePosts();
    const { tags } = useTags();

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