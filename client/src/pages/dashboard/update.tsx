/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import { RootState } from "../../redux/store";
import { useAuth } from "../../utils/auth";
import TitlePage from "../../components/ui/title-page";
import PageLayout from "../../components/layouts/page-layout";
import CreatePostForm from "../../components/dashboard/create-form";

const UpdatePostPage: React.FC = () => {
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
          <TitlePage>Create Product's Post</TitlePage>
          <CreatePostForm />
        </div>
      </PageLayout>
    </main>
  );
};

export default UpdatePostPage;
