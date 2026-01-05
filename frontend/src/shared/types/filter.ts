import { Tag } from "./tag";

export interface FilterProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
    selectedTags: number[];
    setSelectedTags: (value: number[]) => void;
    likesMinimumValue: number;
    setLikesMinimumValue: (value: number) => void;
    tags: Tag[];
}