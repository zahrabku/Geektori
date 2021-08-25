import React from "react";
import { MenuItemIcon } from "./Menu";
import {
	FaAngleDown,
	FaShoppingBasket,
	FaHeart,
	FaSearch,
} from "react-icons/fa";
import Vanilla from "../images/vanilla.png";
import Lama from "../images/lama.png";
import Octopus from "../images/octopus.jpg";
import Penguin from "../images/penguin.png";
import { useData } from "../context";

interface MenuCategories {
	name: string;
	icon?: any;
	classNameStyle?: string;
	click?:()=>void
}

interface CardItems {
	image: string;
	imageAlt?: string;
	title: string;
	existance: boolean;
	price: number;
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
		// click:useData()!.addShoppingCartModalIsOpen
	},
	{
		name: "عضویت",
	},
	{
		name: "وارد شوید",
	},
];

const items: CardItems[] = [
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

export { rightMenuCategories, leftMenuCategories, items };
