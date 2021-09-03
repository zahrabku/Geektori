import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useData } from "../context";
import { AddToCart, Card } from "./Card";
import { CardContent, Description, Price } from "./CardContent";
import { CardMedia } from "./CardMedia";
import { ICardItem } from "../utils/DataDump";

interface IProduct {
  items: ICardItem;
}

const Product: FC<IProduct> = ({ items }) => {
  const data = useData()!;
  return (
    <div>
      <Card>
        <Link to={"/product/" + items.id} style={{ textDecoration: "none" }}>
          <CardMedia imageSrc={items.image} imageAlt={items.imageAlt} />
          <CardContent>
            <Description text={items.title} />
            <Price price={items.price} existence={items.existance} />
          </CardContent>
        </Link>
        {items.existance ? (
          <AddToCart click={() => data.handleAmount(items, "increment")} />
        ) : (
          ""
        )}
      </Card>
    </div>
  );
};

export default Product;
