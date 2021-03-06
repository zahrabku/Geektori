import React from "react";
import { MenuItemIcon } from "../components/Menu";
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
import plant from "../images/plant.png";
import stack from "../images//stackoverflow.png";
import camera from "../images/camera.png";
import shoes from "../images/shoe.png";
import monster from "../images/monster.png";
import Fork from "../images/fork.png";

interface MenuCategories {
	name: string;
	icon?: any;
	classNameStyle?: string;
	click?: () => void;
}

export interface ICardItem {
	id: number;
	image: string;
	imageAlt?: string;
	title: string;
	existance: boolean;
	price: number;
	amount: number;
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

const items: ICardItem[] = [
	{
		id: 1,
		image: Penguin,
		imageAlt: "penguin",
		title: "استیکر Penguin",
		existance: false,
		price: 1000,
		amount: 0,
	},
	{
		id: 2,
		image: Vanilla,
		imageAlt: "vanilla",
		title: "استیکر Vanilla",
		existance: true,
		price: 2000,
		amount: 0,
	},
	{
		id: 3,
		image: Octopus,
		imageAlt: "octopus",
		title: "استیکر Octopus",
		existance: false,
		price: 3000,
		amount: 0,
	},
	{
		id: 4,
		image: Lama,
		imageAlt: "lama",
		title: "استیکر Lama",
		existance: true,
		price: 2500,
		amount: 0,
	},
	{
		id: 5,
		image: Fork,
		imageAlt: "this guy forks",
		title: "استیکر This Guy Forks",
		existance: true,
		price: 2500,
		amount: 0,
	},
	{
		id: 6,
		image: plant,
		imageAlt: "plant",
		title: "plant استیکر",
		existance: true,
		price: 2400,
		amount: 0,
	},
	{
		id: 7,
		image: shoes,
		imageAlt: "shoes",
		title: "استیکر shoes",
		existance: true,
		price: 2600,
		amount: 0,
	},
	{
		id: 8,
		image: camera,
		imageAlt: "camera",
		title: "استیکر camera",
		existance: false,
		price: 2500,
		amount: 0,
	},
	{
		id: 9,
		image: monster,
		imageAlt: "monster",
		title: "استیکر monster",
		existance: true,
		price: 2200,
		amount: 0,
	},
	{
		id: 10,
		image: stack,
		imageAlt: "stack",
		title: "استیکر stack",
		existance: true,
		price: 2500,
		amount: 0,
	},
];

export { rightMenuCategories, leftMenuCategories, items };
