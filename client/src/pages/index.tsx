import Link from "next/link";

const Home: React.FC = () => {
  return (
    <main className="w-full mx-auto bg-white">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-indigo-900 font-bold text-3xl">Welcome!</div>
        <div className="flex items-center space-x-4">
          <Link
            href="/login"
            className="text-sm font-medium text-indigo-700 hover:text-black transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm font-medium text-indigo-700 hover:text-black transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
