import { useState } from "react";
import FormInput from "../signup-page/Forminput";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../signup-page/Button";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/hooks/useLogin";

const Left = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { login, loginError, setLoginError } = useLogin();

  //zod
  const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
  });

  //useForm
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //onSubmit
  const onSubmit = async (data) => {
    await login(data.email, data.password);
  };

  return (
    <>
      <div className="flex flex-col items-center md:justify-center ">
        <h1 className="font-bold text-2xl">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            title={"Email"}
            type={"text"}
            placeholder={"Enter your email"}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-1">{errors.email.message}</p>
          )}
          <FormInput
            title={"Password"}
            type={showPassword ? "text" : "password"}
            placeholder={"Enter your password"}
            toggleIcon={showPassword ? faEye : faEyeSlash}
            onToggle={() => {
              setShowPassword(!showPassword);
            }}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mb-1">
              {errors.password.message}
            </p>
          )}
          {loginError && (
            <p className="text-red-500 text-md text-center mb-1 mt-3">
              {loginError}
            </p>
          )}

          <Button btn={"Login"} />
          <div className="mt-3 flex flex-row items-center justify-center gap-2 mb-3">
            <p>Haven't signed up?</p>
            <p>
              <Link
                to="/signup"
                className="font-bold text-[var(--primary-color)] underline-offset-8 underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Left;
