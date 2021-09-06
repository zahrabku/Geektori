import React, { FC, useContext } from "react";
import { Menu, MenuItemIcon, MenuItemName } from "./Menu";
import { Image } from "./CardMedia";
import { rightMenuCategories, leftMenuCategories } from "../utils/DataDump";
import Container from "./Container";
import Geektori from "../images/geek-logo.png";
import { useShoppingCart } from "../contexts/shopping-cart-context";
import {
	FaAngleDown,
	FaShoppingBasket,
	FaHeart,
	FaSearch,
	FaCircle,
	FaRegWindowClose,
} from "react-icons/fa";
import { ShoppingCart, ShoppingCartSection } from "./ShoppingCart";
import Button from "./Button";

interface MenuCategories {
	name: string;
	icon?: any;
	classNameStyle?: string;
	click?: () => void;
}

const Navbar: FC = () => {
	const { setIsOpenShoppingCart } = useShoppingCart()!;

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
			click: () => setIsOpenShoppingCart(true),
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
			click={item.click}>
			{item.icon}
			<MenuItemName>{item.name}</MenuItemName>
		</Menu>
	));

	return (
		<Container className='main-container'>
			<Menu className='menu'>
				<Menu className='small-menu right' items={rightMenuItems}>
					<Image className='geektori-logo' src={Geektori} alt='geektori logo' />
				</Menu>
				<Menu className='small-menu left' items={leftMenuItems}></Menu>
			</Menu>
		</Container>
	);
};

// ye items bayad begire -> ye list az item haei ke tu sabad kharid hastan

const ShoppingBasket: FC = () => {
	const { isOpenShoppingCart, setIsOpenShoppingCart } =
		useShoppingCart()!;

	return isOpenShoppingCart ? (
		<ShoppingCart>
			<Container className='main-container'>
				<ShoppingCartSection className='shopping-cart-header'>
					<FaRegWindowClose
						style={{ fontSize: "30px" }}
						onClick={() => setIsOpenShoppingCart(false)}
					/>
					<h3>سبد خرید</h3>
					<FaCircle style={{ fontSize: "30px", color: "#606CEC" }} />
					{/* <div
					style={{
						width: "25px",
						height: "25px",
						borderRadius: "50px",
						color: "#606CEC",
					}}></div> */}
				</ShoppingCartSection>
				<hr style={{ margin: "15px 0" }} />
				<ShoppingCartSection className='shopping-cart-amount'>
					<h4>مبلغ سبد خرید</h4>
					<h3>تومان</h3>
				</ShoppingCartSection>
				<hr style={{ margin: "15px 0" }} />
				<ShoppingCartSection className='shopping-cart-final'>
					<button className='final-shop-btn'>نهایی کردن خرید</button>
				</ShoppingCartSection>
			</Container>
		</ShoppingCart>
	) : null;
};

export { Navbar, ShoppingBasket };
