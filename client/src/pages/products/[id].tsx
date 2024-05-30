// pages/products/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

import Image from "next/image";
import { PriceTag } from "../../components/ui/price-tag";
import Button from "../../components/ui/button";

interface ProductInfo {
  _id: string;
  title: string;
  image?: string;
  price: number;
  description: string;
}

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<ProductInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full min-h-screen mx-auto bg-white">
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-full max-w-3xl mx-auto flex justify-between space-x-4 border border-indigo-200 shadow-md p-4 rounded-lg bg-white">
          <Image
            src={
              product.image
                ? product.image
                : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
            }
            alt={product.title}
            width={800}
            height={800}
            className="w-[500px] h-auto mb-4 object-cover"
          />
          <div className="flex flex-col space-y-4 justify-evenly">
            <h1 className="text-lg font-bold mb-4">{product.title}</h1>
            <p className="text-sm text-pretty">{product.description}</p>
            <p className="text-base font-bold mb-2">
              <PriceTag price={product.price} />
            </p>
            <Button>Buy Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
