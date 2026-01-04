import SearchPost from "./SearchPost";
import SelectTags from "./SelectTags";
import SelectMinimumLikes from "./SelectMinimumLikes";

import { Tag } from "../../shared/types/tag";



interface Props {
    searchValue: string;
    setSearchValue: (value: string) => void;
    selectedTags: number[];
    setSelectedTags: (value: number[]) => void;
    likesMinimumValue: number;
    setLikesMinimumValue: (value: number) => void;
    tags: Tag[];
}


export default function FilterBlock(props: Props) {
  return (
    <aside>
      <SearchPost
        value={props.searchValue}
        onChange={props.setSearchValue}
      />

      <SelectTags
        tags={props.tags}
        selectedTags={props.selectedTags}
        setSelectedTags={props.setSelectedTags}
      />

      <SelectMinimumLikes
        value={props.likesMinimumValue}
        onChange={props.setLikesMinimumValue}
      />
    </aside>
  );
}
