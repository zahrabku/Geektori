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

const Card = (props) => {
	return (
		<div className={`esticker-card ${props.className ?? ""}`}>
			{props.children}
		</div>
	);
};

export { Card, AddToCart, OffLable };

// const Accardion = (props) => {
//     const [isOpen, setIsOpen] = useState(false)

//     return <div>
//         <props.Header isOpen={isOpen} setIsOpen={setIsOpen} />
//         {isOpen  && props.children}
//     </div>
// }
// const Header = ({isOpen}) => <h1>salam</h1>
// <Accardion Header={Header}>
//     <h1></h1>
// </Accardion>

{
	/* {props.off && <div className={cl("card-lable off-lable", {activate: active})}>
			<span>تخفیف</span>
		</div>} */
}
