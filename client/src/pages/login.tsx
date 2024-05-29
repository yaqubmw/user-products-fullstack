import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import PageLayout from "../components/layouts/page-layout";
import LoginForm from "../components/login/form";
import TitlePage from "../components/ui/title-page";

const Login: React.FC = () => {
  const { query } = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (query["session-end"]) {
      setShowAlert(true);
    }
  }, [query]);

  return (
    <main className="w-full bg-indigo-900 mx-auto">
      {showAlert && (
        <button
          onClick={() => setShowAlert(false)}
          className="w-full flex justify-center items-center p-2 space-x-3 text-white bg-red-500 transition-all duration-200 absolute top-0"
        >
          <div>
            <span className="text-xs">
              Your session has expired. Please log in again.
            </span>
          </div>
        </button>
      )}

      <PageLayout>
        <div className="flex flex-col items-center w-full max-w-7xl">
          <TitlePage className="text-white">Login</TitlePage>
          <div className="flex flex-col items-center justify-center w-full max-w-96 bg-white rounded-md shadow-md">
            <LoginForm />
          </div>
        </div>
      </PageLayout>
    </main>
  );
};

export default Login;
