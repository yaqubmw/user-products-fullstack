/* eslint-disable react/no-unescaped-entities */
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

import { Label } from "../react-hook-form/label";
import { Input } from "../react-hook-form/input";
import { Select } from "../react-hook-form/select";
import { Wrapper } from "../react-hook-form/wrapper";
import { ErrorMessage } from "../react-hook-form/error-message";
import Button from "../ui/button";
import Link from "next/link";

interface RegisterFormProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

export const RegisterForm: React.FC = () => {
  const methods = useForm<RegisterFormProps>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "",
    },
  });

  const router = useRouter();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: RegisterFormProps) => {
    const { name, email, password, gender } = data;
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        name,
        email,
        password,
        gender,
      });
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 px-4 py-5 sm:p-6"
        >
          <div className="grid grid-cols-1 gap-2 md:grid-cols-10">
            {/* Name Input */}
            <Wrapper className="md:col-span-10">
              <Label id="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters long",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name must only contain letters and spaces",
                  },
                }}
              />
              {errors?.name?.message && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </Wrapper>

            {/* Email Input */}
            <Wrapper className="md:col-span-10">
              <Label id="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Email is not valid",
                  },
                }}
              />
              {errors?.email?.message && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </Wrapper>

            {/* Password Input */}
            <Wrapper className="md:col-span-10">
              <Label id="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                }}
              />
              {errors?.password?.message && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </Wrapper>

            {/* Konfirmaasi Password Input */}
            <Wrapper className="md:col-span-10">
              <Label id="password">Confirm Password</Label>
              <Input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                rules={{
                  required: "Please confirm your password",
                  validate: (value: string) =>
                    value === methods.getValues("password") ||
                    "The passwords do not match",
                }}
              />
              {errors?.confirmPassword?.message && (
                <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
              )}
            </Wrapper>

            {/* Gender */}
            <Wrapper className="md:col-span-6">
              <Label id="name">Jenis Kelamin</Label>
              <Select
                id="gender"
                name="gender"
                placeholder="Gender"
                options={[
                  { key: "male", value: "Male" },
                  { key: "female", value: "Female" },
                ]}
                rules={{ required: "Gender is required" }}
              />
              {errors?.gender?.message && (
                <ErrorMessage>{errors.gender.message}</ErrorMessage>
              )}
            </Wrapper>

            {/* Submit Button */}
            <Button type="submit" className="md:col-span-10 mt-8">
              Register
            </Button>
            <div className="md:col-span-10 text-sm inline-flex items-center pt-2">
              <p>
                Already have an account?{" "}
                <span className="text-indigo-600 no-underline hover:underline">
                  <Link href={"/login"}>Login.</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
