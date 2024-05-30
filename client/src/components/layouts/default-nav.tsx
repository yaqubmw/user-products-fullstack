import Link from "next/link";
import Logo from "../ui/logo";
import Footer from "../ui/footer";

interface DefaultNavProps {
  children: React.ReactNode;
}

export const DefaultNav: React.FC<DefaultNavProps> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="md:px-8 px-2 h-14 text-white flex items-center justify-between bg-indigo-900">
        <Link href={"/"}>
          <Logo />
        </Link>
       
        <div className="flex items-center space-x-3">
          <Link
            href={"/products"}
            className="text-sm font-medium text-indigo-200 hover:text-white transition-colors"
          >
            All Products
          </Link>
          <Link
            href={"/login"}
            className="text-sm font-medium text-indigo-200 hover:text-white transition-colors"
          >
            Login
          </Link>
          <Link
            href={"/register"}
            className="text-sm font-medium text-indigo-200 hover:text-white transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};
