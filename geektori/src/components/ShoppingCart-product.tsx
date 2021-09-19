import React, { FC } from "react";
import Button from "./Button";
import Container from "./Container";
import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/sass/ShoppingCart-product.scss";
import { ICardItem } from "../utils/DataDump";
import { useData } from "../context";
import {
  decrementProductAction,
  incrementProductAction,
  removeProductAction,
} from "../shoppingcart/actions";

interface IShoppingCartProduct {
  item: ICardItem;
}

const ShoppingCartProduct: FC<IShoppingCartProduct> = ({ item }) => {
  const { dispatch } = useData()!;
  return (
    <Container>
      <div className="ShoppingCart-product-container">
        <div className="ShoppingCart-product-img">
          <img
            src={item.image}
            className="ShoppingCart-product-img-self"
            alt={item.imageAlt}
          ></img>
        </div>
        <div className="ShoppingCart-product-content">
          <div className="ShoppingCart-product-content-title">
            <h3 className="ShoppingCart-product-content-title-text">
              {item.title}
            </h3>
            <Button
              icon={faTrashAlt}
              className="ShoppingCart-product-delete"
              click={() => dispatch(removeProductAction(item.id))}
            />
          </div>
          <div className="ShoppingCart-product-content-price">
            <div className="ShoppingCart-product-content-price-text">
              {item.price} تومان
            </div>
            <div className="ShoppingCart-product-content-count">
              <Button
                className="ShoppingCart-product-button"
                icon={faPlus}
                click={() => dispatch(incrementProductAction(item.id))}
              />
              <Button
                className="ShoppingCart-product-button"
                text={item.amount.toString()}
              />
              <Button
                className="ShoppingCart-product-button"
                icon={faMinus}
                click={() => dispatch(decrementProductAction(item.id))}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShoppingCartProduct;
