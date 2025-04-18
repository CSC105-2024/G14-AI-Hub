import { DataContext } from "@/context/DataContext";
import React, { useContext } from "react";

import React from "react";

export const useAuthContext = () => {
  const context = useContext(DataContext);
  return context;
};
