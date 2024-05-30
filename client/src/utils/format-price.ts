export const formatPrice: React.FC<{ price: number }> = ({ price }) => {
  return price.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
};
