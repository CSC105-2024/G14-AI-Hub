import { useFetch } from "@/hooks/useFetch";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const { fetchCourse } = useFetch();

  useEffect(() => {
    const fun = async () => {
      const courses = await fetchCourse();
      setData(courses);
    };
    fun();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
