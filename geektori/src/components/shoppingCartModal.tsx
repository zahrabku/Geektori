import React, { FC } from "react";
import Container from "./container";
import ShoppingCart from "./ShoppingCart";
import "../styles/sass/ShoppingCartModal.scss";

interface IShoppingCartModal{
  items:React.ReactNode[];
}

const ShoppingCartModal: FC<IShoppingCartModal> = ({ items }) => {
  return (
    <Container className="ShoppingCartModal-container">
      <div className="overlay"></div>
      <ShoppingCart>{items}</ShoppingCart>
    </Container>
  );
};

export default ShoppingCartModal;
