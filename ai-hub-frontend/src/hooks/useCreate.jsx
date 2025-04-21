import React, { useState } from "react";

export const useCreate = () => {
  const [formError, setFormError] = useState(null);

  const create = async (data) => {
    //obj.val changes obj into arr
    const empty = Object.values(data).some((f) => f === "");

    if (empty) {
      setFormError(
        "Fill in all the required fields to establish a new course. Make sure the course name, content, images, and notes are clearly provided before submitting."
      );
      return;
    }

    //to be continued
  };
  return { create, formError, setFormError };
};
