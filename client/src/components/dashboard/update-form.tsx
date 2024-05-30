import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { updateProduct } from "../../redux/slices/productSlice";
import { Label } from "../../components/react-hook-form/label";
import { Input } from "../../components/react-hook-form/input";
import { Wrapper } from "../../components/react-hook-form/wrapper";
import { ErrorMessage } from "../../components/react-hook-form/error-message";
import Button from "../../components/ui/button";
import axiosInstance from "../../utils/axiosInstance";

interface EditProductFormProps {
  title: string;
  image: string;
  price: number;
  description: string;
}

const EditProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<EditProductFormProps | null>(null);

  const methods = useForm<EditProductFormProps>();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
        methods.reset(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, methods]);

  const onSubmit = async (data: EditProductFormProps) => {
    try {
      const response = await axiosInstance.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`,
        data
      );

      dispatch(updateProduct(response.data));
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading || !product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <h1>Edit Product</h1>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          <Wrapper>
            <Label id="title">Title</Label>
            <Input
              id="title"
              name="title"
              type="text"
              rules={{ required: "Title is required" }}
            />
            {methods.formState.errors?.title?.message && (
              <ErrorMessage>
                {methods.formState.errors.title.message}
              </ErrorMessage>
            )}
          </Wrapper>
          <Wrapper>
            <Label id="image">Image URL</Label>
            <Input
              id="image"
              name="image"
              type="text"
              rules={{ required: "Image URL is required" }}
            />
            {methods.formState.errors?.image?.message && (
              <ErrorMessage>
                {methods.formState.errors.image.message}
              </ErrorMessage>
            )}
          </Wrapper>
          <Wrapper>
            <Label id="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              rules={{
                required: "Price is required",
                min: { value: 0, message: "Price must be a positive number" },
              }}
            />
            {methods.formState.errors?.price?.message && (
              <ErrorMessage>
                {methods.formState.errors.price.message}
              </ErrorMessage>
            )}
          </Wrapper>
          <Wrapper>
            <Label id="description">Description</Label>
            <Input
              id="description"
              name="description"
              type="text"
              rules={{ required: "Description is required" }}
            />
            {methods.formState.errors?.description?.message && (
              <ErrorMessage>
                {methods.formState.errors.description.message}
              </ErrorMessage>
            )}
          </Wrapper>
          <Button type="submit">Update Product</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default EditProductPage;
