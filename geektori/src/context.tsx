import React, { Dispatch, SetStateAction } from "react";
import { useContext, useState } from "react";
import { CardItems } from "./utils/DataDump";

const DataContext = React.createContext<
  | {
      data: Record<string, string>;
      addData: (key: string, value: unknown) => void;
      shoppingCartModalIsOpen: boolean;
      addShoppingCartModalIsOpen: () => void;
      CartItems: CardItems[];
      handleAddToCart: (clickedItem: CardItems) => void;
      handleRemoveFromCart: (id: number) => void;
      handleDecrementProduct: (id: number) => void;
    }
  | undefined
>(undefined);

const DataProvider: React.FC = ({ children }) => {
  const [data, setData] = useState({});

  const [shoppingCartModalIsOpen, setShoppingCartModalIsOpen] = useState(false);

  const [CartItems, setCartItems] = useState<CardItems[]>([]);

  const addData = (key: string, value: unknown) => {
    setData({ ...data, [key]: value });
  };

  const addShoppingCartModalIsOpen = () => {
    setShoppingCartModalIsOpen((blah) => !blah);
  };

  const handleAddToCart = (clickedItem: CardItems) => {
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

    // localStorage.setItem(`${clickedItem}`,clickedItem)
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDecrementProduct = (id: number) => {
    // setCartItems((prev) => {
    //   const item = prev.find((item) => item.id === id);

    //   if (item) {
    //     return prev.map((item) =>
    //       item.id === id ? { ...item, amount: item.amount - 1 } : item
    //     );
    //   }

    //   return handleRemoveFromCart(id);
    // });
  };

  return (
    <DataContext.Provider
      value={{
        data,
        addData,
        shoppingCartModalIsOpen,
        addShoppingCartModalIsOpen,
        CartItems,
        handleAddToCart,
        handleRemoveFromCart,
        handleDecrementProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
