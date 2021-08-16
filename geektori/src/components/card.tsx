import React from "react";
import { FaPlus } from "react-icons/fa";

const AddToCart = () => {
	return (
		<div className={"add-to-cart"}>
			<button className={"card-lable add-button"}>
				<FaPlus className={"plus-icon"} />
			</button>
		</div>
	);
};

const OffLable = () => {
	return (
		<div className={"card-lable off-lable"}>
			<span>تخفیف</span>
		</div>
	);
};

const Card = (props : any) => {
	return (
		<div className={`esticker-card ${props.className ?? ""}`}>
			{props.children}
		</div>
	);
};

export { Card, AddToCart, OffLable };
