interface PageLayoutProps {
    className?: string;
    children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
    return (
        <div className={`max-w-7xl w-full min-h-screen py-4 px-4 md:px-12 ${className}`}>
            {children}
        </div>
    );
};

export default PageLayout