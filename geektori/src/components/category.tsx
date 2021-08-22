import React, { FC } from "react";
import { AddToCart, Card } from "./card";
import { CardContent, Description, Price } from "./card-content";
import { CardMedia } from "./card-media";
import Container from "./container";
import Vanilla from "../images/vanilla.png";
import Lama from "../images/lama.png";
import Octopus from "../images/octopus.jpg";
import Penguin from "../images/penguin.png";
import ItemHeader from "./ItemHeader";
import FilterSticker from "./FilterSticker";
import GridSticker from "./GridSticker";
import { useData } from "../context";

const details: {
  price: number;
  image: string;
  imageAlt?: string;
  title: string;
  existance: boolean;
}[] = [
  {
    image: Penguin,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 2000,
  },
  {
    image: Vanilla,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 2000,
  },
  {
    image: Penguin,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 2000,
  },
  {
    image: Octopus,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 2000,
  },
  {
    image: Lama,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 2000,
  },
];

// const filteredDetail=details.filter(i=>{
//   return i.existance==data["selected"]
// })

const categoryStickers = details.map((item) => (
  <Card>
    <CardMedia imageSrc={item.image} imageAlt={item.imageAlt} />
    <CardContent>
      <Description text={item.title} />
      <Price price={item.price} existence={item.existance} />
    </CardContent>
    <AddToCart />
  </Card>
));

const Category: FC = () => {
  const { data, addData } = useData()!;
  console.log(data);

  return (
    <Container>
      <ItemHeader text="دسته بندی استیکر" />
      <FilterSticker />
      <GridSticker items={categoryStickers} />
    </Container>
  );
};

export default Category;
