import React, { FC } from "react";
import "../styles/sass/shoppingCart.scss";
import Button from "./Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../context";
import ShoppingCartProduct from "./ShoppingCart-product";
import { CardItems } from "../utils/DataDump";

interface IShoppingCart {
  items: CardItems[];
  addToCart: (clickedItem: CardItems) => void;
  removeFromCart: (id: number) => void;
}

const ShoppingCart: FC = () => {

  const Data = useData()!;

  const calculateTotalPrice = (items: CardItems[]) => {
    let totalPrice = 0;
    items.map((item) => {
      totalPrice += item.amount * item.price;
    });

    return totalPrice;
  };

  const getTotalItems = (items: CardItems[]) => {
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
            text={getTotalItems(Data.CartItems).toString()}
          ></Button>
        </div>
      </div>
      <div className="shoppingCart-body">
        {Data.CartItems.length === 0 ? "هنوز محصولی اضافه نکردید" : ""}
        {Data.CartItems.map((i) => {
          return (
            <ShoppingCartProduct
              item={i}
              remove={() => Data.handleRemoveFromCart(i.id)}
              add={() => Data.handleAddToCart(i)}
            />
          );
        })}
      </div>
      <div className="shoppingCart-footer">
        <div className="shoppingCart-totalPrice">
          <div className="shoppingCart-totalPrice-text">مبلغ سبد خرید:</div>
          <div className="shoppingCart-totalPrice-number shoppingCart-header-text">
            {calculateTotalPrice(Data.CartItems)} تومان
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
