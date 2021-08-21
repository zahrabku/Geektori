import React, { FC } from "react";
import { Menu, MenuItemName, MenuItemIcon } from "./Menu";
import { AddToCart, Card } from "./card";
import { CardContent, Description, Price } from "./card-content";
import { CardMedia, Image } from "./card-media";
import Carousel from "./carousel";
import Container from "./container";
import FAQContainer from "./FAQContainer";
import ItemHeader from "./ItemHeader";
import {
	FaAngleDown,
	FaShoppingBasket,
	FaHeart,
	FaSearch,
} from "react-icons/fa";

import Geektori from "../images/geek-logo.png";
import Vanilla from "../images/vanilla.png";
import Lama from "../images/lama.png";
import Octopus from "../images/octopus.jpg";
import Penguin from "../images/penguin.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/sass/menu.scss";

interface MenuCategories {
	name: string;
	icon?: any;
	classNameStyle?: string;
}

const rightMenuCategories: MenuCategories[] = [
	{
		name: "استیکر",
		icon: <MenuItemIcon iconName={FaAngleDown} />,
	},
	{
		name: "استیکرهای فانتزی",
		icon: <MenuItemIcon iconName={FaAngleDown} />,
	},
	{
		name: "طراح‌هامون",
		icon: <MenuItemIcon iconName={FaHeart} />,
	},
	{
		name: " طرح دلخواه",
	},
	{
		name: "پینتوری",
	},
];

const leftMenuCategories: Partial<MenuCategories>[] = [
	{
		icon: <MenuItemIcon iconName={FaSearch} className='search-icon' />,
	},
	{
		name: "سبد خرید",
		icon: (
			<MenuItemIcon
				iconName={FaShoppingBasket}
				className='shopping-basket-icon'
			/>
		),
		classNameStyle: "shopping-basket",
	},
	{
		name: "عضویت",
	},
	{
		name: "وارد شوید",
	},
];

const items: {
	image: string;
	imageAlt?: string;
	title: string;
	existance: boolean;
	price: number;
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

	const rightMenuItems = rightMenuCategories.map((item) => (
		<Menu className={`menu-item ${item.classNameStyle ?? ""}`}>
			<MenuItemName>{item.name}</MenuItemName>
			{item.icon}
		</Menu>
	));

	const leftMenuItems = leftMenuCategories.map((item) => (
		<Menu className={`menu-item ${item.classNameStyle ?? ""}`}>
			{item.icon}
			<MenuItemName>{item.name}</MenuItemName>
		</Menu>
	));

	return (
		<Container>
			<Menu className='menu'>
				<Menu className='small-menu right' items={rightMenuItems}>
					<Image className='geektori-logo' src={Geektori} alt='geektori logo' />
				</Menu>
				<Menu className='small-menu left' items={leftMenuItems}></Menu>
			</Menu>
			<ItemHeader text='جدیدترین ها' />
			<Carousel items={carouselItems} />
			<ItemHeader text='سوالات پرتکرار' />
			<FAQContainer />
		</Container>
	);
};

export default Home;
