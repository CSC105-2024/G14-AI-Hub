import axiosInstance from "../../axiosInstance";
import React, { useState } from "react";

export const useFetch = () => {
  const [fetchError, setFetchError] = useState(null);

  const fetchCourse = async () => {
    try {
      const { data } = await axiosInstance.get("/course/get");
      return data.data;
    } catch (error) {
      console.error(error);
      setFetchError(error.response.data.message);
    }
  };

  return { fetchCourse, fetchError, setFetchError };
};
