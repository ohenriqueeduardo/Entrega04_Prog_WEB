type InputFieldProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
};

export default function InputField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  readOnly = false,
}: InputFieldProps) {
  return (
    <label className="input-field">
      {label && <span>{label}</span>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        readOnly={readOnly}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </label>
  );
}