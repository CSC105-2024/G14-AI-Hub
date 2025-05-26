import axiosInstance from "../../axiosInstance";
import React, { useState } from "react";
import { useDataContext } from "./useDataContext";
import { useNavigate } from "react-router-dom";

export const useEditCourse = () => {
  const [editError, setEditError] = useState(null);
  const { setData } = useDataContext();
  const navigate = useNavigate();

  const editCourse = async (newCourse, oldCourse) => {
    if (!newCourse.imgs || newCourse.imgs.length !== 4) {
      setEditError("You must upload all 4 images to update the course");
      throw new Error("All 4 images required");
    }
    const updatedFormData = new FormData();

    if (newCourse.title && newCourse.title !== oldCourse.title) {
      updatedFormData.append("title", newCourse.title);
    }

    if (
      newCourse.content &&
      JSON.stringify(newCourse.content) !== JSON.stringify(oldCourse.content)
    ) {
      updatedFormData.append("content", JSON.stringify(newCourse.content));
    }

    if (newCourse.note && newCourse.note !== oldCourse.note) {
      updatedFormData.append("note", newCourse.note);
    }

    const newImgs = newCourse.imgs;
    const oldImgs = oldCourse.imgs;

    newCourse.imgs.forEach((image, index) => {
      if (image.local) {
        updatedFormData.append(`img${index + 1}`, image.file);
      } else {
        updatedFormData.append(`img${index + 1}`, image.url);
      }
    });

    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.accessToken;

    try {
      const { data } = await axiosInstance.patch(
        `course/edit/${oldCourse.id}`,
        updatedFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTimeout(() => {
        navigate("/courses");
      }, 2000);

      setData((prev) =>
        prev.map((c) => (c.id === data.course.id ? data.course : c))
      );
      return data;
    } catch (e) {
      console.log(e);
      setEditError(e?.response?.data?.error);
      throw new Error("Error");
    }
  };
  return { editCourse, editError, setEditError };
};
