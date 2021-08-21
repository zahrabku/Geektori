import React, { FC } from "react";
import { Menu, MenuItemName } from "./Menu";
import { Image } from "./CardMedia";
import { rightMenuCategories, leftMenuCategories } from "./DataDump";

import Container from "./Container";

import Geektori from "../images/geek-logo.png";


const Navbar: FC = () => {
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
		</Container>
	);
};

export default Navbar;
