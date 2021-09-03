import React, { FC } from "react";
import { Menu, MenuItemIcon, MenuItemName } from "./Menu";
import { Image } from "./CardMedia";
import { rightMenuCategories } from "../utils/DataDump";
import Container from "./Container";
import Geektori from "../images/geek-logo.png";
import ShoppingCartModal from "./shoppingCartModal";
import { useData } from "../context";
import {
  FaAngleDown,
  FaShoppingBasket,
  FaHeart,
  FaSearch,
} from "react-icons/fa";

interface MenuCategories {
  name: string;
  icon?: any;
  classNameStyle?: string;
  click?: () => void;
}

const Navbar: FC = () => {
  const Data = useData()!;
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
      click: Data.addShoppingCartModalIsOpen,
    },
    {
      name: "عضویت",
    },
    {
      name: "وارد شوید",
    },
  ];

  const rightMenuItems = rightMenuCategories.map((item) => (
    <Menu className={`menu-item ${item.classNameStyle ?? ""}`}>
      <MenuItemName>{item.name}</MenuItemName>
      {item.icon}
    </Menu>
  ));

  const leftMenuItems = leftMenuCategories.map((item) => (
    <Menu
      className={`menu-item ${item.classNameStyle ?? ""}`}
      click={item.click}
    >
      {item.icon}
      <MenuItemName>{item.name}</MenuItemName>
    </Menu>
  ));

  return (
    <Container className="main-container">
      <Menu className="menu">
        <Menu className="small-menu right" items={rightMenuItems}>
          <Image className="geektori-logo" src={Geektori} alt="geektori logo" />
        </Menu>
        <Menu className="small-menu left" items={leftMenuItems}></Menu>
      </Menu>
      {Data.shoppingCartModalIsOpen ? <ShoppingCartModal /> : ""}
    </Container>
  );
};

export { Navbar };
