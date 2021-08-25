import React, { FC } from "react";
import Button from "./Button";
import Container from "./container";
import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Lama from "../images/lama.png";
import "../styles/sass/ShoppingCart-product.scss";

const ShoppingCartProduct: FC = (props) => {
  return (
    <Container>
      <div className="ShoppingCart-product-container">
        <div className="ShoppingCart-product-img">
          <img
            src={Lama}
            className="ShoppingCart-product-img-self"
            alt=""
          ></img>
        </div>
        <div className="ShoppingCart-product-content">
          <div className="ShoppingCart-product-content-title">
            <h3 className="ShoppingCart-product-content-title-text">سلااااام</h3>
            <Button icon={faTrashAlt} className="ShoppingCart-product-delete" />
          </div>
          <div className="ShoppingCart-product-content-price">
            <div className="ShoppingCart-product-content-price-text">
              4545 تومان
            </div>
            <div className="ShoppingCart-product-content-count">
              <Button className="ShoppingCart-product-button" icon={faPlus} />
              <Button className="ShoppingCart-product-button" text={"1"} />
              <Button className="ShoppingCart-product-button" icon={faMinus} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShoppingCartProduct;
