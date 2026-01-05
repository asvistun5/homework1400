import { useEffect, useState } from "react";
import { Tag } from "../shared/types/tag";


export function useTags() {
    const [tags, setTags] = useState<Tag[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);

        fetch("http://localhost:5000/tags")
            .then((res) => {
                if (!res.ok) {
                    throw new Error();
                }
                return res.json();
            })
            .then(setTags)
            .catch(() => {
                setError("Ошибка загрузки тегов");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return { tags, loading, error };
}