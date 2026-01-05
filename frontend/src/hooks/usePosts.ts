import { useEffect, useState } from "react";
import { Post } from "../shared/types/post";


export function usePosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);

        fetch("http://localhost:5000/posts")
            .then((res) => {
                if (!res.ok) {
                    throw new Error();
                }
                return res.json();
            })
            .then(setPosts)
            .catch(() => {
                setError("Ошибка загрузки постов");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { posts, loading, error };
}