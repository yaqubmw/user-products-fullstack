import Image from "next/image";

interface ProductProps {
  _id: string;
  title: string;
  image?: string;
  price: number;
  description: string;
}

interface CardProps {
  product: ProductProps;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 bg-white rounded-lg shadow-md w-full p-4 border border-indigo-200 hover:shadow-lg transition-shadow">
      <Image
        src={
          product.image
            ? product.image
            : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
        }
        alt={product.title}
        width={800}
        height={600}
        className="object-cover w-[300px] h-[200px]"
      />
      <h3 className="text-xl font-medium text-pretty">{product.title}</h3>
      <p className="text-sm text-pretty">${product.price}</p>
    </div>
  );
};

export default Card;
