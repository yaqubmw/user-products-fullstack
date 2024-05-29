import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import { RootState } from "../redux/store";
import { setProducts } from "../redux/slices/productSlice";
import { useAuth } from "../utils/auth";
import TitlePage from "../components/ui/title-page";
import PageLayout from "../components/layouts/page-layout";
import Card from "../components/ui/card";
import H2TitlePage from "../components/ui/h2-title-page";
import axiosInstance from "../utils/axiosInstance";
import Button from "../components/ui/button";

const DashboardPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const products = useSelector((state: RootState) => state.products.products);
  const token = useSelector((state: RootState) => state.user.token);
  const userInfo = useSelector((state: RootState) => state.user.userInfo);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products/user`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        dispatch(setProducts(response.data));
      } catch (error) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchProducts();
    }
  }, [token, userInfo, dispatch]);

  if (loading) {
    return (
      <div className="flex items-center text-sm justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center text-sm justify-center h-screen">
        {error}
      </div>
    );
  }

  return (
    <main className="w-full mx-auto bg-indigo-900">
      <PageLayout>
        <div className="flex flex-col items-center w-full max-w-7xl">
          <TitlePage className="text-white">Dashboard</TitlePage>
          <div className="w-full flex flex-col space-y-4">
            <H2TitlePage className="text-white pb-4">Your Products</H2TitlePage>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white">
              <Link href="/products/create">
                <Button>Create New Product</Button>
              </Link>
              <Link href="/products">
                <Button>View All Products</Button>
              </Link>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="lg:col-span-4 md:col-span-6 w-full"
                >
                  <Link href={`/products/${product._id}`}>
                    <Card product={product} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    </main>
  );
};

export default DashboardPage;
