interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
  type = "button",
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-indigo-500 hover:bg-indigo-700 text-white font-medium text-sm py-2 px-4 rounded focus:outline-none focus:ring-0 ${className}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
