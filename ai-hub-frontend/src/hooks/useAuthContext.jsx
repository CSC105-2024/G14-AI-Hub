import { AuthContext } from "@/context/AuthContext";
import React from "react";

export const useAuthContext = () => {
  const context = useAuthContext(AuthContext);

  return context;
};
