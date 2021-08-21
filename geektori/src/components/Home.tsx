import React, { FC } from "react";
import { AddToCart, Card } from "./card";
import { CardContent, Description, Price } from "./card-content";
import { CardMedia } from "./card-media";
import Carousel from "./carousel";
import Container from "./container";
import FAQContainer from "./FAQContainer";
import ItemHeader from "./ItemHeader";
import { items } from "./DataDump";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
			<ItemHeader text='جدیدترین ها' />
			<Carousel items={carouselItems} />
			<ItemHeader text='سوالات پرتکرار' />
			<FAQContainer />
		</Container>
	);
};

export default Home;
