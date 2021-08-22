import React from "react";
import { useContext, useState } from "react";

const DataContext = React.createContext<
  | {
      data: Record<string, string>;
      addData: (key: string, value: unknown) => void;
    }
  | undefined
>(undefined);

const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({});
  const addData = (key: string, value: unknown) => {
    setData({ ...data, [key]: value });
  };
  return (
    <DataContext.Provider value={{ data, addData }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
