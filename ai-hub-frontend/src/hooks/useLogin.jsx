import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axiosInstance from "../../axiosInstance";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [loginError, setLoginError] = useState(null);
  const { dispatch } = useAuthContext();

  //navigate
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const { data } = await axiosInstance.post("user/login", {
        newEmail: email,
        password: password,
      });

      localStorage.setItem("user", JSON.stringify(data.data));

      dispatch({ type: "LOGIN", payload: data.data });
      navigate("/courses");
    } catch (error) {
      console.error(error);
      setLoginError(error.response.data.msg);
    }
  };

  return { loginError, setLoginError, login };
};
