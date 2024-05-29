interface CenteredLayoutProps {
  children: React.ReactNode;
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      {children}
    </div>
  );
};

export default CenteredLayout;
