import { useRouter } from "next/router";
import CenteredLayout from "./centered-layout";
import Sidebar from "./sidebar";

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
      return <Sidebar>{children}</Sidebar>;

    default:
      return <>{children}</>;
  }
};

export default Layout;
