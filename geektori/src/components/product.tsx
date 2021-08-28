import React, { FC } from "react";
import { useData } from "../context";
import { AddToCart, Card } from "./Card";
import { CardContent, Description, Price } from "./CardContent";
import { CardMedia } from "./CardMedia";
import { CardItems } from "../utils/DataDump";

interface IProduct {
  items: CardItems;
}

const Product: FC<IProduct> = ({ items }) => {
  const Data = useData()!;
  return (
    <div>
      <Card>
        <CardMedia imageSrc={items.image} imageAlt={items.imageAlt} />
        <CardContent>
          <Description text={items.title} />
          <Price price={items.price} existence={items.existance} />
        </CardContent>
        {items.existance ? (
          <AddToCart click={() => Data.handleAddToCart(items)} />
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default Product;
