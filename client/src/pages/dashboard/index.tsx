import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { RootState } from "../../redux/store";
import { useAuth } from "../../utils/auth";
import TitlePage from "../../components/ui/title-page";
import PageLayout from "../../components/layouts/page-layout";
import H2TitlePage from "../../components/ui/h2-title-page";
import UserProducts from "../../components/dashboard/user-products";

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const isAuthenticated = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const userInfo = useSelector((state: RootState) => state.user.userInfo);

  return (
    <main className="w-full mx-auto bg-white">
      <PageLayout>
        <div className="flex flex-col items-center w-full max-w-7xl space-y-8">
          <TitlePage>Dashboard</TitlePage>
          <H2TitlePage>Welcome, {userInfo?.name}</H2TitlePage>
          <UserProducts />
        </div>
      </PageLayout>
    </main>
  );
};

export default DashboardPage;
