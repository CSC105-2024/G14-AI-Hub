import axiosInstance from "../../axiosInstance";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useRegister = () => {
  const [registerError, setRegisterError] = useState(null);

  const navigate = useNavigate();

  const registerUser = async (name, email, role, password) => {
    console.log(name, email, role, password);
    try {
      const { data } = await axiosInstance.post(
        "user/register",
        { name: name, email: email, role: role, password: password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (data === "Email Sent Successfully") {
        toast.success(data, {
          description: "Please verify your email",
        });
      } else {
        toast.error(data);
      }

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.log(error);
      setRegisterError(error.response.data.msg);
    }
  };

  return { registerUser, registerError, setRegisterError };
};
