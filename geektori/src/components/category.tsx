import React, { FC } from "react";
import { AddToCart, Card } from "./Card";
import { CardContent, Description, Price } from "./CardContent";
import { CardMedia } from "./CardMedia";
import Container from "./Container";
import Vanilla from "../images/vanilla.png";
import Lama from "../images/lama.png";
import Octopus from "../images/octopus.jpg";
import Penguin from "../images/penguin.png";
import ItemHeader from "./ItemHeader";
import FilterSticker from "./FilterSticker";
import GridSticker from "./GridSticker";
import { useData } from "../context";
import { items } from "./DataDump";
import Product from "./product";

// const filteredDetail=details.filter(i=>{
//   return i.existance==data["selected"]
// })

const Category: FC = () => {
  const { data, addData } = useData()!;
  console.log(data);

  return (
    <Container>
      <ItemHeader text="دسته بندی استیکر" />
      <FilterSticker />
      <GridSticker
        items={items.map((i) => (
          <Product items={i} />
        ))}
      />
    </Container>
  );
};

export default Category;
