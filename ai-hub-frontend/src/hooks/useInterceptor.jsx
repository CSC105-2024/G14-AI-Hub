import { useEffect } from "react";
import axiosInstance from "../../axiosInstance";

export const useInterceptor = (dispatch) => {
  useEffect(() => {
    const requestIntercept = axiosInstance.interceptors.request.use(
      (config) => {
        const oldUser = JSON?.parse(localStorage.getItem("aihub_user"));

        config.headers["Authorization"] = `Bearer ${oldUser?.accessToken}`;

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const original = error.config;

        if (
          error.response?.status === 401 &&
          error.response.data.msg === "Access token is not authorized"
        ) {
          try {
            const { data } = await axiosInstance.post("/user/refresh");

            const oldData = JSON?.parse(localStorage.getItem("aihub_user"));

            const newUser = { ...oldData, accessToken: data.data.accessToken };

            localStorage.setItem("aihub_user", JSON.stringify(newUser));
            dispatch({ type: "LOGIN", payload: newUser });

            original.headers["Authorization"] = `Bearer ${data.accessToken}`;

            //retry it again
            return axiosInstance(original);
          } catch (refreshError) {
            toast.error("Session expired. Please log in again.");

            setTimeout(() => {
              dispatch({ type: "LOGOUT" });
              localStorage.removeItem("aihub_user");
            }, 3000);

            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestIntercept);
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, [dispatch]);
};
