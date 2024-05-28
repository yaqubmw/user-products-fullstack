import { useForm, FormProvider } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";

import { Label } from "../react-hook-form/label";
import { Input } from "../react-hook-form/input";
import { Select } from "../react-hook-form/select";
import { Wrapper } from "../react-hook-form/wrapper";
import { ErrorMessage } from "../react-hook-form/error-message";
import Button from "../ui/button";

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
      await axios.post("/api/auth/register", {
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
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 px-4 py-5 sm:p-6"
      >
        <div className="grid grid-cols-1 gap-2 md:grid-cols-10">
          {/* Name Input */}
          <Wrapper className="md:col-span-10">
            <Label id="name">Nama</Label>
            <Input
              id="name"
              name="name"
              type="text"
              rules={{
                required: "Nama tidak boleh kosong",
                minLength: {
                  value: 3,
                  message: "Name harus paling sedikit 3 karakter",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Nama hanya boleh berupa huruf dan spasi",
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

          {/* Konfirmaasi Password Input */}
          <Wrapper className="md:col-span-10">
            <Label id="password">Konfirmasi Password</Label>
            <Input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              rules={{
                required: "Silahkan masukkan ulang password",
                validate: (value: string) =>
                  value === methods.getValues("password") ||
                  "Passwords tidak cocok",
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
              placeholder="Pilih jenis kelamin"
              options={[
                { key: "male", value: "Laki-laki" },
                { key: "female", value: "Perempuan" },
              ]}
              rules={{ required: "Jenis kelamin harus dipilih" }}
            />
            {errors?.gender?.message && (
              <ErrorMessage>{errors.gender.message}</ErrorMessage>
            )}
          </Wrapper>

          {/* Submit Button */}
          <Button type="submit" className="md:col-span-10">
            Register
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
