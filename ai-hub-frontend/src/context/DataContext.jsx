import { useState } from "react";
import { useContext } from "react";

export const DataContext = useContext();

export const DataContextProvider = ({ children }) => {
  const [datas, setDatas] = useState(null);

  return (
    <DataContext.Provider value={{ datas, setDatas }}>
      {children}
    </DataContext.Provider>
  );
};
