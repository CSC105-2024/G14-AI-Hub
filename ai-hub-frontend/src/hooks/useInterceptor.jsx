import { useEffect } from "react";
import axiosInstance from "../../axiosInstance";
import { toast } from "sonner";

export const useInterceptor = (dispatch) => {
  useEffect(() => {
    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          await axiosInstance.post("/user/logout");

          toast.error("Session expired. Please log in again.");

          setTimeout(() => {
            dispatch({ type: "LOGOUT" });
            localStorage.removeItem("aihub_user");
          }, 3000);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, [dispatch]);
};
