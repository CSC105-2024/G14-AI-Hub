import axiosInstance from "../../axiosInstance";
import React, { useState } from "react";

export const useCreate = (setCourses) => {
  const [formError, setFormError] = useState(null);

  const create = async (course) => {
    //obj.val changes obj into arr
    const empty = Object.values(course).some((f) => f === "");

    if (empty) {
      setFormError(
        "Fill in all the required fields to establish a new course. Make sure the course name, content, images, and notes are clearly provided before submitting."
      );
      return;
    }

    //to be continued
    const formData = new FormData();

    formData.append("title", course.title);
    formData.append("content", JSON.stringify(course.content));
    formData.append("note", course.note);

    console.log("Images: ", course.imgs);

    course.imgs.forEach((image, index) => {
      if (image.local) {
        formData.append(`img${index + 1}`, image.file);
      } else {
        formData.append(`img${index + 1}`, image.url);
      }
    });

    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.accessToken;

    console.log("FormData before sending:", formData);

    try {
      const { data } = await axiosInstance.post("course/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setCourses((courses) => [...courses, data]);
      return data;
    } catch (e) {
      console.log(e);
      setFormError(e?.response?.data?.error);
    }
  };
  return { create, formError, setFormError };
};
