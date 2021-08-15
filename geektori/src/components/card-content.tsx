import React from "react";

interface IProps {
	text: string;
}

const Description = (props: IProps) => {
	return (
		<div className={"esticker-desc"}>
			<h2>{props.text}</h2>
		</div>
	);
};

const Price = (props) => {
	if (props.price == 0)
		return (
			<div className={props.className}>
				<span className={"not-exist"}>ناموجود</span>
			</div>
		);

	return (
		<div className={props.className}>
			<span className={"price offed-price"}>
				{props.price}
				<span> تومان </span>
			</span>
			{props.main_price}
			{/* {!!props.main_price && <span className={"price main_price"}>{props.main_price}</span>} */}
		</div>
	);
};

const CardContent = (props) => {
	return (
		<div className={props.className}>
			<Description text={props.desc} />
			<Price
				className={"esticker-price"}
				price={props.price}
				main_price={props.main_price}
			/>
		</div>
	);
};

export default CardContent;
