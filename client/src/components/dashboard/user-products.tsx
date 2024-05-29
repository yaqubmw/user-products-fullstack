import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

import { RootState } from "../../redux/store";
import { setProducts } from "../../redux/slices/productSlice";
import { useAuth } from "../../utils/auth";
import H2TitlePage from "../../components/ui/h2-title-page";
import axiosInstance from "../../utils/axiosInstance";
import ListCard from "../../components/ui/list-card";
import Button from "../../components/ui/button";

const UserProducts: React.FC = () => {
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

  const products = useSelector((state: RootState) => state.products.products);

  const handleEdit = (id: string) => {
    router.push(`/products/edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      await axiosInstance.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(setProducts(products.filter((product) => product._id !== id)));
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center text-sm justify-center w-full h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center text-sm justify-center w-full h-screen">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col space-y-4 rounded border border-indigo-200 p-4 shadow">
      <H2TitlePage className="pb-4">Your Products</H2TitlePage>
      <div className="flex flex-col items-center w-full pt-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="w-full">
              <ListCard
                id={product._id}
                title={product.title}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center space-y-2 text-sm">
            <div>No products here.</div>
            <Link href={"/dashboard/create"}>
              <Button className="text-sm">Create a product</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProducts;
