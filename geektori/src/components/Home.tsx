import React, { FC } from "react";
import FAQContainer from "./FAQContainer";
import ItemHeader from "./ItemHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "./product";
import { items } from "./DataDump";
import Container from "./Container";
import Carousel from "./Carousel";

const Home: FC = () => {
	return (
		<Container>
			<ItemHeader text='جدیدترین ها' />
			<Carousel
				items={items.map((i) => (
					<Product items={i} />
				))}
			/>
			<ItemHeader text='سوالات پرتکرار' />
			<FAQContainer />
		</Container>
	);
};

export default Home;
