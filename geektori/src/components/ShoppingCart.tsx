import React, { FC } from "react";
import "../styles/sass/shoppingCart.scss";
import Button from "./Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../context";
import ShoppingCartProduct from "./ShoppingCart-product";
import { ICardItem } from "../utils/DataDump";
import useLocalStorage from "../hooks";
import { useEffect } from "react";

const ShoppingCart: FC = () => {
  const data = useData()!;

  const [storedValue, setValue] = useLocalStorage("cartItems", []);

  useEffect(() => {});

  const calculateTotalPrice = (items: ICardItem[]) => {
    let totalPrice = 0;
    items.map((item) => {
      totalPrice += item.amount * item.price;
    });

    return totalPrice;
  };

  const getTotalItems = (items: ICardItem[]) => {
    return items.length;
  };

  return (
    <div className="shoppingCart-container">
      <div className="shoppingCart-header">
        <Button
          className="close-button"
          icon={faTimes}
          click={useData()!.addShoppingCartModalIsOpen}
        />
        <div className="shoppingCart-header-text">سبد خرید</div>
        <div className="shoppingCart-header-numberOfItems">
          <Button
            className="shoppingCart-header-numberOfItems-badge"
            text={getTotalItems(storedValue).toString()}
          ></Button>
        </div>
      </div>
      <div className="shoppingCart-body">
        {storedValue.length === 0 ? "هنوز محصولی اضافه نکردید" : ""}
        {storedValue.map((i: ICardItem) => {
          return (
            <ShoppingCartProduct item={i} handleAmount={data.handleAmount} />
          );
        })}
      </div>
      <div className="shoppingCart-footer">
        <div className="shoppingCart-totalPrice">
          <div className="shoppingCart-totalPrice-text">مبلغ سبد خرید:</div>
          <div className="shoppingCart-totalPrice-number shoppingCart-header-text">
            {calculateTotalPrice(storedValue)} تومان
          </div>
        </div>
        <Button
          className="shoppingCart-button shoppingCart-header-text"
          text="نهایی کردن خرید"
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
