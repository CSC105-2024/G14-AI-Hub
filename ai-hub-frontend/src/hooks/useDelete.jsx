import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import React, { useState } from "react";
import { useDataContext } from "./useDataContext";

export const useDelete = () => {
  const [deleteError, setDeleteError] = useState(null);
  const { data, setData } = useDataContext();

  const navigate = useNavigate();

  const deleteCouse = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`/course/delete/${id}`);

      if (data) {
        setTimeout(() => {
          navigate("/courses");
          setData((courses) => courses.filter((d) => d.id !== data.course.id));
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setDeleteError(error.response.data.message);
    }
  };

  return { deleteCouse, deleteError, setDeleteError };
};
