import React, { FC } from "react";
import "../styles/sass/shoppingCart.scss";
import Button from "./Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../context";
import ShoppingCartProduct from "./ShoppingCart-product";
import { ICardItem } from "../utils/DataDump";
import { useEffect } from "react";
import { useMemo } from "react";

const ShoppingCart: FC = () => {
  const { CartItems, addShoppingCartModalIsOpen } = useData()!;

  useEffect(() => {});

  const calculateTotalPrice = (items: ICardItem[]) => {
    let totalPrice = 0;
    items.forEach((item) => {
      totalPrice += item.amount * item.price;
    });

    return totalPrice;
  };

  const getTotalItems = (items: ICardItem[]) => {
    return items.length;
  };

  const totalCount = useMemo(() => {
    return getTotalItems(CartItems).toString();
  }, [CartItems]);

  return (
    <div className="shoppingCart-container">
      <div className="shoppingCart-header">
        <Button
          className="close-button"
          icon={faTimes}
          click={addShoppingCartModalIsOpen}
        />
        <div className="shoppingCart-header-text">سبد خرید</div>
        <div className="shoppingCart-header-numberOfItems">
          <Button
            className="shoppingCart-header-numberOfItems-badge"
            text={totalCount}
          ></Button>
        </div>
      </div>
      <div className="shoppingCart-body">
        {CartItems.length === 0 ? "هنوز محصولی اضافه نکردید" : ""}
        {CartItems.map((i: ICardItem) => {
          return <ShoppingCartProduct item={i} />;
        })}
      </div>
      <div className="shoppingCart-footer">
        <div className="shoppingCart-totalPrice">
          <div className="shoppingCart-totalPrice-text">مبلغ سبد خرید:</div>
          <div className="shoppingCart-totalPrice-number shoppingCart-header-text">
            {calculateTotalPrice(CartItems)} تومان
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
