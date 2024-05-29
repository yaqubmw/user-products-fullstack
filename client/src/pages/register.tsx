import PageLayout from "../components/layouts/page-layout";
import RegisterForm from "../components/register/form";
import TitlePage from "../components/ui/title-page";

const Register: React.FC = () => {
  return (
    <main className="w-full bg-indigo-900 mx-auto">
      <PageLayout>
        <div className="flex flex-col items-center w-full max-w-7xl">
          <TitlePage className="text-white">Register</TitlePage>
          <div className="flex flex-col items-center justify-center w-full max-w-96 bg-white rounded-md shadow-md">
            <RegisterForm />
          </div>
        </div>
      </PageLayout>
    </main>
  );
};

export default Register;
