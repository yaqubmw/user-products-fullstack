interface TitlePageProps {
  className?: string;
  children: React.ReactNode;
}

const TitlePage: React.FC<TitlePageProps> = ({ className, children }) => {
  return (
    <h1
      className={`text-3xl font-bold text-pretty px-2 py-12 ${className}`}
    >
      {children}
    </h1>
  );
};

export default TitlePage;
