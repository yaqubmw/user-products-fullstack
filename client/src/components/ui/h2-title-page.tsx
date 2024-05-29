interface TitlePageProps {
  className?: string;
  children: React.ReactNode;
}

const H2TitlePage: React.FC<TitlePageProps> = ({ className, children }) => {
  return (
    <h2 className={`text-xl font-medium text-pretty ${className}`}>
      {children}
    </h2>
  );
};

export default H2TitlePage;
