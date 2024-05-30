import { useForm, FormProvider } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { addProduct } from "../../redux/slices/productSlice";
import { Label } from "../../components/react-hook-form/label";
import { Input } from "../../components/react-hook-form/input";
import { Wrapper } from "../../components/react-hook-form/wrapper";
import { ErrorMessage } from "../../components/react-hook-form/error-message";
import Button from "../../components/ui/button";
import axiosInstance from "../../utils/axiosInstance";
import { Textarea } from "../react-hook-form/textarea";
import { RootState } from "../../redux/store";

interface CreateProductFormProps {
  title: string;
  image: string;
  price: number;
  description: string;
}

const CreatePostForm: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const token = useSelector((state: RootState) => state.user.token);

  const methods = useForm<CreateProductFormProps>({
    defaultValues: {
      title: "",
      image: "",
      price: 0,
      description: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: CreateProductFormProps) => {
    try {
      const response = await axiosInstance.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/add`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      dispatch(addProduct(response.data));
      router.push("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Wrapper>
            <Label id="title">Title</Label>
            <Input
              id="title"
              name="title"
              type="text"
              rules={{
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters long",
                },
              }}
            />
            {errors?.title?.message && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
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
            {errors?.image?.message && (
              <ErrorMessage>{errors.image.message}</ErrorMessage>
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
            {errors?.price?.message && (
              <ErrorMessage>{errors.price.message}</ErrorMessage>
            )}
          </Wrapper>
          <Wrapper>
            <Label id="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              rows={6}
              rules={{ required: "Description is required" }}
            />
            {errors?.description?.message && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </Wrapper>
          <Button type="submit">Create Product</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePostForm;
