import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useData } from "../context";
import { AddToCart, Card } from "./Card";
import { CardContent, Description, Price } from "./CardContent";
import { CardMedia } from "./CardMedia";
import { ICardItem } from "../utils/DataDump";
import { addProductAction } from "../shoppingcart/actions";

interface IProduct {
  item: ICardItem;
}

const Product: FC<IProduct> = ({ item }) => {
  const {dispatch} = useData()!;
  return (
    <div>
      <Card>
        <Link to={"/product/" + item.id} style={{ textDecoration: "none" }}>
          <CardMedia imageSrc={item.image} imageAlt={item.imageAlt} />
          <CardContent>
            <Description text={item.title} />
            <Price price={item.price} existence={item.existance} />
          </CardContent>
        </Link>
        {item.existance ? (
          <AddToCart click={() => dispatch(addProductAction(item))} />
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default Product;
