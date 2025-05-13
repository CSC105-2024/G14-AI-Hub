import axiosInstance from "../../axiosInstance";
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [logoutError, setLogtoutError] = useState(null);

  const { dispatch } = useAuthContext();

  const logout = async () => {
    try {
      const { data } = await axiosInstance.post("/user/logout");

      if (data.msg) {
        localStorage.removeItem("aihub_user");

        dispatch({ type: "LOGOUT" });
      }
    } catch (error) {
      console.error(error);
      setLogtoutError(error.response.data.msg);
    }
  };

  return { logout, logoutError, setLogtoutError };
};
