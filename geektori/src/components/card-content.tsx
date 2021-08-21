import React from "react";

interface DescriptionProps {
	text: string;
}

interface PriceProps {
	price: string | number;
	main_price?: string;
	existence?: boolean;
}

interface CardContentProps {
	className?: string;
}

const Description = (props: DescriptionProps) => {
	return (
		<div className={"esticker-desc"}>
			<h2>{props.text}</h2>
		</div>
	);
};

const Price = (props: PriceProps) => {
	if (props.existence === false) {
		return (
			<div className={"esticker-price"}>
				<span className={"not-exist"}>ناموجود</span>
			</div>
		);
	}
	return (
		<div className={"esticker-price"}>
			<span className={"price offed-price"}>
				{props.price}
				<span> تومان </span>
			</span>
			{!!props.main_price && (
				<del className={"price main_price"}>{props.main_price}</del>
			)}
		</div>
	);
};

const CardContent: React.FC<CardContentProps> = (props) => {
	return (
		<div className={`esticker-content ${props.className ?? ""}`}>
			{props.children}
		</div>
	);
};

export { CardContent, Description, Price };
