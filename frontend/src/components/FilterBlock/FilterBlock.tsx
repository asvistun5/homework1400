import SearchPost from "./SearchPost";
import SelectTags from "./SelectTags";
import SelectMinimumLikes from "./SelectMinimumLikes";

import { Tag } from "../../shared/types/tag";
import { FilterProps } from "../../shared/types/filter";


export default function FilterBlock(props: FilterProps) {
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
