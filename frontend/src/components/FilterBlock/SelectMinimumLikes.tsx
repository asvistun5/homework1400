interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function SelectMinimumLikes({ value, onChange }: Props) {
  return (
    <div className="post-list__likes">
      <span>Лайки:</span>
      <p>&gt;</p>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}>
        <option value={0}>0</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
}