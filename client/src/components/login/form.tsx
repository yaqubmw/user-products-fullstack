import { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setUser } from "../../redux/slices/userSlice";
import { Label } from "../react-hook-form/label";
import { Input } from "../react-hook-form/input";
import { Wrapper } from "../react-hook-form/wrapper";
import { ErrorMessage } from "../react-hook-form/error-message";
import Button from "../ui/button";
import { useAuth } from "../../utils/auth";

interface LoginFormProps {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  const methods = useForm<LoginFormProps>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: LoginFormProps) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
        data
      );

      const { token, user } = res.data;
      const userInfo = {
        id: user._id,
        name: user.name,
        email: user.email,
        gender: user.gender,
      };

      dispatch(setUser({ token, userInfo }));

      router.push("/dashboard");
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
            {/* Email Input */}
            <Wrapper className="md:col-span-10">
              <Label id="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                rules={{
                  required: "Email tidak boleh kosong",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Email tidak valid",
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
                  required: "Silahkan masukkan password",
                  minLength: {
                    value: 8,
                    message: "Password harus paling sedikit 8 karakter",
                  },
                }}
              />
              {errors?.password?.message && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </Wrapper>

            {/* Submit Button */}
            <Button type="submit" className="md:col-span-10 mt-8">
              Login
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
