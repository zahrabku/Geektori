import React from "react";
import styled from "styled-components";

interface MenuProps {
	items?: React.ReactNode;
	className: string;
	click?:()=>void
}

interface MenuItemIconProps {
	iconName: any;
	className?: string;
}

const MenuItemName = styled.a`
	color: rgb(50, 50, 93);
	font-size: 16px;
	text-decoration: none;
`;

const MenuItemInput = styled.input`
	width: 100%;
	height: 50px;
	flex-grow: 1;
	border-radius: 4px;
	border: 1px solid black;
`;

// const MenuItemStyled = styled.div``;

const MenuItemIcon = (props: MenuItemIconProps) => {
	return <props.iconName className={`menu-icon ${props.className ?? ""}`} />;
};

// const MenuItem: React.FC<MenuItemProps> = (props) => {
// 	return (
// 		// <MenuItemStyled>{props.children}</MenuItemStyled>
// 		<div {...props} className={`menu-item ${props.className ?? ""}`}>
// 			{props.children}
// 		</div>
// 	);
// };

const Menu: React.FC<MenuProps> = (props) => {
	// console.log("ITEMS : ", props.items);
	return (
		<div className={props.className} onClick={props.click}>
			{props.children}
			{props.items}
		</div>
	);
};

export { Menu, MenuItemName, MenuItemIcon, MenuItemInput };
