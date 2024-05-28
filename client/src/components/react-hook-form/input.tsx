import { useFormContext } from "react-hook-form";

export type InputProps = {
  id: string;
  name: string;
  type?: string;
  rules?: Record<string, any>;
  placeholder?: string;
  width?: string;
};

export const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  rules = {},
  placeholder = "",
  width = "w-full",
}) => {
  const { register } = useFormContext();
  return (
    <input
      {...register(name, rules)}
      id={id}
      name={name}
      type={type}
      className={`block border border-gray-300 text-sm rounded-md rong-0 focus:ring-0 focus:border-indigo-200 ${width}`}
      placeholder={placeholder}
    />
  );
};
