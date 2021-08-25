import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import "../styles/sass/shoppingCart.scss";
import Button from "./Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useData } from "../context";
import ShoppingCartProduct from "./ShoppingCart-product";

const ShoppingCart: FC = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const [numerOfItems, setNumerOfItems] = useState<number>(0);

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
            text={numerOfItems.toString()}
          ></Button>
        </div>
      </div>
      <div className="shoppingCart-body">
        {/* {children ? children : "هنوز محصولی به سبد خرید اضافه نکردید"} */}
        <ShoppingCartProduct />
      </div>
      <div className="shoppingCart-footer">
        <div className="shoppingCart-totalPrice">
          <div className="shoppingCart-totalPrice-text">مبلغ سبد خرید:</div>
          <div className="shoppingCart-totalPrice-number shoppingCart-header-text">
            {totalPrice} تومان
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
