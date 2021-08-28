import React, { FC } from "react";
import Container from "./Container";
import ShoppingCart from "./ShoppingCart";
import "../styles/sass/ShoppingCartModal.scss";

// interface IShoppingCartModal{
//   items:React.ReactNode[];
// }

const ShoppingCartModal: FC = () => {
  return (
    <Container className="ShoppingCartModal-container">
      <div className="overlay"></div>
      <ShoppingCart/>
    </Container>
  );
};

export default ShoppingCartModal;
