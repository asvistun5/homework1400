import { Tag } from "../../shared/types/tag";

interface Props {
  tags: Tag[];
  selectedTags: number[];
  setSelectedTags: (value: number[]) => void;
}

export default function SelectTags({
  tags,
  selectedTags,
  setSelectedTags,
}: Props) {
  return (
    <div className="post-list__tags">
      {tags.map((tag) => (
        <button
          key={tag.id}
          className={`tag ${
            selectedTags.includes(tag.id) ? "active" : ""
          }`}
          onClick={() =>
            setSelectedTags(
              selectedTags.includes(tag.id)
                ? selectedTags.filter((id) => id !== tag.id)
                : [...selectedTags, tag.id]
            )
          }
        >
          {tag.name}
        </button>
      ))}
    </div>
  );
}