import { createContext, useEffect, useState } from "react";

export const WindowWidthContext = createContext();

export const WindowWidthContextProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleSize);

    //Only run this when the component unmounts which means will only run when the page is changed
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <WindowWidthContext.Provider value={{ width }}>
      {children}
    </WindowWidthContext.Provider>
  );
};
