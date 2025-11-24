interface InputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
  required?: boolean;
  autoText: string;
}

const Input = ({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  autoText,
}: InputProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      value={value}
      autoComplete={`${autoText}`}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-primary focus:border-primary"
      required={required}
    />
  </div>
);

export default Input;
