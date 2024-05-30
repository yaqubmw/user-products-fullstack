import {  formatPrice } from "../../utils/format-price";

interface PriceTagProps {
  price: number;
  className?: string;
}

export const PriceTag: React.FC<PriceTagProps> = ({ price, className }) => {
  return (
    <span
      className={`inline-flex w-fit items-center justify-center transition-all ${className}`}
    >
      {formatPrice({price})}
    </span>
  );
}
