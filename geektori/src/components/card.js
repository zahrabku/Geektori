import React from "react";
import { FaPlus } from "react-icons/fa";

const CardLable = (props) => {
	return (
		<div>
			{/* {props.off && <div className={cl("card-lable off-lable", {activate: active})}>
				<span>تخفیف</span>
			</div>} */}
			<div claasName={props.className}>
				<button className={"card-lable add-button"}>
					<FaPlus className={"plus-icon"} />
				</button>
			</div>
		</div>
	);
};

const Card = (props) => {
	return <div className='esticker-card'>{props.children}</div>;
};

export default Card;


const Accardion = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    
    return <div>
        <props.Header isOpen={isOpen} setIsOpen={setIsOpen} />
        {isOpen  && props.children}
    </div>
}
const Header = ({isOpen}) => <h1>salam</h1>
<Accardion Header={Header}>
    <h1></h1>
</Accardion>

