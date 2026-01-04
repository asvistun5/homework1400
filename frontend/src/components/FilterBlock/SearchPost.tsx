interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchPost({ value, onChange }: Props) {
  return (
    <input
      className="post-list__search"
      placeholder="Пошук"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}