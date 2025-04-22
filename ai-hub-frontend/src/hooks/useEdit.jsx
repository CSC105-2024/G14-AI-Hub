import React, { useState } from "react";

export const useEdit = () => {
  const [editError, setEditError] = useState(null);

  const edit = async (form, oldForm) => {
    if (form === oldForm) {
      setEditError("Looks like your info is still the same.");
      return;
    }
  };

  return { edit, editError, setEditError };
};
