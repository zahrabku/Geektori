import React, { FC } from "react";
import { AddToCart, Card } from "./card";
import { CardContent, Description, Price } from "./card-content";
import CardMedia from "./card-media";
import Carousel from "./carousel";
import Container from "./container";
import FAQContainer from "./FAQContainer";
import ItemHeader from "./ItemHeader";
import Vanilla from "../images/vanilla.png";
import Lama from "../images/lama.png";
import Octopus from "../images/octopus.jpg";
import Penguin from "../images/penguin.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// interface IHome {}

const items: {
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

const Home: FC = () => {
  const carouselItems = items.map((item) => (
    <Card>
      <CardMedia imageSrc={item.image} imageAlt={item.imageAlt} />
      <CardContent>
        <Description text={item.title} />
        <Price price={item.price} existence={item.existance} />
      </CardContent>
      <AddToCart />
    </Card>
  ));
  return (
    <Container>
      <ItemHeader text="جدیدترین ها" />
      <Carousel items={carouselItems} />
      <ItemHeader text="سوالات پرتکرار" />
      <FAQContainer />
    </Container>
  );
};

export default Home;
