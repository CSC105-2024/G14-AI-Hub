import axiosInstance from "axiosInstance";
import { useState } from "react";

export const useRegister = () => {
  const [registerError, setRegisterError] = useState(null);

  const register = async (name, email, role) => {
    try {
      const { data } = await axiosInstance.post(
        "user/register",
        { name: name, email: email, role: role },
        { headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.log(error);
    }
  };
};
