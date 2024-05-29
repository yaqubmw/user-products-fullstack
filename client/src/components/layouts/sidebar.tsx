import React, { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "../../redux/store";
import Logo from "../ui/logo";
import useLogout from "../../utils/actions/logout";
import Footer from "../ui/footer";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const userInfo = useSelector((state: RootState) => state.user.userInfo);
  const logout = useLogout();

  return (
    <div className="flex w-full">
      {/* sidebar */}
      <div
        className={`w-full sticky z-30 top-0 h-screen bg-indigo-900 transition-all duration-300 ${
          isExpanded ? "md:w-12 w-0 overflow-hidden" : "w-36"
        }`}
      >
        {/* menu */}
        <div className="flex flex-col items-center justify-center space-y-4 p-1 text-white w-full h-screen">
          {/* Dashboard Link */}
          <Link
            href={"/dashboard"}
            className="flex flex-col items-center space-y-1 hover:text-indigo-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
            </svg>
            <span
              className={`text-xs text-nowrap ${
                isExpanded ? "invisible" : "visible"
              }`}
            >
              Dashboard
            </span>
          </Link>

          {/* Create Post */}
          <Link
            href={"/dashboard/create"}
            className="flex flex-col items-center space-y-1 hover:text-indigo-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM12.75 12a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V18a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V12Z"
                clipRule="evenodd"
              />
              <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
            </svg>
            <span
              className={`text-xs text-nowrap ${
                isExpanded ? "invisible" : "visible"
              }`}
            >
              Create Post
            </span>
          </Link>

          {/* View All Products */}
          <Link
            href={"/products"}
            className="flex flex-col items-center space-y-1 hover:text-indigo-200 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className={`text-xs text-nowrap ${
                isExpanded ? "invisible" : "visible"
              }`}
            >
              All Products
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        {/* Navbar */}
        <div className="flex items-center justify-between w-full h-14 bg-indigo-700 z-10 sticky top-0 text-white px-4">
          {/* toggle button */}
          <button
            className="focus:outline-none hover:text-indigo-200 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {/* logo */}
          <Link href={"/"}>
            <Logo />
          </Link>
          <button
            className="focus:outline-none hover:text-indigo-200 transition-colors text-sm font-medium"
            onClick={logout}
          >
            Logout
          </button>
        </div>
        {/* Main contents */}
        <div className="w-full">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
