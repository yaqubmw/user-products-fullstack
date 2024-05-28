export type ErrorMessageProps = {
  inline?: boolean;
  children: React.ReactNode;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  inline = false,
  children,
}) => {
  if (inline) {
    return (
      <div className="text-sm text-red-500 whitespace-nowrap shrink-0">
        {children}
      </div>
    );
  }

  return <div className="text-sm text-red-500">{children}</div>;
};
