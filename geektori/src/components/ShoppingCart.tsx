import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import "../styles/sass/shoppingCart.scss";
import Button from "./Button";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface IShoppingCart {}

const ShoppingCart: FC<IShoppingCart> = () => {
  const [totalPrice, setTotalPrice] = useState();
  return (
    <div className="shoppingCart-container">
      <div className="shoppingCart-header">
        <div>
          <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
        </div>
        <div className="shoppingCart-header-text">سبد خرید</div>
        <div className="shoppingCart-header-numberOfItems">
          <Button className="shoppingCart-header-numberOfItems-badge"></Button>
        </div>
      </div>
      <div className="shoppingCart-body">
      هنوز محصولی به سبد خرید اضافه نکردید
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
