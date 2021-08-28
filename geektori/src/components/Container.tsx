import React, { HTMLProps } from "react";
import "../styles/sass/container__body.scss";

const Container: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
	return (
		<div className={`container__body ${props.className ?? ""}`}>
			{props.children}
		</div>
	);
};

export default Container;
