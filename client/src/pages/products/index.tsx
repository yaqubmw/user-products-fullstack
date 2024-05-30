import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/ui/card";
import PageLayout from "../../components/layouts/page-layout";
import TitlePage from "../../components/ui/title-page";

interface Product {
  _id: string;
  title: string;
  image?: string;
  price: number;
  description: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products`
        );
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="w-full mx-auto bg-white">
      <PageLayout>
        <div className="flex flex-col items-center w-full max-w-7xl space-y-8">
          <TitlePage>Products List From All Users</TitlePage>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product._id} className="">
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
      </PageLayout>
    </main>
  );
};

export default ProductList;
