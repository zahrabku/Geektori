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

interface MenuCategories {
  name: string;
  icon?: any;
  classNameStyle?: string;
  click?: () => void;
}

export interface CardItems {
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
    icon: <MenuItemIcon iconName={FaSearch} className="search-icon" />,
  },
  {
    name: "سبد خرید",
    icon: (
      <MenuItemIcon
        iconName={FaShoppingBasket}
        className="shopping-basket-icon"
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
    id: 1,
    image: Penguin,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 1000,
    amount: 0,
  },
  {
    id: 2,
    image: Vanilla,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: true,
    price: 2000,
    amount: 0,
  },
  {
    id: 3,
    image: Penguin,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: true,
    price: 2200,
    amount: 0,
  },
  {
    id: 4,
    image: Octopus,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: false,
    price: 3000,
    amount: 0,
  },
  {
    id: 5,
    image: Lama,
    imageAlt: "penguin",
    title: "Penguin استیکر",
    existance: true,
    price: 2500,
    amount: 0,
  },
];

export { rightMenuCategories, leftMenuCategories, items };