export type LabelProps = {
  id?: string;
  children: React.ReactNode;
};

export const Label: React.FC<LabelProps> = ({ id, children }) => {
  if (!id) {
    return (
      <label className="block text-sm font-medium whitespace-nowrap text-gray-700">
        {children}
      </label>
    );
  }
  return (
    <label
      htmlFor={id}
      className="block text-sm font-medium whitespace-nowrap text-gray-700"
    >
      {children}
    </label>
  );
};
