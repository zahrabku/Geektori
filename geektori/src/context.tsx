import React from "react";
import { useContext, useState } from "react";
import { ICardItem } from "../src/utils/DataDump";
import update from "immutability-helper";
import { useEffect } from "react";
import useLocalStorage from "./hooks";

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
      handleAmount: (
        cart: ICardItem,
        type: "increment" | "decrement" | "remove"
      ) => void;
    }
  | undefined
>(undefined);

const DataProvider: React.FC = ({ children }) => {
  const [storedValue, setValue] = useLocalStorage("cartItems", []);

  const [data, setData] = useState({});

  const [shoppingCartModalIsOpen, setShoppingCartModalIsOpen] = useState(false);

  const [cartItems, setCartItems] = useState<ICardItem[]>(storedValue);

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const addData = (key: string, value: unknown) => {
    setData({ ...data, [key]: value });
  };

  const addShoppingCartModalIsOpen = () => {
    setShoppingCartModalIsOpen((blah) => !blah);
  };

  const handleAddToCart = (clickedItem: ICardItem) => {
    handleOpenSnackBar();
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDecrementProduct = (id: number) => {
    const itemIndex = cartItems.findIndex((item) => item.id === id);
    const item = cartItems[itemIndex];
    const amount = item.amount - 1;
    // console.log(amount, item);

    if (amount) {
      setCartItems((prev) =>
        update(prev, { [itemIndex]: { $set: { ...item, amount } } })
      );
    } else {
      handleRemoveFromCart(id);
    }
  };

  const handleAmount = (
    cart: ICardItem,
    type: "increment" | "decrement" | "remove"
  ) => {
    switch (type) {
      case "decrement":
        handleDecrementProduct(cart.id);
        break;
      case "increment":
        handleAddToCart(cart);
        break;
      case "remove":
        handleRemoveFromCart(cart.id);
        break;
    }
  };

  useEffect(() => {
    setValue(cartItems);
    console.log(cartItems);
    console.log(storedValue);
  }, [cartItems, setValue, storedValue]);

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
        CartItems: cartItems,
        openSnackBar,
        handleOpenSnackBar,
        handleCloseSnackBar,
        handleAmount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
