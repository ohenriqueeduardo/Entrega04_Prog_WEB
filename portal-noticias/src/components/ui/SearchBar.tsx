type SearchBarProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export default function SearchBar({
  placeholder = "Buscar...",
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <span>🔍</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}