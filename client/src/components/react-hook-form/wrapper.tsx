export type WrapperProps = {
  className?: string;
  inline?: boolean;
  children: React.ReactNode;
};

export const Wrapper: React.FC<WrapperProps> = ({
  inline = false,
  className,
  children,
}) => {
  if (inline) {
    return (
      <div className={className}>
        <div className="flex items-center space-x-2 justify-items-start">
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className={className}>
      <div className="space-y-1">{children}</div>
    </div>
  );
};

export type InlineInputWrapperProps = {
  className: string;
  children: React.ReactNode;
};

export const InlineInputWrapper: React.FC<InlineInputWrapperProps> = ({
  className,
  children,
}) => {
  return (
    <div className={className}>
      <div className="flex items-center space-x-2 justify-items-start">
        {children}
      </div>
    </div>
  );
};
