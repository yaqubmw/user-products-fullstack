import { useFormContext } from "react-hook-form";

export type TextareaProps = {
  id: string;
  name: string;
  defaultValue?: string;
  rows: number;
  rules?: Record<string, any>;
  placeholder?: string;
  width?: string;
};

export const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  defaultValue,
  rows,
  rules = {},
  placeholder = "",
  width = "w-full",
}) => {
  const { register } = useFormContext();
  return (
    <textarea
      {...register(name, rules)}
      id={id}
      name={name}
      defaultValue={defaultValue}
      rows={rows}
      className={`block border border-gray-300 text-sm rounded-md rong-0 focus:ring-0 focus:border-indigo-500 focus:outline-none py-1 px-2 transition-all duration-200 ${width}`}
      placeholder={placeholder}
    />
  );
};
