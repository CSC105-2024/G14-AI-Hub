import axiosInstance from "../../axiosInstance";
import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { toast } from "sonner";

export const useEdit = () => {
  const [editError, setEditError] = useState(null);
  const { user, dispatch } = useAuthContext();

  const edit = async (
    name,
    email,
    oldPassword,
    newPassword,
    oldName,
    oldEmail
  ) => {
    if (name === oldName && email === oldEmail && !oldPassword) {
      setEditError("Looks like your info is still the same.");
      return;
    }

    if (oldPassword && newPassword) {
      if (oldPassword === newPassword) {
        setEditError("Looks like your passwords are the same.");
        return;
      }
    }

    try {
      const { data } = await axiosInstance.put("/user/edit", {
        name: name,
        email: email,
        password: oldPassword,
        newPassword: newPassword,
      });

      if (data && oldPassword && newPassword) {
        setTimeout(() => {
          localStorage.removeItem("aihub_user");
          dispatch({ type: "LOGOUT" });
        }, 3000);
      }

      const info = { ...user, ...data.data };
      localStorage.setItem("aihub_user", JSON.stringify(info));
      dispatch({ type: "LOGIN", payload: info });

      toast.success("Successfully changed");
    } catch (error) {
      console.log(error);
      setEditError(error.response.data.msg);
    }
  };

  return { edit, editError, setEditError };
};
