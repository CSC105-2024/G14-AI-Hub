import { WindowWidthContext } from "@/context/WindowWidthContext";
import React, { useContext } from "react";

export const useWidth = () => {
  const context = useContext(WindowWidthContext);
  return context;
};
