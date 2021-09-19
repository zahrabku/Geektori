import React from "react";
import { useContext, useState } from "react";
import { ICardItem } from "../src/utils/DataDump";
import { useEffect } from "react";
import useLocalStorage from "./hooks";
import { useReducer } from "react";
import { shoppingCartReducer } from "./shoppingcart/reducer";
import { addProductAction } from "./shoppingcart/actions";
import { Actions } from "./shoppingcart/types";

const DataContext = React.createContext<
  | {
      data: Record<string, string>;
      addData: (key: string, value: unknown) => void;
      shoppingCartModalIsOpen: boolean;
      addShoppingCartModalIsOpen: () => void;
      CartItems: ICardItem[];
      openSnackBar: boolean;
      handleOpenSnackBar: () => void;
      handleCloseSnackBar: () => void;
      dispatch: React.Dispatch<Actions>;
    }
  | undefined
>(undefined);

const DataProvider: React.FC = ({ children }) => {
  const [storedValue, setValue] = useLocalStorage("cartItems", []);

  const [data, setData] = useState({});

  const [shoppingCartModalIsOpen, setShoppingCartModalIsOpen] = useState(false);

  const [state, dispatch] = useReducer(shoppingCartReducer, {
    products: storedValue,
  });

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const addData = (key: string, value: unknown) => {
    setData({ ...data, [key]: value });
  };

  const addShoppingCartModalIsOpen = () => {
    setShoppingCartModalIsOpen((blah) => !blah);
  };

  useEffect(() => {
    setValue(state.products);
  }, [state.products]);

  const handleOpenSnackBar = () => {
    setOpenSnackBar(true);
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        addData,
        shoppingCartModalIsOpen,
        addShoppingCartModalIsOpen,
        CartItems: state.products,
        openSnackBar,
        handleOpenSnackBar,
        handleCloseSnackBar,
        dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
