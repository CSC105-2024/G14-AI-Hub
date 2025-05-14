import axiosInstance from "../../axiosInstance";
import React, { useState } from "react";
import { useDataContext } from "./useDataContext";

export const useFetch = () => {
  const [fetchError, setFetchError] = useState(null);
  const { setData } = useDataContext();

  const fetchCourse = async () => {
    try {
      const { data } = await axiosInstance.get("/course/get");

      setData(data.data);
    } catch (error) {
      console.error(error);
      setFetchError(error.response.data.message);
    }
  };

  return { fetchCourse, fetchError, setFetchError };
};
