import { useState } from "react";
import FormInput from "./Forminput";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import RoleSelection from "./RoleSelection";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Left = () => {
  const [role, setRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //navigage
  const navigate = useNavigate();

  //zod
  const signupSchema = z.object({
    role: z.enum(["Student", "Teacher"], {
      errorMap: () => ({ message: "Select either 'Student' or 'Teacher'" }),
    }),
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Password must be at least 6 characters long"),
  });

  //useForm
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      role: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  //onSubmit
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      console.log(data);
      alert("Both Passwords must be the same");
      return;
    } else {
      console.log("Form data:", data);
      navigate("/");
    }
  };

  //set role
  const handleRoleClick = (role) => {
    setValue("role", role); // Set the role value on button click
    setRole(role);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center md:h-screen col-span-2 order-2 md:order-1">
        <h1 className="font-bold text-2xl">Create Your Account</h1>
        <div className="mt-10">
          <label htmlFor="" className="font-bold">
            Choose your role
          </label>
          <div className="flex flex-row gap-5">
            <RoleSelection
              role={"Student"}
              name={"role"}
              value={"Student"}
              onClick={() => {
                handleRoleClick("Student");
              }}
              selectedRole={role}
            />
            <RoleSelection
              role={"Teacher"}
              name={"role"}
              value={"Teacher"}
              selectedRole={role}
              onClick={() => {
                handleRoleClick("Teacher");
              }}
            />
          </div>
          {errors.role && (
            <p className="text-red-500 text-sm mb-1 ">{errors.role.message}</p>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            title={"Username"}
            type={"text"}
            placeholder={"Enter your username"}
            {...register("username")}
          />

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
          <FormInput
            title={"Confirm Password"}
            type={"password"}
            placeholder={"Re-enter your password"}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mb-1">
              {errors.confirmPassword.message}
            </p>
          )}

          <Button btn={"Register"} />
          <div className="mt-3 flex flex-row items-center justify-center gap-2 mb-3">
            <p>Already have an account?</p>
            <p>
              <Link
                to="/login"
                className="font-bold text-[var(--primary-color)] underline-offset-8 underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Left;
