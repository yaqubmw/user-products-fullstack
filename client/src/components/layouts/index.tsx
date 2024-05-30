import { useRouter } from "next/router";
import CenteredLayout from "./centered-layout";
import Sidebar from "./sidebar";
import { DefaultNav } from "./default-nav";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  const router = useRouter();

  const { pathname } = router;

  switch (pathname) {
    case "/login":
    case "/register":
      return <CenteredLayout>{children}</CenteredLayout>;

    case "/dashboard":
    case "/dashboard/create":
      return <Sidebar>{children}</Sidebar>;

    default:
      return <DefaultNav>{children}</DefaultNav>;
  }
};

export default Layout;
