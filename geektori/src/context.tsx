import React from "react";
import { useContext, useState } from "react";

const DataContext = React.createContext<
  | {
      data: Record<string, string>;
      addData: (key: string, value: unknown) => void;
      shoppingCartModalIsOpen: boolean;
      addShoppingCartModalIsOpen: () => void;
    }
  | undefined
>(undefined);

const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({});

  const [shoppingCartModalIsOpen, setShoppingCartModalIsOpen] = useState(false);

  const addData = (key: string, value: unknown) => {
    setData({ ...data, [key]: value });
  };

  const addShoppingCartModalIsOpen = () => {
    setShoppingCartModalIsOpen((blah) => !blah);
  };
  return (
    <DataContext.Provider
      value={{
        data,
        addData,
        shoppingCartModalIsOpen,
        addShoppingCartModalIsOpen,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
