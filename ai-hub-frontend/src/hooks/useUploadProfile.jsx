import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axiosInstance from "../../axiosInstance";

export const useUploadProfile = () => {
  const [profileError, setProfileError] = useState(null);
  const { dispatch } = useAuthContext();

  const uploadProfile = async (file) => {
    const formData = new FormData();
    formData.append("img", file);

    try {
      const { data } = await axiosInstance.post("/user/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      const user = JSON.parse(localStorage.getItem("aihub_user"));

      const newUser = { ...user, ...data.data };
      console.log(newUser);
      localStorage.setItem("aihub_user", JSON.stringify(newUser));

      dispatch({ type: "LOGIN", payload: newUser });
    } catch (error) {
      console.error(error.response.data.msg);
      setProfileError(error.response.data.msg);
    }
  };

  return { profileError, setProfileError, uploadProfile };
};
