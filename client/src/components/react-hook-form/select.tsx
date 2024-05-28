import { useFormContext } from "react-hook-form";
export interface OptionProps {
  key: string;
  value: string;
}

export type SelectProps = {
  id: string;
  name: string;
  options: OptionProps[];
  width?: string;
  rules?: Record<string, any>;
  placeholder?: string;
};

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  options,
  rules = {},
  width = "w-full",
  placeholder = "Select",
}) => {
  const { register } = useFormContext();
  return (
    <select
      {...register(name, rules)}
      id={id}
      name={name}
      className={`block ${width} border-gray-300 text-sm focus:ring-0 focus:border-indigo-500 rounded-md`}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.key} value={option.key}>
          {option.value}
        </option>
      ))}
    </select>
  );
};
